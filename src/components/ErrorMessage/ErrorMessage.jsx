// src/components/ErrorMessage/ErrorMessage.jsx
import PropTypes from "prop-types";
import css from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => (
  <div className={css.errorMessage}>
    <p>{message}</p>
  </div>
);

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
