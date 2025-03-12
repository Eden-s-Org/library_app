import React from "react";
import { Link } from "react-router";
import { useState, useEffect } from "react";


const NavBar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav   className={`fixed top-0 left-0 w-full flex flex-row justify-between px-10 md:px-20 py-4 transition-all duration-300 ${
      scrolling ? "bg-white shadow-md" : "bg-transparent"
    }`}
  >
      <div className=" flex items-center justify-between">
        <h1 className="text-xl font-bold text-blue-950">EdenBOOKS</h1>
      </div>
      <div className="md:flex gap-6 items-center text-blue-950">
        <Link to={"/"}>Home</Link>
        <Link to={"/allbooks"}>All Books</Link>
        <Link to={"/addbooks"}>Add Book</Link>
<div className="flex items-center border border-blue-900 rounded-lg"> 
        <input
          type="text"
          placeholder="Search Book"
          className="   rounded outline-none w-full  "
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5  my-1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
</div>
       
        <button className="px-6 py-1.5 rounded-lg text-white bg-blue-950">
          LOG IN
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
// outline-none w-full bg-transparent