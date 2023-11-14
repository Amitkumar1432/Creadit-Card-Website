import React from "react";
import Header from "./Components/Header";
import Bank from "./Components/Bank";
import "../src/App.css";
import Creadit from "./Components/Creadit";
import Details from "./Components/Details";
import Picture from "./Components/Picture";

function App() {
  return (
    <div>
      <div className="Center">Powerd By BankKaro</div>
      <Header />
      <Bank />
      <Creadit />
      <Details />
      <Picture />
    </div>
  );
}

export default App;
