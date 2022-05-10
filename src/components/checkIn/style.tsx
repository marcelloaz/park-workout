import styled, { keyframes, ThemeProvider } from "styled-components";

export const Wrapper = styled.div`
 
 
  width: 350px;
  justify-content: flex-end;
  //min-height: calc(100vh - 50vh);
`;

export const NavButton = styled.button`
  color: #000000;
  opacity: 1;
  position: "absolute";
  //margin-top: 180px;
  height: 120px;  
  place-content: "baseline";
  width: 350px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding-bottom: 8px;
  border: 2px solid #36323211;
  background-color: #0000006f;

`;

type PropTypeBg = {
  active: boolean;
};

const jitter = keyframes`
  0% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(0.9);
  }
`;

export const Container = styled.div`
  opacity: ${(props: PropTypeBg) => (props.active ? 1 : 0)};
  display:"flex";
  margin: 0px;
  width: ${(props: PropTypeBg) => (props.active ? '350px' : '0px')};
  /* animation: ${jitter} 350ms ease-out infinite alternate;
  transform-origin: top;
  transition: all 5s; */
  font-family: Arial, Helvetica, sans-serif;
  font-size: 8;
  align-items: flex-start;
  @media (max-width: 768px) {
     
       margin-left: 10px;
      font-size: 7;
      margin-right: 10px;
    }

  color: "#fff";
  ul {
    margin-block-end: 1em;
    
    align-items: flex-start;
    list-style: none;
    padding: 0px 0px;
   //background-image: linear-gradient(to top, #00000001 , #00000042,  #00000001);
    li {
      text-align: end;
      opacity: 1;opacity: ${(props: PropTypeBg) => (props.active ? 1 : 0)}; ;
  display:"flex";
  margin: 0px;
  width: ${(props: PropTypeBg) => (props.active ? '350px' : '0px')};
  /* animation: ${jitter} 350ms ease-out infinite alternate;
  transform-origin: top;
  transition: all 5s; */
  font-family: Arial, Helvetica, sans-serif;
  font-size: 8;
  align-items: flex-start;
  @media (max-width: 768px) {
      opacity: 1;
       margin-left: 10px;
      font-size: 7;
      margin-right: 10px;
    }

  color: "#fff";
  ul {
    margin-block-end: 1em;
    opacity: 1;
    align-items: flex-start;
    list-style: none;
    padding: 0px 0px;
   //background-image: linear-gradient(to top, #00000001 , #00000042,  #00000001);
    li {
      text-align: end;
      letter-spacing:0.4em;
      line-height:0;
      align-items: flex-start;
      padding:5px 5px 15px 5px;
      border-top: 1px solid #0000003e;
      :first-of-type {
        border-top: none;
      }
    }
  }<PropTypeBg>
      letter-spacing:0.4em;
      line-height:0;
      align-items: flex-start;
      padding:5px 5px 15px 5px;
      border-top: 1px solid #0000003e;
      :first-of-type {
        border-top: none;
      }
    }
  }<PropTypeBg>
`;


export const ButtonCheckIn = styled.button`
  
  color: #000000;
  font-size: 1.5em;
  border-radius: 0em;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 8px;
  padding-bottom: 8px;
  letter-spacing: 0.3em;
  margin-left: 20px;
  border: 2px solid #57010111;
  background-color: #00000025;
`;

export const ProfilePhoto = styled.div`
  opacity: 1;
  display: flex;
  width: 150px;
  height: 120px;
`;