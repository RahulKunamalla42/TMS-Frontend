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
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import CreateTask from "./pages/Home/Tasks/CreateTask.jsx";
import AssignedTasks from "./pages/Home/Tasks/AssignedTasks.jsx";
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
        path: "/assigntask/:taskId?",
        element: <AsignTask />,
      },
      {
        path: "/alltasks",
        element: <AllTasks />,
      },
      {
        path: "/completedtasks",
        element: <CompletedTasks />,
      },
      {
        path: "/submittedtasks",
        element: <SubmittedTasks />,
      },
      {
        path: "/submittask/:taskId?",
        element: <SubmitTask />,
      },
      {
        path: "/createtask",
        element: <CreateTask />,
      },
      {
        path: "/assignedtasks",
        element: <AssignedTasks />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
