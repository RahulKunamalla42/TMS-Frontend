import React from "react";

const List = ({ box, profile }) => {
  return (
    <div className="border-2 border-blue-500 shadow-xl w-full h-[7rem] p-4 ">
      <div className="flex flex-col place-content-between px-3">
        <h1 className="text-xl">
          {box === "task" ? " E-Commerce application" : profile?.userName}
        </h1>
        <h2> {box === "task" ? " TaskId : 89247" : profile?.userId}</h2>
      </div>
    </div>
  );
};

export default List;
