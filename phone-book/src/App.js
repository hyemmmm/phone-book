import { useCallback, useEffect, useRef, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import PhonebookInsert from "./components/PhonebookInsert";
import Phonebooklist from "./components/Phonebooklist";
import PhonebookListDetail from "./components/PhonebookListDetail";
import PhonebookTemplate from "./components/PhonebookTemplate";

function App() {
  const [phonenumber, setPhonenumber] = useState([
    {
      id: 1,
      name: "David",
      number: "010-2222-1030",
    },
    {
      id: 2,
      name: "Albert",
      number: "010-2222-1031",
    },
    {
      id: 3,
      name: "John",
      number: "010-2222-1032",
    },
    {
      id: 4,
      name: "Wade",
      number: "010-2222-1033",
    },
  ]);

  const nextId = useRef(5);

  function onInsert(info) {
    const newInfo = {
      id: nextId.current,
      name: info.name,
      number: info.number,
    };
    setPhonenumber(phonenumber.concat(newInfo));
    nextId.current++;
  }

  function onRemove(id) {
    setPhonenumber(phonenumber.filter((item) => item.id !== id));
  }

  function editedInfoInsert(editedInfo) {
    setPhonenumber(
      phonenumber.map((item) =>
        item.id === parseInt(editedInfo.id)
          ? { ...item, name: editedInfo.name, number: editedInfo.number }
          : item
      )
    );
  }

  const findDetail = (id) => phonenumber.find((item) => item.id === id);

  return (
    <div className="App">
      <BrowserRouter>
        <PhonebookTemplate>
          <Routes>
            <Route
              path="/search/*"
              element={
                <Phonebooklist
                  phonenumber={phonenumber}
                  findDetail={findDetail}
                />
              }
            />
            <Route
              path="/search/:userId"
              element={
                <PhonebookListDetail
                  onRemove={onRemove}
                  phonenumber={phonenumber}
                  editedInfoInsert={editedInfoInsert}
                  findDetail={findDetail}
                />
              }
            />
          </Routes>
          <PhonebookInsert onInsert={onInsert} />
        </PhonebookTemplate>
      </BrowserRouter>
    </div>
  );
}

export default App;
