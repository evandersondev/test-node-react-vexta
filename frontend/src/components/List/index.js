import React from "react";

import { Container, Header, NavItem } from "./styles";

const List = props => {
  return (
    <Container style={props.effectBlur}>
      <Header>
        <h2>Lista de clientes</h2>
        <div className="filter">
          <input
            placeholder="Search"
            type="text"
            onChange={props.inputChange}
          />
          <select onChange={props.selectChange}>
            <option value="">Filtrar</option>
            <option value="name">Nome</option>
            <option value="city">Cidade</option>
            <option value="state">Estado</option>
          </select>
        </div>
      </Header>
      <NavItem>
        <ul>
          <li>Name</li>
          <li>Cidade</li>
          <li>Estado</li>
          <li></li>
        </ul>
      </NavItem>
      {props.children}
    </Container>
  );
};

export default List;
