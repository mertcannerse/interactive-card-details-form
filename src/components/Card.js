function Card({ flipCard, formik }) {
  const placeholderCardName = "Jane Appleseed";
  const placeholderCardNumber = "0000 0000 0000 0000";
  const placeholderExpDateM = "00";
  const placeholderExpDateY = "00";
  const placeholderCvc = "000";

  const formatCardNumber = (number) => {
    const formattedNumber = number.replace(/\s/g, "").match(/.{1,4}/g);
    return formattedNumber ? formattedNumber.join(" ") : "";
  };

  return (
    <div className="card-container">
      <div className={`card ${flipCard ? "flipped" : ""}`}>
        <div className="card-front">
          <div className="logo">
            <span className="logo1"></span>
            <span className="logo2"></span>
          </div>
          <div className="card-number">
            {formatCardNumber(formik.values.cardNumber) ||
              placeholderCardNumber}
          </div>
          <div className="card-name-exp">
            <div className="card-name">
              {formik.values.cardName || placeholderCardName}
            </div>
            <div className="card-exp">
              {formik.values.expDateM || placeholderExpDateM}/
              {formik.values.expDateY || placeholderExpDateY}
            </div>
          </div>
        </div>
        <div className="card-back">
          <div className="black-stripe"></div>
          <div className="card-cvc">{formik.values.cvc || placeholderCvc}</div>
          <div className="card-text">
            <div className="card-line">
              <div className="card-line-long"></div>
              <div className="card-line-medium"></div>
              <div className="card-line-medium"></div>
              <div className="card-line-short"></div>
            </div>
            <div className="card-line">
              <div className="card-line-medium"></div>
              <div className="card-line-long"></div>
              <div className="card-line-long"></div>
              <div className="card-line-short"></div>
            </div>
            <div className="card-line">
              <div className="card-line-short"></div>
              <div className="card-line-medium"></div>
              <div className="card-line-medium"></div>
              <div className="card-line-long"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
