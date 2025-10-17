import React from "react";
import { NavLink, useLocation } from "react-router-dom";
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

function Sidebar() {
  const location = useLocation();

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
            Fri 17-Oct-2025 19:28:11
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
