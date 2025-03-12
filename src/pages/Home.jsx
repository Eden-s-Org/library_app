import React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router";
import mockingbird from "../assets/images/mockingbird.png";
import thronespic2 from "../assets/images/thronespic2.png";
import annefrank from "../assets/images/annefrank.png";
import bookthief from "../assets/images/bookthief.png";
import { FaSearch, FaUserLock, FaBook } from "react-icons/fa";


const Home = () => {
  return (
    <div>
      <NavBar />
      <section className="mt-16 ">
        <div className="bg-[url(assets/images/heropic1.png)] h-[700px] bg-cover bg-center flex items-center ps-10">
          <div>
            <h1 className="text-4xl font-bold  text-white animate-bounce">
              Welcome to EdenBOOKS <br /> Your Smart Library Companion
            </h1>
            <span className="block mt-2 text-white text-2xl ">
              Effortless Library Management, Anytime, Anywhere
            </span>
          </div>
        </div>
      </section>
      <section className="">
        <h1 className="text-3xl font-bold text-center text-blue-950 py-15">
          Popular Books
        </h1>
        <div className="grid grid-cols-4 py-5 ps-8">
          <div className="bg-blue-950 text-white shadow-lg rounded-lg p-4 hover:scale-105 transition-transform h-[400px] w-[300px]">
            <h3 className="text-lg font-semibold text-white">
              Title: A Game of Thrones
            </h3>
            <p className="text-white">by George R.R. Martin</p>
            <img
              src={thronespic2}
              alt="Gameofthrones"
              className="h-[300px] w-[300px] object-cover rounded-md mb-4"
            />
          </div>
          <div className="bg-blue-950 text-white shadow-lg rounded-lg p-4 hover:scale-105 transition-transform h-[400px] w-[300px]">
            <h3 className="text-lg font-semibold text-white">
              Title: To Kill a Mockingbird
            </h3>
            <p className="text-white">by Harper Lee</p>
            <img
              src={mockingbird}
              alt="Mockingbird"
              className="h-[300px] w-[300px] object-cover rounded-md mb-4"
            />
            ;
          </div>
          <div className="bg-blue-950 text-white shadow-lg rounded-lg p-4 hover:scale-105 transition-transform h-[400px] w-[300px]">
            <h3 className="text-lg font-semibold text-white">
              Title: The Diary of a Young Girl
            </h3>
            <p className="text-white">by Anne Frank</p>
            <img
              src={annefrank}
              alt="annefrank"
              className="h-[300px] w-[300px] object-cover rounded-md mb-4"
            />
          </div>
          <div className="bg-blue-950 text-white shadow-lg rounded-lg p-4 hover:scale-105 transition-transform h-[400px] w-[300px]">
            <h3 className="text-lg font-semibold text-white">
              Title: The Book Thief
            </h3>
            <p className="text-white">by Markus Zusak</p>
            <img
              src={bookthief}
              alt="Bookthief"
              className="h-[300px] w-[300px] object-cover rounded-md mb-4"
            />
          </div>
        </div>

        <div className="flex justify-center items-center py-10">
          <Link
            to={"/book"}
            className="ml-4 bg-gradient-to-r from-[#056d80] from-10% to-blue-950 to-90% hover:bg-gradient-to-l px-10 py-3 rounded-lg text-white text-center hover:font-extrabold"
          >
            View More Books
          </Link>
        </div>
      </section>

      <section className="bg-gray-200 py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-950 mb-6">What People Say</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-md">
            <p className="text-gray-700 italic">
              "Great library App"
            </p>
            <div className="flex items-center mt-4">
             
              <div>
                <h4 className="text-gray-900 font-semibold">William King</h4>
                <p className="text-sm text-gray-500">Senior Designer</p>
              </div>
            </div>
          </div>
        
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <p className="text-gray-700 italic">
              "Working with EdenBooks was a fantastic experience. Their attention to detail and design skills are top-notch!"
            </p>
            <div className="flex items-center mt-4">
             
              <div>
                <h4 className="text-gray-900 font-semibold">Patterson</h4>
                <p className="text-sm text-gray-500">Senior Designer</p>
              </div>
            </div>
          </div>

         
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <p className="text-gray-700 italic">
              "EdenBooks is a skilled and dedicated developer. Their work truly speaks for itself."
            </p>
            <div className="flex items-center mt-4">
             
              <div>
                <h4 className="text-gray-900 font-semibold">RAB</h4>
                <p className="text-sm text-gray-500">Tech Lead</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-blue-950 mb-10">
          Explore Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        
          <div className="bg-white p-8 shadow-lg rounded-lg flex flex-col items-center">
            <FaSearch className="text-5xl text-blue-950" />
            <h3 className="text-lg font-semibold mt-4">Search</h3>
            <p className="text-gray-600 text-sm mt-2 text-center">
              Find books easily and read them with one click.
            </p>
          </div>

      
          <div className="bg-white p-8 shadow-lg rounded-lg flex flex-col items-center">
            <FaUserLock className="text-5xl text-blue-950" />
            <h3 className="text-lg font-semibold mt-4">Log In</h3>
            <p className="text-gray-600 text-sm mt-2 text-center">
              Create an account to enjoy benefits in the library system.
            </p>
          </div>

        
          <div className="bg-white p-8 shadow-lg rounded-lg flex flex-col items-center">
            <FaBook className="text-5xl text-blue-950" />
            <h3 className="text-lg font-semibold mt-4">Add Books</h3>
            <p className="text-gray-600 text-sm mt-2 text-center">
              Upload books to your collection.
            </p>
          </div>
        </div>
      </div>
    </section>
      <Footer />
    </div>
  );
};

export default Home;
