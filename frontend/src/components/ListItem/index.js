import React from "react";
import api from "../../services/api";

import { Item } from "./styles";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const ListItem = ({ id, name, city, state }) => {
  const url = `/info/${id}`;

  const deleteClient = async e => {
    e.preventDefault();
    await api.delete(`/clientes/${id}`);
    window.location.reload();
  };

  return (
    <Item>
      <ul>
        <li>{name}</li>
        <li>{city}</li>
        <li>{state}</li>
        <li>
          <a href={url}>
            <MdEdit />
          </a>
          <button onClick={deleteClient}>
            <MdDeleteForever />
          </button>
        </li>
      </ul>
    </Item>
  );
};

export default ListItem;
