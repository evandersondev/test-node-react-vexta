import React, { useState, useEffect } from "react";
import api from "../../services/api";
import axios from "axios";

import { Container } from "./styles";

const New = () => {
  const [client, setClient] = useState({});
  const [isState, setIsState] = useState(false);
  const [selectState, setSelectState] = useState([]);
  const [selectCounty, setSelectCounty] = useState([]);

  useEffect(() => {
    getState();
  }, []);

  const newClient = async e => {
    e.preventDefault();
    console.log(client);
    await api.post("/clientes", {
      ...client,
      state: client.state.sigla,
      county: JSON.stringify(client.county)
    });
    window.location.href = "/";
  };

  const getState = async () => {
    const { data } = await axios.get(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
    );
    setSelectState(data);
  };

  const getCounty = async id => {
    const { data } = await axios.get(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`
    );
    setSelectCounty(data);
  };

  const stateChange = e => {
    const { id, sigla } = JSON.parse(e.target.value);

    if (sigla === undefined) {
      setIsState(false);
    } else {
      setClient({ ...client, state: { id, sigla } });
      setIsState(true);
      getCounty(id);
    }
  };

  const countyChange = e => {
    const {
      id,
      microrregiao: { nome }
    } = JSON.parse(e.target.value);
    setClient({ ...client, county: id, city: nome });
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

        <select name="state" id="state" onChange={stateChange}>
          <option value="{}">Estado</option>
          {selectState.map(state => {
            return (
              <option key={state.id} value={JSON.stringify(state)}>
                {state.sigla}
              </option>
            );
          })}
        </select>

        {isState ? (
          <select name="county" id="county" onChange={countyChange}>
            <option value="{}">Município</option>
            {selectCounty.map(county => {
              return (
                <option key={county.id} value={JSON.stringify(county)}>
                  {county.nome}
                </option>
              );
            })}
          </select>
        ) : (
          ""
        )}

        {isState ? (
          <input
            type="text"
            name="city"
            placeholder="Cidade"
            value={client.city}
            disabled
          />
        ) : (
          ""
        )}

        <button>Cadastrar</button>
      </form>
    </Container>
  );
};

export default New;
