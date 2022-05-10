import React, { useEffect, useState } from "react";

import { isMobile } from "react-device-detect";
import LayoutComponent from "../../components/layout";
import LayoutNotLoggedComponent from "../../components/layout-not-logged";
import { auth } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import './style.css';

import {
  ContentInner,
  Area,BoxHome
} from "./style";
import CheckInComponent from "../../components/checkIn";
import ButtonBlockXXComponent from "../../components/navigate/button-block-xx";
import { prototype } from "events";
import { useNavigate } from "react-router-dom";

export default function HomeScreen(props: any) {
  const [user, loading, error] = useAuthState(auth);
  const [openClone, setOpenClose] = useState(false);
  const [checkIn, setCheckIn] = useState({});
  const navigate = useNavigate();


  function  lightSVG(){
    return (<>
  <svg style={{opacity: 0.4, margin:"0em", alignContent: "center"}} xmlns="http://www.w3.org/2000/svg" width="220" height="210" viewBox="79.5 267.48958587646484 77.0999984741211 86.54383087158203" preserveAspectRatio="none">
    <g>
      <defs>
        <path id="s-Circle_1-d1224" d="M93.00024093975895 305.2080200679058 C92.94111526799963 318.4288891427265 103.77159349874134 329.35667352528367 116.99246257356164 329.415799197043 C130.29484788462034 329.4752894214047 141.25973192706056 318.5104053789641 141.2002417026984 305.2080200679054 C141.25936737445772 291.9871509930851 130.42888914371602 281.05936661052795 117.20802006889572 281.0002409387686 C103.90563475783702 280.94075071440693 92.9407507153968 291.9056347568475 93.00024093975895 305.2080200679062 "></path>
      </defs>
      <g>
        <use  xlinkHref="#s-Circle_1-d1224" fill="#00000039" fill-opacity="1.0" stroke-width="1.0" stroke="#000000" stroke-linecap="butt"></use>
      </g>
    </g>
    <g>
      <defs>
        <path id="s-Polyline_1-d1224" d="M104.0 317.39999771118164 L113.79999923706055 305.5 L119.5999984741211 311.0 L133.29999923706055 296.0 "></path>
      </defs>
      <g>
        <use  xlinkHref="#s-Polyline_1-d1224" fill="none" stroke-width="1.0" stroke="#000000" stroke-linecap="butt"></use>
      </g>
    </g>
    <g>
      <defs>
        <path id="s-Polyline_2-d1224" d="M124.0 298.0999984741211 L133.29999923706055 296.0 L130.5999984741211 304.6999969482422 "></path>
      </defs>
      <g>
        <use  xlinkHref="#s-Polyline_2-d1224" fill="none" stroke-width="1.0" stroke="#000000" stroke-linecap="butt"></use>
      </g>
    </g>
    <g>
      <defs>
        <path id="s-Path_1-d1224" d="M125.19999980926514 295.5 C122.99999976158142 293.89999997615814 120.2999997138977 293.0 117.39999961853027 293.0 C109.99999952316284 293.0 104.0 299.0 104.0 306.3999996185303 C104.0 308.2999995946884 104.40000000596046 310.19999957084656 105.20000004768372 311.7999997138977 "></path>
      </defs>
      <g>
        <use  xlinkHref="#s-Path_1-d1224" fill="none" stroke-width="1.0" stroke="#000000" stroke-linecap="butt"></use>
      </g>
    </g>
    <g>
      <defs>
        <path id="s-Path_2-d1224" d="M109.0 316.1999996677041 C111.40000009536743 318.1999996677041 114.40000009536743 319.4999996200204 117.80000019073486 319.4999996200204 C125.2000002861023 319.4999996200204 131.19999980926514 313.4999996200204 131.19999980926514 306.1000000014901 C131.19999980926514 306.1000000014901 131.19999980926514 306.0 131.19999980926514 306.0 "></path>
      </defs>
      <g>
        <use  xlinkHref="#s-Path_2-d1224" fill="none" stroke-width="1.0" stroke="#000000" stroke-linecap="butt"></use>
      </g>
    </g>
    <g>
      <defs>
        <path id="s-Path_3-d1224" d="M117.10000000149012 330.3000030517578 C114.30000004917383 330.3000030517578 111.60000000149012 329.8000030517578 109.10000000149012 328.90000307559967 C109.10000000149012 334.40000307559967 109.0 339.90000307559967 109.0 345.40000307559967 C112.20000004768372 347.90000307559967 115.30000019073486 350.40000307559967 118.5 352.90000307559967 C121.59999990463257 350.50000298023224 124.59999990463257 348.1000028848648 127.69999980926514 345.70000326633453 C127.49999771267176 339.8000030517578 127.39999923855066 333.9000015258789 127.19999847561121 328.0 C124.10000000149012 329.5 120.69999847561121 330.3000030517578 117.10000000149012 330.3000030517578 Z "></path>
      </defs>
      <g>
        <use  xlinkHref="#s-Path_3-d1224" fill="#00000018" stroke-width="1.0" stroke="#000000" stroke-linecap="butt"></use>
      </g>
    </g>
    <g>
      <defs>
        <path id="s-Line_1-d1224" d="M109.0 334.0 L127.20000076293945 334.0 "></path>
      </defs>
      <g>
        <use  xlinkHref="#s-Line_1-d1224" fill="none" stroke-width="1.0" stroke="#000000" stroke-linecap="butt"></use>
      </g>
    </g>
    <g>
      <defs>
        <path id="s-Line_2-d1224" d="M109.0 340.0 L127.60000228881836 340.0 "></path>
      </defs>
      <g>
        <use  xlinkHref="#s-Line_2-d1224" fill="none" stroke-width="1.0" stroke="#000000" stroke-linecap="butt"></use>
      </g>
    </g>
    <g>
      <defs>
        <path id="s-Line_3-d1224" d="M109.0 345.0 L127.60000228881836 345.2999954223633 "></path>
      </defs>
      <g>
        <use  xlinkHref="#s-Line_3-d1224" fill="none" stroke-width="1.0" stroke="#000000" stroke-linecap="butt"></use>
      </g>
    </g>
    <g>
      <defs>
        <path id="s-Line_4-d1224" d="M91.0 279.0 L97.10000038146973 285.6000003814697 "></path>
      </defs>
      <g>
        <use  xlinkHref="#s-Line_4-d1224" fill="none" stroke-width="1.0" stroke="#000000" stroke-linecap="butt"></use>
      </g>
    </g>
    <g>
      <defs>
        <path id="s-Line_5-d1224" d="M117.20000076293945 268.0 L117.0 277.6000003814697 "></path>
      </defs>
      <g>
        <use  xlinkHref="#s-Line_5-d1224" fill="none" stroke-width="1.0" stroke="#000000" stroke-linecap="butt"></use>
      </g>
    </g>
    <g>
      <defs>
        <path id="s-Line_6-d1224" d="M138.0 285.0 L144.0999984741211 279.0 "></path>
      </defs>
      <g>
        <use  xlinkHref="#s-Line_6-d1224" fill="none" stroke-width="1.0" stroke="#000000" stroke-linecap="butt"></use>
      </g>
    </g>
    <g>
      <defs>
        <path id="s-Line_7-d1224" d="M147.0 306.0 L156.0999984741211 306.0 "></path>
      </defs>
      <g>
        <use  xlinkHref="#s-Line_7-d1224" fill="none" stroke-width="1.0" stroke="#000000" stroke-linecap="butt"></use>
      </g>
    </g>
    <g>
      <defs>
        <path id="s-Line_8-d1224" d="M138.0 325.0 L144.20000457763672 331.9000015258789 "></path>
      </defs>
      <g>
        <use  xlinkHref="#s-Line_8-d1224" fill="none" stroke-width="1.0" stroke="#000000" stroke-linecap="butt"></use>
      </g>
    </g>
    <g>
      <defs>
        <path id="s-Line_9-d1224" d="M98.20000076293945 326.0 L91.0 332.6000061035156 "></path>
      </defs>
      <g>
        <use  xlinkHref="#s-Line_9-d1224" fill="none" stroke-width="1.0" stroke="#000000" stroke-linecap="butt"></use>
      </g>
    </g>
    <g>
      <defs>
        <path id="s-Line_10-d1224" d="M89.30000114440918 305.0 L80.0 305.0 "></path>
      </defs>
      <g>
        <use  xlinkHref="#s-Line_10-d1224" fill="none" stroke-width="1.0" stroke="#000000" stroke-linecap="butt"></use>
      </g>
    </g>
  </svg>
  
  
  
    </>)
  }
  return (
    <>
    <Area>
        <div
            style={{
              //marginTop: isMobile ? "30px" : "0px",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "0px",
              paddingBottom: "0px",
              opacity: 1,
              display: "flex",
              cursor: "pointer",
            }}
          ><h1>DESAFIOS EM VÍDEO</h1></div>
        <div
            style={{
              height: !isMobile ? "calc(100vh - 59.2vh)" : "100vhx",
              //marginTop: isMobile ? "30px" : "0px",
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: "wrap",
              opacity: 1,
              flexDirection: isMobile ? "column" : "row",
              display: "flex",
              cursor: "pointer",
            }}
          >
            
            <ContentInner  onClick={() => { navigate("/challenges")}}> 
        
            {lightSVG()}
            <div 
                    style={{
                      fontSize: isMobile ? "20px" : "16px",
                      letterSpacing: isMobile ? "0.2em" : "0.2em",
                      textAlign: "center",
                      opacity: 1,
                      margin: "2em",
                      cursor: "pointer",
                    }}
                  >
                  <h1>Aceita o desafio?</h1>
                  </div>
                </ContentInner>

        </div>

        <div
          style={{
            //marginTop: isMobile ? "30px" : "0px",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "0px",
            paddingLeft: "4em",
            paddingRight: "2em",
            height: !isMobile ? "calc(100vh - 62.5vh)" : "100vhx",
            paddingBottom: "1em",
            opacity: 1,
            flexDirection: "column",
            flexWrap: "wrap",
            textAlign: "center",
            fontSize: "22px",
            display: "flex",
            cursor: "pointer",
          }}
        ><p>Faça um vídeo seu execuntando o desafio e post na página do desafio aqui na plataforma. <br></br>  Quem enviar o melhor vídeo ganha um selo virtual exclusivo!</p>
        <ButtonBlockXXComponent props={"/challenges"}
          title={"VÊR DESAFIOS"}
        ></ButtonBlockXXComponent>

        </div>
    </Area>
    </>
  );
}
