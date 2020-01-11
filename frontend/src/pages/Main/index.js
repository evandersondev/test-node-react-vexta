import React, { useState, useEffect } from "react";
import api from "../../services/api";

import List from "../../components/List";
import ListItem from "../../components/ListItem";
import Loading from "../../components/Loading";

import { Container } from "./styles";

const Main = () => {
  const [clients, setClients] = useState([]);
  const [type, setType] = useState();
  const [filter, setFilter] = useState({ name: "", city: "", state: "" });
  const [loading, setLoading] = useState(false);

  const loadClients = async () => {
    setLoading(true);
    const { data } = await api.get("/clientes", {
      params: filter
    });

    setClients(data);
    setLoading(false);
  };

  useEffect(() => {
    loadClients();
  }, [filter]);

  const selectChange = e => {
    setType(e.target.value);
  };

  const inputChange = e => {
    const name = e.target.value;
    if (type === "name") setFilter({ name: name });
    if (type === "city") setFilter({ city: name });
    if (type === "state") setFilter({ state: name });
  };

  const effectBlur = () => {
    return { filter: "blur(2px)" };
  };

  if (clients.length > 0) {
    return (
      <Container>
        <List
          effectBlur={loading ? effectBlur() : {}}
          inputChange={inputChange}
          selectChange={selectChange}
        >
          {loading ? <Loading /> : ""}
          {clients.map(client => (
            <ListItem
              key={client.id}
              name={client.name}
              city={client.city}
              state={client.state}
              id={client.id}
            />
          ))}
        </List>
      </Container>
    );
  } else {
    return (
      <Container>
        <List inputChange={inputChange} selectChange={selectChange}>
          {loading ? "" : <h1>Não há clientes cadastrados</h1>}
        </List>
      </Container>
    );
  }
};

export default Main;
