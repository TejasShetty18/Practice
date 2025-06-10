import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCard from "./components/HomeCard";
import JobListings from "./components/jobListings";
import ViewAllJobs from "./components/ViewAllJobs";

const App = () => {
  return (
    <>
      <Navbar />

      {/* <!-- Hero --> */}
      <Hero title={"testing title"} para={"testing para"} />

      {/* <!-- Developers and Employers --> */}
      <HomeCard />

      {/* <!-- Browse Jobs --> */}
      <JobListings />

      <ViewAllJobs />
    </>
  );
};

export default App;
