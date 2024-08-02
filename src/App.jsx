import { Formik } from "formik";
import userList from "./userList.json";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import { useState } from "react";
function App() {
  const [filter, setFilter] = useState("");

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm value={filter} filterUser={setFilter} />
      <SearchBox />
      <ContactList userList={userList} />
    </div>
  );
}

export default App;
