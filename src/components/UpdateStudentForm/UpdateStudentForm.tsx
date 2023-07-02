import React, { useState } from "react";
import './updateform.css'

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

interface UpdateStudentFormProps {
  student: Student;
  onUpdateStudent: (updatedStudent: Student) => void;
  onCloseModal: () => void;
}

const UpdateStudentForm: React.FC<UpdateStudentFormProps> = ({
  student,
  onUpdateStudent,
  onCloseModal,
}) => {
  const [updatedStudent, setUpdatedStudent] = useState<Student>(student);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUpdatedStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onUpdateStudent(updatedStudent);
    onCloseModal();
  };

  return (
    <div className="modal">
      <div className="modalContent">
        <h2>Update Student</h2>
        <form onSubmit={handleSubmit}>
          
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={updatedStudent.firstName}
              onChange={handleInputChange}
            />
         
          
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={updatedStudent.lastName}
              onChange={handleInputChange}
            />
          
          
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={updatedStudent.email}
              onChange={handleInputChange}
            />

            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={updatedStudent.phone}
              onChange={handleInputChange}
            />

            <label htmlFor="domain">Domain</label>
            <input
              type="text"
              id="domain"
              name="domain"
              value={updatedStudent.domain}
              onChange={handleInputChange}
            />

            <label htmlFor="company">Company Name</label>
            <input
              type="text"
              id="company"
              name="company"
              value={updatedStudent.company.name}
              onChange={(event) => {
                const companyName = event.target.value;
                setUpdatedStudent((prevStudent) => ({
                  ...prevStudent,
                  company: { name: companyName },
                }));
              }}
            />

          <div className="modalButtons">

            <button type="submit">Update</button>
            <button type="button" onClick={onCloseModal}>Cancel</button>

          </div>

        </form>
      </div>
    </div>
  );
};

export default UpdateStudentForm;
