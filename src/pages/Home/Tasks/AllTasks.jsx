import React, { useEffect } from "react";
import Task from "../../../components/Task";
import { useGetAllTasksQuery } from "../../../app/services/taskApi";
import { useSelector } from "react-redux";

const AllTasks = () => {
  // Corrected API hook usage
  const role = useSelector((state) => state.app.profile?.role);
  console.log(role);
  const { data: alltasks, isLoading, isError } = useGetAllTasksQuery();
  console.log(alltasks);
  const tasks = alltasks?.filter((task) => task.asignedUserId === null);

  return (
    <div className="p-4 sm:p-6">
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-400 text-center">
          All Tasks List
        </h2>
        <section className="bg-gradient-to-br via-black to-gray-800 text-white h-[35rem] border border-gray-300 rounded space-y-3 overflow-y-scroll p-4">
          {/* Handle Loading State */}
          {isLoading && <p className="text-gray-400">Loading tasks...</p>}

          {/* Handle Error State */}
          {isError && (
            <p className="text-red-400">
              Failed to load tasks. Please try again.
            </p>
          )}

          {/* Render Tasks */}
          {!isLoading && !isError && tasks?.length > 0
            ? tasks.map((task) => (
                <Task key={task.taskId} task={task} role={role} />
              ))
            : !isLoading && <p className="text-gray-400">No tasks found.</p>}
        </section>
      </div>
    </div>
  );
};

export default AllTasks;
