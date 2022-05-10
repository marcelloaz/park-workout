import { isMobile } from "react-device-detect";
import styled, { keyframes, ThemeProvider } from "styled-components";
import imgHome from "./../../images/outdor.jpg";


  export const BoxHome = styled.div`
  margin-bottom: 0;
  align-items: "flex-end";
  border: none;
  opacity: 1;
  width: 100vw;
  height: calc(100vh - 25vh);
  background-color: #00000015;
  border: none;
  z-index: 1;
  position: absolute;
  `;






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

const fadeIn = keyframes`
  0% {
    transform:scale(1);
  }
  100% {
    transform:scale(1.3);
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



export const Area = styled.div`
 flex: 1;
 background-color: #00000012;
 color: black;
flex-direction: row;
  @media (max-width: 768px) {
      font-size: 10px;
    }

`;
export const ContentInner = styled.button`
  margin-bottom: 0;
  align-items: "center";
  background-color: transparent;
  border: none;
 cursor: pointer;
 margin-left: 5em;
 margin-right: 3em;
 //margin: 3em;

  &:hover {
     animation: 305ms ${fadeIn} ease-out infinite alternate;
     transition: all 305ms;
        
  }


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
  
