import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Detail = styled.div`
  cursor: pointer;
`;

const PhonebooklistItem = ({ item, findDetail }) => {
  return (
    <>
      <Detail onClick={() => findDetail(item.id)}>
        <Link to={`/search/${item.id}`}>{item.name}</Link>
      </Detail>
    </>
  );
};

export default PhonebooklistItem;
