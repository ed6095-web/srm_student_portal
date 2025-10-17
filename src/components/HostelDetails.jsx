import React, { useState } from "react";
import "../styles/HostelDetails.css";

const TABS = [
  "Payment Transaction Log",
  "Hostel Booking Details",
  "Hostel Cancellation",
  "Hostel Vacate Request"
];

export default function HostelDetails() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="hostel-details">
      <div className="hostel-tabs">
        {TABS.map((label, idx) => (
          <button
            key={label}
            className={`hostel-tab ${activeTab === idx ? "active" : ""}`}
            onClick={() => setActiveTab(idx)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {/* Payment Transaction Log Tab */}
        {activeTab === 0 && (
          <div className="hostel-box">
            <h3>Hostel Details</h3>
            <table>
              <thead>
                <tr>
                  <th>Verify</th>
                  <th>Student Id</th>
                  <th>SRM Transaction Id</th>
                  <th>Bank Transaction Id</th>
                  <th>Total Amount</th>
                  <th>Payment Status</th>
                  <th>Transaction Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>-</td>
                  <td>
                    <a href="#" style={{ color: "#1976d2", textDecoration: "none" }}>
                      654322
                    </a>
                  </td>
                  <td>654322S11022025100127790R451</td>
                  <td>7392484496676215406960</td>
                  <td>125500</td>
                  <td>
                    Success<br />- No Error
                  </td>
                  <td>
                    11-02-2025<br />10:01:27
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Hostel Booking Details Tab */}
        {activeTab === 1 && (
          <div className="hostel-box">
            <h3>Hostel Details</h3>
            <table>
              <thead>
                <tr>
                  <th>Hostel Name</th>
                  <th>Room No.</th>
                  <th>Allocated Date</th>
                  <th>Academic Year</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Kaari</td>
                  <td>612</td>
                  <td>14-Aug-2024</td>
                  <td>2024-2025</td>
                </tr>
                <tr>
                  <td>Oori</td>
                  <td>519</td>
                  <td>11-Feb-2025</td>
                  <td>2025-2026</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Hostel Cancellation Tab */}
        {activeTab === 2 && (
          <div className="hostel-box">
            <h3>Hostel Cancellation</h3>
            <p style={{ padding: "20px", color: "#666" }}>
              No cancellation records available.
            </p>
          </div>
        )}

        {/* Hostel Vacate Request Tab */}
        {activeTab === 3 && (
          <div className="hostel-box">
            <h3>Hostel Vacate Request</h3>
            <p style={{ padding: "20px", color: "#666" }}>
              No vacate requests found.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
