import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { isMobile } from "react-device-detect";
import LayoutComponent from "../../components/layout";
import LayoutNotLoggedComponent from "../../components/layout-not-logged";
import {
  auth,
  registerWithEmailAndPassword,
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

export default function CreateVideoScreen(props: any) {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassoword] = useState("");

  const [errorFire, seterror] = useState("");
  const [<SETlZAW  ,bk mn</SETlOA>, seterror] = useState("");
  const [newUser, setNewuser] = useState({
    nome: "",
    email: "",
    senha: ""
  });

  useEffect(() => {
    if (loading) return;
    // if (user) navigate("/home");
  }, [user, loading]);

 

  const SignInSchema = Yup.object().shape({
    nome: Yup.string().required("Informe o NOME"),
    email: Yup.string().required("Informe o EMAIL"),
    senha: Yup.string().required("Informe a SENHA"),
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

  const submitForm = (event : any) => {
    console.log(event);
    registerWithEmailAndPassword("nome", "email", "senha");
  };

  const onChange = (e: any): void => {
    console.log(e.value);
     setNewuser({
      nome: e.value,
      email: "",
      senha: ""
    });
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

<form
onSubmit={async (e: React.SyntheticEvent) => {
  e.preventDefault();
  const target = e.target as typeof e.target & {
    nome: { value: string };
    email: { value: string };
    password: { value: string };

  };
  const nome = target.nome.value; 
  const email = target.email.value; 
  const password = target.password.value; // typechecks!
  // etc...
  // console.log(nome);
  // console.log(email);
  // console.log(password);
  const res = await registerWithEmailAndPassword(nome, email, password).then( x => {
          console.log(x)
              if(x){
                 alert("Usuário criado com sucesso!");
                 navigate("/home");
               }
      }
    );
 // console.log(res);
  // if(res){
  //   alert("Usuário criado com sucesso!");
  // }

}}>

<div >
                Nome <br></br>
                <InputLoginWeb type="text" name="nome" />
              </div>

              <div >
                Email <br></br>
                <InputLoginWeb type="email" name="email" />
              </div>
              <div >
                Senha <br></br>
                <InputLoginWeb name='upload-image' onChange={() => {}} type={'file'} accept="video/mp4,video/x-m4v,video/*" />
              </div>
              <div>
                <ButtonLogin type="submit">Enviar</ButtonLogin>
              </div>
       
            </form>


            </div>

    </>
  );
}
