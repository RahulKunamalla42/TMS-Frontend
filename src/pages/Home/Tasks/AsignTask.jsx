import React, { useState } from "react";
import User from "../../../components/User";
import List from "../../../components/List";

const AsignTask = () => {
  const [regData, setRegData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // if (regData.username && regData.password && regData.email) {
    //   register(regData);
    //   navigate("/login");
    //   window.location.reload();
    // }
  };

  return (
    <div className="h-[41rem] w-30rem flex justify-center items-center gap-4 p-4 bg-gradient-to-br from-gray-800 via-gray-900 to-black ">
      {/* form */}
      <div className="max-w-md p-10 shadow-xl bg-slate-300 bg-gradient-to-br from-gray-700 to-gray-900">
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 text-white-800">
            Assign Task
          </h1>
          <p className="text-gray-400">create and assing to user </p>
        </div>

        {/* Form Inputs */}
        <form className="space-y-4" onSubmit={handleRegister}>
          <div className="inputs space-y-3">
            <input
              type="text"
              name="taskname"
              value={regData.username}
              onChange={handleChange}
              placeholder="Task Name "
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-100 placeholder:caret-blue-50"
            />
            <input
              type="text"
              name="userid"
              value={regData.username}
              onChange={handleChange}
              placeholder="User Id "
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-100 placeholder:caret-blue-50"
            />
            <input
              type="textarea"
              name="description"
              value={regData.email}
              onChange={handleChange}
              placeholder="Enter description"
              className="w-full h-[10rem] border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 "
            />
          </div>

          <div className="bg-red-700 text-white rounded-4xl text-center w-[10rem] text-xl">
            <button className="p-2">ASIGN</button>
          </div>
        </form>
      </div>

      {/* user list */}
      <div
        className="w-[20rem] min-h-[32rem]  max-h-[32rem] shadow-xl bg-slate-300 
      p-2 space-y-3 bg-gradient-to-br from-gray-700 to-gray-900 overflow-scroll "
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map(() => {
          return <List box={"user"} />;
        })}
      </div>
    </div>
  );
};

export default AsignTask;
