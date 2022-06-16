import React, { useState } from "react";

const PhonebookInsert = ({ onInsert }) => {
  const [input, setInput] = useState({
    name: "",
    number: "",
  });

  function onChange(e) {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  }

  function onSubmit(e) {
    onInsert(input);
    setInput({ name: "", number: "" });
    e.preventDefault();
  }

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
        value={input.number}
        name="number"
        onChange={onChange}
      />
      <br />
      <button type="submit">Create new user</button>
    </form>
  );
};

export default PhonebookInsert;
