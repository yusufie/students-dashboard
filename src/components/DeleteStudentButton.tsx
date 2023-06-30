"use client";
import React, { useState }  from "react";
import { FiTrash } from "react-icons/fi";

interface DeleteStudentButtonProps {
  studentId: string | number;
  onDeleteStudent: (studentId: string | number) => void;
}

const DeleteStudentButton: React.FC<DeleteStudentButtonProps> = ({
  studentId,
  onDeleteStudent,
}) => {

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/users/${studentId}`, {
        method: "DELETE",
      });
      const data = await response.json();
      onDeleteStudent(studentId);
      console.log("Student deleted:", data);
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const openConfirmationModal = () => {
    setShowConfirmation(true);
  };

  const closeConfirmationModal = () => {
    setShowConfirmation(false);
  };


  return (
    <>
      <button onClick={openConfirmationModal}>
        <FiTrash
          style={{
            height: "19px",
            width: "19px",
            color: "#FEAF00",
          }}
        />
      </button>

      {showConfirmation && (
        <div className="modal">
          <div className="modalContent">
            <h2>Confirm Delete</h2>
            <p>Are you sure you want to delete this student?</p>
            <div className="modal-buttons">
              <button onClick={handleDelete}>Delete</button>
              <button onClick={closeConfirmationModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteStudentButton;