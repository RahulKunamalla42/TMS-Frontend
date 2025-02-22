import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./pages/Home/Welcome.jsx";
import MyTasks from "./pages/Home/Tasks/SubmitTask.jsx";
import AsignTask from "./pages/Home/Tasks/AsignTask.jsx";
import AllTasks from "./pages/Home/Tasks/AllTasks.jsx";
import SubmitTask from "./pages/Home/Tasks/SubmitTask.jsx";
import CompletedTasks from "./pages/Home/Tasks/CompletedTasks.jsx";
import SubmittedTasks from "./pages/Home/Tasks/SubmittedTasks.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "/home",
        element: <Welcome />,
      },
      {
        path: "/mytasks",
        element: <MyTasks />,
      },
      {
        path: "/assigntask",
        element: <AsignTask />,
      },
      {
        path: "/alltasks",
        element: <AllTasks />,
      },
      {
        path: "/completedtasks",
        element: <CompletedTasks submitORapprove={"submit"} />,
      },
      {
        path: "/submittedtasks",
        element: <SubmittedTasks submitORapprove={"approve"} />,
      },
      {
        path: "/submittask",
        element: <SubmitTask />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
