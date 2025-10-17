import React from "react";
import "../styles/ProfileBox.css";

function StatusProfileBox() {
  // Change path to your actual student photo if needed
  const photo = "/student-photo.jpg";
  const status = "Active";
  return (
    <section className="status-box">
      <div className="photo-holder">
        <img className="profile-photo" src={photo} alt="Student" />
      </div>
      <div className="status-text">
        <span>Current Status: <span className="active-green">{status}</span></span>
        <div className="reload-icon">
          <svg height="20" width="20" viewBox="0 0 20 20" fill="#3a82f7">
            <path d="M2.76 9C3.44 5.88 6.3 3.74 9.5 4.07c3.2.33 5.55 3.17 5.22 6.37-.33 3.2-3.17 5.55-6.37 5.22a6.08 6.08 0 01-4.62-3.4H6v2H2V7h2v2H4a8.08 8.08 0 006.67 5.99c2.92-.28 5.23-2.59 5.5-5.51.27-2.93-1.71-5.5-4.64-5.78C6.59 3.2 3.2 6.12 2.76 9z" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default StatusProfileBox;
