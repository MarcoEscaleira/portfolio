import React from "react";
import { GlobalStyles } from "twin.macro";
import Header from "./Header";

const Layout = ({ children }) => (
  <>
    <GlobalStyles />

    <Header />

    <main className="min-h-full flex flex-col bg-blue-100">{children}</main>
  </>
);

export default Layout;
