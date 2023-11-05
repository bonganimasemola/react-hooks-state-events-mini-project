import React from "react";
import Task from "./Task";
import { TASKS } from "../data";

function TaskList({ selectedCategory }) {
  const tasks = selectedCategory === "All"
    ? TASKS
    : TASKS.filter(task => task.category === selectedCategory);

  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task key={index} task={task} />
      ))}
    </div>
  );
}

export default TaskList;


