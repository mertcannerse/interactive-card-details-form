function ThankYou({ onContinue }) {
  return (
    <div className="ty-container">
      <div className="ty-logo">
        <div className="checkmark">L</div>
      </div>
      <h1 className="ty-header">THANK YOU!</h1>
      <div className="ty-text">We've added your card details</div>
      <button className="ty-button" onClick={onContinue}>
        Continue
      </button>
    </div>
  );
}

export default ThankYou;
