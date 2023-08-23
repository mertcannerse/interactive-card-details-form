import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import FormValidation from "./components/FormValidation";
import ThankYou from "./components/ThankYou";
import { useFormik } from "formik";
import * as Yup from "yup";

function App() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [flipCard, setFlipCard] = useState(false);

  const handleContinueClick = () => {
    setShowThankYou(false);
    formik.resetForm();
  };

  const handleFlipCard = () => {
    setFlipCard(!flipCard);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (formik.dirty && Object.keys(formik.errors).length === 0) {
      setShowThankYou(true);
    } else {
      formik.setTouched({
        cardName: true,
        cardNumber: true,
        expDateM: true,
        expDateY: true,
        cvc: true,
      });
    }
  };

  const validationSchema = Yup.object({
    cardName: Yup.string()
      .required("Can't be blank")
      .matches(/^[a-zA-Z\s ]+$/, "Wrong format, letters only")
      .matches(/\s/g, "Must be first and last name"),
    cardNumber: Yup.string()
      .required("Can't be blank")
      .matches(/^[0-9]+$/, "Wrong format, numbers only")
      .min(16, "Card number must be 16 digits"),
    expDateM: Yup.string()
      .required("Can't be blank")
      .matches(/^[0-9]+$/, "Wrong format, numbers only")
      .matches(/(0[1-9]|1[012])/, "Wrong format, months only"),
    expDateY: Yup.string()
      .required("Can't be blank")
      .matches(/^[0-9]+$/, "Wrong format, numbers only")
      .matches(/[0-9]{2}/, "Year must be 2 digits"),
    cvc: Yup.string()
      .required("Can't be blank")
      .matches(/^[0-9]+$/, "Wrong format, numbers only")
      .min(3, "CVC must be 3 digits"),
  });

  const formik = useFormik({
    initialValues: {
      cardName: "",
      cardNumber: "",
      expDateM: "",
      expDateY: "",
      cvc: "",
    },
    validationSchema,
    onSubmit: handleFormSubmit,
  });

  return (
    <div className="container">
      <Card flipCard={flipCard} formik={formik} />
      {showThankYou ? (
        <ThankYou onContinue={handleContinueClick} />
      ) : (
        <FormValidation
          onSubmit={handleFormSubmit}
          handleFlipCard={handleFlipCard}
          formik={formik}
        />
      )}
    </div>
  );
}

export default App;
