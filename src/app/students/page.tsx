"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import { GoPencil } from "react-icons/go";
import { FiTrash } from "react-icons/fi";

interface Student {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  domain: string;
  company: { name: string };
}

function Students() {
  const [students, setStudents] = useState<Student[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [newStudent, setNewStudent] = useState<Student>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    domain: "",
    company: { name: "" },
  });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setStudents(data.users); // Access "users" array in the response
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredStudents = students.filter(
    (student) =>
      student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const highlightMatch = (text: string, search: string) => {
    const regex = new RegExp(`(${search})`, "gi");
    const parts = text.split(regex);
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === search.toLowerCase() ? (
            <span key={index} className="highlight">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </>
    );
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    clearForm();
  };

  const clearForm = () => {
    setNewStudent({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      domain: "",
      company: { name: "" },
    });
  };

  const handleFormChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setNewStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const addNewStudent = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newStudent),
      });
      const data = await response.json();

    // Update the list of students by inserting the new student at the beginning
    setStudents((prevStudents) => [data, ...prevStudents]);
    
      clearForm();
      closeModal();
      console.log("New student added:", data);
    } catch (error) {
      console.error("Error adding new student:", error);
    }
  };

  return (
    <section className="studentsPage">
      <Navbar />

      <div className="studentsOverview">
        <Header />

        <div className="studentsPageTop">
          <h1>Students List</h1>
          <div className="studentsPageTopRight">
            <input
              type="search"
              id="search"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />

            {showModal ? (
              <div className="modal">
                <div className="modalContent">
                  <h2>Add New Student</h2>

                  <form onSubmit={addNewStudent}>
                    <input
                      type="text"
                      name="firstName"
                      value={newStudent.firstName}
                      onChange={handleFormChange}
                      placeholder="First Name"
                    />

                    <input
                      type="text"
                      name="lastName"
                      value={newStudent.lastName}
                      onChange={handleFormChange}
                      placeholder="Last Name"
                    />

                    <input
                      type="email"
                      name="email"
                      value={newStudent.email}
                      onChange={handleFormChange}
                      placeholder="Email"
                    />

                    <input
                      type="tel"
                      name="phone"
                      value={newStudent.phone}
                      onChange={handleFormChange}
                      placeholder="Phone"
                    />
                    
                    <div className="modalButtons">
                      <button type="submit">Save</button>
                      <button type="button" onClick={closeModal}>
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              <button className="add-student-button" onClick={openModal}>
                ADD NEW STUDENT
              </button>
            )}
          </div>
        </div>

        <div className="studentsPageTable">
          <table className="table">
            <thead>
              <tr>
                <th>{/*Picture */}</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
                <th>Company Name</th>
                <th>{/*Icon */}</th>
                <th>{/*Icon */}</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.map((student, index) => (
                <tr key={index}>
                  <td id="picture">Picture</td>
                  <td>
                    {highlightMatch(
                      `${student.firstName} ${student.lastName}`,
                      searchTerm
                    )}
                  </td>
                  <td>{highlightMatch(student.email, searchTerm)}</td>
                  <td>{highlightMatch(student.phone, searchTerm)}</td>
                  <td>{highlightMatch(student.domain, searchTerm)}</td>
                  <td>{highlightMatch(student.company.name, searchTerm)}</td>
                  <td>
                    <GoPencil
                      style={{
                        height: "19px",
                        width: "19px",
                        color: "#FEAF00",
                        marginRight: "1em",
                      }}
                    />
                  </td>
                  <td>
                    <FiTrash
                      style={{
                        height: "19px",
                        width: "19px",
                        color: "#FEAF00",
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Students;
