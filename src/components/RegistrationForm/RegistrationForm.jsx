// src/components/RegistrationForm/RegistrationForm.jsx
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(7, "Password must be at least 7 characters long")
      .required("Required"),
  });

  const handleSubmit = (values, { setSubmitting, setErrors }) => {
    dispatch(register(values))
      .unwrap()
      .catch((error) => {
        setErrors({ submit: error.message });
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors }) => (
        <Form className={css.form}>
          <label className={css.label}>
            Name
            <Field
              type="text"
              name="name"
              className={css.input}
              autoComplete="name"
            />
            <ErrorMessage name="name" component="div" className={css.error} />
          </label>
          <label className={css.label}>
            Email
            <Field
              type="email"
              name="email"
              className={css.input}
              autoComplete="email"
            />
            <ErrorMessage name="email" component="div" className={css.error} />
          </label>
          <label className={css.label}>
            Password
            <Field
              type="password"
              name="password"
              className={css.input}
              autoComplete="new-password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className={css.error}
            />
          </label>
          {errors.submit && <div className={css.error}>{errors.submit}</div>}
          <button type="submit" className={css.button} disabled={isSubmitting}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
