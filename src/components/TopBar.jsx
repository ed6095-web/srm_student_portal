import React from "react";
import "../styles/TopBar.css";

function TopBar({ onToggleSidebar }) {
  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logout clicked");
    // Example: window.location.href = "/login";
  };

  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="hamburger-menu" onClick={onToggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="topbar-logo-block">
          <img
            src="/srmist.png"
            alt="SRM Logo"
            className="topbar-logo"
          />
          <span className="topbar-title">Student Portal</span>
        </div>
      </div>
      <div className="topbar-center">
        <h1>Faculty of Engineering and Technology, Kattankulathur</h1>
      </div>
      <div className="topbar-right">
        <button className="logout-btn" onClick={handleLogout}>
          <span className="logout-icon">⎋</span>
          <span>Logout</span>
        </button>
      </div>
    </header>
  );
}

export default TopBar;
