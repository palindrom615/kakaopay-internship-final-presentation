import React, { useEffect } from "react";
import GitHubCalendar from "../lib/github-calendar";
import "../lib/github-calendar/dist/github-calendar-responsive.css";

const Contribution = () => {
  useEffect(() => {
    GitHubCalendar(".github-container", "nick-615");
  });
  return <div className="github-container" />;
};

export default Contribution;
