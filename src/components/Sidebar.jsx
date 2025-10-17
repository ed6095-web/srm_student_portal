import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaMoneyCheck, FaUser, FaMedal, FaBookOpen, FaCheckCircle, FaRedo, FaCalendarAlt, FaFileAlt, FaHotel, FaTruckMoving, FaRupeeSign, FaClipboardList, FaIdCard, FaTicketAlt } from "react-icons/fa";

const menuItems = [
  { label: "Dashboard", icon: <FaTachometerAlt />, route: "/" },
  { label: "Fee Payment", icon: <FaMoneyCheck /> },
  { label: "Personal Details", icon: <FaUser /> },
  { label: "Grade / Mark & Credit", icon: <FaMedal /> },
  { label: "Course Status", icon: <FaBookOpen /> },
  { label: "Exam Provisional Results", icon: <FaCheckCircle /> },
  { label: "Attendance Details", icon: <FaClipboardList /> },
  { label: "Exam Revaluation Results", icon: <FaRedo /> },
  { label: "Timetable", icon: <FaCalendarAlt /> },
  { label: "Internal Mark Details", icon: <FaFileAlt /> },
  { label: "Hostel Booking", icon: <FaHotel /> },
  { label: "Hostel Details", icon: <FaHotel />, route: "/hostel-details" },
  { label: "Transport Details", icon: <FaTruckMoving /> },
  { label: "Finance Details", icon: <FaRupeeSign /> },
  { label: "Notice Board", icon: <FaClipboardList /> },
  { label: "ABC ID Generation", icon: <FaIdCard /> },
  { label: "Transport Booking", icon: <FaTruckMoving /> },
  { label: "Exam HallTicket", icon: <FaTicketAlt /> }
];

function Sidebar({ onLinkClick }) {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      
      const dayName = days[now.getDay()];
      const day = String(now.getDate()).padStart(2, '0');
      const month = months[now.getMonth()];
      const year = now.getFullYear();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');

      setCurrentDateTime(`${dayName} ${day}-${month}-${year} ${hours}:${minutes}:${seconds}`);
    };

    updateDateTime(); // Initial call
    const interval = setInterval(updateDateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <aside className="sidebar">
      <nav>
        <ul>
          {menuItems.map((item, idx) =>
            item.route ? (
              <li key={idx}>
                <NavLink
                  to={item.route}
                  className={({ isActive }) =>
                    "sidebar-link" + (isActive ? " active" : "")
                  }
                  end={item.route === "/"}
                  onClick={onLinkClick}
                >
                  <span className="sidebar-icon">{item.icon}</span>
                  {item.label}
                </NavLink>
              </li>
            ) : (
              <li key={idx}>
                <span className="sidebar-link static">
                  <span className="sidebar-icon">{item.icon}</span>
                  {item.label}
                </span>
              </li>
            )
          )}
        </ul>
      </nav>
      <div className="sidebar-footer">
        <div className="footer-strip">
          <div>
            <strong>RA2411026011355</strong><br />
            DEBARPAN CHAUDHURI
          </div>
          <div style={{ fontSize: "0.97em", marginTop: "7px", opacity: 0.85 }}>
            {currentDateTime}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
