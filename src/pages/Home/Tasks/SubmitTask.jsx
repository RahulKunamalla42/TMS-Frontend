import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useSubmittaskMutation } from "../../../app/services/submissionApi";
import { useParams } from "react-router-dom";

const SubmitTask = () => {
  const params = useParams();
  const userId = useSelector((state) => state?.app?.profile?.userId);
  const [submitTask, { isLoading, error }] = useSubmittaskMutation();

  const [taskData, setTaskData] = useState({
    userId: "", // Ensuring it doesn't start as undefined
    taskId: "", // Ensuring it doesn't start as undefined
    githubLink: "",
  });

  // Update userId and taskId once they're available
  useEffect(() => {
    setTaskData((prev) => ({
      ...prev,
      userId: userId || "",
      taskId: params?.taskId || "",
    }));
  }, [userId, params?.taskId]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmitTask = async (e) => {
    e.preventDefault();

    console.log("Submitting Task Data:", taskData); // Debugging API payload

    if (!taskData.taskId || !taskData.githubLink) {
      alert("Please fill all fields!");
      return;
    }

    try {
      await submitTask(taskData);
      alert("Task Submitted Successfully!");
      setTaskData({ taskId: "", githubLink: "", userId: userId });
    } catch (err) {
      console.error("Error submitting task:", err);
      alert("Failed to submit task.");
    }
  };

  return (
    <div className="h-[41rem] w-30rem flex justify-center items-center gap-4 p-4 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <div className="max-w-md p-10 shadow-xl bg-gradient-to-br from-gray-700 to-gray-900 text-white">
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4">
            Submit Task
          </h1>
          <p className="text-gray-400">Submit completed task details</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmitTask}>
          <div className="space-y-3">
            <input
              type="text"
              name="taskId"
              value={taskData.taskId || ""}
              onChange={handleChange}
              placeholder="Task ID"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
            <input
              type="text"
              value={taskData.userId || ""}
              disabled
              className="w-full p-3 border border-gray-300 rounded focus:outline-none bg-gray-500 text-white cursor-not-allowed"
            />
            <input
              type="text"
              name="githubLink"
              value={taskData.githubLink}
              onChange={handleChange}
              placeholder="GitHub Link"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-red-700 text-white rounded-lg px-6 py-2 text-xl"
            >
              {isLoading ? "Submitting..." : "Submit Task"}
            </button>
          </div>
        </form>
        {error && (
          <p className="text-red-500 text-center mt-2">
            Error submitting task.
          </p>
        )}
      </div>
    </div>
  );
};

export default SubmitTask;
