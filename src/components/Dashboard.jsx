import React from "react";
import StudentProfileBox from "./StudentProfileBox";
import StatusProfileBox from "./StatusProfileBox";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-layout">
      <div className="profile-left">
        <StudentProfileBox />
      </div>
      <div className="profile-right">
        <StatusProfileBox />
      </div>
    </div>
  );
}

export default Dashboard;
