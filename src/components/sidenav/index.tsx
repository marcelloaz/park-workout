import * as React from "react";
import { useState } from "react";
import ButtonLoginComponent from "../navigate/button-login";
import {NavButton, Container, Wrapper } from "./style";
//import { gsap } from "gsap";

import { isMobile } from "react-device-detect";
export default function SideNavComponent(props: any) {
  const [localUrlVerify, setLocalUrlVerify] = useState("");
  // const url = location.href ? location.href : '';
  // const ref = React.useRef(null);
  
  // React.useEffect(() => {
  //   setLocalUrlVerify(url?.split('/')[3]);
  // }, [url]);

  // React.useEffect(() => {
  //   gsap.to(ref?.current, {
  //     opacity: 1,
  //     delay: 0.2,
  //     x: -1200,
  //     ease: "power3.inOut",
  //   });
  // });

  return (<>
   {(isMobile) && (<>
    <NavButton onClick={() => { props.changeOpenCloseNav(true) }}>-</NavButton></>)}
  <Wrapper> 

  <Container>
  <ul>
        <li><a onClick={() => { }}>CheckIn</a></li>
        <li><a onClick={() => {  }}> Grupos</a></li>
        {/* <li><a onClick={() => { navigate("/groups") }}> Locais</a></li>
        <li><a onClick={() => { navigate("/groups") }}> perfil</a></li>
        <li><a onClick={() => { navigate("/groups") }}> Treinos</a></li>
        <li><a onClick={() => { navigate("/groups") }}> Prêmios</a></li>
        <li><a onClick={() => { navigate("/groups") }}> Rate</a></li> */}
    </ul>
   </Container>
  

  </Wrapper>
  
  
  </>);

}
