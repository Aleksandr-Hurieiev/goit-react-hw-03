import { IoIosPerson, IoMdCall } from "react-icons/io";
import css from "./Contact.module.css";
const Contact = ({ name, number }) => {
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
        <button className={css.button} type="button">
          Delete
        </button>
      </li>
    </>
  );
};

export default Contact;
