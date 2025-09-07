// src/components/FeaturedProducts.jsx
import React from "react";
import ProductCard from "./ProductCard";

const FeaturedProducts = ({ products }) => {
  const featured = products.slice(0, 4); // show first 4 as featured
  return (
    <div className="mb-5">
      <h3 className="mb-3">Featured Products</h3>
      <div className="row">
        {featured.map((p) => (
          <div className="col-md-3 mb-4" key={p.id}>
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
