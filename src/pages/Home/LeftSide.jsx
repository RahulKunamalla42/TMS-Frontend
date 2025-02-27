import React from "react";
import AvatarComponent from "../../components/AvatarComponent";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removetoken } from "../../app/feature/appSlice";

const LeftSide = ({ role }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navButs = {
    b1: "HOME",
    b2: role === "ADMIN" ? "ALL TASKS" : "ASSIGNED TASKS",
    b3: role === "ADMIN" ? "ASSIGN TASK" : "COMPLETED TASKS",
    b4: role === "ADMIN" ? "SUBMITTED TASKS" : "SUBMIT TASK",
  };
  return (
    <section className="w-lg min-h-full bg-gradient-to-br from-gray-900 via-black to-gray-800 ">
      <div className="flex justify-center items-center py-[3rem]">
        <div className="flex flex-col gap-8  items-center">
          <AvatarComponent
            src={
              "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001884.png"
            }
            alt={"avatar"}
            size="7rem"
          />
          <button
            className="bg-linear-to-br from-gray-300 via-blue-600 to-gray-800 text-white rounded-4xl p-2 w-[18rem] text-xl"
            onClick={() =>
              navigate(navButs.b1.split(" ").join("").toLowerCase())
            }
          >
            {navButs.b1}
          </button>
          <button
            className="bg-linear-to-br from-gray-300 via-blue-600 to-gray-800  rounded-4xl p-2 w-[18rem] text-xl"
            onClick={() =>
              navigate(navButs.b2.split(" ").join("").toLowerCase())
            }
          >
            {navButs.b2}
          </button>

          {role == "ADMIN" && (
            <button
              className="bg-linear-to-br from-gray-300 via-blue-600 to-gray-800  rounded-4xl p-2 w-[18rem] text-xl"
              onClick={() => navigate("/createtask")}
            >
              CREATE TASK
            </button>
          )}

          <button
            className="bg-linear-to-br from-gray-300 via-blue-600 to-gray-800  rounded-4xl p-2 w-[18rem] text-xl"
            onClick={() =>
              navigate(navButs.b3.split(" ").join("").toLowerCase())
            }
          >
            {navButs.b3}
          </button>

          <button
            className="bg-linear-to-br from-gray-300 via-blue-600 to-gray-800  rounded-4xl p-2 w-[18rem] text-xl"
            onClick={() =>
              navigate(navButs.b4.split(" ").join("").toLowerCase())
            }
          >
            {navButs.b4}
          </button>

          <div className="bg-red-700 text-white rounded-4xl text-center w-[10rem] text-xl">
            <button
              className="p-2"
              onClick={() => {
                dispatch(removetoken());

                // localStorage.removeItem("token");
                // localStorage.removeItem("role");
                window.location.reload();
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftSide;
