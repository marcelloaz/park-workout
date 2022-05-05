import * as React from "react";
import { useState } from "react";
import ButtonLoginComponent from "../navigate/button-login";
import { Wrapper } from "./style";

//import { gsap } from "gsap";

//import { navigate } from "gatsby";
import { isMobile } from "react-device-detect";
export default function FooterComponent(props: any) {
  const [localUrlVerify, setLocalUrlVerify] = useState("");
  // const url = location.href ? location.href : '';


  return (<>
  
  <Wrapper> 
<p style={{paddingTop: "4px", fontSize: 12, fontFamily: "Arial", letterSpacing: "0.4em"}}> by INTEGRAUP @2022</p>
  
  </Wrapper>
  
  
  </>);

}
