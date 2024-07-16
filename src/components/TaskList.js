import React, { useState } from "react";

const TaskList = ({ tasks, completeTask, removeTask }) => {
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
    <div>
      <h3>Tasks</h3>
      <ul className="list-group mb-4 ">
        {currentTasks.map((task, index) => (
          <li
            key={index}
            className="list-group-item  d-flex justify-content-between align-items-center "
          >
            <span>{task.text}</span>
            <span>{task.addedAt.toLocaleString()}</span>
            <div>
              <button
                onClick={() => completeTask(indexOfFirstTask + index)}
                className="btn btn-success me-2"
              >
                Complete
              </button>
              <button
                onClick={() => removeTask(indexOfFirstTask + index)}
                className="btn btn-danger"
              >
                Remove
              </button>
            </div>
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

export default TaskList;
