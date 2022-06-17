import React, { useState } from "react";
import { Link } from "react-router-dom";
import PhonebooklistItem from "./PhonebooklistItem";

const Phonebooklist = ({ phonenumber, findDetail }) => {
  const [searchinput, setSearchinput] = useState("");

  function onChange(e) {
    setSearchinput(e.target.value);
  }

  const lowerinput = searchinput.toLowerCase();

  const filtered = phonenumber.filter((item) => {
    const lowerName = item.name.toLowerCase();
    return lowerName.includes(lowerinput);
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={onChange}
        value={searchinput}
      />

      {filtered.map((item) => (
        <PhonebooklistItem
          key={item.id}
          item={item}
          findDetail={findDetail}
        ></PhonebooklistItem>
      ))}
    </div>
  );
};

export default Phonebooklist;
