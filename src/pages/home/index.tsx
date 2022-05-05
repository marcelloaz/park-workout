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
  const ItensChekIn = [
    {
      data: "15/10/2022",
      grupos: "BOMBA TEAM",
      locais: "Parque da Cidade",
      treinos: "4k+",
      prêmios: "15 pontos",
      confirmados: [
        { nome: "CRIS" },
        { nome: "THIAGO" },
        { nome: "MILLENA" },
        { nome: "BRUNO" },
      ],
    },
    {
      data: "15/10/2022",
      grupos: "Fábio TEAM II",
      locais: "Parque da Cidade",
      treinos: "4k+",
      prêmios: "15 pontos",
      confirmados: [{ nome: "RICARDO" }, { nome: "PEDRO" }],
    },
    {
      data: "15/10/2022",
      grupos: "Fábio TEAM",
      locais: "Parque da Cidade",
      treinos: "4k+",
      prêmios: "15 pontos",
      confirmados: [
        { nome: "JOSE" },
        { nome: "MARIA" },
        { nome: "PEDRO" },
        { nome: "JOSEFINA" },
      ],
    },{
      data: "15/10/2022",
      grupos: "TROPA BPO TEAM",
      locais: "Parque da Cidade",
      treinos: "4k+",
      prêmios: "15 pontos",
      confirmados: [
        { nome: "JOSE" },
        { nome: "MARIA" },
        { nome: "PEDRO" },
        { nome: "JOSEFINA" },
      ],
    },
    {
      data: "15/10/2022",
      grupos: "CAMPINA TEAM",
      locais: "Parque da Cidade",
      treinos: "4k+",
      prêmios: "15 pontos",
      confirmados: [
        { nome: "MARIA" },
        { nome: "PEDRO" },
        { nome: "JOSEFINA" },
      ],
    },
    {
      data: "15/10/2022",
      grupos: "Fábio TEAM",
      locais: "Parque da Cidade",
      treinos: "4k+",
      prêmios: "15 pontos",
      confirmados: [
        { nome: "JOSE" },
        { nome: "MARIA" },
        { nome: "PEDRO" },
      ],
    },
    {
      data: "15/10/2022",
      grupos: "Fábio TEAM",
      locais: "Parque da Cidade",
      treinos: "4k+",
      prêmios: "15 pontos",
      confirmados: [
        { nome: "JOSE" },
      ],
    },
    {
      data: "15/10/2022",
      grupos: "Fábio TEAM",
      locais: "Parque da Cidade",
      treinos: "4k+",
      prêmios: "15 pontos",
      confirmados: [
        { nome: "PEDRO" },
        { nome: "JOSEFINA" },
      ],
    },
  ];

  useEffect(() => {
    if (loading) return;
    //if (!user) navigate("/login");
  }, [user, loading]);

  function CheckInIcon() {
    return (
      <>
     
<svg style={{opacity: 0.4, margin:"0em"}} xmlns="http://www.w3.org/2000/svg" width="170" height="210"  viewBox="243.5739380121231 254.99999994394884 62.69796979427338 89.00076824071303" preserveAspectRatio="none">
  <g>
    <defs>
      <path id="s-Circle_4-d1224" d="M245.00030092476024 286.2349129354726 C244.9264551689781 302.7472846324219 258.4533179788008 316.39567919163966 274.9656896757503 316.4695249474218 C291.57987210726566 316.5438260157889 305.2746027560667 302.84909536698785 305.2003016876997 286.2349129354725 C305.27414744348187 269.72254123852326 291.7472846336591 256.0741466793055 275.23491293670963 256.00030092352335 C258.6207305051943 255.92599985515625 244.9259998563932 269.6207305039573 245.00030092476024 286.23491293547266 "></path>
    </defs>
    <g >
      <use  xlinkHref="#s-Circle_4-d1224"  stroke-width="1.0" fill="#00000039" stroke="#000000" stroke-linecap="butt"></use>
    </g>
  </g>
  <g>
    <defs>
      <path id="s-Circle_5-d1224" d="M254.00020894775065 286.9936764388448 C253.94893398934144 298.4590770299934 263.3413401017098 307.9358689723885 274.80674069285834 307.98714393079774 C286.34283378522355 308.0387350364737 295.8517992904872 298.52976953121015 295.8002081848112 286.99367643884494 C295.85148314322043 275.52827584769614 286.45907703085203 266.05148390530104 274.9936764397035 266.0002089468918 C263.4575833473383 265.9486178412158 253.94861784207467 275.4575833464794 254.00020894775065 286.9936764388446 "></path>
    </defs>
    <g >
      <use  xlinkHref="#s-Circle_5-d1224" fill="#00000039" stroke-width="1.0" stroke="#000000" stroke-linecap="butt"></use>
    </g>
  </g>
  <g>
    <defs>
      <path id="s-Polygon_2-d1224" d="M270.20000076293945 282.6000003814697 L274.6000003814697 274.0 L278.79999923706055 282.3999996185303 L288.20000076293945 282.70000076293945 L281.29999923706055 289.79999923706055 L283.20000076293945 299.20000076293945 L275.0 294.29999923706055 L266.5 299.29999923706055 L268.20000076293945 289.70000076293945 L261.0 283.0 Z "></path>
    </defs>
    <g >
      <use  xlinkHref="#s-Polygon_2-d1224" fill="#00000039" stroke-width="1.0" stroke="#000000" stroke-linecap="butt"></use>
    </g>
  </g>
  <g>
    <defs>
      <path id="s-Path_8-d1224" d="M255.40000021457672 310.0 C256.1000002026558 310.60000002384186 256.80000019073486 311.2000000476837 257.700000166893 311.7999999523163 C259.5000001192093 313.09999990463257 261.3000000715256 314.0 262.89999997615814 314.7000000476837 C263.19999998807907 314.90000005066395 264.60000002384186 315.4000000357628 266.39999997615814 316.0 C268.0 316.5 270.1999999284744 317.0 272.8000000715256 317.2999999523163 C269.5000001192093 325.4999997615814 266.3000000715256 333.69999957084656 262.9999998807907 341.7999999523163 L258.10000002384186 329.8000030517578 L245.0 335.2000045776367 C248.5000001192093 326.8000030517578 252.0000001192093 318.4000015258789 255.40000021457672 310.0 Z "></path>
    </defs>
    <g >
      <use  xlinkHref="#s-Path_8-d1224" fill="#00000039" stroke-width="1.0" stroke="#000000" stroke-linecap="butt"></use>
    </g>
  </g>
  <g>
    <defs>
      <path id="s-Path_9-d1224" d="M277.0 316.59999990463257 C279.2999999523163 316.39999990165234 282.80000019073486 315.8999999165535 286.69999980926514 314.19999980926514 C290.4999997615814 312.5999997854233 293.19999980926514 310.4999997615814 294.8999996185303 309.0 C298.19999957084656 317.30000019073486 301.5999994277954 325.6000003814697 304.8999996185303 334.0 L291.79999923706055 329.19999980926514 L287.0999994277954 342.0999994277954 C283.70000076293945 333.5999960899353 280.29999923706055 325.0999960899353 277.0 316.59999990463257 Z "></path>
    </defs>
    <g >
      <use  xlinkHref="#s-Path_9-d1224" fill="#00000039" stroke-width="1.0" stroke="#000000" stroke-linecap="butt"></use>
    </g>
  </g>
  <g>
    <defs>
      <path id="s-Path_10-d1224" d="M264.0 326.0 "></path>
    </defs>
    <g >
      <use  xlinkHref="#s-Path_10-d1224" fill="none" stroke-width="1.0" stroke="#000000" stroke-linecap="butt"></use>
    </g>
  </g>
  <g>
    <defs>
      <path id="s-Path_11-d1224" d="M289.0 319.0 "></path>
    </defs>
    <g >
      <use  xlinkHref="#s-Path_11-d1224" fill="none" stroke-width="1.0" stroke="#000000" stroke-linecap="butt"></use>
    </g>
  </g>
</svg>

      </>
    );
  }




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

  function certSVG(){
    return (<>
   
<svg style={{opacity: 0.4, margin:"0em", paddingBottom: "10px", paddingTop:"35px"}} xmlns="http://www.w3.org/2000/svg" width="160" height="170" viewBox="141.0 525.0 80.59999656677246 85.9000015258789" preserveAspectRatio="none">
  <g>
    <defs>
      <path id="s-Path_12-d1224" d="M158.10000038146973 571.6000000238419 C156.400000333786 571.6000000238419 154.80000042915344 571.0 153.60000038146973 570.0 L150.0 583.299996972084 L165.10000038146973 583.599996984005 L162.10000038146973 570.3999971747398 C161.0 571.1000000238419 159.60000038146973 571.6000000238419 158.10000038146973 571.6000000238419 Z "></path>
    </defs>
    <g >
      <use  xlinkHref="#s-Path_12-d1224" fill="#00000039" stroke-width="1.0" stroke="#000000" stroke-linecap="butt"></use>
    </g>
  </g>
  <g>
    <defs>
      <path id="s-Circle_6-d1224" d="M151.0000699825015 565.0313750121612 C150.9828965511419 568.8714614046453 154.12867856007009 572.045506610749 157.96876495255412 572.0626800421086 C161.83252825975347 572.0799593601146 165.01734930050748 568.8951383193605 165.0000699825015 565.0313750121611 C165.01724341386108 561.1912886196772 161.8714614049329 558.0172434135734 158.03137501244885 558.0000699822139 C154.1676117052495 557.9827906642079 150.9827906644955 561.1676117049619 151.0000699825015 565.0313750121613 "></path>
    </defs>
    <g >
      <use  xlinkHref="#s-Circle_6-d1224" fill="#00000039" stroke-width="1.0" stroke="#000000" stroke-linecap="butt"></use>
    </g>
  </g>
  <g>
    <defs>
      <path id="s-Path_13-d1224" d="M144.0 595.0 C144.40000000596046 596.7999999523163 146.0 598.2999999523163 147.90000009536743 598.2999999523163 L166.40000009536743 598.2999999523163 C168.30000007152557 598.2999999523163 170.0 596.8999999761581 170.30000019073486 595.0 L144.0 595.0 Z "></path>
    </defs>
    <g >
      <use  xlinkHref="#s-Path_13-d1224" fill="none" stroke-width="1.0" stroke="#000000" stroke-linecap="butt"></use>
    </g>
  </g>
  <g>
    <defs>
      <path id="s-Rect_1-d1224" d="M142.0 584.0 L173.29999923706055 584.0 L173.29999923706055 595.5 L142.0 595.5 Z "></path>
    </defs>
    <g >
      <use  xlinkHref="#s-Rect_1-d1224" fill="#00000039" stroke-width="1.0" stroke="#000000" stroke-linecap="butt"></use>
    </g>
  </g>
  <g>
    <defs>
      <path id="s-Path_14-d1224" d="M157.0 526.0 L157.0 558.2999992370605 C157.20000000298023 558.2999992370605 157.40000000596046 558.2999992370605 157.60000002384186 558.2999992370605 C161.5000001192093 558.2999992370605 164.60000002384186 561.3999991416931 164.60000002384186 565.2999992370605 C164.60000002384186 567.699999332428 163.39999997615814 569.7999992370605 161.60000002384186 570.9999990463257 L164.60000002384186 584.1999988555908 L172.70000040531158 584.1999988555908 L172.70000040531158 595.6999988555908 L170.30000030994415 595.6999988555908 C169.9000003039837 597.4999988079071 168.30000030994415 598.9999988079071 166.40000021457672 598.9999988079071 L157.10000002384186 598.9999988079071 L157.10000002384186 609.8999984264374 L220.60000002384186 609.8999984264374 L220.60000002384186 526.0 L157.0 526.0 Z M199.30000114440918 599.8000030517578 C196.2000012397766 599.8000030517578 193.80000114440918 597.3000030517578 193.80000114440918 594.3000030517578 C193.80000114440918 591.3000030517578 196.30000114440918 588.8000030517578 199.30000114440918 588.8000030517578 C202.40000104904175 588.8000030517578 204.80000114440918 591.3000030517578 204.80000114440918 594.3000030517578 C204.80000114440918 597.3000030517578 202.30000114440918 599.8000030517578 199.30000114440918 599.8000030517578 Z "></path>
    </defs>
    <g >
      <use  xlinkHref="#s-Path_14-d1224" fill="#00000039" stroke-width="1.0" stroke="#000000" stroke-linecap="butt"></use>
    </g>
  </g>
  <g>
    <defs>
      <path id="s-Path_15-d1224" d="M199.80000019073486 585.0 C194.90000009536743 585.0 191.0 588.9000000953674 191.0 593.8000001907349 C191.0 598.7000002861023 194.90000009536743 602.6000003814697 199.80000019073486 602.6000003814697 C204.7000002861023 602.6000003814697 208.60000038146973 598.7000002861023 208.60000038146973 593.8000001907349 C208.59999561309814 588.8999977111816 204.6999979019165 585.0 199.80000019073486 585.0 Z M199.80000019073486 599.4999961853027 C196.7000002861023 599.4999961853027 194.30000019073486 596.9999961853027 194.30000019073486 593.9999961853027 C194.30000019073486 590.9999961853027 196.80000019073486 588.4999961853027 199.80000019073486 588.4999961853027 C202.90000009536743 588.4999961853027 205.30000019073486 590.9999961853027 205.30000019073486 593.9999961853027 C205.30000019073486 596.9999961853027 202.89999866485596 599.4999961853027 199.80000019073486 599.4999961853027 Z "></path>
    </defs>
    <g >
      <use  xlinkHref="#s-Path_15-d1224" fill="#00000039" stroke-width="1.0" stroke="#000000" stroke-linecap="butt"></use>
    </g>
  </g>
  <g>
    <defs>
      <path id="s-Line_11-d1224" d="M176.0 541.0 L201.5 541.0 "></path>
    </defs>
    <g >
      <use  xlinkHref="#s-Line_11-d1224" fill="none" stroke-width="1.0" stroke="#000000" stroke-linecap="butt"></use>
    </g>
  </g>
  <g>
    <defs>
      <path id="s-Line_12-d1224" d="M169.0 554.0 L209.10000228881836 554.0 "></path>
    </defs>
    <g >
      <use  xlinkHref="#s-Line_12-d1224" fill="#00000039" stroke-width="1.0" stroke="#000000" stroke-linecap="butt"></use>
    </g>
  </g>
  <g>
    <defs>
      <path id="s-Line_13-d1224" d="M209.10000228881836 562.2999992370605 L169.0 562.0 "></path>
    </defs>
    <g >
      <use  xlinkHref="#s-Line_13-d1224" fill="#00000039" stroke-width="1.0" stroke="#000000" stroke-linecap="butt"></use>
    </g>
  </g>
  <g>
    <defs>
      <path id="s-Line_14-d1224" d="M169.0 571.1000022888184 L209.10000228881836 571.0 "></path>
    </defs>
    <g >
      <use  xlinkHref="#s-Line_14-d1224" fill="#00000039" stroke-width="1.0" stroke="#000000" stroke-linecap="butt"></use>
    </g>
  </g>
  <g>
    <defs>
      <path id="s-Line_15-d1224" d="M208.60000228881836 579.3999977111816 L170.0 579.0 "></path>
    </defs>
    <g >
      <use  xlinkHref="#s-Line_15-d1224" fill="none" stroke-width="1.0" stroke="#000000" stroke-linecap="butt"></use>
    </g>
  </g>
</svg>

    
    
    </>)
  }

  function DetailItem(iteId: any) {
    setOpenClose(true);

    setCheckIn(ItensChekIn[iteId]);
  }


  function redirectToRegister(){
    console.log('rsdsda');
    //navigate("/register");
  }

  return (
    <>



<Area>

<div
              style={{
                //marginTop: isMobile ? "30px" : "0px",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "60px",
                paddingBottom: "0px",
                opacity: 1,
                display: "flex",
                cursor: "pointer",
              }}
            ><h1>Conheça nossa plataforma</h1></div>
<div
              style={{
                height: !isMobile ? "calc(100vh - 70.5vh)" : "100vhx",
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
                     <h3>Desafios</h3>
                    </div>
                  </ContentInner>




                  <ContentInner>
              {certSVG()}
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
                     <h3>Avaliação</h3>
                    </div>
                  </ContentInner>


                  
                  <ContentInner>
              {CheckInIcon()}
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
                     <h3>Prémios</h3>
                    </div>
                  </ContentInner>
          </div>

          <div
              style={{
                //marginTop: isMobile ? "30px" : "0px",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "0px",
                paddingLeft: "2em",
                paddingRight: "2em",
                height: !isMobile ? "calc(100vh - 64vh)" : "100vhx",
                paddingBottom: "5em",
                opacity: 1,
                flexDirection: "column",
                flexWrap: "wrap",
                textAlign: "center",
                fontSize: "28px",
                display: "flex",
                cursor: "pointer",
              }}
            ><p>Você está sendo desafiado agora mesmo,não fique de fora! <br></br> Cadastre-se escolha um desafio, cumpra-o e prove que você é capaz e <br></br> colecione cards exclusivos! Quanto mais você treina mais cards você recebe.</p>
            
            <ButtonBlockXXComponent props={"register"}
              title={"Teste Grátis"}
            ></ButtonBlockXXComponent>



            </div>




          </Area>

    </>
  );
}
