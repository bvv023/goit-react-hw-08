// src/components/LoadingSpinner/LoadingSpinner.jsx
import css from "./LoadingSpinner.module.css";

const LoadingSpinner = () => (
  <div className={css.spinnerContainer}>
    <div className={css.spinner}></div>
  </div>
);

export default LoadingSpinner;
