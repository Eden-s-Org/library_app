import React from "react";

const NavBar = () => {
  return (
    <nav className="flex flex-row justify-between px-20 py-6 fixed top-0 left-0 w-full">
      <div className=" flex items-center justify-between">
        <h1 className="text-xl font-bold text-blue-950">EdenBOOKS</h1>
      </div>
      <div className="md:flex gap-6 items-center text-blue-950">
        <span>Home</span>
        <span>All Books</span>
        <span>Add Book</span>
        <input
          type="text"
          placeholder="Search Book"
          className=" border border-blue-950 p-2 rounded"
        />
        <button className="px-6 py-1.5 rounded-lg text-white bg-blue-950">
          LOG IN
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
