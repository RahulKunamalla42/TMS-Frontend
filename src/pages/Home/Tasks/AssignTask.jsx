import React, { useEffect, useState } from "react";
import List from "../../../components/List";
import { useGetAllProfilesQuery } from "../../../app/services/authApi";
import { useAssigntaskMutation } from "../../../app/services/taskApi";
import { useParams } from "react-router-dom";

const AssignTask = () => {
  const [profiles, setProfiles] = useState([]);
  const { data: allprofiles, isLoading, isError } = useGetAllProfilesQuery();
  const [assigntask] = useAssigntaskMutation();

  const params = useParams();
  useEffect(() => {
    setProfiles(allprofiles?.filter((profile) => profile?.role != "ADMIN"));
  }, [allprofiles, params]);

  const [assignData, setAssignData] = useState({
    userId: "", //
    taskId: params?.taskId || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAssignData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAssignTask = async (e) => {
    e.preventDefault();

    if (!assignData.taskId || !assignData.userId) {
      alert("Please fill all fields!");
      return;
    }

    try {
      await assigntask({
        userid: assignData.userId,
        taskid: assignData.taskId,
      });
      alert("Task Assigned Successfully!");
      setAssignData({ userId: "", taskId: "" }); // Reset form
    } catch (err) {
      console.error("Error assigning task:", err);
      alert("Failed to assign task.");
    }
  };

  return (
    <div className="h-[41rem] w-30rem flex justify-center items-center gap-4 p-4 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      {/* Form */}
      <div className="max-w-md p-10 shadow-xl bg-gradient-to-br from-gray-700 to-gray-900 text-white">
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4">
            Assign Task
          </h1>
          <p className="text-gray-400">Create and assign a task to a user</p>
        </div>

        {/* Form Inputs */}
        <form className="space-y-4" onSubmit={handleAssignTask}>
          <div className="space-y-3">
            <input
              type="text"
              name="taskId"
              value={assignData.taskId}
              onChange={handleChange}
              placeholder="Task ID"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
            <input
              type="text"
              name="userId"
              value={assignData.userId}
              onChange={handleChange}
              placeholder="User ID"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-red-700 text-white rounded-lg px-6 py-2 text-xl"
            >
              ASSIGN
            </button>
          </div>
        </form>
      </div>

      {/* User List */}
      <div className="w-[20rem] min-h-[32rem] max-h-[32rem] shadow-xl bg-gradient-to-br from-gray-700 to-gray-900 text-white p-2 space-y-3 overflow-y-scroll">
        {isLoading && <p>Loading users...</p>}
        {isError && <p>Error fetching users.</p>}
        {profiles?.length > 0 ? (
          profiles.map((profile, i) => (
            <List key={i} box="user" profile={profile} />
          ))
        ) : (
          <p className="text-center text-gray-400">No users found</p>
        )}
      </div>
    </div>
  );
};

export default AssignTask;
