// src/components/Contact/Contact.jsx
import PropTypes from "prop-types";
import css from "./Contact.module.css";
import { AiFillPhone } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

const Contact = ({ name, number, onDelete, onEdit }) => {
  return (
    <div className={css.item}>
      <div className={css.wrapper}>
        <p className={css.name}>
          <BsFillPersonFill />
          &nbsp;{name}
        </p>
        <p className={css.number}>
          <AiFillPhone />
          &nbsp;{number}
        </p>
      </div>
      <div className={css.wrapperButton}>
        <button onClick={onDelete} className={css.button}>
          Delete
        </button>
        <button onClick={onEdit} className={css.button}>
          Edit
        </button>
      </div>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default Contact;
