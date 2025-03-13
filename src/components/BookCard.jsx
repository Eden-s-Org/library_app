import React from 'react'
import { Link } from "react-router";

const BookCard = ({ title, image, ibsn, }) => {
    return (
        <div className="bg-white rounded-xl shadow-2xl h-90 hover:scale-105 transition-transform hover:shadow-2xl hover:shodow-blue-950">
            <div className="h-[60%]">
                {/* <img src={image} alt={title} /> */}
            </div>
            <div className="mb-5 w-[90%] mx-auto border-t border-gray-300 py-3">
                <h3>{title}</h3>
                {/* Status: Available or Not Available */}
                <p>Status of Book</p>
            </div>
            <Link to={'/book'} className="ml-4 bg-gradient-to-r from-[#056d80] from-10% to-blue-950 to-90% hover:bg-gradient-to-l px-10 py-3 rounded-lg text-white text-center hover:font-extrabold">Read More</Link>
        </div>
    );
}; 

export default BookCard;