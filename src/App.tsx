import React from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionProvider } from "./contexts/TransactionContext";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <TransactionProvider>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </TransactionProvider>
  );
}
