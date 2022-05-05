import * as React from "react";
import {
  auth,
  logout
} from "../../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { ButtonLogin } from "./style";

export default function ButtonLoginComponent(props: any) {
  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      {!user && (<><ButtonLogin onClick={() => {}}>Entrar</ButtonLogin></>)}
      {user && (<><ButtonLogin onClick={logout}>Sair</ButtonLogin></>)}
    </>
  );
}
