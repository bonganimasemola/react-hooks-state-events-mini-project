import React from "react";

function Task({ task }) {
  const { category, text } = task;

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete">delete</button>
    </div>
  );
}

export default Task;

