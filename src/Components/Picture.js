import React, { useState } from "react";
import "../App.css";

function Picture() {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="CardDetails">
      <div className="ContentContainer">
        {showContent && (
          <button className="ToggleContentButton" onClick={toggleContent}>
            <strong>-</strong>
          </button>
        )}
        {showContent && (
          <div className="AllContent">
            <div className="Section">
              <h2>Eligibility Criteria</h2>
              <ul className="CenteredItems">
                <li>Income group: Rs 25,000 and above</li>
                <li>Age group: 23-60 years</li>
                <li>Available across major cities in India</li>
              </ul>
            </div>
            <div className="Section">
              <h2>Fees & Charges</h2>
              <ul className="CenteredItems">
                <li>Joining Fees: Nil</li>
                <li>Annual Fees: Nil</li>
                <li>Interest rate: 0.75-3.5% per month</li>
                <li>Cash Withdrawal charges: Rs 250 per transaction</li>
                <li>Card Replacement charges: Rs 100</li>
              </ul>
            </div>
            <div className="Section">
              <h2>Documents Needed</h2>
              <ul className="CenteredItems">
                <li>PAN Card/Form 60</li>
                <li>Colour photograph</li>
                <li>Address proof</li>
                <li>ID Proof</li>
                <li>Income proof</li>
              </ul>
            </div>
            <div className="Section">
              <h2>Cashback on Successful Card Disbursal</h2>
              <p>Information about cashback here.</p>
            </div>
          </div>
        )}
      </div>
      {!showContent && (
        <button className="ToggleContentButton" onClick={toggleContent}>
          <strong>+</strong>
        </button>
      )}
    </div>
  );
}

export default Picture;
