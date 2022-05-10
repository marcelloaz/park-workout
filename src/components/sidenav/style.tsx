import styled, { keyframes, ThemeProvider } from "styled-components";

export const Wrapper = styled.div`
 
  opacity: 1;
  display: flex;
  width: 220px;
 // background-image: linear-gradient(to top, #0000005e , #0010f336);
  justify-content: center;
  min-height: calc(100vh - 50vh);
`;

export const NavButton = styled.button`
  color: #000000;
  opacity: 1;
  position: "absolute";
  margin-top: 180px;
  height: 120px;
  place-content: "baseline";
  width: 20px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding-bottom: 8px;
  border: 2px solid #36323211;
  background-color: #0000006f;
`;

export const Container = styled.div`
 opacity: 1;
  display:"flex";
  margin: 0px;
  width: 210px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 10;

  
  @media (max-width: 768px) {
      opacity: 1;
    
      font-size: 8;
      margin-right: 20px;
    }

  color: "#fff";
  ul {
    margin-block-end: 10em;
    opacity: 1;
    
    list-style: none;
    padding: 0px 0px;
   //background-image: linear-gradient(to top, #00000001 , #00000042,  #00000001);
    li {
      cursor: pointer;
      text-align: left;
      opacity: 1;
      letter-spacing:0.4em;
      line-height:1;
      padding:15px 15px;
      border-top: 1px solid #0000003e;
      :first-of-type {
        border-top: none;
      }
    }
  }
`;
