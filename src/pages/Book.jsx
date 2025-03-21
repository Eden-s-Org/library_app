// import React from "react";
// import { FaArrowLeftLong, FaStar } from "react-icons/fa6";
// import PagesLayouts from "../layouts/PagesLayouts";
// import ScrollTop from "../components/ScrollTop";
// import { IoClose } from "react-icons/io5";
// import SingleBookCard from "../components/SingleBookCard";

// const Book = () => {
//   const [books, setBooks] = useState([]);

//   const getBooks = async () => {
//     const response = await axios.get('https://library-api-t61c.onrender.com/library');
//     // console.table(response.data);
//     setBooks(response.data);
//   }

//   useEffect(() => {
//     getBooks();
//   }, []);

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";  // Import useParams to get the ID
import axios from "axios";
import PagesLayouts from "../layouts/PagesLayouts";
import ScrollTop from "../components/ScrollTop";
import SingleBookCard from "../components/SingleBookCard";

const Book = () => {
  const { id } = useParams(); // Ensure this gets the correct id
  const [book, setBook] = useState(null);

  useEffect(() => {
    const getBook = async () => {
      try {
        if (!id) {
          console.error("Book ID is missing");
          return;
        }
        const response = await axios.get(`https://library-api-t61c.onrender.com/library/${id}`);
        setBook(response.data.book);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    getBook();
  }, [id]);

  if (!book) return <p>Loading book details...</p>;
  console.log(book)
  return (
    <PagesLayouts>
      <section className="mt-20 bg-blue-100 h-screen">
                <SingleBookCard
                key={book.id}
                book={book}
                  // yearofpublication={book.yearOfPublication}

                />
      </section>
      <ScrollTop />
    </PagesLayouts>
  )
};

export default Book;
