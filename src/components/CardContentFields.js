const CardContentFields = ({ handleFlipCard, formik }) => {
  const handleCardNameChange = (e) => {
    const newValue = e.target.value;
    formik.setFieldValue("cardName", newValue);
  };

  const handleCardNumberChange = (e) => {
    const newValue = e.target.value;
    formik.setFieldValue("cardNumber", newValue);
  };

  const handleExpDateMChange = (e) => {
    const newValue = e.target.value;
    formik.setFieldValue("expDateM", newValue);
  };

  const handleExpDateYChange = (e) => {
    const newValue = e.target.value;
    formik.setFieldValue("expDateY", newValue);
  };

  const handleCvcChange = (e) => {
    const newValue = e.target.value;
    formik.setFieldValue("cvc", newValue);
  };

  return (
    <>
      <div className="formName">
        <label htmlFor="cardName">CARDHOLDER NAME</label>
        <input
          maxLength={23}
          type="text"
          id="cardName"
          name="cardName"
          placeholder="e.g. Jane Appleseed"
          className={
            formik.errors.cardName && formik.touched.cardName ? "error" : null
          }
          onChange={handleCardNameChange}
          onBlur={formik.handleBlur}
          value={formik.values.cardName}
        />
        {formik.errors.cardName && formik.touched.cardName && (
          <div className="errorMessage">{formik.errors.cardName}</div>
        )}
      </div>
      <div className="formNumber">
        <label htmlFor="cardNumber">CARD NUMBER</label>
        <input
          maxLength={16}
          type="text"
          id="cardNumber"
          name="cardNumber"
          placeholder="e.g. 1234 5678 9123 0000"
          className={
            formik.errors.cardNumber && formik.touched.cardNumber
              ? "error"
              : null
          }
          onChange={handleCardNumberChange}
          onBlur={formik.handleBlur}
          value={formik.values.cardNumber}
        />
        {formik.errors.cardNumber && formik.touched.cardNumber && (
          <div className="errorMessage">{formik.errors.cardNumber}</div>
        )}
      </div>
      <div className="formExpDateCvc">
        <div className="formExpDate">
          <div>EXP. DATE (MM/YY)</div>
          <div className="formExpDateContainer">
            <div className="formExpDateM">
              <label htmlFor="expDateM"></label>
              <input
                maxLength={2}
                type="text"
                id="expDateM"
                name="expDateM"
                placeholder="MM"
                className={
                  formik.errors.expDateM && formik.touched.expDateM
                    ? "error"
                    : null
                }
                onChange={handleExpDateMChange}
                onBlur={formik.handleBlur}
                value={formik.values.expDateM}
              />
              {formik.errors.expDateM && formik.touched.expDateM && (
                <div className="errorMessage">{formik.errors.expDateM}</div>
              )}
            </div>
            <div className="formExpDateY">
              <label htmlFor="expDateY"></label>
              <input
                maxLength={2}
                type="text"
                id="expDateY"
                name="expDateY"
                placeholder="YY"
                className={
                  formik.errors.expDateY && formik.touched.expDateY
                    ? "error"
                    : null
                }
                onChange={handleExpDateYChange}
                onBlur={formik.handleBlur}
                value={formik.values.expDateY}
              />
              {formik.errors.expDateY && formik.touched.expDateY && (
                <div className="errorMessage">{formik.errors.expDateY}</div>
              )}
            </div>
          </div>
        </div>
        <div onBlur={() => handleFlipCard()} className="formCvc">
          <label htmlFor="cvc">CVC</label>
          <input
            maxLength={3}
            type="text"
            id="cvc"
            name="cvc"
            placeholder="e.g. 123"
            className={formik.errors.cvc && formik.touched.cvc ? "error" : null}
            onChange={handleCvcChange}
            onFocus={handleFlipCard}
            onBlur={formik.handleBlur}
            value={formik.values.cvc}
          />
          {formik.errors.cvc && formik.touched.cvc && (
            <div className="errorMessage">{formik.errors.cvc}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default CardContentFields;
