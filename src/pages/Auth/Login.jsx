import React, { useEffect, useState } from "react";
import ErrorPage from "./ErrorPage";

const LoginPage = ({ setLor }) => {
  const [logindata, setLogindata] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogindata((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (logindata.username && logindata.password) {
    //   login(logindata);
    // } else {
    //   alert("Username and password cannot be empty");
    // }
  };

  // useEffect(() => {
  //   if (data) {
  //     dispatch(setAuth(data));
  //     localStorage.setItem("token", data.token);
  //     localStorage.setItem("userid", data.idofuser);
  //     localStorage.setItem("role", data.role);
  //     navigate("/");
  //     window.location.reload();
  //   }
  // }, [data, dispatch, navigate]);

  const isError = false;
  const isLoading = false;
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
          onSubmit={handleSubmit}
          className="flex flex-col items-center space-y-4"
        >
          <div className="space-y-3">
            <input
              type="text"
              name="username"
              value={logindata.username}
              onChange={handleChange}
              placeholder="Enter username"
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
