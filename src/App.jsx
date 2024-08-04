import { Formik } from "formik";
import { nanoid } from "nanoid";
import userListJson from "./userList.json";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  // получение данный с localStorage + проверка
  const [usersContact, setUser] = useState(() => {
    const localUsers = localStorage.getItem("contsctsUsers");
    if (localUsers) {
      return JSON.parse(localUsers);
    }
    return usersContact;
  });
  const [filter, setFilter] = useState("");
  // сохранение в localStorage
  useEffect(() => {
    localStorage.setItem("contsctsUsers", JSON.stringify(usersContact));
  }, [usersContact]);

  // добавление обьекта ..
  const onNewUser = (newFormUser) => {
    const finalUser = {
      ...newFormUser,
      id: nanoid(),
    };
    console.log(finalUser);
    setUser([finalUser, ...usersContact]);
  };
  // удаление обьекта ..
  const onDelite = (userId) => {
    setUser((prefUser) => {
      return prefUser.filter((user) => {
        return user.id !== userId;
      });
    });
  };
  // фильтрация обьекта ..
  const filterUsers = usersContact.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );
  //
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onNewUser={onNewUser} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList userList={filterUsers} onDelite={onDelite} />
    </div>
  );
}

export default App;
