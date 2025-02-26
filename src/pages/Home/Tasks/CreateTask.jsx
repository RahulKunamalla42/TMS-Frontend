import React, { useState } from "react";
import { useCreatetaskMutation } from "../../../app/services/taskApi";

const CreateTask = () => {
  const [createTask, { isLoading, error }] = useCreatetaskMutation();

  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    deadline: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleCreateTask = async (e) => {
    e.preventDefault();
    if (!taskData.title || !taskData.description || !taskData.deadline) {
      alert("Please fill all fields!");
      return;
    }

    try {
      await createTask(taskData);
      alert("Task Created Successfully!");
      setTaskData({ title: "", description: "", deadline: "" }); // Reset form
    } catch (err) {
      console.error("Error creating task:", err);
      alert("Failed to create task.");
    }
  };

  return (
    <div className="h-[41rem] w-30rem flex justify-center items-center gap-4 p-4 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      {/* Form */}
      <div className="max-w-md p-10 shadow-xl bg-gradient-to-br from-gray-700 to-gray-900 text-white">
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4">
            Create Task
          </h1>
          <p className="text-gray-400">Define task details</p>
        </div>

        {/* Form Inputs */}
        <form className="space-y-4" onSubmit={handleCreateTask}>
          <div className="space-y-3">
            <input
              type="text"
              name="title"
              value={taskData.title}
              onChange={handleChange}
              placeholder="Task Title"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
            <textarea
              name="description"
              value={taskData.description}
              onChange={handleChange}
              placeholder="Task Description"
              className="w-full h-[6rem] p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
            <input
              type="text"
              name="deadline"
              value={taskData.deadline}
              onChange={handleChange}
              placeholder="Deadline (YYYY-MM-DD)"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-red-700 text-white rounded-lg px-6 py-2 text-xl"
            >
              {isLoading ? "Creating..." : "Create Task"}
            </button>
          </div>
        </form>
        {error && (
          <p className="text-red-500 text-center mt-2">Error creating task.</p>
        )}
      </div>
    </div>
  );
};

export default CreateTask;
