import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import LeftSide from "./LeftSide";
import { useDispatch, useSelector } from "react-redux";
import { addProfile, addUserId } from "../../app/feature/appSlice";
import { useLazyGetProfileQuery } from "../../app/services/authApi";

const Home = ({ role }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.app.userId);
  const [getProfile, { error, isLoading }] = useLazyGetProfileQuery();

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await getProfile();

      if (response?.data?.userId) {
        dispatch(addUserId(response.data.userId));
        dispatch(addProfile(response.data));
      }
    };

    if (!userId) fetchProfile();
  }, [dispatch, getProfile, userId]);

  if (isLoading) return <p>Loading...</p>;
  if (error) {
    console.error("Error fetching profile:", error);
    return <p>Error fetching profile.</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="flex flex-col items-center bg-gray-900">
        <div className="flex flex-col sm:flex-row justify-between items-center p-4 bg-gray-900 shadow-md">
          <h1 className="text-2xl sm:text-3xl font-bold text-sky-100">
            TASK MANAGEMENT SYSTEM
          </h1>
        </div>
      </div>

      <div className="flex w-full gap-3 p-4">
        <LeftSide role={role} />
        <div className="w-full p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
