import React, { useState } from "react";
import PhonebooklistItem from "./PhonebooklistItem";

const Phonebooklist = ({ renderDetail, phonenumber, search }) => {
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
          renderDetail={renderDetail}
        />
      ))}
    </div>
  );
};

export default Phonebooklist;
