import { Formik } from "formik";
import { nanoid } from "nanoid";
import userListJson from "./userList.json";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import { useState } from "react";
//
function App() {
  const [usersContact, setUser] = useState(userListJson);
  //
  const [filter, setFilter] = useState("");
  //
  const handelClick = (event) => {
    const value = event.target.value
    console.log(value);
  };
  //

  const filterUsers = usersContact.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  console.log(filterUsers);
  //
  const onDelite = (userId) => {
    setUser((prefUser) => {
      return prefUser.filter((user) => {
        return user.id !== userId;
      });
    });
  };
  //
  return (
    <div>
      <h1>Phonebook</h1>
      <p>{filter}</p>
      <ContactForm />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList userList={usersContact} onDelite={onDelite} />
    </div>
  );
}

export default App;
