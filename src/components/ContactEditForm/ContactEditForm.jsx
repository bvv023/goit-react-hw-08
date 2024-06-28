// src/components/ContactEditForm/ContactEditForm.jsx
import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/contacts/operations";
import css from "./ContactEditForm.module.css";
import toast, { Toaster } from "react-hot-toast";

const ContactEditForm = ({ contact, onClose }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateContact({ id: contact.id, name, number }))
      .then(() => {
        toast.success("Contact updated successfully!");
        onClose();
      })
      .catch(() => {
        toast.error("Failed to update contact.");
      });
  };

  return (
    <div className={css.container}>
      <Toaster />
      <h2>Edit Contact</h2>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.label}>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={css.input}
          />
        </label>
        <label className={css.label}>
          Number
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className={css.input}
          />
        </label>
        <button type="submit" className={css.button}>
          Save
        </button>
      </form>
    </div>
  );
};

ContactEditForm.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ContactEditForm;
