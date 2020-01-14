import React, { useEffect, useState } from "react";
import api from "../../services/api";
import axios from "axios";

import { Container } from "./styles";

const Info = props => {
  const id = props.match.params.id;
  const [client, setClient] = useState({});
  const [isState, setIsState] = useState(false);
  const [isCounty, setIsCounty] = useState(true);
  const [selectState, setSelectState] = useState([]);
  const [selectCounty, setSelectCounty] = useState([]);

  const loadClient = async () => {
    const { data } = await api.get(`/clientes/${id}`);
    const {
      data: { nome }
    } = await axios.get(
      `https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${data.county}`
    );

    setClient({ ...data, county: nome });
  };

  const updateClient = async e => {
    e.preventDefault();

    await api.put(`/clientes/${client.id}`, {
      ...client,
      state: client.state.sigla
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
    setClient({ ...client, state: { id, sigla } });
    getCounty(id);
    setIsState(true);
    setIsCounty(false);
  };

  const countyChange = e => {
    const {
      id,
      microrregiao: { nome }
    } = JSON.parse(e.target.value);
    setClient({ ...client, county: id, city: nome });
    setIsCounty(true);
  };

  useEffect(() => {
    loadClient();
    getState();
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

        <select name="state" id="state" onChange={stateChange}>
          {selectState.map(state => {
            return (
              <option
                selected={client.state === state.sigla}
                key={state.id}
                value={JSON.stringify(state)}
              >
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
          <input
            onChange={e => setClient({ ...client, county: e.target.value })}
            type="text"
            name="county"
            placeholder="Município"
            disabled
            value={client.county}
          />
        )}

        {isCounty ? (
          <input
            type="text"
            name="city"
            placeholder="Cidade"
            disabled
            value={client.city}
          />
        ) : (
          ""
        )}

        <div className="btn-group">
          <a href="/">Voltar</a>
          <button type="submit">Atualizar</button>
        </div>
      </form>
    </Container>
  );
};

export default Info;
