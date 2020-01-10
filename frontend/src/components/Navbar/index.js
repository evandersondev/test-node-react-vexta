import React from "react";

import { Container } from "./styles";

export default function Navbar() {
  return (
    <Container>
      <h1>
        <a href="/">Vexta</a>
      </h1>
      <div>
        <a href="/new">Cadastrar novos clientes</a>
      </div>
    </Container>
  );
}
