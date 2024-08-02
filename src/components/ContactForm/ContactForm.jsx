const ContactForm = ({ value, filterUser }) => {
  return (
    <div>
      <p></p>
      <input
        type="text"
        value={value}
        onChange={(e) => filterUser(e.target.value)}
      />
    </div>
  );
};

export default ContactForm;
