import React, { Fragment, useRef } from "react";

import LogoImg from "../../assets/logo.svg";
import ModalNewTransaction, {
  ModalTransactionHandles,
} from "../ModalNewTransaction";
import { Container, Content } from "./styles";

export function Header() {
  const modalTransactionRef = useRef<ModalTransactionHandles>(null);

  function handleOpenTransactionModal() {
    if (!modalTransactionRef.current) return null;

    modalTransactionRef.current.openModal();
  }

  return (
    <Fragment>
      <Container>
        <Content>
          <img src={LogoImg} alt="my money logo" />

          <button type="button" onClick={handleOpenTransactionModal}>
            Nova Transação
          </button>
        </Content>
      </Container>
      <ModalNewTransaction ref={modalTransactionRef} />
    </Fragment>
  );
}
