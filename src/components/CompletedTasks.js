import React, { useState } from "react";

const CompletedTasks = ({ tasks }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  const totalPages = Math.ceil(tasks.length / tasksPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="mt-4">
      <h3>Completed Tasks</h3>
      <ul className="list-group mb-4">
        {currentTasks.map((task, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>{task.text}</span>
            <span>{`Completed at: ${task.completedAt.toLocaleString()}`}</span>
          </li>
        ))}
      </ul>
      <nav>
        <ul className="pagination justify-content-center">
          {[...Array(totalPages).keys()].map((number) => (
            <li
              key={number + 1}
              className={`page-item ${
                currentPage === number + 1 ? "active" : ""
              }`}
            >
              <button
                onClick={() => handleClick(number + 1)}
                className="page-link"
              >
                {number + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default CompletedTasks;
