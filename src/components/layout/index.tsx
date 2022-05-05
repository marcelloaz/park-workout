import * as React from "react";
import ButtonLoginComponent from "../navigate/button-login";
import SideBarComponent from "../sidebar";
import styled, {
  keyframes,
  ThemeProvider,
  createGlobalStyle,
} from "styled-components";
//import { gsap } from "gsap";
//import { pageStyles, Wrapper } from "./style";
import { useState } from "react";
import SideNavComponent from "../sidenav";
import { isMobile } from "react-device-detect";
import imgGramar from "./../../images/background_image_menur.png";
import FooterComponent from "../footer";
import ButtonBlockXXComponent from "../navigate/button-block-xx";

export default function LayoutComponent(props: any) {
  const [changeColor, setChangeColor] = useState("");
  const GlobalStyle = createGlobalStyle`
  body {
    padding: 0px;
    max-width: 100%;
    overflow-x: hidden;
    letter-spacing: "10px";
    margin: 0px;
    opacity: 1;
    height: "100%";
    min-height: "100vh";
    background-color: ${(props) =>
      props.theme === "purple" ? changeColor : "white"};
    color: ${(props) => (props.theme === "purple" ? "white" : "purple")};
  }`;
  
  const changeColorThemes = (value: string) => {
    console.log(value);
    localStorage.setItem("newcolor", value);
    setChangeColor(value);
  };


  const [changeColorMenuBackground, setChangeColorMenuBackground] =
    useState("");

  React.useEffect(() => {
    const newColor = localStorage.getItem("newcolor");
    if (newColor) {
      setChangeColor(newColor);

      if (newColor === "rgb(194, 79, 79)")
        setChangeColorMenuBackground("rgba(153, 47, 47, 0.664)");
      else if (newColor === "rgb(79, 79, 194)") {
        setChangeColorMenuBackground("rgba(49, 49, 156, 0.705)");
      } else if (newColor === "rgb(231, 168, 96)") {
        setChangeColorMenuBackground("rgb(255, 255, 255)");
      }else if(newColor === "rgba(22, 21, 21, 0.63)") 
      {
        setChangeColorMenuBackground("rgba(22, 21, 21, 0.63)"); 
      } else setChangeColorMenuBackground(newColor);
    }
  }, [changeColorMenuBackground, changeColor]);


  return (
    <>
      <GlobalStyle theme="purple" />
      <SideBarComponent changeColorThemes={changeColorThemes}  />
        {props.children}
      <FooterComponent></FooterComponent>
    
    </>
  );
}
