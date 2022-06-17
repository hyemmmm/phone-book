import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

const EditBtn = styled.button`
  ${({ edit }) =>
    edit &&
    css`
      display: none;
    `}
`;

const SaveBtn = styled.button`
  display: none;
  ${({ edit }) =>
    edit &&
    css`
      display: inline;
    `}
`;

const PhonebookListDetail = ({ onRemove, editedInfoInsert, findDetail }) => {
  const [edit, setEdit] = useState(false);
  const { userId } = useParams();
  const user = findDetail(parseInt(userId));
  const [editedInfo, setEditedInfo] = useState(user);

  const navigate = useNavigate();

  function openEditBlock(e) {
    setEdit(true);
  }

  function onChange(e) {
    const { id, name, value } = e.target;
    setEditedInfo({
      ...editedInfo,
      id: user.id,
      [name]: value,
    });
  }

  function editedInfoSubmit() {
    editedInfoInsert(editedInfo);
    setEditedInfo("");
  }

  return (
    <div>
      <h2>Detail information</h2>
      <DetailDefault>
        <p>{user.name}</p>
        <p>{user.number}</p>
      </DetailDefault>
      <EditBlock edit={edit}>
        <input
          name="name"
          id={user.id}
          onChange={onChange}
          value={editedInfo.name}
        />
        <br />
        <input
          type="tel"
          name="number"
          id={user.id}
          onChange={onChange}
          value={editedInfo.number}
        />
      </EditBlock>
      <EditBtn id="editBtn" onClick={openEditBlock} edit={edit}>
        edit
      </EditBtn>
      <SaveBtn edit={edit} onClick={() => editedInfoSubmit()}>
        save
      </SaveBtn>
      <button
        onClick={() => {
          onRemove(user.id);
          navigate("/search");
        }}
      >
        remove
      </button>
      <br />
      <button onClick={() => navigate("/search")}>돌아가기</button>
    </div>
  );
};

export default PhonebookListDetail;
