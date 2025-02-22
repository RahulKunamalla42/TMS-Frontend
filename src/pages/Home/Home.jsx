import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import LeftSide from "./LeftSide";

const Home = ({ person }) => {
  const handleLogout = (e) => {};

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Header Section */}
      <div className="flex flex-col">
        <div className="flex flex-col sm:flex-row justify-between items-center p-4 bg-gray-900 shadow-md">
          <h1 className="text-2xl sm:text-3xl font-bold text-sky-100">
            TASK MANAGEENT SYSTEM
          </h1>
          <div className="flex gap-[1rem]">
            <div className="flex justify-center items-center">
              <button
                onClick={(e) => handleLogout(e)}
                className="bg-slate-100 rounded-3xl p-2 w-[7rem] text-lg text-black border-b-gray-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full gap-3 p-4">
        <LeftSide person={person} />
        <div className=" w-full p-2 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
