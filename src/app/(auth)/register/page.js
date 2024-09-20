/** @format */

"use client";
import React, { useMemo, useState } from "react";

import Link from "next/link";
import LoginMain from "@/components/styles/auth.style";
import "../../globals.css";
import { toast } from "react-toastify";
import { TOAST_ALERTS } from "@/constants/keywords";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";
import { authTokenAction } from "@/redux/Auth/action";
import { FormProvider, RHFTextInput } from "@/components/hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const defaultValues = useMemo(
    () => ({
      email: "",
      firstname: "",
      lastname: "",
    }),
    []
  );

  const formSchema = useMemo(() => {
    return yup
      .object()
      .shape({
        firstname: yup
          .string()
          .required("Please enter First name")
          .trim("Please enter First name"),
        lastname: yup
          .string()
          .required("Please enter Last name")
          .trim("Please enter valid email address"),
        email: yup
          .string()
          .required("Please enter email address")
          .email("Please enter valid email address")
          .trim("Please enter valid email address")
          .matches(
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "Please enter a valid email address"
          ),
      })
      .required()
      .strict(true);
  }, []);

  const methods = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
    reset,
    setValue,
  } = methods;

  const onSubmitForm = async (formData) => {
    const { email, firstname, lastname } = formData;

    setIsLoading(true);
    const objParam = {
      email: email,
      firstname: firstname,
      lastname: lastname,
    };
    console.log("payload==>", objParam);

    try {
      const { payload: res } = await dispatch(authTokenAction(objParam));
      const { data, status, message } = res;
      if (status) {
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

  return (
    <LoginMain>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="login-main">
          <div className="login-main-inner">
            <h1>Register</h1>
            <FormProvider
              methods={methods}
              onSubmit={handleSubmit(onSubmitForm)}
              className="mt-[20px] mb-[40px]"
            >
              <div className="form-login">
                <div className="two-from-group">
                  <div className="form-group">
                    <RHFTextInput name="firstname" placeholder="First Name" />
                  </div>
                  <div className="form-group">
                    <RHFTextInput name="lastname" placeholder="Last Name" />
                  </div>
                </div>
                <div className="form-group">
                  <RHFTextInput name="email" placeholder="Email address" />
                </div>
                <div className="btn-form">
                  <button className="btn button-common">Register</button>
                </div>
                <div className="last-link">
                  <p>
                    Already have an account? <Link href="/login">Sign In</Link>
                  </p>
                </div>
              </div>
            </FormProvider>
          </div>
        </div>
      )}
    </LoginMain>
  );
};

export default RegisterPage;
