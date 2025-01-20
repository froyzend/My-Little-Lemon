import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import css from "./Form.module.css";
import ModalExample from "../ModalContent/ModalContent.jsx";

const ReservationForm = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState(null);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phoneNumber: Yup.string().required("Required"),
    numberOfPeople: Yup.number().min(1).required("Required"),
    date: Yup.date().required("Required"),
    time: Yup.string().required("Required"),
    occasion: Yup.string(),
    seatingPreference: Yup.string(),
    comments: Yup.string(),
  });

  const handleOrder = () => {
    // Логика обработки данных
    console.log("Order confirmed:", formData);
    setModalOpen(false);
  };

  const handleSubmit = (values) => {
    setFormData(values); // Сохраняем данные формы
    setModalOpen(true); // Открываем модальное окно
  };

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          numberOfPeople: 1,
          date: "",
          time: "",
          occasion: "",
          seatingPreference: "",
          comments: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className={css.form}>
            <div className={css.containerInput}>
              <label>First Name</label>
              <Field name="firstName" placeholder="First Name" />
              {errors.firstName && touched.firstName && (
                <div>{errors.firstName}</div>
              )}
            </div>

            <div className={css.containerInput}>
              <label>Last Name</label>
              <Field name="lastName" placeholder="Last Name" />
              {errors.lastName && touched.lastName && (
                <div>{errors.lastName}</div>
              )}
            </div>

            <div className={css.containerInput}>
              <label>Email</label>
              <Field name="email" type="email" placeholder="Email" />
              {errors.email && touched.email && <div>{errors.email}</div>}
            </div>

            <div className={css.containerInput}>
              <label>Phone Number</label>
              <Field name="phoneNumber" type="tel" />
              {errors.phoneNumber && touched.phoneNumber && (
                <div>{errors.phoneNumber}</div>
              )}
            </div>

            <div className={css.containerInput}>
              <label>Number of People</label>
              <Field name="numberOfPeople" type="number" />
              {errors.numberOfPeople && touched.numberOfPeople && (
                <div>{errors.numberOfPeople}</div>
              )}
            </div>

            <div className={css.containerInput}>
              <label>Select Date</label>
              <Field name="date" type="date" />
              {errors.date && touched.date && <div>{errors.date}</div>}
            </div>

            <div className={css.containerInput}>
              <label>Select Time</label>
              <Field name="time" as="select">
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
              </Field>
              {errors.time && touched.time && <div>{errors.time}</div>}
            </div>

            <div className={css.containerInput}>
              <label>Occasion</label>
              <Field name="occasion" as="select">
                <option value="None">None</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </Field>
            </div>

            <div className={css.containerInput}>
              <label>Seating Preferences</label>
              <Field name="seatingPreference" as="select">
                <option value="None">None</option>
                <option value="Indoor">Indoor</option>
                <option value="Outdoor">Outdoor</option>
              </Field>
            </div>

            <div className={css.containerInput}>
              <label>Additional Comments</label>
              <Field
                name="comments"
                as="textarea"
                placeholder="Additional Comments"
              />
            </div>

            <button type="submit">Book Table</button>
            {modalOpen && (
              <ModalExample
                className={css.modal}
                onConfirm={handleOrder}
                onCancel={() => setModalOpen(false)}
              >
                <p>
                  Please confirm your reservation for {formData.numberOfPeople}{" "}
                  people on {formData.date} at {formData.time}.
                </p>
              </ModalExample>
            )}
          </Form>
        )}
      </Formik>

      {/* Модальное окно */}
    </>
  );
};

export default ReservationForm;
