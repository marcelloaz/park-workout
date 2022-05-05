import * as React from "react";
import { useState } from "react";
import ButtonLoginComponent from "../navigate/button-login";
import { boxCenter, boxColor, MenuOpen, boxLogo, ContentInner, SocialButtonAzure, SocialButtonWhite, SocialButtonOrange, SocialButtonRed, Wrapper, MenuExpandButton, ButtonHome } from "./style";
import './../../index.css';
import { isMobile } from "react-device-detect";
import { Link, Router, useNavigate } from "react-router-dom";
 //import { gsap } from "gsap";
 import { getAuth } from "firebase/auth";
import { logout } from "../../firebase/firebase";

export default function SideBarComponent(props: any) {
  const ref = React.useRef(null);
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;


  React.useEffect(() => {

    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      // ...
    } else {
      // No user is signed in.
    }

  })


  function Sair(){
    logout();
    navigate("/");
  }


  function Brandcrud() {
    return (<>
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="114.20000000000005 350.0 27.799999999999898 22.999999999999943" preserveAspectRatio="none">
            <g>
              <defs>
                <polygon points="127.20000000000005,350.00000000000006 141.99999999999994,373.0 114.20000000000005,373.0" id="s-Triangle-d1224-path"></polygon>
              </defs>
              <g transform="rotate(180.0 128.1 361.5)" >
                <use xlinkHref="#s-Triangle-d1224-path" fill="#D9D9D9" fill-opacity="1.0"></use>
              </g>
            </g>
          </svg>
    </>);
  }

  return (<>
  <Wrapper> 
  <div style={boxLogo}>


  <MenuExpandButton onClick={() => { if(openMenu){setOpenMenu(false)}else{setOpenMenu(true)}  }}>{Brandcrud()}</MenuExpandButton></div>
  <SocialButtonRed onClick={() => { props.changeColorThemes("rgb(194, 79, 79)") }}></SocialButtonRed>
  <SocialButtonAzure onClick={() => { props.changeColorThemes("rgb(79, 79, 194)") }}></SocialButtonAzure>
  <SocialButtonOrange onClick={() => { props.changeColorThemes("rgb(231, 168, 96)") }}></SocialButtonOrange>
  <SocialButtonWhite onClick={() => { props.changeColorThemes("rgba(22, 21, 21, 0.63)") }}></SocialButtonWhite>

  </Wrapper>

  <MenuOpen ref={ref} active={openMenu}>

  <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        opacity: 1,
        flexDirection: "row",
        display: "flex",
        cursor: "pointer",
      }}
    >
      
      <>

      {user && (<>
      
        <ContentInner active={isMobile}>
          <ButtonHome onClick={() => { navigate("/");  setOpenMenu(false)} }  active={openMenu} >Página Inicial</ButtonHome>
          </ContentInner>
          <ContentInner active={isMobile}>
          <ButtonHome onClick={() => { navigate("/home"); setOpenMenu(false)} } active={openMenu}>Descubra</ButtonHome>
          </ContentInner>
          <ContentInner active={isMobile}>
          <ButtonHome onClick={() => { Sair();  setOpenMenu(false)} }  active={openMenu}>Sair</ButtonHome>
          </ContentInner>
      
      </>)}

      
      {!user && (<>
      
      <ContentInner active={isMobile}>
        <ButtonHome onClick={() => { navigate("/");  setOpenMenu(false)} }  active={openMenu} >Página Inicial</ButtonHome>
        </ContentInner>
        <ContentInner active={isMobile}>
        <ButtonHome onClick={() => { navigate("/home"); setOpenMenu(false)} } active={openMenu}>Descubra</ButtonHome>
        </ContentInner>
        <ContentInner active={isMobile}>
        <ButtonHome onClick={() => { navigate("/login");  setOpenMenu(false)} }  active={openMenu}>Entre</ButtonHome>
        </ContentInner>
        <ContentInner active={isMobile}>
        <ButtonHome onClick={() => { navigate("/register");  setOpenMenu(false)} }  active={openMenu}>Criar Conta</ButtonHome>
        </ContentInner>
    
    </>)}
        
        </>
  </div>

  </MenuOpen>
  </>);

}
