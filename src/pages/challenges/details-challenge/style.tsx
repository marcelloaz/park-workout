import { isMobile } from "react-device-detect";
import styled, { keyframes, ThemeProvider } from "styled-components";

export const boxDefault = {
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  fontFamily: "Arial",
  borderRadius: "15px",
  color: "white",
  minWidth: "270px",
  minHeight: "calc(100vh - 24.8vh)",
  padding: "10px 10px 30px 10px",
  display: "flex",
};

export const boxDefaultLogin = {
  shadowColor: "#100f0aef",
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.5,
  shadowRadius: 5,
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  fontFamily: "Arial",
  borderRadius: "15px",
  color: "white",
  minWidth: "270px",
 // minHeight: "calc(100vh - 24.8vh)",
  padding: "10px 10px 30px 10px",
  border: "solid 1px #ffd1055a",
  display: "flex",
  backgroundColor: "#a7000013",
};


export const textArea = {
  flexDirection: "row",
  margin: "20px",
};

export const externalLogin = {
  flexDirection: "column",
  justifyContent: "center",
};

export const StapLabel = styled.label`
   font-size: 16;
   font-weight: bold;
   color: black;
   margin: 10px;
   padding: 8px;
   flex-direction: row;
   justify-content: center;
   text-align: center;
`;


const fadeIn = keyframes`
  0% {
    transform:scale(1);
  }
  100% {
    transform:scale(2);
  }
`
const opacityIn = keyframes`
  0% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
`


export const ButtonUploadVideo = styled.button`
 background-color: transparent;
 border: none;
  &:hover {
     animation:  520ms ${fadeIn} ease-out infinite alternate;
     transition: all 1s;
     &:after {
      opacity: 1;
    }   
  }
`;

export const ButtonLogin = styled.button`
  flex-direction: row;
  color: #000000;
  cursor: pointer;
  font-size: 1.5em;
  font-weight: bold;
  border-radius: 0.45em;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 8px;
  margin-top: 10px;
  padding-bottom: 8px;
  flex: 1;
  margin-left: 10px;
  width: 235px;
  border: 2px solid #57010111;
  background-color: #00000025;
`;

export const InputLoginWeb = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  min-width: 380px;
  color: black;
  background: transparent;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
  ::file-selector-button{
    background-color: #00000025;
    transition: 1s;
  }
  ::file-selector-button:hover{
    background-color: #ff0000;
    
  }
`;


export const InputLoginMobile = styled.input`
  font-size: 26px;
  padding: 10px;
  margin: 10px;
  background: #00000029;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: #00000050;
  }
`;

export const StapOne = styled.div`
   flex-direction: row;
   flex-wrap: wrap;
   align-items: center;
   justify-content: center;
   text-align: center;
   padding: 10;
   opacity: 1;
`;





export const Area = styled.div`
 flex: 1;
 
 height: calc(100vh);
 background-color: transparent;
 color: black;
flex-direction: row;
  @media (max-width: 768px) {
      font-size: 10px;
    }

`;


export const ContentInner = styled.div`
  margin-bottom: 0;
  align-items: "center";
  background-color: transparent;
  flex-direction: column;
  border: none;
 cursor: pointer;
 margin-left: 5em;
 margin-right: 3em;
 margin-top: 25px;
 color: black;
 //margin: 3em;

  /* &:hover {
     animation: 305ms ${opacityIn} ease-out infinite alternate;
     transition: all 305ms;
        
  } */


  /* &:hover {
    animation: 705ms ${opacityIn} ease-out infinite alternate;
     transition: all 705ms;
  } */


  @media (max-width: 768px) {
    order: 2;
    flex-direction: column;
    margin-bottom: 0;
    background-color: "blue";
  }
`;
  
