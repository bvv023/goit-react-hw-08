// src/components/UserMenu/UserMenu.jsx
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { getUserName } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <div className={css.userMenu}>
      <p className={css.text}>Welcome, {name}</p>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
