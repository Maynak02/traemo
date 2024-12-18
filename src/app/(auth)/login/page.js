"use client";
import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import LoginMain from "@/components/styles/auth.style";
import "../../globals.css";
import { authLinkAction, loginAction } from "@/redux/Auth/action";
import { toast } from "react-toastify";
import { TOAST_ALERTS } from "@/constants/keywords";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";
import { FormProvider, RHFTextInput } from "@/components/hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { PATH_AUTH, PATH_DASHBOARD } from "@/routes/paths";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const { t } = useTranslation("common");

  const defaultValues = useMemo(
    () => ({
      email: "",
    }),
    []
  );

  const formSchema = useMemo(() => {
    return yup
      .object()
      .shape({
        email: yup
          .string()
          .required(t("enterEmail"))
          .email(t("validEmail"))
          .trim(t("validEmail")),
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
    const { email } = formData;
    setIsLoading(true);
    const objParam = {
      email: email,
    };
    try {
      const { payload: res } = await dispatch(loginAction(objParam));
      const { data, status, message } = res;
      if (status) {
        const filterToken = data.message.split("token=")[1];
        authMagicLink(filterToken);
        // router.push(PATH_AUTH.email);
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

  const authMagicLink = async (key) => {
    // setIsLoading(true);
    const objParam = {
      link: key,
    };
    try {
      const { payload: res } = await dispatch(authLinkAction(objParam));
      const { data, status, message } = res;
      if (status) {
        setIsLoading(false);
        router.push(PATH_DASHBOARD.home);
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
            <h1>{t("Login")}</h1>
            <FormProvider
              methods={methods}
              onSubmit={handleSubmit(onSubmitForm)}
            >
              <div className="form-login">
                <div className="form-group">
                  <RHFTextInput name="email" placeholder={t("EmailAddress")} />
                </div>
                <div className="btn-form">
                  <button className="btn button-common">{t("Login")}</button>
                </div>
                <div className="last-link">
                  <p>
                    {t("DontHaveAccount")}&nbsp;
                    <Link href={PATH_AUTH.signup}>{t("SignUp")}</Link>
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

export default LoginPage;
