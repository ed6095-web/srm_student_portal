import React from "react";
import "../styles/ProfileBox.css";

function StudentProfileBox() {
  const student = {
    name: "DEBARPAN CHAUDHURI",
    studentId: "668377",
    registerNo: "RA2411026011355",
    email: "dc9333@srmist.edu.in",
    institution: "Faculty of Engineering and Technology, Kattankulathur",
    program:
      "B.Tech.-Computer Science and Engineering with specialization in Artificial Intelligence and Machine Learning [UG - FT - ACADEMIC]",
    facultyAdvisor: "Joseph James S [josephjs@srmist.edu.in]",
    academicAdvisor: "Dr. Arun C [arunc@srmist.edu.in]",
  };

  return (
    <section className="profile-box">
      <div className="profile-header">Student Profile</div>
      <table className="profile-table">
        <tbody>
          <tr>
            <td>Student Name</td>
            <td className="profile-highlight">{student.name}</td>
          </tr>
          <tr>
            <td>Student ID</td>
            <td className="profile-highlight">{student.studentId}</td>
          </tr>
          <tr>
            <td>Register No.</td>
            <td className="profile-highlight">{student.registerNo}</td>
          </tr>
          <tr>
            <td>Email ID</td>
            <td>
              <span className="profile-email">{student.email}</span>
            </td>
          </tr>
          <tr>
            <td>Institution</td>
            <td>{student.institution}</td>
          </tr>
          <tr>
            <td>Program</td>
            <td>{student.program}</td>
          </tr>
          <tr>
            <td>Faculty Advisor</td>
            <td>{student.facultyAdvisor}</td>
          </tr>
          <tr>
            <td>Academic Advisor</td>
            <td>{student.academicAdvisor}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default StudentProfileBox;
