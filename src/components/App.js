import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES } from "../data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState([]); // Add state for tasks

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Function to delete a task by its index
  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <NewTaskForm
        categories={CATEGORIES.filter((category) => category !== "All")}
        tasks={tasks} 
      />
      <TaskList
        selectedCategory={selectedCategory}
        tasks={tasks} /
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;



