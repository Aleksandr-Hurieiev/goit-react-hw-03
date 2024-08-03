import { IoIosPerson, IoMdCall } from "react-icons/io";
import css from "./Contact.module.css";
const Contact = ({ id, name, number, onDelite }) => {
  return (
    <>
      <li className={css.item}>
        <div className={css.user}>
          <h3>
            <IoIosPerson />
            {name}
          </h3>
          <p>
            <IoMdCall />
            {number}
          </p>
        </div>
        <button
          className={css.button}
          type="button"
          onClick={() => onDelite(id)}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default Contact;
