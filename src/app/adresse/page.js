"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import { setAddressForList } from "@/redux/Cart/CartReducer";
import { createOrUpdateAddress, listAddress } from "@/redux/Dashboard/action";
import { getUserAction } from "@/redux/Auth/action";
import { getData, saveData } from "@/utils/storage";
import CommonPagesBlock from "@/components/styles/common.style";
import { TOAST_ALERTS } from "@/constants/keywords";
import { toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";
import DashboardHeader from "@/components/DashboardHeader";
import SingleHeader from "@/components/SingleHeader";

const libraries = ["places"];

const AddressSelection = () => {
  const { t } = useTranslation("common");
  const [addressList, setAddressList] = useState([]);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalIsInnerOpen, setIsInnerOpen] = React.useState(false);
  const storeDispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const [latitude, setLatitude] = useState(46.37468949473951);
  const [longitude, setLongitude] = useState(9.334408964095253);

  const [userData, setUserData] = useState();
  const [userAuth, setUserAuth] = useState(null);

  useEffect(() => {
    const token = getData("token");
    if (token) {
      setUserAuth(token?.access_token);
      getUserData();
      listAddressData();

      // fetchAddress
    }
  }, []);

  let hasAddress = false;

  const fetchAddressData = useSelector((state) => state.cartData.fetchAddress);

  if (fetchAddressData && Object.keys(fetchAddressData).length > 0) {
    hasAddress = true;
  } else {
    hasAddress = false;
  }

  const listAddressData = async () => {
    setIsLoading(true);
    const objParam = {
      offset: 0,
      limit: 10,
      sort_direction: "desc",
    };
    try {
      const { payload: res } = await storeDispatch(listAddress());
      const { data, status, message } = res;
      if (status) {
        setAddressList(data);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        toast.error(message);
      }
    } catch (error) {
      setIsLoading(false);
      toast.error(TOAST_ALERTS.ERROR_MESSAGE);
      console.log("Error", error);
    }
  };

  const getUserData = async () => {
    try {
      const { payload: res } = await storeDispatch(getUserAction());
      const { data, status, message } = res;
      if (status) {
        setUserData(data);

        saveData("user", data);
      } else {
        toast.error(message);
      }
    } catch (error) {
      toast.error(TOAST_ALERTS.ERROR_MESSAGE);
      console.log("Error", error);
    }
  };

  const CreateAddress = async () => {
    setIsLoading(true);
    const objParam = {
      name: formData.name,
      country: formData.country,
      postcode: formData.postcode,
      city: formData.city,
      street: formData.street,
      house: formData.house,
      delivery_instructions: formData.delivery_instructions,
      delivery_picture: "",
    };
    try {
      const { payload: res } = await storeDispatch(
        createOrUpdateAddress(objParam)
      );
      const { data, status, message } = res;
      if (status) {
        storeDispatch(setAddressForList(formData));
        setIsLoading(false);
        setIsInnerOpen(false);
        closeModal();
      } else {
        setIsLoading(false);
        toast.error(message);
      }
    } catch (error) {
      setIsLoading(false);
      toast.error(TOAST_ALERTS.ERROR_MESSAGE);
      console.log("Error", error);
    }
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.GOOGLE_PLACE_API_KEY,
    libraries,
  });

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const [autocomplete, setAutocomplete] = useState(null);
  const [address, setAddress] = useState("");

  const onLoad = (autoC) => {
    setAutocomplete(autoC);
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      setAddress(place.formatted_address);

      if (!place.geometry || !place.address_components) {
        return;
      }

      const locationDetails = extractDetails(place);

      if (userAuth !== null) {
        setFormData({
          id: "",
          name: "",
          delivery_instructions: "",
          house: locationDetails.house ? locationDetails.house : "",
          city: locationDetails.city,
          street: locationDetails.street,
          country: locationDetails.country,
          postcode: locationDetails.postal_code,
          latitude: locationDetails.latitude,
          longitude: locationDetails.longitude,
        });
        setIsInnerOpen(true);
      } else {
        storeDispatch(setAddressForList(locationDetails));
        closeModal();
      }
    } else {
    }
  };

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    delivery_instructions: "",
    house: "",
    city: "",
    street: "",
    country: "",
    postcode: "",
    latitude: null,
    longitude: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const extractDetails = (place) => {
    const location = {
      country: "",
      street: "",
      city: "",
      // state: "",
      house: "",
      postal_code: "",

      latitude: place.geometry.location.lat(),
      longitude: place.geometry.location.lng(),
    };

    setLatitude(place.geometry.location.lat());
    setLongitude(place.geometry.location.lng());

    place.address_components.forEach((component) => {
      const types = component.types;

      if (types.includes("country")) {
        location.country = component.long_name;
      }

      if (types.includes("locality")) {
        location.city = component.long_name;
      }
      // For Get State Name
      // if (types.includes("administrative_area_level_1")) {
      //   location.state = component.short_name;
      // }

      if (types.includes("postal_code")) {
        location.postal_code = component.long_name;
      }

      if (types.includes("route")) {
        location.street = component.long_name;
      }

      if (types.includes("street_number")) {
        location.house = component.long_name;
      }
    });

    return location;
  };

  // if (!isLoaded) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      <SingleHeader />
      <div className="flex h-screen">
        <div className="two-block-modal-inner">
          <div className="w-[40%] flex flex-col justify-between bg-[#fdf3d6] pt-16 px-8 pb-0">
            <div className="">
              <h2 className="text-[40px] text-center leading-[50px] text-[#f8b302] font-bold mb-3">
                {t("EnterYourAddress")}
              </h2>
              <p className="text-[16px] text-center leading-[28px] font-medium text-[#f8b302]">
                {t("DeliverAtHome")}
              </p>
            </div>
            <div className="w-[65%] mx-auto flex justify-center">
              <img src="/Brotkorb_Traemo.png" alt="Traemo" />
            </div>
          </div>

          {!modalIsInnerOpen ? (
            <div className="w-[60%] p-8">
              <div className="btn-close-block">
                <button onClick={closeModal}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="#101828"
                      // strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              {isLoading ? (
                <div className="flex justify-center items-center h-[100%]">
                  <ThreeDots
                    visible={true}
                    height="80"
                    width="80"
                    color="#FAB300"
                    radius="18"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                  />
                </div>
              ) : (
                <div className="search-address">
                  <h3>{t("SelectAddress")}</h3>
                  <form>
                    <div className="form-group">
                      <button>
                        <img src="/search-icon.svg" alt="Traemo" />
                      </button>
                      <Autocomplete
                        onLoad={onLoad}
                        onPlaceChanged={onPlaceChanged}
                      >
                        <input
                          type="text"
                          placeholder={t("EnterAddress")}
                        ></input>
                      </Autocomplete>
                      {userAuth && (
                        <div className="mt-4 overflow-height-data">
                          {addressList.map((item, index) => {
                            return (
                              <ul
                                className="space-y-2 mb-4"
                                key={index}
                                onClick={() => {
                                  setFormData({
                                    id: item.id,
                                    name: item.name,
                                    delivery_instructions: "",
                                    house: item.house,
                                    city: item.city,
                                    street: item.street,
                                    country: item.country,
                                    postcode: item.postcode,
                                    latitude: item.location.coordinates[1],
                                    longitude: item.location.coordinates[0],
                                  });
                                  setIsInnerOpen(true);
                                  // storeDispatch(setAddressForList(item));
                                }}
                              >
                                <li className="border-b border-gray-300 pb-2">
                                  <strong>{item.name}</strong>
                                  <p className="text-sm text-gray-500">
                                    {[
                                      item.house,
                                      item.street,
                                      item.city,
                                      item.postcode,
                                      item.country,
                                    ]
                                      .filter(Boolean)
                                      .join(", ")}
                                  </p>
                                </li>
                              </ul>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              )}
            </div>
          ) : (
            <div className="w-[60%] p-8">
              <CommonPagesBlock>
                <div className="custom-container">
                  {/* Close Button */}
                  <div className="btn-close-block-left">
                    <button onClick={() => setIsInnerOpen(false)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="#667085"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <h2 className="custom-title">{t("SelectedAddress")}</h2>
                  </div>
                  {/* city country postalcode */}

                  <div className="form-login">
                    <div className="form-group">
                      <label className="custom-label">{t("Name")}</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="custom-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="custom-label">
                        {t("DeliveryInstructions")}
                      </label>
                      <input
                        type="text"
                        name="delivery_instructions"
                        value={formData.delivery_instructions}
                        onChange={handleChange}
                        className="custom-input"
                      />
                    </div>
                    <div className="two-from-group">
                      <div className="form-group">
                        <label className="custom-label">{t("house")}</label>
                        <input
                          type="text"
                          name="house"
                          value={formData.house}
                          onChange={handleChange}
                          className="custom-input"
                        />
                      </div>
                      <div className="form-group">
                        <label className="custom-label">{t("Street")}</label>
                        <input
                          type="text"
                          name="street"
                          value={formData.street}
                          onChange={handleChange}
                          disabled
                          className="custom-input"
                        />
                      </div>
                    </div>
                    <div className="two-from-group">
                      <div className="form-group">
                        <label className="custom-label">{t("city")}</label>
                        <input
                          type="text"
                          name="street"
                          value={formData.city}
                          onChange={handleChange}
                          disabled
                          className="custom-input"
                        />
                      </div>
                      <div className="form-group">
                        <label className="custom-label">
                          {t("postalcode")}
                        </label>
                        <input
                          type="text"
                          name="country"
                          value={formData.postcode}
                          onChange={handleChange}
                          disabled
                          className="custom-input"
                        />
                      </div>
                    </div>
                    <div className="from-group">
                      <div className="form-group">
                        <label className="custom-label">{t("country")}</label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          disabled
                          className="custom-input"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="btn-form">
                    <button
                      className="btn button-common"
                      onClick={() => {
                        if (formData.name == "") {
                          toast.error("Please Enter your Name");
                        } else if (formData.house == "") {
                          toast.error("Please House");
                        } else if (formData.id == "") {
                          CreateAddress();
                        } else {
                          setIsInnerOpen(false);
                          storeDispatch(setAddressForList(formData));
                          closeModal();
                        }
                      }}
                    >
                      {t("SaveAddress")}
                    </button>
                  </div>
                </div>
              </CommonPagesBlock>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AddressSelection;
