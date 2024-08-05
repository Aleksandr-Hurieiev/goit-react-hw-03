import css from "./SearchBox.module.css";
const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css.box}>
      <p className={css.title}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={onFilter}
      />
    </div>
  );
};

export default SearchBox;
