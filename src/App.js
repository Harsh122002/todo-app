import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import CompletedTasks from "./components/CompletedTasks";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    const completedTask = newTasks.splice(index, 1)[0];
    completedTask.completedAt = new Date();
    setTasks(newTasks);
    setCompletedTasks([...completedTasks, completedTask]);
  };
  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  return (
    <div className="container mt-5">
      <h1 className="text-center">To-Do List</h1>
      <TaskInput addTask={addTask} />
      <TaskList
        tasks={tasks}
        completeTask={completeTask}
        removeTask={removeTask}
      />
      <CompletedTasks tasks={completedTasks} />
    </div>
  );
};

export default App;
