// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center p-3 mt-5">
      <p className="mb-0">© {new Date().getFullYear()} MyShop. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
