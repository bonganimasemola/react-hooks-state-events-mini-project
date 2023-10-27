import React from "react";
import { CATEGORIES } from "../data";

function NewTaskForm() {
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
        {CATEGORIES.map((category, index) => (
        <option key={index} value={category}>
        {category}
        </option>
        ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;


