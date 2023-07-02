"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import './page.css'
import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/Header/Header";
import { GoPencil } from "react-icons/go";
import DeleteStudentButton from "@/components/DeleteStudentButton/DeleteStudentButton";
import { IoMdSearch } from 'react-icons/io';
import AddStudentForm from "@/components/AddStudentForm/AddStudentForm";
import UpdateStudentForm from "@/components/UpdateStudentForm/UpdateStudentForm";
import Pagination from "@/components/Pagination/Pagination";
import { useRouter } from 'next/navigation';
import querystring from 'querystring';
interface Student {
  id: string | number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image: string;
  domain: string;
  company: { name: string };
}

function Students() {
  const [students, setStudents] = useState<Student[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const router = useRouter();
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    const { query } = router as any;
    const page = query?.page ? Number(query.page) : 1;
    setCurrentPage(page);
    fetchStudents();
  }, [router]);
  


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

  const indexOfLastStudent = currentPage * rowsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - rowsPerPage;
  const currentStudents = filteredStudents.slice(
    indexOfFirstStudent,
    indexOfLastStudent
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

  const openUpdateModal = (student: Student) => {
    setSelectedStudent(student);
    setShowUpdateModal(true);
  };

  const closeUpdateModal = () => {
    setSelectedStudent(null);
    setShowUpdateModal(false);
  };

  const updateStudent = async (updatedStudent: Student) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/users/${updatedStudent.id}`,
        {
          method: "PUT", // or 'PATCH'
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: updatedStudent.firstName,
            lastName: updatedStudent.lastName,
            email: updatedStudent.email,
            phone: updatedStudent.phone,
            domain: updatedStudent.domain,
            company: { name: updatedStudent.company.name },
          }),
        }
      );
      const data = await response.json();

      // Update the corresponding student in the `students` state
      const updatedStudents = students.map((student) => {
        if (student.id === data.id) {
          return data;
        }
        return student;
      });

      setStudents(updatedStudents);
      console.log("Student updated:", data);
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addNewStudent = async (student: Student) => {
    try {
      const response = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      });
      const data = await response.json();

      // Update the list of students by inserting the new student at the beginning
      setStudents((prevStudents) => [data, ...prevStudents]);

      console.log("New student added:", data);
    } catch (error) {
      console.error("Error adding new student:", error);
    }
  };

  const handlePageChange = (page: number) => {
    const queryString = querystring.stringify({ page });
    const url = `/students?${queryString}`;
    router.push(url);
    setCurrentPage(page);
  };
  
  

  const handleRowsPerPageChange = (rowsPerPage: number) => {
    setRowsPerPage(rowsPerPage);
  };

  return (
    <section className="studentsPage">
      <Navbar />

      <div className="studentsOverview">
        <Header />

        <div className="studentsPageTop">
          <h1>Students List</h1>
          <div className="studentsPageTopRight">
            {/* <div className="searchIcon"> */}
            <IoMdSearch />
            <input
              type="search"
              id="search"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {/* </div> */}

            {showModal ? (
              <AddStudentForm
                onAddStudent={addNewStudent}
                onCloseModal={closeModal}
              />
            ) : (
              <button className="add-student-button" onClick={openModal}>
                ADD NEW STUDENT
              </button>
            )}
          </div>
        </div>

        <div id="studentsList">
          <table className="border border-separate border-spacing-y-3 ">
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

            <tbody className="border rounded-lg">
              {currentStudents.map((student) => (
                <tr key={student.id} className="">
                  <td className="">
                    <Image
                      src={student.image}
                      alt="student picture"
                      width={65}
                      height={55}
                    />
                    </td>
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
                    <GoPencil style={{ height: "19px", width: "19px", color: "#FEAF00", marginRight: "1em", cursor: "pointer"}}
                      onClick={() => openUpdateModal(student)}
                    />
                  </td>
                  <td className="">
                    <DeleteStudentButton
                      studentId={student.id}
                      onDeleteStudent={(deletedStudentId) => {
                        const updatedStudents = students.filter(
                          (student) => student.id !== deletedStudentId
                        );
                        setStudents(updatedStudents);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredStudents.length / rowsPerPage)}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleRowsPerPageChange}
          onPageChange={handlePageChange}
        />

      </div>

      {/* Update Student Modal */}
      {showUpdateModal && selectedStudent !== null && (
        <UpdateStudentForm
          student={selectedStudent}
          onUpdateStudent={updateStudent}
          onCloseModal={closeUpdateModal}
        />
      )}
    </section>
  );
}

export default Students;
