import { createGlobalStyle } from "styled-components";
import { Breakpoints } from "../../../constants";

export const GlobalStyle = createGlobalStyle`
	body {
    margin:0;
    background-color: black;
    background-size: cover;
    background-attachment: fixed;
    background-position: 50%;
    background-repeat: repeat;
    width: 100%;
    height: 100%;
    background-image: url("https://k.top4top.io/p_2161kaeba1.png");
	}
  * {
		box-sizing: border-box;
	}

  .ant-form-item-label > label {
    color: #fff;
    margin-top: 10px;
    font-size: 1.5rem;
    margin-left: 1.6rem;
  }

  // navbar container
  .navbar-container {
    max-width: 1300px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

// main container
.row-container {
  padding-right: 15px;
  padding-left: 15px;
  max-width: 114rem;
  margin: 8rem auto;
}
//1
@media (min-width: ${Breakpoints.xl}) and (max-width: ${Breakpoints.xxl}) {
  .row-container {
    max-width: ${Breakpoints.xl};
  }
}
//2
@media (min-width: ${Breakpoints.lg}) and (max-width: ${Breakpoints.xl}) {
  .row-container {
    max-width: ${Breakpoints.xl};
  }
}
//3
@media (min-width: ${Breakpoints.md}) and (max-width: ${Breakpoints.lg}) {
  .row-container {
    max-width: ${Breakpoints.lg};
  }
}
//4
@media (max-width: ${Breakpoints.md}) {
  .row-container {
    max-width: ${Breakpoints.sm};
  }
}

`;
