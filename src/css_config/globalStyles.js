
import { injectGlobal } from "styled-components";
import fonts from "./fonts";

export default injectGlobal`

  @font-face {
    font-family: "Futura";
    font-style: normal;
    font-weight: normal;
    src: local("Futura"), local("Futura"), url(${fonts.futuraStdCondExtBd}) format("ttf"), url(${fonts.futuraStdCondExtBd}) format("otf");
  }
`