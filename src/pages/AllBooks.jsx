import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BookCard from "../components/BookCard";

const AllBooks = () => {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const response = await axios.get('Backend endpoint link for all books added');
    // console.table(response.data);
    setBooks(response.data);
  }

  useEffect(() => {
    getBooks();
  }, []);
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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
              return (
                <BookCard key={i} />
              );
            })}
          </div>
        </div>
      </section>
      <Footer />

    </div>

  );
};

export default AllBooks;
