import React, { useEffect, useState } from "react";
import Task from "../../../components/Task";
import { useGetallsubsQuery } from "../../../app/services/submissionApi";
import SubmittedTask from "../../../components/SubmittedTask";

const SubmittedTasks = () => {
  const { data: subtasks, isLoading, isError } = useGetallsubsQuery();
  console.log(subtasks);
  return (
    <div className="p-4 sm:p-6">
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-400 text-center">
          Submitted Task List
        </h2>
        <section className="bg-gradient-to-br via-black to-gray-800 text-white h-[35rem] border border-gray-300 rounded space-y-3 overflow-y-scroll p-4">
          {subtasks && subtasks.length > 0 ? (
            subtasks?.map((task, i) => <SubmittedTask key={i} task={task} />)
          ) : (
            <p className="text-center">No submitted tasks found.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default SubmittedTasks;
