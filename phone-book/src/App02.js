import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PhonebookInsert from "./components/PhonebookInsert";
import Phonebooklist from "./components/Phonebooklist";
import PhonebookListDetail from "./components/PhonebookListDetail";
import PhonebookTemplate from "./components/PhonebookTemplate";
import { create, remove, update } from "./contact";

const App02 = () => {
  const { userList } = useSelector((state) => state.contact);

  const dispatch = useDispatch();

  const createUser = (options) => dispatch(create(options));
  const removeUser = (id) => dispatch(remove(id));
  const updateUSer = (id, options) => dispatch(update(id, options));
  const findDetail = (id) => userList.filter((user) => user.id === id);

  console.log(userList);

  return (
    <div>
      <PhonebookTemplate>
        <Phonebooklist userList={userList} />
        {/* <PhonebookListDetail /> */}
        <PhonebookInsert createUser={createUser} />
      </PhonebookTemplate>
    </div>
  );
};

export default App02;
