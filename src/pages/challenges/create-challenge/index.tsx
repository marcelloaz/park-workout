import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  registerChalleges,
  registerWithEmailAndPassword,
  signInWithFacebook,
  signInWithGoogle
} from "../../../firebase/firebase";

import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import * as firebaseConfig from '../../../firebaseConfig';
import { Formik, Field, Form } from "formik";
import {
  InputLoginWeb,
  ButtonLogin,
  InputLoginMobile,
  StapOne,
  StapLabel,
  ButtonUploadVideo,
  Area,
  ContentInner,
} from "./style";
import { useNavigate } from "react-router-dom";
import { isMobile } from "react-device-detect";

export default function CreateChallengeVideoScreen  (props: any) {
  const [user, error] = useAuthState(auth);
  const navigate = useNavigate();

  const app = firebaseConfig.app;
  const storage = getStorage(app);
  const [videoAsset, setVideoAsset] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(1);  
  const [errorFire, seterror] = useState("");

  const [stapOne, setStapOne] = useState(true);
  const [stapTwo, setStapTwo ] = useState(false);
  const [title, setTitle] = useState("");
  const [dateChallenge, setDateChallenge] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  

  const newChallenges = () => {
   
    registerChalleges(title,videoAsset, dateChallenge);
    alert("registro criado com sucesso!");
    navigate("/challenges");

  };

  const uploadVideo = (e: any) => {
    console.log(e.target.files[0]);

    const videoFile = e.target.files[0];

    const storageRef = ref(storage, `Videos/${Date.now()}-${videoFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, videoFile);

    uploadTask.on('state_changed', (snapshot) => {
      const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      setProgress(uploadProgress);
      setLoading(true);
    }, (error) => {
       console.log(error);
    }, () => {

      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        setVideoAsset(url);
        setLoading(false);
      });

    })
  };
  function NexStap() {
    setStapOne(false);
    setStapTwo(true);
  }

  function Back() {
    setStapOne(true);
    setStapTwo(false);
  }

  function IconUpload(){
    return (<><svg style={{opacity: 1, cursor: "pointer", margin:"0em"}} xmlns="http://www.w3.org/2000/svg" width="189" height="183" viewBox="35.0 156.0 129.0005645751953 123.2208251953125" preserveAspectRatio="none"><g><defs><path id="s-Union_1-d1224" d="M67.396484375 227.22232055664062 C67.39482116699219 227.22296142578125 67.39321899414062 227.2235870361328 67.39163208007812 227.22418212890625 C67.3878173828125 227.22561645507812 67.3858642578125 227.2262420654297 67.38558959960938 227.2262420654297 C67.38514709472656 227.2262420654297 67.38902282714844 227.22463989257812 67.396484375 227.22232055664062 Z M67.06184387207031 227.48681640625 C67.06156921386719 227.4878387451172 67.06129455566406 227.4888458251953 67.06100463867188 227.48983764648438 C67.06045532226562 227.49179077148438 67.06013488769531 227.4927215576172 67.06008911132812 227.4927215576172 C67.06001281738281 227.4927215576172 67.06056213378906 227.49063110351562 67.06184387207031 227.48681640625 Z M67.94676208496094 227.9416961669922 C67.93634033203125 227.95948791503906 67.92889404296875 227.96908569335938 67.92878723144531 227.96908569335938 C67.92878723144531 227.96908569335938 67.92880249023438 227.9690399169922 67.92886352539062 227.9689483642578 C67.93521118164062 227.9598846435547 67.941162109375 227.95077514648438 67.94676208496094 227.9416961669922 Z M67.00698852539062 183.38082885742188 L67.01922607421875 184.2774200439453 C67.02043151855469 184.36561584472656 67.57286071777344 225.3490447998047 67.06698608398438 227.46673583984375 C67.04075622558594 227.52005004882812 67.01219177246094 227.6002960205078 67.01219177246094 227.69773864746094 C67.01219177246094 228.15341186523438 67.45567321777344 228.20420837402344 67.52212524414062 228.20420837402344 C67.63381958007812 228.20420837402344 67.72843933105469 228.16592407226562 67.74504089355469 228.15965270996094 C67.74514770507812 228.1596221923828 67.7452392578125 228.15957641601562 67.74534606933594 228.1595458984375 C69.37406921386719 227.54364013671875 103.05035400390625 205.8682098388672 103.0906982421875 205.8422393798828 L103.76759338378906 205.40663146972656 L67.00698852539062 183.38082885742188 Z M63.40361022949219 234.6000518798828 C63.39784240722656 234.60174560546875 63.39488220214844 234.60289001464844 63.39521789550781 234.60289001464844 C63.395416259765625 234.60289001464844 63.39686584472656 234.6024627685547 63.399658203125 234.60147094726562 C63.40095520019531 234.60101318359375 63.40228271484375 234.6005401611328 63.40362548828125 234.6000518798828 Z M64.00248718261719 235.05467224121094 C63.97727966308594 235.2044219970703 63.950439453125 235.301513671875 63.921875 235.34234619140625 C63.9217529296875 235.342529296875 63.92169189453125 235.34262084960938 63.92170715332031 235.34262084960938 C63.92219543457031 235.34262084960938 64.00283813476562 235.23699951171875 64.00283813476562 235.0763702392578 C64.00283813476562 235.06903076171875 64.00271606445312 235.06179809570312 64.00248718261719 235.05467224121094 Z M63.0 176.0 L111.75823974609375 205.2144012451172 L111.08131408691406 205.6500244140625 C111.02053833007812 205.6891326904297 65.72463989257812 234.84295654296875 63.73179626464844 235.54469299316406 C63.70756530761719 235.55323791503906 63.619842529296875 235.58505249023438 63.516143798828125 235.58505249023438 C63.44743347167969 235.58505249023438 63.002838134765625 235.53350830078125 63.002838134765625 235.0763702392578 C63.002838134765625 234.9013214111328 63.094512939453125 234.780517578125 63.102508544921875 234.76910400390625 C63.75787353515625 233.8323516845703 63.015045166015625 177.10250854492188 63.012237548828125 176.89659118652344 L63.0 176.0 Z M42.0 156.0 C38.159912109375 156.0 35.0 159.159912109375 35.0 163.0 L35.0 250.08421325683594 C35.0 253.92430114746094 38.159912109375 257.0841979980469 42.0 257.0841979980469 L104.98330688476562 257.0841979980469 C104.591796875 255.04226684570312 104.39085388183594 252.9348907470703 104.40031433105469 250.78245544433594 C104.3282470703125 234.39268493652344 116.45561218261719 220.63417053222656 131.99996948242188 218.44070434570312 L132.0 163.0 C132.0 159.159912109375 128.840087890625 156.0 125.0 156.0 Z M136.66896057128906 232.20765686035156 L151.58084106445312 248.2801971435547 L147.5743408203125 250.95120239257812 L139.3387451171875 242.49302673339844 L138.225830078125 268.75787353515625 L132.8838348388672 268.75787353515625 L133.99795532226562 242.49302673339844 L123.98049926757812 252.7318572998047 L120.4191665649414 248.2801971435547 L136.66896057128906 232.20765686035156 Z M136.0003204345703 222.0 C120.60172271728516 222.0 107.93134307861328 234.93136596679688 108.00028228759766 250.6104278564453 C107.93158721923828 266.235595703125 120.51471710205078 279.15069580078125 135.87506103515625 279.2205505371094 C135.91680908203125 279.2207336425781 135.95852661132812 279.2208251953125 136.000244140625 279.2208251953125 C151.39883422851562 279.2208251953125 164.0692138671875 266.2894592285156 164.00027465820312 250.6104278564453 C164.0689697265625 234.98524475097656 151.48583984375 222.07015991210938 136.12550354003906 222.0002899169922 C136.08375549316406 222.00010681152344 136.0420379638672 222.0 136.0003204345703 222.0 Z "></path></defs><g><use xlinkHref="#s-Union_1-d1224" fill="#24232337" fill-opacity="1.0"></use></g></g></svg></>);
  }

  return (
    <>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "15px",
          paddingBottom: "0px",
          flexDirection: "row",
          opacity: 1,
          display: "flex",
          cursor: "pointer",
          height: "calc(100vh - 10.5vh)",
        }}
      >

<form
onSubmit={async (e: React.SyntheticEvent) => { e.preventDefault();}}>

{stapOne && (<>
  {/* <StapOne>
  <InputLoginMobile placeholder="Informe um título" type="text" name="nome" />
  <ButtonLogin onClick={() => {NexStap()}} >Próximo</ButtonLogin>          
  <StapLabel>1/3</StapLabel>
  </StapOne> */}

<Area>
        <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "20px",
              paddingBottom: "50px",
              opacity: 1,
              display: "flex",
              cursor: "pointer",
            }}
          ><h1>NOVO DESAFIO</h1></div>
            <div style={{height: !isMobile ? "calc(100vh - 80.5vh)" : "100vhx", justifyContent: "center", alignItems: "center", flexWrap: "wrap", opacity: 1, flexDirection: isMobile ? "column" : "row", display: "flex",cursor: "pointer"}}>  
            <ContentInner> 
            <div>  
            <InputLoginMobile style={{width: "345px"}} placeholder="Informe um título" type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} name="title" />
            </div>
            <div>  
            <InputLoginMobile  placeholder="Informe a data e hora" style={{width: "345px"}} onChange={(e) => {setDateChallenge(e.target.value)}} type="date" name="data" />
            </div>
            {/* <div>  
            <InputLoginMobile style={{width: "150px"}} placeholder="Hora início" onChange={() => {setStart(start)}} type="text" name="hora" />
            <InputLoginMobile style={{width: "153px"}} placeholder="Hora fim" onChange={() => {setEnd(end)}} type="text" name="hora" />
            </div> */}
            </ContentInner>
          
        </div>

        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "70px",
            paddingLeft: "2em",
            paddingRight: "2em",
            paddingBottom: "5em",
            opacity: 1,
            flexDirection: "column",
            flexWrap: "wrap",
            textAlign: "center",
            fontSize: "28px",
            display: "flex",
            cursor: "pointer",
          }}
        ><p>1º) Informe um título e a data para o desafio.  <br></br> </p>
         <ButtonLogin onClick={() => {NexStap()}} >Próximo</ButtonLogin>  
        </div>
    </Area>
</>)}

    {stapTwo && (<>{videoAsset && (<>
      <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "20px",
              paddingBottom: "10px",
              opacity: 1,
              display: "flex",
              cursor: "pointer",
            }}
          ><h1>VISUALIZAÇÃO PRÉVIA</h1></div>

          {(!loading && (<>
          
            <video src={videoAsset} controls style={{width: "100%", height: "90%"}}/> 
          
          </>))}

       
    
    <br></br>
     <ButtonLogin onClick={newChallenges}>ENVIAR</ButtonLogin><br></br></>)}

   {!videoAsset && (<>
   
    <>
    <Area>
        <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "60px",
              paddingBottom: "50px",
              opacity: 1,
              display: "flex",
              cursor: "pointer",
            }}
          ><h1>ENVIO DO VÍDEO DO DESAFIO</h1></div>
        <div
            style={{
              height: !isMobile ? "calc(100vh - 80.5vh)" : "100vhx",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              opacity: 1,
              flexDirection: isMobile ? "column" : "row",
              display: "flex",
              cursor: "pointer",
            }}
          >  
            <ContentInner> 
            {(loading && (<>
          
          <p>Carregando vídeo...</p>
        
        </>))}


        {(!loading && (<>
          
          <div>  
            <InputLoginWeb name='upload-image' hidden onChange={uploadVideo} id="upload" type={'file'} accept="video/mp4,video/x-m4v,video/*" />
            <label htmlFor={'upload'}>{IconUpload()}</label>
            </div>
        
        </>))}
           
           
            </ContentInner>
           
        </div>
       
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "70px",
            paddingLeft: "2em",
            paddingRight: "2em",
            paddingBottom: "5em",
            opacity: 1,
            flexDirection: "column",
            flexWrap: "wrap",
            textAlign: "center",
            fontSize: "28px",
            display: "flex",
            cursor: "pointer",
          }}
        ><p>2º) Carrege o vídeo do desafio. <br></br> </p> 
        <ButtonLogin onClick={() => {Back()}} >Voltar</ButtonLogin>  
        </div>
    
    </Area>
    </>
 
  </>)}
</>)}

  </form>
 </div>
    </>
  );
}


