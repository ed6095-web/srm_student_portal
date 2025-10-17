import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import HostelDetails from "./components/HostelDetails";
import "./styles/App.css";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  // Auto-show sidebar on desktop, hide on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setShowSidebar(true);
      } else {
        setShowSidebar(false);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  const handleCloseSidebar = () => {
    if (window.innerWidth <= 900) {
      setShowSidebar(false);
    }
  };

  return (
    <div className="app-wrapper">
      <TopBar onToggleSidebar={handleToggleSidebar} />
      <div className="app-container">
        {showSidebar && (
          <>
            <div className="sidebar-overlay" onClick={handleCloseSidebar}></div>
            <Sidebar onLinkClick={handleCloseSidebar} />
          </>
        )}
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
