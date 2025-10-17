import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import HostelDetails from "./components/HostelDetails";
import "./styles/App.css";

function App() {
  const [showSidebar, setShowSidebar] = useState(true);

  // Show sidebar always on large screens; mobile toggles
  const handleToggleSidebar = () => setShowSidebar((prev) => !prev);

  return (
    <div className="app-wrapper">
      <TopBar onToggleSidebar={handleToggleSidebar} />
      <div className="app-container">
        {showSidebar && <Sidebar />}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/hostel-details" element={<HostelDetails />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
