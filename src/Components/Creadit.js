import React from "react";
import "../App.css";
import CardImage from "../Image/Cardimg.png";

function Credit() {
  return (
    <div className="Center">
      <img src={CardImage} alt="Description of your card image" width={"30%"} />
      <p>
        <div>
          *The card image serves for illustrative{" "}
          <div>purposes, the bank may offer you</div>
        </div>
        <div>a different card based on its policy and criteria.</div>
      </p>
    </div>
  );
}

export default Credit;
