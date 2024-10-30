"use client";
import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import LoginMain from "@/components/styles/auth.style";
import "../../globals.css";

const Email = () => {
  

  

  return (
    <LoginMain>
      <div className='login-main d-blok-email'>
        <h2>Überprüfen Sie Ihre E-Mails</h2>
        <p>
          Wir haben Ihnen eine E-Mail mit einem Link geschickt. Bitte überprüfen Sie Ihr Postfach und folgen Sie den
          Anweisungen in der <Link href={""}>E-Mail, um fortzufahren.</Link>
        </p>
      </div>
    </LoginMain>
  );
};

export default Email;
