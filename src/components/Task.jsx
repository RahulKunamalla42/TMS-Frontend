import React, { useState } from "react";

const Task = ({ submitORapprove }) => {
  return (
    <div className="border-2 border-blue-500 shadow-xl w-full h-[7rem] p-4 ">
      <div className="flex place-content-between px-3">
        <h1 className="text-2xl">E-Commerce application</h1>
        {/* {asigned ? (
          <button classname="bg-amber-300">Asgined To : sonu</button>
        ) : (
          <div>Asign</div>
        )} */}
        <div>{submitORapprove}</div>
      </div>

      <p className="overflow-hidden">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        blanditiis, suscipit illum molestias aut deserunt delectus reiciendis
        assumenda maxime recusandae molestiae quia placeat quasi at consectetur
        quisquam doloribus porro possimus?
      </p>
    </div>
  );
};

export default Task;
