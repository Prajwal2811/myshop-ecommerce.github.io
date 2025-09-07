// src/components/CategoryWiseProducts.jsx
import React from "react";
import ProductCard from "./ProductCard";

const CategoryWiseProducts = ({ category, products }) => {
  return (
    <div className="mb-5">
      <h3 className="mb-3">{category}</h3>
      <div className="row">
        {products.map((p) => (
          <div className="col-md-3 mb-4" key={p.id}>
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryWiseProducts;
