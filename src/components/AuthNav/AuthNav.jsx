// src/components/AuthNav/AuthNav.jsx
import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => (
  <div className={css.authNav}>
    <NavLink to="/register" className={css.link}>
      Register
    </NavLink>
    <NavLink to="/login" className={css.link}>
      Log In
    </NavLink>
  </div>
);

export default AuthNav;
