import React, { useContext, useMemo } from "react";

import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { TransactionContext } from "../../contexts/TransactionContext";

export function Summarry() {
  const { transactions } = useContext(TransactionContext);

  const { deposits, total, withdraws } = useMemo(() => {
    return transactions.reduce(
      (accumulator, transaction) => {
        if (transaction.type === "deposit") {
          accumulator.deposits += transaction.value;
          accumulator.total += transaction.value;
        } else {
          accumulator.withdraws += transaction.value;
          accumulator.total -= transaction.value;
        }

        return accumulator;
      },
      { deposits: 0, withdraws: 0, total: 0 }
    );
  }, [transactions]);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>

        <strong>
          {new Intl.NumberFormat("pt-br", {
            currency: "BRL",
            style: "currency",
          }).format(deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="Saidas" />
        </header>

        <strong>
          {new Intl.NumberFormat("pt-br", {
            currency: "BRL",
            style: "currency",
          }).format(withdraws)}
        </strong>
      </div>
      <div className="hightlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>

        <strong>
          {new Intl.NumberFormat("pt-br", {
            currency: "BRL",
            style: "currency",
          }).format(total)}
        </strong>
      </div>
    </Container>
  );
}
