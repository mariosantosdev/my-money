import React, { Fragment } from "react";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <Fragment>
      <Header />
      <GlobalStyle />
    </Fragment>
  );
}
