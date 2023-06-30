import React, { useState } from "react";

interface Student {
  id: string | number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    domain: string;
    company: { name: string };
  }

interface AddStudentFormProps {
  onAddStudent: (student: Student) => void;
  onCloseModal: () => void;
}

const AddStudentForm: React.FC<AddStudentFormProps> = ({
  onAddStudent,
  onCloseModal,
}) => {
  const [newStudent, setNewStudent] = useState<Student>({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    domain: "",
    company: { name: "" },
  });

  const handleFormChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setNewStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const addNewStudent = (event: React.FormEvent) => {
    event.preventDefault();
    onAddStudent(newStudent);
    onCloseModal();
    clearForm();
  };

  const clearForm = () => {
    setNewStudent({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      domain: "",
      company: { name: "" },
    });
  };

  return (
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
            <button type="button" onClick={onCloseModal}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudentForm;
