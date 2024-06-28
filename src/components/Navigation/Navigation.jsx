// src/components/Navigation/Navigation.jsx
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => (
  <nav className={css.nav}>
    <NavLink to="/" className={css.link}>
      Home
    </NavLink>
    <NavLink to="/contacts" className={css.link}>
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
