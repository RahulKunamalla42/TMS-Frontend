import React, { useState } from "react";
import Task from "../../../components/Task";

const AllTasks = () => {
  const tasks = [1, 2, 3, 4, 5, 6];
  const [blurOn, setBlurOn] = useState(false);
  const handleClick = (e) => {
    setBlurOn((prev) => !prev);
  };
  return (
    <div className="p-4 sm:p-6">
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-400 text-center">
          All Tasks List
        </h2>
        <section className=" bg-gradient-to-br  via-black to-gray-800 text-white h-[35rem] border border-gray-300 rounded space-y-3 overflow-y-scroll p-4">
          {[1, 2, 3, 4, 5, 6].map(() => {
            return <Task />;
          })}
        </section>
      </div>
    </div>
  );
};

export default AllTasks;
