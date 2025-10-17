import React from "react";

function StudentProfile() {
  // You can replace these with your actual details or make them editable
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
    photo: "/student-photo.jpg", // Place your photo in public/ and name it as 'student-photo.jpg'
    status: "Active"
  };

  return (
    <section className="student-profile">
      <div className="profile-card">
        <div className="profile-main">
          <div className="profile-details">
            <h3>Student Profile</h3>
            <table>
              <tbody>
                <tr>
                  <td>Student Name</td>
                  <td>{student.name}</td>
                </tr>
                <tr>
                  <td>Student ID</td>
                  <td>{student.studentId}</td>
                </tr>
                <tr>
                  <td>Register No.</td>
                  <td>{student.registerNo}</td>
                </tr>
                <tr>
                  <td>Email ID</td>
                  <td>{student.email}</td>
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
          </div>
          <div className="profile-photo-status">
            <img
              className="profile-photo"
              src={student.photo}
              alt="Student"
              />
            <div className="profile-status">
              <span>Current Status: {student.status}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudentProfile;
