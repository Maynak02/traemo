"use client";
import { getFundServiceAction } from "@/redux/Payment/action";
import React, { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { TOAST_ALERTS } from "@/constants/keywords";
import Loader from "@/components/Loader";

const Wallet = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getFundDetails();
  }, []);

  const getFundDetails = async () => {
    setIsLoading(true);
    try {
      const res = await dispatch(getFundServiceAction({}));
      if (res.meta.requestStatus === "fulfilled") {
        if (res.payload.status) {
          setIsLoading(false);
        } else {
          setIsLoading(false);
          toast.error(res.payload.message);
        }
      } else {
        setIsLoading(false);
        toast.error(res.error.message || res.payload.message);
      }
    } catch (error) {
      setIsLoading(false);
      toast.error(TOAST_ALERTS.ERROR_MESSAGE);
      console.log("Error", error);
    }
  };
  return (
    <div className="container pt-[20px] ">
      {isLoading && <Loader />}
      {!isLoading && <a>Wallet</a>}
    </div>
  );
};

export default Wallet;
