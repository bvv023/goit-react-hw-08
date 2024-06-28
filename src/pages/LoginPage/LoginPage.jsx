// src/pages/LoginPage/LoginPage.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginPage.module.css";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(logIn({ email, password }));
  };

  return (
    <div className={css.loginPage}>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className={css.input}
            required
          />
        </label>
        <label className={css.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={css.input}
            required
          />
        </label>
        <button type="submit" className={css.button}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
