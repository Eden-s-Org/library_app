import React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router";
import mockingbird from "../assets/images/mockingbird.png";
import gameofthrones1 from "../assets/images/gameofthrones1.png";
import annefrank from "../assets/images/annefrank.png";
import bookthief from "../assets/images/bookthief.png";

const Home = () => {
  
  return (
    <div>
      <NavBar />
      <section className="mt-16">
        <div className="bg-[url(assets/images/heropic.png)] h-[500px] bg-cover bg-center flex items-center ps-10">
          <div>
            <h1 className="text-2xl font-bold  text-blue-950">
              Welcome to EdenBOOKS | Your Smart Library Companion
            </h1>
            <span className="block mt-2 text-blue-950 ">
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
              src={gameofthrones1}
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
          <Link to="/allbooks">
            <button className="px-6 py-1.5 rounded-lg text-white bg-blue-950">
              VIEW ALL BOOKS
            </button>
          </Link>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-950 mb-8">
            How It Works
          </h2>

         

          <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-white p-6 shadow-lg rounded-lg">
              <div className="text-4xl text-blue-950">🔎</div>
              <h3 className="text-lg font-semibold mt-4">Search & Read</h3>
              <p className="text-gray-600 text-sm mt-2">
                Find books easily and read them with one click.
              </p>
            </div>
            
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <div className="text-4xl text-blue-950">📌</div>
              <h3 className="text-lg font-semibold mt-4">Sign Up & Log In</h3>
              <p className="text-gray-600 text-sm mt-2">
                Create an account to enjoy benefits in the library system.
              </p>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg">
              <div className="text-4xl text-blue-950">📚</div>
              <h3 className="text-lg font-semibold mt-4">Add Books</h3>
              <p className="text-gray-600 text-sm mt-2">
                Upload book details and in your collection.
              </p>
            </div>

        

            <div className="bg-white p-6 shadow-lg rounded-lg">
              <div className="text-4xl text-blue-950">✅</div>
              <h3 className="text-lg font-semibold mt-4">Track & Return</h3>
              <p className="text-gray-600 text-sm mt-2">
                Keep track of borrowed books and return them on time.
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
