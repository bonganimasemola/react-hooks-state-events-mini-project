import React from "react";
import { CATEGORIES } from "../data";

function CategoryFilter({ selectedCategory, handleCategoryClick }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CATEGORIES.map((category, index) => (
        <button
          key={index}
          className={`category-button ${selectedCategory === category ? "selected" : ""}`}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;


