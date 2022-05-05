import { isMobile } from "react-device-detect";
import styled, { keyframes, ThemeProvider } from "styled-components";
import imgHome from "./../../images/outdor.jpg";

export const boxHome = {
  backgroundPosition: "center top",
  backgroundColor: "#1b1b1b14",
  opacity: 1,
  justifyContent: "space-between",
  fontFamily: "Arial",
  color: "white",
  height: "30px",
  display: "flex",
  fontSize: 14,
  paddingTop: "12px",
  paddingBottom: "22px",
  //width: "80%",
  letterSpacing: "0.4em",
  textTransform: "uppercase",
  paddingLeft: "20px",
};


export const boxHomeContent = {
  paddingTop: "20px",
  backgroundPosition: "center top",
  background: "linear-gradient(#57003d1a,transparent)",
  opacity: 1,
  //flexWrap: "wrap-reverse",
  alignItems: "flex-start",
  justifyContent: "space-between",
  alignContent: "center",
  fontFamily: "Arial",
  color: "white",
  minHeight: "calc(100vh - 18.8vh)",
  display: "flex",
  fontSize: 14,
  minWidth: "calc(100vw - 720px)",
  width: "calc(100vw - 620px)",
  //width: "100%",
  letterSpacing: "0.4em",
  textTransform: "uppercase",
  paddingLeft: "20px",
  paddingRight: "20px"
};


export const ButtonPlus = styled.button`
  color: #efefef;
  align-items: flex-start;
  justify-content: flex-end;
  font-size: 2em;
  border-radius: 40em;
  background-color: rgba(0, 0, 0, 0.192);
  padding-bottom: 1.1em;
 // padding-left: 0.3em;
  max-width: 50px;
 // padding-right: 0.3em;
  padding-top: 0.1em;
  margin-right: 40px;
  border: 0.1in solid "#2b0479";
  
`;



export const Container = styled.div`
  justify-content: flex-start;
  background-color: #00000007;
  border: 1px solid #00000003;
  opacity: 1;
  margin-bottom: 25px;
  flex-wrap: wrap;
  width:  228px;
  display: flex;
  margin-right: 10px;
  flex-direction: "row";
  align-items: stretch;
  padding: 10px;
  border-radius: 5px;
  font-size: 10px;

  @media (max-width: 768px) {
      font-size: 10px;
      width:  298px;
      margin-left: 10px;
    }

    ul {
    margin-block-end: 3em;
    opacity: 1;
    
    list-style: none;
    padding: 0px 0px;
   //background-image: linear-gradient(to top, #00000001 , #00000042,  #00000001);
    li {
      text-align: left;
      opacity: 1;
      letter-spacing:0.4em;
      line-height:1;
      padding:5px 5px;
      border-top: 1px solid #00000020;
      :first-of-type {
        border-top: none;
      }
    }
  }

`;

// export const ButtonCheckIn = styled.button`
//   font-weight: bold;
//   font-size: 1.1em;
//   padding-left: 10px;
//   padding-right: 25px;
//   padding-top: 0x;
//   background-color: "red";
//  // background-color: "#00000011";
//   padding-bottom: 8px;
//   //border-radius: 10em;
//   justify-content: flex-start;
// `;


export const ButtonCheckIn = styled.button`
  color: #efefef;
  cursor: pointer;
  justify-content: flex-end;
  font-size: 0.6em;
  width: 100%;
  margin-left: 10px;
  min-height: 30px;
  align-items: stretch;
  //border-radius: 50em;
  //margin:  0.85em;
  background-color: rgba(0, 0, 0, 0.103);
  padding: 0.5em;
  border: "none";
  /* width: 50px;
  height: 50px; */
 // outline: none;
    border-color: #30303014;


  &:focus {
   // outline: none;
    border-color: #00000030;
    background-color: rgba(0, 0, 0, 0.377);
  }
  
`;