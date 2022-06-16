import React, { useState } from "react";
import styled, { css } from "styled-components";

const DetailDefault = styled.div``;

const EditBlock = styled.div`
  display: none;
  ${({ edit }) =>
    edit &&
    css`
      display: block;
    `}
`;

const PhonebookListDetail = ({ DetailInfo, onRemove }) => {
  const { name, number } = DetailInfo;
  const [edit, setEdit] = useState(false);

  function openEditBlock() {
    console.log(edit);
    setEdit(true);
  }
  console.log(edit);
  return (
    <div>
      <h2>Detail information</h2>
      <DetailDefault>
        <p>{name}</p>
        <p>{number}</p>
      </DetailDefault>
      <EditBlock edit={edit}>
        <input defaultValue={name} />
        <br />
        <input type="tel" defaultValue={number} />
      </EditBlock>
      <button onClick={openEditBlock}>edit</button>
      <button onClick={() => onRemove(name)}>remove</button>
    </div>
  );
};

export default PhonebookListDetail;
