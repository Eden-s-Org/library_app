import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import PagesLayouts from "../layouts/PagesLayouts";
import ScrollTop from "../components/ScrollTop";
import axios from "axios";

const AllBooks = () => {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const response = await axios.get('https://library-api-t61c.onrender.com/library');
    // console.table(response.data);
    setBooks(response.data);
  }

  useEffect(() => {
    getBooks();
  }, []);
  return (
    <PagesLayouts>
      <section className="my-25">
        <div class="flex flex-col justify-center items-center mb-8 gap-y-2">
          <h2 class="text-blue-950">POPULAR BOOKS</h2>
          
          <h2 class="text-3xl md:text-5xl text-blue-950 font-bold">Special Courses</h2>
          <div class="border border-blue-950 my-5 w-[10%]"></div>
        </div>
        <div className=" bg-gray-50 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 w-[90%] mx-auto">
            {books.map((book) => {
              return (
                <BookCard
                key={book.id}
                  image={book.image}
                  title={book.title}
                  author={book.author}
                  isbn={book.ISBN}
                  pages={book.numberOfPages}
                  // yearofpublication={book.yearOfPublication}


                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="my-25">
        <div class="flex flex-col justify-center items-center mb-8 gap-y-2">
          <h2 class="text-blue-950">POPULAR BOOKS</h2>
          <h2 class="text-3xl md:text-5xl text-blue-950 font-bold">Sales Books</h2>
          <div class="border border-blue-950 my-5 w-[10%]"></div>
        </div>
        <div className=" bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 w-[90%] mx-auto">
          {books.map((book) => {
              return (
                <BookCard
                key={book.id}
                  image={book.image}
                  title={book.title}
                  author={book.author}
                  isbn={book.ISBN}
                  pages={book.numberOfPages}
                  // yearofpublication={book.yearOfPublication}


                />
              );
            })}
          </div>
        </div>
      </section>
      <ScrollTop />
    </PagesLayouts>

  );
};

export default AllBooks;



// add book
// const [buttonText, setButtonText] = useState('Add to Library')
// const navigate = useState();
// const handleSubmit = async (event) => {
// setButtonText('Adding Book')
//   // Prevent default submit behaviour
//   event.preventDefault();
//   // Collect form data
//   const formData = new FormData(event.target);
//   // Submit data to backend
//   const response = await axios.post(,formData);
//   console.log(response.data);

//   // Hiding the message
//   alert('Book ')
//   setButtonText(A)
// }
