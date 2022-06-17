import React, { useState } from "react";
import { create } from "../contact";

const PhonebookInsert = ({ onInsert, createUser }) => {
  const [input, setInput] = useState({
    name: "",
    phoneNum: "",
  });

  function onChange(e) {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  }

  function onSubmit(e) {
    createUser(input);
    e.preventDefault();
    setInput({
      name: "",
      phoneNum: "",
    });
  }

  console.log();
  return (
    <form onSubmit={onSubmit}>
      <h2>Create new user</h2>
      <input
        placeholder="name"
        value={input.name}
        name="name"
        onChange={onChange}
      />
      <input
        type="tel"
        placeholder="phonenumber"
        value={input.phoneNum}
        name="phoneNum"
        onChange={onChange}
      />
      <br />
      <button type="submit">Create new user</button>
    </form>
  );
};

export default PhonebookInsert;
