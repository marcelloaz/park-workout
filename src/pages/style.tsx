import { url } from "inspector";
import { isMobile } from "react-device-detect";
import img from "./../images/pic.jpg";
import imgHomeBackground from "./../images/home-banner-footer.png";
import imgGramar from "./../images/background_image_home_gramar.png";
import styled, { keyframes, ThemeProvider } from "styled-components";

export const boxDefault = {
   backgroundSize: "100%",

   //backgroundColor: "#ffffff5c",
   backgroundImage: `url(${img})`,
  
    opacity: 0.8,
    //fontSize: 10,
    justifyContent: "flex-end",
    display: "flex",
    //paddingTop: isMobile ? "15px" : "calc(100vh - 82vh)",
    minHeight: isMobile ? "235px" : "calc(100vh - 292px)",
     backgroundRepeat: "no-repeat",
};

export const ContainerBanner = styled.div`
   //background-size: "100%";
  // background-color: "#d100005c";
   /* background-image: "url(${img})";
   opacity: 0.8;
   justify-content: "flex-end";
   display: "flex";
   min-height: "calc(100vh - 292px)";
   background-repeat: "no-repeat"; */
`;


export const boxDividerAbout = {
  color: "#000000cb",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  fontFamily: "Arial",
  padding: "2px",
  display: "flex",
  marginTop: "40px",
  fontSize: 16,
  minHeight: "20px",
};

export const ButtonSendMobile = styled.button`
  /* color: #ffffff;
  font-size: 0.2em;
  border-radius: 0em;
  letter-spacing: 0.4em;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 10px;
  width: 95px;
  margin-top: 10px;
  padding-bottom: 10px;
  margin-left: 120px;
  border: 2px solid #57010111;
  background-color: #00000025;
  opacity: 1px; */
`;

export const ButtonSend = styled.button`
  color: #ffffff;
  font-size: 2.8em;
  border-radius: 0em;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 8px;
  display: "flex";
  margin-top: 40px;
  padding-bottom: 8px;
  letter-spacing: 0.3em;
  cursor: pointer;
  font-weight: "bold";
  margin-left: 20px;
  border: 2px solid #57010111;
  background-color: #00000025;
`;

export const textVenefits = {
  fontWeight: "normal",
  flexDirection: "column",
  marginLeft: "20px",
  width: isMobile ? 200 : "100%",
   fontSize: 11, justifyContent: "center", alignItems: "center"
};




