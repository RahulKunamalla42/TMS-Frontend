import React, { useEffect, useState } from "react";
import RegisterPage from "./pages/Auth/Register";
import LoginPage from "./pages/Auth/Login";
import Home from "./pages/Home/Home";
const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [role, setRole] = useState(localStorage.getItem("role") || "");
  const [lor, setLor] = useState(false);

  useEffect(() => {
    setToken(localStorage.getItem("token") || "");
    setRole(localStorage.getItem("role") || "");
  }, []);

  return (
    <div>
      {token ? (
        <Home role={role} />
      ) : lor ? (
        <LoginPage setLor={setLor} />
      ) : (
        <RegisterPage setLor={setLor} />
      )}
    </div>
  );
};

export default App;
