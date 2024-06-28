// src/pages/ContactsPage/ContactsPage.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { setFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectContactsLoading } from "../../redux/contacts/selectors";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import css from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectContactsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={css.contactsPage}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox value={filter || ""} onChange={handleChange} />
      {isLoading ? <LoadingSpinner /> : <ContactList />}
    </div>
  );
};

export default ContactsPage;
