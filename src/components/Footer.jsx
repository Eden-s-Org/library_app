import React from "react";

const Footer = () => {
  return (
  <div className="">
  <footer className="bg-gray-800 text-white py-30 text-center mt-10 h-[300px]">
      <p className="text-sm">&copy; {new Date().getFullYear()} EdenBooks Book Management App. All rights reserved.</p>
      <p className="text-xs">Developed by Eden</p>
    </footer>
  </div>
  );
};

export default Footer;
