import React from "react";
import api from "../../services/api";

import { Item } from "./styles";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const ListItem = props => {
  const url = `/dates/${props.id}`;

  const deleteClient = async e => {
    e.preventDefault();
    await api.delete(`/clientes/${props.id}`);
    window.location.reload();
  };

  return (
    <Item>
      <ul>
        <li>{props.name}</li>
        <li>{props.city}</li>
        <li>{props.state}</li>
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
