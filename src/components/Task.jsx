import React from "react";
import { useNavigate } from "react-router-dom";

const Task = ({ role, task }) => {
  const navigate = useNavigate();
  function handleAssign(task) {
    navigate(`/assigntask/${task?.taskId}`);
  }
  return (
    <div className="border-2 border-blue-500 shadow-xl w-full h-[7rem] p-4 bg-gray-900 text-white">
      <div className="flex place-content-between px-3">
        <h1 className="text-2xl text-gray-300">{task?.title}</h1>
        {role === "ADMIN" ? (
          <button
            onClick={() => handleAssign(task)}
            className="cursor-pointer bg-blue-900 px-4 rounded-3xl text-sm"
          >
            {" "}
            assign
          </button>
        ) : (
          <span>Finished</span>
        )}
      </div>
      <p className="overflow-hidden text-gray-300">{task?.description}</p>
    </div>
  );
};

export default Task;
