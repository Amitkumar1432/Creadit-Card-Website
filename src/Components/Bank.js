import React from "react";
import "../App.css";

const Bank = () => {
  const headingStyle = {
    fontSize: "40px",
    color: "rgb(138, 17, 54)",
  };

  const containerStyle = {
    padding: "20px",
  };

  return (
    <div className="Center" style={containerStyle}>
      <h1 style={headingStyle}>
        IDFC First Bank
        <div>Credit Card</div>
      </h1>
    </div>
  );
};

export default Bank;
