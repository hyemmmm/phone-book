import { useRef, useState } from "react";
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
  const [DetailInfo, setdetailInfo] = useState({
    name: "",
    number: "",
  });

  const nextId = useRef(5);

  function renderDetail(id) {
    let result = phonenumber.find((item) => item.id === id);
    setdetailInfo({ name: result.name, number: result.number });
  }

  function onInsert(info) {
    const newInfo = {
      id: nextId.current,
      name: info.name,
      number: info.number,
    };
    setPhonenumber(phonenumber.concat(newInfo));
    nextId.current++;
  }

  function onRemove(name) {
    setPhonenumber(phonenumber.filter((item) => item.name !== name));
    setdetailInfo({
      name: "",
      number: "",
    });
  }

  //소문자로 해도 검색되게 .tolowercase 사용

  return (
    <div className="App">
      <PhonebookTemplate>
        {/* <PhonebookSearch search={search} /> */}
        <Phonebooklist renderDetail={renderDetail} phonenumber={phonenumber} />
        <PhonebookListDetail
          onRemove={onRemove}
          phonenumber={phonenumber}
          DetailInfo={DetailInfo}
        />
        <PhonebookInsert onInsert={onInsert} />
      </PhonebookTemplate>
    </div>
  );
}

export default App;
