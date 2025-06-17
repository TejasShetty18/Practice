import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { loadJob } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJob from "./pages/EditJob";

const App = () => {
  //add job
  const AddJob = async (newJob) => {
    console.log("new job is: ", newJob);
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });

    return;
  };

  ///delete job
  const deleteJob = async (id) => {
    console.log("job id is: ", id);
    const deleteRes = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };

  ///update job
  const updateJob = async (job) => {
    console.log("update job is: ", job);
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });

    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={AddJob} />} />
        <Route
          path="/edit-job/:id"
          element={<EditJob updateJobSubmit={updateJob} />}
          loader={loadJob}
        />
        <Route
          path="/jobs/:id"
          element={<JobPage deletedJob={deleteJob} />}
          loader={loadJob}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
