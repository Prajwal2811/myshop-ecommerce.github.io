// src/components/Banner.jsx
import React from "react";

const Banner = () => {
  return (
    <div className="bg-light p-5 text-center rounded shadow-sm mb-4">
      <h1 className="display-5 fw-bold">Welcome to MyShop</h1>
      <p className="lead">
        Best deals on electronics, fashion, and more. Shop now and save big!
      </p>
      <button className="btn btn-primary btn-lg">Shop Now</button>
    </div>
  );
};

export default Banner;
