import React, { useState } from "react";
import { useRegisterMutation } from "../../app/services/authApi";

const RegisterPage = ({ setLor }) => {
  const [register] = useRegisterMutation();
  const [cpassword, serCpassword] = useState("");
  const [regData, setRegData] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegData((prev) => ({ ...prev, [name]: value }));
  };
  const passwordVarify = () => {
    return regData.password === cpassword;
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    if (regData.userName && passwordVarify()) {
      console.log(regData, cpassword, passwordVarify());

      try {
        const response = await register(regData).unwrap(); // ✅ Properly await response
        console.log(response);
        setLor((p) => !p); //
      } catch (error) {
        console.error("Registration failed:", error);
      }
    } else {
      alert("Check password again");
    }
  };

  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black p-4">
      <div className="text-center mb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-300">
          TASK MANAGEMENT SYSTEM
        </h1>
      </div>
      <div className="p-6 w-full max-w-lg shadow-xl bg-slate-300 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl">
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-4xl font-extrabold mb-4 text-slate-200">
            Register Here
          </h1>
          <p className="text-gray-400">Manage your tasks effortlessly</p>
        </div>
        {/* {isError && (
          <div className="mb-4 p-3 bg-red-100 text-red-600 border border-red-400 rounded">
            <ErrorPage />
          </div>
        )} */}

        {/* Form Inputs */}
        <form
          className="flex flex-col items-center space-y-4"
          onSubmit={handleRegister}
        >
          <div className="space-y-3">
            <input
              type="text"
              name="userName"
              value={regData.userName}
              onChange={handleChange}
              placeholder="Enter username "
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-100 placeholder:caret-blue-50"
            />
            <input
              type="password"
              name="password"
              value={regData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-100 placeholder:caret-blue-50"
            />
            <input
              type="password"
              name="cpassword"
              value={cpassword}
              onChange={(e) => serCpassword(e.target.value)}
              placeholder="Re Enter the Password"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500
              text-blue-100 placeholder:caret-blue-100"
            />
          </div>

          <div className="mt-4">
            <button
              className="bg-blue-600 p-2 
              rounded-4xl w-[20rem] text-lg text-white"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>

        {/* Redirect to Login */}
        <div className="text-center mt-6">
          <p className="text-gray-400">
            Already have an account?{" "}
            <span
              onClick={() => setLor((prev) => !prev)}
              className="text-blue-500 text-lg font-semibold cursor-pointer"
            >
              Login here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
