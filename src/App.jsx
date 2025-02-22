import React, { useState } from "react";
import RegisterPage from "./pages/Auth/Register";
import LoginPage from "./pages/Auth/Login";
import Home from "./pages/Home/Home";
const App = () => {
  const [token, setToken] = useState(true);
  const [lor, setLor] = useState(false);
  const [person, setPerson] = useState("USER");
  return (
    <div>
      {token ? (
        <Home person={person} />
      ) : lor ? (
        <LoginPage setLor={setLor} />
      ) : (
        <RegisterPage setLor={setLor} />
      )}
    </div>
  );
};

export default App;
