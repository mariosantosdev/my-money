import React from "react";

import { Summarry } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Summarry />
      <TransactionsTable />
    </Container>
  );
}
