import React from "react";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import styles from "./pagination.module.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  rowsPerPage: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (rowsPerPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
}) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newRowsPerPage = parseInt(e.target.value, 10);
    onRowsPerPageChange(newRowsPerPage);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`${i === currentPage ? styles.active : ''}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <div className={styles.pagination}>

      <div className={styles.paginationInfo}>
        <span>Rows per page:</span>
        <select className={styles.paginationSelect}
          value={rowsPerPage}
          onChange={handleRowsPerPageChange}
        >
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="10">10</option>
        </select>
      </div>

      <ul>

        <div className={styles.paginationNumbers}>
        {renderPageNumbers()}
        </div>

        <li className={currentPage === 1 ? "disabled" : ""}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <RiArrowLeftSLine style={{ height: "2em", width: "2em", color: "#9FA2B4", }} />
        </li>

        <li className={currentPage === totalPages ? "disabled" : ""}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <RiArrowRightSLine style={{ height: "2em", width: "2em", color: "#9FA2B4", }} />
        </li>
        
      </ul>
    </div>
  );
};

export default Pagination;
