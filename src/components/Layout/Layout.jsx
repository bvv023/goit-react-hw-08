// src/components/Layout/Layout.jsx
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";

const Layout = ({ children }) => (
  <div className={css.layout}>
    <AppBar />
    <main>
      {children}
      <Outlet />
    </main>
  </div>
);

export default Layout;
