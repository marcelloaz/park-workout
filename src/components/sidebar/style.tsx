import { isMobile } from "react-device-detect";
import styled, { keyframes, ThemeProvider } from "styled-components";



const jitter = keyframes`
  0% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(0.9);
  }
`;
export const boxLogo = {
  width: "80px",
  alignItems: "center",
  justifyContent: "flex-start",
  fontFamily: "Arial",
  color: "white",
};

export const boxCenter = {
  width: "81%",
  alignItems: "center",
  justifyContent: "center",
};

export const boxColor = {
  minWidth: "120px",
  alignItems: "center",
  justifyContent: "flex-end",
 //flexDirection: "row"
};


export const boxLogin = {
    width: "130px",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row"
  };

export const Wrapper = styled.section`
  padding: 0.0em;
  height: 40px;
  display: flex;
  opacity: 0.5;
  display: flex; 
  width:100%;
  flex-direction: row;
  flex: 1;
  background-color: #00000050;
`;

export const Button = styled.div`
  font-weight: bold;
  font-size: 1.1em;
  padding-left: 10px;
  padding-right: 25px;
  padding-top: 0x;
  background-color: "#ececec2b";
  padding-bottom: 8px;
  border-radius: 10em;
  justify-content: flex-start;
`;

export const SocialButtonAzure = styled.button`
  color: #efefef;
  justify-content: flex-end;
  font-size: 1em;
  border-radius: 50em;
  margin:  0.25em;
  background-color: rgb(79, 79, 194);
  padding: 0.75em;
  border: 1px solid "#2b0479";
  
`;


const fadeIn = keyframes`
  0% {
    transform:rotate(190deg);
  }
  100% {
    transform:rotate(0deg);
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



export const SocialButtonRed = styled.button`
  color: #efefef;
  font-size: 1em;
  border-radius: 50em;
  margin: 0.25em;
  background-color: rgb(194, 79, 79);
  padding: 0.75em;
  border: 1px solid "#790404";
`;

export const SocialButtonOrange = styled.button`
  color: #efefef;
  font-size: 1em;
  border-radius: 50em;
  margin: 0.25em;
  background-color: rgb(231, 168, 96);
  padding: 0.75em;
  border: 1px solid "#e03602";
`;


export const SocialButtonWhite = styled.button`
  color: #efefef;
  font-size: 1em;
  border-radius: 50em;
  margin: 0.25em;
  background-color: rgba(22, 21, 21, 0.63);
  padding: 0.75em;
  border: 1px solid "#cecccc";
`;


// .css-square {
//   width: 100px;
//   height: 100px;
//   background-color: #111;
//   -webkit-transition: -webkit-transform .8s ease-in-out;
//   -ms-transition: -ms-transform .8s ease-in-out;
//   transition: transform .8s ease-in-out;  
// }
// .css-square:hover {
//   transform:rotate(45deg);
//   -ms-transform:rotate(45deg);
//   -webkit-transform:rotate(45deg);
// }

export const MenuExpandButton = styled.button`
  color: #efefef;
  font-size: 1em;
  cursor: pointer;
  border-radius: 50em;
  margin: 0.25em;
  background-color: rgb(0, 0, 0);
  padding: 7px 5px 2px 5px;
  border: 1px solid "#790404";


  
  &:hover {
     animation:  250ms ${fadeIn} ease-out alternate;
     transition: all 1s;
     &:after {
      opacity: 0;
    }   
  }



`;

export const MenuOpen = styled.div`
  transform-origin: bottom;
  animation: ${jitter} 2ms ease-out alternate;
  transition: all 0.1s;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  opacity: ${(props: PropTypeBg) => (props.active ? 1 : 0)};
  height: ${(props: PropTypeBg) => (props.active ? isMobile ? 'none' : '8vh' :  '0vh' )};
  background-color: #00000049;
`;

export const ButtonHome = styled.div`
  align-items: center;
  opacity: 1;
  flex-direction: row;
  transform-origin: bottom;
  animation: ${jitter} 2ms ease-out alternate;
  transition: all 0.1s;
  height: ${(props: PropTypeBg) => (props.active ?  '8vh' :  '0vh' )};
  border-bottom: 1px solid #ffffff14;
  min-height: ${(props: PropTypeBg) => (props.active ?  '8vh' :  '0vh' )};
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: x-large;
  font-weight: bold;
  background-color: #00000015;

  &:hover {
     animation:  250ms ${opacityIn} ease-out infinite alternate;
     transition: all 3s;
     &:after {
      opacity: 0;
    }   
  }

  
`;

type PropTypeBg = {
  active: boolean;
};  


export const ContentInner = styled.div`
  width: ${(props: PropTypeBg) => (props.active ?  '100%' : '250px' )}; ;
  margin-left: 1px;
  margin-right: 1px;
  margin-bottom: 0;
`;