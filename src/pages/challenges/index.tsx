import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { isMobile } from "react-device-detect";
import LayoutComponent from "../../components/layout";
import LayoutNotLoggedComponent from "../../components/layout-not-logged";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithFacebook,
  signInWithGoogle
} from "../../firebase/firebase";


import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import {Container, ContentChallenges, BoxHome, BoxHomeContent, ButtonPlus, ButtonCheckIn
} from "./style";
import { useNavigate } from "react-router-dom";

export default function ChallengesScreen(props: any) {

  
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

  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [errorFire, seterror] = useState("");
  
  const [newUser, setNewuser] = useState({
    nome: "",
    email: "",
    senha: ""
  });

  useEffect(() => {
    if (loading) return;
  }, [user, loading]);

 

  function CheckInIcon() {
    return (
      <>
        <svg
          style={{
            opacity: 1,
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="72.51970799922839"
          height="45.15437094616519"
          viewBox="232.0000002934417 244.00000000000003 72.51970799922839 45.15437094616519"
          preserveAspectRatio="none"
        >
          <g>
            <defs>
              <path
                id="s-Path_1-d1224"
                d="M243.97688478589097 251.77396251117466 C243.87230578663235 252.27975693307926 243.38286606492267 255.30276697893336 243.38286606492267 255.30276697893336 C243.38286606492267 255.30276697893336 240.44622773466443 254.3526781073792 238.74758399461308 255.30276697893333 C237.04894025456173 256.2528558504875 236.73224396404368 257.865127874943 236.7034533921784 258.1242430217305 C236.67466282031316 258.383358168518 236.30038538606456 260.25474533976103 237.76870455119368 262.21250422659983 C239.2370237163228 264.1702631134387 242.66310176829074 263.45049881680677 243.38286606492267 262.98984966696236 C243.64198121171017 264.6597028351484 243.976884785891 266.6462522938525 243.976884785891 266.6462522938525 C243.976884785891 266.6462522938525 239.06428028513113 268.25852431830805 235.52303994570207 266.0416502846817 C234.05472078057295 264.9188179819359 232.4136581842522 263.7671951073248 232.06817132186887 260.254745339761 C231.89542789067718 258.52731102784435 231.66510331575498 254.1059988322621 236.7034533921784 251.77396251117466 C238.632421707152 250.62233963656357 243.04500319799965 250.98026237061728 243.97688478589097 251.77396251117466 Z "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_1-d1224"
                fill="#000000b7"
                fill-opacity="1.0"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_2-d1224"
                d="M245.3729471066698 244.00000000000006 L250.10312062081107 244.02650091058368 L250.1031206208111 253.0425292269787 C250.1031206208111 253.0425292269787 252.89580609174294 249.18459259703158 256.98406729661224 251.2863043431968 C257.6462504495136 251.60300063371486 259.46005647702606 253.07131979884397 259.74796219567884 256.09432984469805 C259.74796219567884 257.5626490098272 259.74796219567884 266.4301451443325 259.74796219567884 266.4301451443325 L255.0550989816387 266.4301451443325 L255.0550989816387 256.46860727894665 C255.0550989816387 256.46860727894665 254.88235555044704 254.2805238171856 252.78064380428182 254.30931438905088 C250.67893205811663 254.33810496091618 250.1031206208111 256.46860727894665 250.1031206208111 256.46860727894665 L250.1031206208111 266.4301451443325 L245.5830008379626 266.4301451443325 Z "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_2-d1224"
                fill="#000000b7"
                fill-opacity="1.0"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_5-d1224"
                d="M287.61492271291917 251.7739625111747 C287.5103437136605 252.27975693307928 287.02090399195083 255.3027669789334 287.02090399195083 255.3027669789334 C287.02090399195083 255.3027669789334 284.0842656616926 254.35267810737923 282.38562192164125 255.3027669789334 C280.6869781815899 256.25285585048755 280.37028189107184 257.865127874943 280.34149131920657 258.12424302173054 C280.3127007473413 258.38335816851804 279.9384233130927 260.25474533976103 281.4067424782218 262.21250422659983 C282.87506164335093 264.1702631134387 286.3011396953189 263.45049881680677 287.02090399195083 262.98984966696236 C287.28001913873834 264.6597028351484 287.61492271291917 266.6462522938525 287.61492271291917 266.6462522938525 C287.61492271291917 266.6462522938525 282.7023182121593 268.25852431830805 279.1610778727302 266.0416502846817 C277.6927587076011 264.9188179819359 276.0516961112803 263.7671951073248 275.706209248897 260.25474533976103 C275.5334658177053 258.5273110278444 275.3031412427831 254.10599883226215 280.34149131920657 251.77396251117472 C282.2704596341801 250.62233963656362 286.6830411250278 250.98026237061734 287.61492271291917 251.7739625111747 Z "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_5-d1224"
                fill="#000000b7"
                fill-opacity="1.0"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_6-d1224"
                d="M289.0109850336979 244.00000000000003 L293.8357139724599 244.07194401085434 L293.8357139724599 257.8522777825675 L298.12682634904905 251.15288805177025 L303.7315445552062 251.15288805177025 L298.12682634904905 257.32683545074025 L304.51970805294707 266.65343684067375 L298.78362926383306 266.4345025357457 L295.0617460800568 260.08540769283326 L293.8357139724599 261.6179478273294 L293.8357139724599 266.4345025357457 L289.28188042995725 266.4345025357457 Z "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_6-d1224"
                fill="#000000b7"
                fill-opacity="1.0"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_7-d1224"
                d="M274.9341986056246 269.674992993296 L279.2303927219271 269.6877325124035 L279.2303927219271 272.2681190939995 C279.2303927219271 272.2681190939995 281.3150852177759 268.96735597557216 283.92095083758693 269.372712849765 C286.5268164573979 269.77806972395786 287.45334645555295 270.1834265981507 289.1326820772089 272.61556784330764 C289.7696714509405 273.60000596634734 289.6538552011711 285.1237228184006 289.6538552011711 285.1237228184006 L285.021205210396 285.1237228184006 L285.021205210396 275.5109740875421 C285.021205210396 275.5109740875421 284.3842158366644 273.3104653419239 282.7627883398931 273.1367409672698 C281.14136084312184 272.96301659261576 279.809473970774 274.35281158984833 279.8673820956587 275.5109740875421 C279.92529022054333 276.6691365852359 279.8673820956587 285.1237228184006 279.8673820956587 285.1237228184006 L275.3505483546529 285.1237228184006 Z "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_7-d1224"
                fill="#000000b7"
                fill-opacity="1.0"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_8-d1224"
                d="M267.8958053915877 270.0420548919361 L272.90772368879874 270.05479441104364 L272.90772368879874 285.60660096681005 L267.8958053915877 285.60660096681005 Z "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_8-d1224"
                fill="#000000b7"
                fill-opacity="1.0"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_9-d1224"
                d="M251.70750099930308 275.50325271327404 L254.95865281476762 273.83712518370265 L257.2484991774194 277.712249797421 C257.2484991774194 277.712249797421 266.0556005722339 262.91631945413263 274.15813385546323 262.2998223564956 C274.77463095310026 263.79702959361407 275.4791990646854 265.47037885862886 275.4791990646854 265.47037885862886 C275.4791990646854 265.47037885862886 266.5840266559228 266.26301798416216 258.92184844243417 282.11580049482825 C257.6888542471601 282.2919425227246 255.66322092635278 282.11580049482825 255.66322092635278 282.11580049482825 Z "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_9-d1224"
                fill="#000000"
                fill-opacity="1.0"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Subtraction_1-d1224"
                d="M256.86238887693065 267.22669760632147 C250.93091743779598 267.22669760632147 246.05033460052755 272.1821392088362 246.07689434714246 278.1905308417286 C246.0504225883298 284.1782767652907 250.8973940851116 289.12747751868363 256.8141338522004 289.1542509499613 C256.8302230503392 289.15432636807765 256.84628710910584 289.15436407713577 256.8623637375585 289.15436407713577 C262.79384774637924 289.15436407713577 267.6744054442756 284.198916189778 267.64785826734663 278.1905308417286 C267.6489015512885 277.95466696792056 267.64237788423065 277.7204120139265 267.6285323750511 277.4880110886241 L265.3580825542689 277.4880110886241 C265.3752527454076 277.7165782596824 265.3834984594537 277.94748967718834 265.38247403004095 278.1803808202465 C265.40344026636546 282.94174647021276 261.5479656048832 286.868704936238 256.8623260285004 286.868704936238 C256.8496432152801 286.868704936238 256.83694783237377 286.86867979686593 256.8242524494674 286.8686169484358 C252.15023983267707 286.8473867487042 248.3213249178097 282.925380738981 248.342228305704 278.1803808202465 C248.32126206937943 273.41901517028026 252.17671159148966 269.49205670425505 256.8623637375585 269.49205670425505 C256.87505912046487 269.49205670425505 256.8877545033712 269.49208812847024 256.90044988627756 269.49214469205737 C258.8283506229373 269.50089947838836 260.61247300576116 270.17330854857 262.0419605513295 271.2933869872758 L263.5954606194265 269.6404544177129 C261.7573011562913 268.1428328889328 259.4310105052503 267.2382114387395 256.91060619260264 267.2268044486529 C256.89452956414993 267.22672903053655 256.8784529356973 267.22669760632147 256.86238887693065 267.22669760632147 Z "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Subtraction_1-d1224"
                fill="#000000b7"
                fill-opacity="1.0"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Exclusion_1-d1224"
                d="M268.17909716766405 253.89983196363843 C268.2195464173597 253.89983196363843 268.2605173090263 253.90047930246985 268.3020098426637 253.90178654981858 C271.0371169626612 253.98815914748283 271.0371169626612 257.4268293045267 271.0371169626612 257.4268293045267 C271.0371169626612 257.4268293045267 267.72859333493653 257.37561411873264 265.6950318173751 257.37561411873264 C265.4860293626471 257.37561411873264 265.2904953265173 257.3761546152326 265.11340730465986 257.37734873540694 C265.11340730465986 256.62440568672946 265.5532520436205 253.89983196363843 268.17909716766405 253.89983196363843 Z M267.91647243226436 251.03839321403686 C267.55682229027644 251.15912504850755 265.4116922393717 250.92460613110646 262.73417313599356 253.71728869803704 C260.9203674395723 255.73263045567504 260.71883137835556 258.8420125473747 260.9203674395723 260.59823651201975 C261.121897215946 262.3544604766648 262.273519281784 265.23352192610264 265.4692739711479 266.61546463420245 C266.76924347169944 267.1776124183896 268.5408464472216 267.3443555886313 270.18527562417455 267.3443555886313 C272.5833957461248 267.3443555886313 274.7110476485827 266.9897458907477 274.7110476485827 266.9897458907477 L274.7110476485827 263.36213449790534 C274.7110476485827 263.36213449790534 272.8940429670628 263.5668695442206 270.88083805605265 263.5668695442206 C269.8742324581261 263.5668695442206 268.8185799452485 263.51568578264175 267.91647243226436 263.36213449790534 C265.210162462998 262.90148064369566 265.210162462998 260.396700450803 265.210162462998 260.396700450803 L275.2004860838374 260.396700450803 C275.54597647449464 257.1433703145059 274.8550019780232 255.0704468250917 274.27919094510423 254.23551799917985 C272.238565263985 251.15860969137967 270.06113740478537 251.17677917255904 267.91647243226436 251.03839321403686 Z "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Exclusion_1-d1224"
                fill="#000000b7"
                fill-opacity="1.0"
              ></use>
            </g>
          </g>
        </svg>
      </>
    );
  }

  return (
    <>
   <div
          style={{
            justifyContent: "column",
            display: "flex",
            minHeight: "89.5vh",
            flexWrap: isMobile ? "wrap-reverse" : "wrap",
          }}
        >
          <BoxHomeContent>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                alignItems: "flex-start",
                minWidth: "100vh",
                //minHeight: "calc(100vh - 20.9vh)",
                paddingTop: "0px",
              }}
            >
              {Array.from(ItensChekIn).map((_, i) => (
                <>
                  <Container>
                    <div
                      style={{ flex: 1, flexDirection: "row"}}
                    >
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <ul>
                          <li>{_.data}</li>
                          <li>{_.grupos}</li>
                          <li>{_.locais}</li>
                          <li>{_.treinos}</li>
                          <li>{_.prêmios}</li>
                        </ul>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "center",
                        }}
                      >
                        <ButtonCheckIn
                          onClick={() => {
                          
                          }}
                        >
                          {CheckInIcon()}
                        </ButtonCheckIn>
                      </div>

                     
                    </div>
                  </Container>
                </>
              ))}
            </div>
          </BoxHomeContent>

          {/* <MemberGroupsComponent
            checkIn={checkIn}
            openClone={openClone}
          ></MemberGroupsComponent> */}
        </div>
    </>
  );
}
