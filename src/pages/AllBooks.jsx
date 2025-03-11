import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router";

const AllBooks = () => {
  return (
    <div>
      <NavBar />
      <section>
      <div class="flex flex-col justify-center items-center mb-10 gap-y-2">
      <h2 class="text-[#3D81F0]">POPULAR BOOKS</h2>
      <h2 class="text-3xl md:text-5xl text-[#3D81F0] font-bold">Special Books</h2>
      <div class="border border-[#3D81F0] my-5 w-[10%]"></div>
    </div>
    <div className=" bg-gray-100">
    <div className="grid grid-cols-4 auto-rows-auto gap-8 w-[90%] mx-auto">
      <div className="bg-white rounded-xl shadow-2xl h-90 mt-8">
        <div className="h-[60%]">
        <p>Picture of Book</p>
        </div>
        <div className="mb-5 w-[90%] mx-auto border-t border-gray-300 py-3">
        <h3>Title: In The Chest Of A Woman</h3>
        {/* Status: Available or Not Available */}
        <p>Status of Book</p>
        </div>
        <Link className="ml-4 bg-gradient-to-r from-[#056d80] from-10% to-blue-950 to-90% hover:bg-gradient-to-l px-10 py-3 rounded-lg text-white text-center hover:font-extrabold">Read More</Link>
      </div>
      <div className="bg-white rounded-xl shadow-2xl h-90 mt-8">
        <div className="h-[60%]">
        <p>Picture of Book</p>
        </div>
        <div className="mb-5 w-[90%] mx-auto border-t border-gray-300 py-3">
        <h3>Title: In The Chest Of A Woman</h3>
        {/* Status: Available or Not Available */}
        <p>Status of Book</p>
        </div>
        <Link className="ml-4 bg-gradient-to-r from-[#056d80] from-10% to-blue-950 to-90% hover:bg-gradient-to-l px-10 py-3 rounded-lg text-white text-center hover:font-extrabold">Read More</Link>
      </div>
      <div className="bg-white rounded-xl shadow-2xl h-90 mt-8">
        <div className="h-[60%]">
        <p>Picture of Book</p>
        </div>
        <div className="mb-5 w-[90%] mx-auto border-t border-gray-300 py-3">
        <h3>Title: In The Chest Of A Woman</h3>
        {/* Status: Available or Not Available */}
        <p>Status of Book</p>
        </div>
        <Link className="ml-4 bg-gradient-to-r from-[#056d80] from-10% to-blue-950 to-90% hover:bg-gradient-to-l px-10 py-3 rounded-lg text-white text-center hover:font-extrabold">Read More</Link>
      </div>
      <div className="bg-white rounded-xl shadow-2xl h-90 mt-8">
        <div className="h-[60%]">
        <p>Picture of Book</p>
        </div>
        <div className="mb-5 w-[90%] mx-auto border-t border-gray-300 py-3">
        <h3>Title: In The Chest Of A Woman</h3>
        {/* Status: Available or Not Available */}
        <p>Status of Book</p>
        </div>
        <Link className="ml-4 bg-gradient-to-r from-[#056d80] from-10% to-blue-950 to-90% hover:bg-gradient-to-l px-10 py-3 rounded-lg text-white text-center hover:font-extrabold">Read More</Link>
      </div>
      <div className="bg-white rounded-xl shadow-2xl h-90">
        <div className="h-[60%]">
        <p>Picture of Book</p>
        </div>
        <div className="mb-5 w-[90%] mx-auto border-t border-gray-300 py-3">
        <h3>Title: In The Chest Of A Woman</h3>
        {/* Status: Available or Not Available */}
        <p>Status of Book</p>
        </div>
        <Link className="ml-4 bg-gradient-to-r from-[#056d80] from-10% to-blue-950 to-90% hover:bg-gradient-to-l px-10 py-3 rounded-lg text-white text-center hover:font-extrabold">Read More</Link>
      </div>
      <div className="bg-white rounded-xl shadow-2xl h-90">
        <div className="h-[60%]">
        <p>Picture of Book</p>
        </div>
        <div className="mb-5 w-[90%] mx-auto border-t border-gray-300 py-3">
        <h3>Title: In The Chest Of A Woman</h3>
        {/* Status: Available or Not Available */}
        <p>Status of Book</p>
        </div>
        <Link className="ml-4 bg-gradient-to-r from-[#056d80] from-10% to-blue-950 to-90% hover:bg-gradient-to-l px-10 py-3 rounded-lg text-white text-center hover:font-extrabold">Read More</Link>
      </div>
      <div className="bg-white rounded-xl shadow-2xl h-90">
        <div className="h-[60%]">
        <p>Picture of Book</p>
        </div>
        <div className="mb-5 w-[90%] mx-auto border-t border-gray-300 py-3">
        <h3>Title: In The Chest Of A Woman</h3>
        {/* Status: Available or Not Available */}
        <p>Status of Book</p>
        </div>
        <Link className="ml-4 bg-gradient-to-r from-[#056d80] from-10% to-blue-950 to-90% hover:bg-gradient-to-l px-10 py-3 rounded-lg text-white text-center hover:font-extrabold">Read More</Link>
      </div>
      <div className="bg-white rounded-xl shadow-2xl h-90">
        <div className="h-[60%]">
        <p>Picture of Book</p>
        </div>
        <div className="mb-5 w-[90%] mx-auto border-t border-gray-300 py-3">
        <h3>Title: In The Chest Of A Woman</h3>
        {/* Status: Available or Not Available */}
        <p>Status of Book</p>
        </div>
        <Link className="ml-4 bg-gradient-to-r from-[#056d80] from-10% to-blue-950 to-90% hover:bg-gradient-to-l px-10 py-3 rounded-lg text-white text-center hover:font-extrabold">Read More</Link>
      </div>
      
    </div>
    </div>
      </section>
      <Footer />

    </div>

  );
};

export default AllBooks;
