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
  flexDirection: "column",
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


export const ButtonLogin = styled.button`
  color: #ffffff;
  font-size: 0.8em;
  border-radius: 0.45em;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 8px;
  //width: 175px;
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
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;


export const InputLoginMobile = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;