import * as React from "react";
import { useState } from "react";
import ButtonLoginComponent from "../navigate/button-login";
import {
  NavButton,
  Container,
  Wrapper,
  ButtonCheckIn,
  ProfilePhoto,
} from "./style";

import imgProfileMock01 from "./../../images/001.png";
import imgProfileMock02 from "./../../images/002.png";
import imgProfileMock03 from "./../../images/003.png";
import imgProfileMock04 from "./../../images/004.png";
//import { gsap } from "gsap";

//import { navigate } from "gatsby";
import { isMobile } from "react-device-detect";
import CreateVideoScreen from "../create-video";
export default function CheckInComponent(props: any) {
  // const url = location.href ? location.href : "";
  const ref = React.useRef(null);
  
  const [confirmados, setConfirmados] = useState([]);


  const [openClone, setOpenClose] = useState(true);
  React.useEffect(() => {
    setOpenClose(props.openClone);
    
    setConfirmados(props.checkIn.confirmados);

      if(props.checkIn.confirmados != undefined){
        console.log(props.checkIn.confirmados);
      }


    // gsap.to(ref?.current, {
    //   opacity: 1,
    //   delay: 0.2,
    //   x: -1200,
    //   ease: "power3.inOut",
    // });
  });


function PhotoProfile(img: any){
  const img01 = <img
  style={{
    display: "flex",
    marginTop: "8px",
    marginLeft: "8px",
    width: "50px",
    height: "50px",
    textAlign: "center",
    justifyContent: "center",
  }}
  src={imgProfileMock01}
/>;

const img02 = <img
  style={{
    display: "flex",
    marginTop: "8px",
    marginLeft: "8px",
    width: "50px",
    height: "50px",
    textAlign: "center",
    justifyContent: "center",
  }}
  src={imgProfileMock02}
/>;


const img03 = <img
  style={{
    display: "flex",
    marginTop: "8px",
    marginLeft: "8px",
    width: "50px",
    height: "50px",
    textAlign: "center",
    justifyContent: "center",
  }}
  src={imgProfileMock03}
/>;


const img04 = <img
  style={{
    display: "flex",
    marginTop: "8px",
    marginLeft: "8px",
    width: "50px",
    height: "50px",
    textAlign: "center",
    justifyContent: "center",
  }}
  src={imgProfileMock04}
/>;
  
  switch (img) {
    case 0:
      return (img01)
      break;

      case 1:
        return (img02)
        break;

        case 3:
          return (img03)
          break;

          case 4:
            return (img04)
            break;
  
    default:
      break;
  }

  return (img04)
}

  return (
    <>
     

      {/* {(isMobile) && (<>
    <NavButton onClick={() => { props.changeOpenCloseNav(true) }}>-</NavButton></>)} */}
      <Wrapper >

    {openClone && (<>
      <Container active={openClone}>
          <h3
            style={{
              display: "flex",
              marginLeft: "10px",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            Confirmados
          </h3>
          <ul>

            {props.checkIn.confirmados != undefined && (<>
            
           {Array.from(props.checkIn.confirmados).map((_, i) => (<>
            <li> 
             {PhotoProfile(i)}
             {/* {_.nome} */}
            </li>
            </>
            ))}
            
            </>)}
     

          </ul>
          <div
            style={{
              display: "flex",
              padding: "20px",
              fontSize: 11,
              marginBottom: "5px",
              flexDirection: "row",
            }}
          >
            Confirme seu treino
          </div>

          <div
            style={{
              display: "flex",
              padding: "20px",
              fontSize: 11,
              backgroundColor: "#0000006f",
              marginBottom: "20px",
              flexDirection: "row",
            }}
          >


            Data: {props.checkIn.data}<br></br>
            Grupos: {props.checkIn.grupos}<br></br>
            Locais: {props.checkIn.locais}<br></br>
            Treinos: {props.checkIn.prêmios}<br></br>
            Prêmios: {props.checkIn.treinos}<br></br>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "50px",
            }}
          >
            <ButtonCheckIn>CONFIRMAR</ButtonCheckIn>
          </div>
        </Container>
    
    </>)}

        
      </Wrapper>
    </>
  );
}
