import React from "react";
import Task from "./Task"; 
import { TASKS } from "../data";

function TaskList() {
  
  const tasks = TASKS;

  return (
    <div className="tasks">
      
      {tasks.map((task, index) => (
        <Task key={index} task={task} />
      ))}
    </div>
  );
}

export default TaskList;

