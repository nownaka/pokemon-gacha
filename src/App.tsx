import React from "react";
import logo from "./assets/image/ball.svg";
import "./App.css";
import Button from "./components/atoms/Button";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Pokemon Gacha</p>
        <Button name="Go Home" onClick={() => navigate("home")} />
      </header>
    </div>
  );
}

export default App;
