import React, { useState, useEffect } from "react";
import api from "../../services/api";

import List from "../../components/List";
import ListItem from "../../components/ListItem";

const Home = () => {
  const [clients, setClients] = useState([]);
  const [type, setType] = useState();
  const [filter, setFilter] = useState({ name: "", city: "", state: "" });

  const getClients = async () => {
    const { data } = await api.get("/clientes", {
      params: filter
    });

    setClients(data);
  };

  useEffect(() => {
    getClients();
  }, [filter]);

  const typeFilter = async e => {
    await setType(e.target.value);
  };

  const inputChange = async e => {
    const name = e.target.value;
    if (type === "name") setFilter({ name: name });
    if (type === "city") setFilter({ city: name });
    if (type === "state") setFilter({ state: name });
  };

  if (clients.length <= 0) {
    return (
      <div>
        <List inputChange={inputChange} typeFilter={typeFilter}>
          <h1>Nao ha clientes cadastrados</h1>
        </List>
      </div>
    );
  } else {
    return (
      <div>
        <List inputChange={inputChange} typeFilter={typeFilter}>
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
      </div>
    );
  }
};

export default Home;
