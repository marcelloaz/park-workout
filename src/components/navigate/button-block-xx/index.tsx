import * as React from "react";
import {
  auth,
  logout,
  signInWithFacebook,
  signInWithGoogle,
} from "../../../firebase/firebase";
//import { navigate } from "gatsby";
import { useAuthState } from "react-firebase-hooks/auth";
import { ButtonBlockXX } from "./style";
import { useNavigate } from "react-router-dom";
export default function ButtonBlockXXComponent(props: any) {

const [user, loading, error] = useAuthState(auth);

const navigate = useNavigate();


  return (
    <>
     <ButtonBlockXX onClick={() => { navigate("/register") }}>{props.title}</ButtonBlockXX>
    </>
  );
}
