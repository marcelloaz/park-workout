import * as React from "react"
import ButtonLoginComponent from "../navigate/button-login"
import SideBarComponent from "../sidebar"
import { createGlobalStyle } from "styled-components"
import { pageStyles, Wrapper } from "./style"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.theme === "purple" ? "purple" : "white")};
    color: ${props => (props.theme === "purple" ? "white" : "purple")};
  }`

export default function LayoutNotLoggedComponent(props: any) {
  return (<>
   <GlobalStyle theme="purple" />
      <SideBarComponent/>
      <main style={pageStyles}>
          <Wrapper>  
             <h1>Agende seu treino</h1>
             
          </Wrapper>
      </main>
  </>)
}
