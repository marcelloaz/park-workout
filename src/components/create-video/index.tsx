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

import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import * as firebaseConfig from '../../firebaseConfig';
import { Formik, Field, Form } from "formik";
import {
  InputLoginWeb,
  ButtonLogin,
} from "./style";
import { useNavigate } from "react-router-dom";

export default function CreateVideoScreen(props: any) {
  const [user, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassoword] = useState("");
  
  
  
  const app = firebaseConfig.app;
  const storage = getStorage(app);
  const [videoAsset, setVideoAsset] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(1);

  
  const [errorFire, seterror] = useState("");
  
  const [newUser, setNewuser] = useState({
    nome: "",
    email: "",
    senha: ""
  });

  useEffect(() => {
    console.log(videoAsset);
  }, [videoAsset]);



  const uploadImage = (e: any) => {
    console.log(e.target.files[0]);

    const videoFile = e.target.files[0];

    const storageRef = ref(storage, `Videos/${Date.now()}-${videoFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, videoFile);

    uploadTask.on('state_changed', (snapshot) => {
      const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      
      setProgress(uploadProgress);
    }, (error) => {
       console.log(error);
    }, () => {

      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        setVideoAsset(url)
        console.log('downloadurl');
      });

    })
  };

  return (
    <>
      <div
        style={{
        
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

}
}>

  <video src={videoAsset} controls style={{width: "100%", height: "100%"}}/>

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
          <InputLoginWeb name='upload-image' onChange={uploadImage} type={'file'} accept="video/mp4,video/x-m4v,video/*" />
        </div>
        <div>
          <ButtonLogin  type="submit">Enviar</ButtonLogin>
        </div>

      </form>


      </div>
    </>
  );
}
