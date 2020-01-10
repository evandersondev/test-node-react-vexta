import React, { useState } from "react";
import api from "../../services/api";

import { Container } from "./styles";

const New = () => {
  const [client, setClient] = useState({});

  const newClient = async e => {
    e.preventDefault();

    await api.post("/clientes", {
      ...client
    });
    window.location.href = "/";
  };

  return (
    <Container>
      <form onSubmit={newClient} method="post">
        <h4>Cadastrar novo cliente</h4>
        <input
          onChange={e => setClient({ ...client, name: e.target.value })}
          type="text"
          name="name"
          placeholder="Nome"
        />

        <input
          onChange={e => setClient({ ...client, city: e.target.value })}
          type="text"
          name="city"
          placeholder="Cidade"
        />

        <input
          onChange={e => setClient({ ...client, state: e.target.value })}
          type="text"
          name="state"
          placeholder="Estado"
        />

        <button>Cadastrar</button>
      </form>
    </Container>
  );
};

export default New;
