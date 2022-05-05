import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { isMobile } from "react-device-detect";
import LayoutComponent from "../../components/layout";
import LayoutNotLoggedComponent from "../../components/layout-not-logged";
import {
  auth,
  signInWithFacebook,
  signInWithGoogle
} from "../../firebase/firebase";


import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import {
  InputLoginWeb,
  ButtonLogin,
  externalLogin,
  boxDefaultLogin,
  textArea,
} from "./style";
import { useNavigate } from "react-router-dom";

export default function LoginScreen(props: any) {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassoword] = useState("");

  useEffect(() => {
    if (loading) return;
    // if (user) navigate("/home");
  }, [user, loading]);

  const SignInSchema = Yup.object().shape({
    cpfOrCnpj: Yup.string().required("Informe o CPF"),
    password: Yup.string().required("Informe a Senha"),
  });

  const handleInputChange = (event: any) => {
    setEmail(event.target.value);

    console.log(email);
  };

  const handleInputPasswordChange = (event: any) => {
    setPassoword(event.target.value);
   // navigate("/home");

    //console.log(password);
  };

  const submitForm = () => {
    console.log(email);
    console.log(password);
  };

  return (
    <>
<div
              style={{
                //marginTop: isMobile ? "30px" : "0px",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "15px",
                paddingBottom: "0px",
                opacity: 1,
                display: "flex",
                cursor: "pointer",
                height: "calc(100vh - 12.1vh)",
              }}
            >

<form onSubmit={submitForm}>
              <div >
                Email <br></br>
                <InputLoginWeb
                  required
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                />
              </div>
              <div >
                Senha <br></br>
                <InputLoginWeb
                  required
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleInputPasswordChange}
                />
              </div>
              <div>
                <ButtonLogin type="submit">Login</ButtonLogin>
              </div>
              <div >
                <ButtonLogin type="button" onClick={signInWithGoogle}>
                  Login com Google
                </ButtonLogin>
              </div>

              <div >
                <ButtonLogin type="button" onClick={signInWithFacebook}>
                  Login com Facebook
                </ButtonLogin>
              </div>


              <a style={{flex:1, fontWeight:"bold", cursor:"pointer", textAlign: "center",}} onClick={() => {navigate("/register")}}><p>Cadastre-se</p></a>
            </form>


            </div>

    </>
  );
}
