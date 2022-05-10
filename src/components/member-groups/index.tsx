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
export default function MemberGroupsComponent(props: any) {
  //const url = location.href ? location.href : "";
  const ref = React.useRef(null);
  
  const [confirmados, setConfirmados] = useState([]);


  const [openClone, setOpenClose] = useState(true);
  React.useEffect(() => {
    // setOpenClose(props.openClone);
    
    // setConfirmados(props.checkIn.confirmados);

    //   if(props.checkIn.confirmados != undefined){
    //     console.log(props.checkIn.confirmados);
    //   }


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
            <ul>

{Array.from([0,1,2,3,4,5]).map((_, i) => (<>
  <li> 
   {/* {PhotoProfile(i)} */}
   {/* {_.nome} */}
  </li>
  </>
  ))}

</ul>
    </>
  );
}
