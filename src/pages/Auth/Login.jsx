import React, { useEffect, useState } from "react";
import ErrorPage from "./ErrorPage";
import {
  useAddAdminMutation,
  useLoginMutation,
} from "../../app/services/authApi";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setLor }) => {
  const navigate = useNavigate();
  const [addAdmin] = useAddAdminMutation();
  const [login, { isLoading, isError }] = useLoginMutation();
  const [logindata, setLogindata] = useState({ userName: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogindata((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (logindata.userName && logindata.password) {
      console.log(logindata);
      try {
        const response = await login(logindata).unwrap();
        console.log(response);
        if (response && response.token && response.role) {
          localStorage.setItem("token", response.token);
          localStorage.setItem("role", response.role);
          window.location.reload();
        }
        if (localStorage.getItem("token")) {
          navigate("/");
        }
      } catch (error) {
        console.log("login is failed :", error);
      }
    } else {
      alert("Username and password cannot be empty");
    }
  };

  useEffect(() => {
    addAdmin();
  }, []);
  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black p-4">
      {/* Page Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-300">
          TASK MANAGEMENT SYSTEM
        </h1>
      </div>

      {/* Login Form */}
      <div className="p-6 w-full max-w-lg shadow-xl bg-slate-300 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl">
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-4xl font-extrabold mb-4 text-slate-200">
            Login Here
          </h1>
          <p className="text-gray-400">Access your tasks easily</p>
        </div>

        {/* Error Message */}
        {isError && (
          <div className="mb-4 p-3 bg-red-100 text-red-600 border border-red-400 rounded">
            <ErrorPage />
          </div>
        )}

        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center space-y-4"
        >
          <div className="space-y-3">
            <input
              type="text"
              name="userName"
              value={logindata.userName}
              onChange={handleChange}
              placeholder="Enter user name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-100 placeholder:caret-blue-50"
            />
            <input
              type="password"
              name="password"
              value={logindata.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-100 placeholder:caret-blue-50"
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 p-2 
              rounded-4xl w-[20rem] text-lg text-white"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </div>
          </div>
        </form>
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm sm:text-base">
            Don’t have an account?{" "}
            <span
              onClick={() => setLor((prev) => !prev)}
              className="text-blue-500 text-sm sm:text-base font-medium cursor-pointer"
            >
              Register here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
