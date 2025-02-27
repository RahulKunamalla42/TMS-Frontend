import React from "react";
import Task from "../../../components/Task";
import { useGetAllTasksQuery } from "../../../app/services/taskApi";
import { useSelector } from "react-redux";

const CompletedTasks = () => {
  const role = useSelector((state) => state?.app?.profile?.role);
  const { data: tasks, isLoading, isError } = useGetAllTasksQuery();

  const completedTasks = tasks?.filter((task) => task.status === "DONE") || [];

  return (
    <div className="p-4 sm:p-6">
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-400 text-center">
          Completed Task List
        </h2>

        <section className="bg-gradient-to-br via-black to-gray-800 text-white h-[35rem] border border-gray-300 rounded space-y-3 overflow-y-scroll p-4">
          {isLoading ? (
            <p className="text-center text-gray-400">Loading tasks...</p>
          ) : isError ? (
            <p className="text-center text-red-500">Error loading tasks</p>
          ) : completedTasks.length > 0 ? (
            completedTasks.map((task) => (
              <Task key={task.taskId} task={task} role={role} />
            ))
          ) : (
            <p className="text-center text-gray-400">
              No completed tasks found.
            </p>
          )}
        </section>
      </div>
    </div>
  );
};

export default CompletedTasks;
