// src/components/SearchBox/SearchBox.jsx
import PropTypes from "prop-types";
import css from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    className={css.input}
    placeholder="Search contacts..."
  />
);

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;
