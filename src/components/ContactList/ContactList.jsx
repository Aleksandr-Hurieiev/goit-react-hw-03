import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.jsx";

//
const ContactList = ({ userList, onDelite }) => {
  return (
    <ul>
      {userList.map((user) => {
        return (
          <Contact
            key={user.id}
            id={user.id}
            name={user.name}
            number={user.number}
            onDelite={onDelite}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
