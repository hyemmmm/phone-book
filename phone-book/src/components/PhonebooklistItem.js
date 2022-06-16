import React from "react";
import styled from "styled-components";

const Detail = styled.div`
  cursor: pointer;
`;

const PhonebooklistItem = ({ renderDetail, item }) => {
  return (
    <>
      <Detail onClick={() => renderDetail(item.id)}>{item.name}</Detail>
    </>
  );
};

export default PhonebooklistItem;
