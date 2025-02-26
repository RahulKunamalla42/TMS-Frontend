import React from "react";
import { useCompletetaskMutation } from "../app/services/taskApi";

const AsignedTask = ({ task }) => {
  const [completetask] = useCompletetaskMutation();

  const handleClick = async (task) => {
    if (!task?.taskId) {
      console.error("Task ID is missing!");
      alert("Task ID is not available.");
      return;
    }

    const confirmCompletion = window.confirm(
      "Are you sure you completed this task?"
    );
    if (!confirmCompletion) return;

    try {
      const response = await completetask({ taskid: task.taskId }).unwrap();
      alert("Task marked as completed successfully!");
      console.log("Completion Response:", response);
      window.location.reload();
    } catch (error) {
      console.error("Error completing task:", error);
      alert("Failed to mark task as completed.");
    }
  };

  return (
    <div className="border-2 border-blue-500 shadow-xl w-full h-[7rem] p-4 bg-gray-900 text-white">
      <div className="flex justify-between px-3">
        <h1 className="text-2xl text-gray-300">{task?.title || "No Title"}</h1>
        <button
          className="bg-blue-600 p-3 text-sm rounded-3xl"
          onClick={() => handleClick(task)}
        >
          Completed
        </button>
      </div>
      <p className="overflow-hidden text-gray-300">
        {task?.description || "No Description"}
      </p>
    </div>
  );
};

export default AsignedTask;
