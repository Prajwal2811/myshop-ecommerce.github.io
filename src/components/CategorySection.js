// src/components/CategorySection.jsx
import React from "react";

const CategorySection = ({ categories, onSelect }) => {
  return (
    <div className="mb-5">
      <h3 className="mb-3">Shop by Category</h3>
      <div className="row">
        {categories.map((cat) => (
          <div
            key={cat}
            className="col-md-3 mb-3"
            onClick={() => onSelect(cat)}
            style={{ cursor: "pointer" }}
          >
            <div className="card text-center shadow-sm p-3">
              <h5>{cat}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
