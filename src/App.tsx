import React, { Fragment } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <Fragment>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </Fragment>
  );
}
