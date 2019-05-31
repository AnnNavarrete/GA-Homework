import React from "react";
// import logo from './logo.svg';
import "./App.css";
import "./PasswordChecker";
import PasswordChecker from "./PasswordChecker";

function App() {
  return (
    <div className="App">
      <h1>Check Password Strength</h1>
      <PasswordChecker />
    </div>
  );
}

export default App;
