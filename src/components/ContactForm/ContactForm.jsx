import css from "../ContactForm/ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
const ContactForm = ({ onNewUser }) => {
  const initialValue = {
    firstName: "",
    number: "",
  };
  const firstNameId = nanoid();
  const numberId = nanoid();
  const handleSubmit = (values, actions) => {
    const newUser = {
      name: values.firstName,
      number: values.number,
    };
    onNewUser(newUser);
    actions.resetForm();
  };
  const FeedbackSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("please enter your name"),
    number: Yup.string()
      .matches((/^\+380\d{3}\d{2}\d{2}\d{2}$/), "valid phone number in the format +38 ххх ххх хх хх")
      .required("please enter your phone number in the format +380 хх ххх хх хх"),
  });
  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label htmlFor={firstNameId}>First Name</label>
        <Field
          id={firstNameId}
          type="text"
          name="firstName"
          placeholder="Name"
        />
        <ErrorMessage
          name="firstName"
          component="span"
          className={css.formError}
        />
        <label htmlFor={numberId}>Number</label>
        <Field
          id={numberId}
          type="tel"
          name="number"
          placeholder="Number tell"
        />
        <ErrorMessage
          name="number"
          component="span"
          className={css.formError}
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
