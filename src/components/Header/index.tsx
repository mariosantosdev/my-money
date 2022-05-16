import React from "react";

import LogoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="my money logo" />

        <button type="button">Nova Transação</button>
      </Content>
    </Container>
  );
}
