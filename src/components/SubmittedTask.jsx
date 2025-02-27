import React, { useEffect, useState } from "react";
import { useGetProfileByIdQuery } from "../app/services/authApi";
import { useGettaskQuery } from "../app/services/taskApi";

const SubmittedTask = ({ task }) => {
  const { data: profileData } = useGetProfileByIdQuery({ id: task?.userId });
  const { data: taskdata } = useGettaskQuery({ id: task?.taskId });

  return (
    <div className="border-2 border-blue-500 shadow-xl w-full h-[7rem] p-4 bg-gray-900 text-white">
      <div className="flex justify-between px-3">
        <h1 className="text-2xl text-gray-300">
          {taskdata?.title || "No Title"}
        </h1>
        <p className="overflow-hidden text-gray-300">
          Submitted by: {profileData?.username || "Unknown User"}
        </p>
      </div>
      <p className="overflow-hidden text-gray-300">
        {taskdata?.description || "No Description"}
      </p>
    </div>
  );
};

export default SubmittedTask;
