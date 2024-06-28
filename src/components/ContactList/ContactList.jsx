// src/components/ContactList/ContactList.jsx
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import Modal from "../Modal/Modal";
import ContactEditForm from "../ContactEditForm/ContactEditForm";
import css from "./ContactList.module.css";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);

  const handleDelete = (contact) => {
    setCurrentContact(contact);
    setIsModalOpen(true);
  };

  const handleEdit = (contact) => {
    setCurrentContact(contact);
    setIsEditModalOpen(true);
  };

  const confirmDelete = () => {
    dispatch(deleteContact(currentContact.id))
      .then(() => {
        toast.success("Contact deleted successfully!");
      })
      .catch(() => {
        toast.error("Failed to delete contact.");
      });
    setIsModalOpen(false);
    setCurrentContact(null);
  };

  return (
    <div className={css.container}>
      <Toaster />
      <ul className={css.list}>
        {contacts.map((contact) => (
          <li key={contact.id} className={css.item}>
            {contact.id && contact.name && contact.number ? (
              <Contact
                id={contact.id}
                name={contact.name}
                number={contact.number}
                onDelete={() => handleDelete(contact)}
                onEdit={() => handleEdit(contact)}
              />
            ) : (
              <div>Invalid contact data</div>
            )}
          </li>
        ))}
      </ul>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className={css.modalContent}>
            <p>Are you sure you want to delete this contact?</p>
            <button onClick={confirmDelete} className={css.button}>
              Yes
            </button>
            <button
              onClick={() => setIsModalOpen(false)}
              className={css.button}
            >
              No
            </button>
          </div>
        </Modal>
      )}
      {isEditModalOpen && (
        <Modal onClose={() => setIsEditModalOpen(false)}>
          <ContactEditForm
            contact={currentContact}
            onClose={() => setIsEditModalOpen(false)}
          />
        </Modal>
      )}
    </div>
  );
};

export default ContactList;
