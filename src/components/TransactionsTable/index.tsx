import React from "react";

import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Freela</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>16/05/2022</td>
          </tr>
          <tr>
            <td>Conta de Agua</td>
            <td className="withdraw">- R$ 69,85</td>
            <td>Contas</td>
            <td>13/05/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
