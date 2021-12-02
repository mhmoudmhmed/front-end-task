import React from "react";
import "antd/dist/antd.css";
import { GlobalStyle } from "./global.styles";
import Header from "../header";

const Page = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
    </>
  );
};

export default Page;
