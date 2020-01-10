import React, { useEffect, useState } from "react";
import api from "../../services/api";

import { Container } from "./styles";

const Dates = props => {
  const id = props.match.params.id;
  const [client, setClient] = useState({});

  const loadClient = async () => {
    const { data } = await api.get(`/clientes/${id}`);

    setClient(data);
  };

  const updateClient = async e => {
    e.preventDefault();

    await api.put(`/clientes/${client.id}`, {
      ...client
    });
    window.location.href = "/";
  };

  useEffect(() => {
    loadClient();
  }, []);

  return (
    <Container>
      <form onSubmit={updateClient} method="post">
        <h4>
          Informações do cliente <br /> <strong>{client.name}</strong>
        </h4>

        <input
          onChange={e => setClient({ ...client, name: e.target.value })}
          type="text"
          name="name"
          placeholder="Nome"
          value={client.name}
        />

        <input
          onChange={e => setClient({ ...client, city: e.target.value })}
          type="text"
          name="city"
          placeholder="Cidade"
          value={client.city}
        />

        <input
          onChange={e => setClient({ ...client, state: e.target.value })}
          type="text"
          name="state"
          placeholder="Estado"
          value={client.state}
        />

        <div className="btn-group">
          <a href="/">Voltar</a>
          <button type="submit">Atualizar</button>
        </div>
      </form>
    </Container>
  );
};

export default Dates;
