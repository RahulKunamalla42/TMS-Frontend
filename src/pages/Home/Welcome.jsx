import React from "react";
import image from "../../assets/hero1.png";
import { useSelector } from "react-redux";
const Welcome = () => {
  const name = useSelector((state) => state.app?.profile?.userName);
  return (
    <section className=" bg-gradient-to-br  via-black to-gray-800 text-white flex items-center justify-center h-[40rem] ">
      <div className="flex space-x-4">
        <div className="flex flex-col justify-center  min-w-sm ">
          <h1 className="text-6xl ">Hello, </h1>
          <h1 className="text-6xl max-w-xs ">{name}</h1>
          <h1 className="text-2xl mb-4">Welcome to your tasks...</h1>
          <div className="flex space-x-5 jusc">
            <button className="bg-slate-100 rounded-3xl p-2 w-[7rem] text-lg text-black border-b-gray-700">
              Comment
            </button>
            <button className="bg-slate-100 rounded-3xl p-2 w-[7rem] text-lg text-black border-b-gray-700">
              Share
            </button>
          </div>
        </div>
        <div className="">
          <img
            className="w-[20rem] h-[20rem]"
            src={image}
            alt=" image of boys"
          />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
