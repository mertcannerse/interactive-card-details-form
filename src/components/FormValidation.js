import CardContentFields from "./CardContentFields";

const FormValidation = ({ onSubmit, handleFlipCard, formik }) => {
  return (
    <form onSubmit={onSubmit}>
      <CardContentFields handleFlipCard={handleFlipCard} formik={formik} />
      <button className="submit" type="submit">
        Confirm
      </button>
    </form>
  );
};

export default FormValidation;
