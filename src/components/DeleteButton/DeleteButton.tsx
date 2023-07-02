"use client";
import React, { useState }  from "react";
import styles from './deletebutton.module.css'
import { FiTrash } from "react-icons/fi";

interface DeleteButtonProps {
  studentId: string | number;
  onDeleteStudent: (studentId: string | number) => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({
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
        <FiTrash style={{ height: "19px", width: "19px", color: "#FEAF00", }} />
      </button>

      {showConfirmation && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Confirm Delete</h2>
            <p>Are you sure you want to delete this student?</p>
            <div className={styles.modalButtons}>
              <button onClick={handleDelete}>Delete</button>
              <button onClick={closeConfirmationModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteButton;