import React from "react";
import { useSelector } from "react-redux";
import { useTasksasigndtouserQuery } from "../../../app/services/taskApi";
import Task from "../../../components/Task";
import AsignedTask from "../../../components/AsignedTask";

const AssignedTasks = () => {
  const userid = useSelector((state) => state?.app?.profile?.userId);
  const { data: alltasks } = useTasksasigndtouserQuery({ userid });
  const tasks = alltasks?.filter((task) => task?.status === "PENDING");
  console.log(tasks);
  return (
    <div className="p-4 sm:p-6">
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-400 text-center">
          Assigned Task List
        </h2>
        <section className="bg-gradient-to-br via-black to-gray-800 text-white h-[35rem] border border-gray-300 rounded space-y-3 overflow-y-scroll p-4">
          {tasks && tasks.length > 0 ? (
            tasks.map((task, i) => <AsignedTask key={i} task={task} />)
          ) : (
            <p className="text-center text-gray-400">No tasks assigned.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default AssignedTasks;
