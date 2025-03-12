import React from "react";
import { Link } from "react-router";

const Book = ({title, image, author, isbn}) => {
  return (
    <section class="mt-10 h-screen">
    <div class="grid grid-cols-2 gap-10 mt-10 mx-auto w-[80%] shadow-xl shadow-blue-950 rounded-2xl h-[95%]">
    <div className="flex flex-col justify-center">
    <h2 className='text-2xl font-extrabold text-center'>BOOK'S IMAGE GOES HERE!</h2>
    </div>
      {/* <img src={image} alt={title} className="h-[400px] mx-auto" /> */}
      <div class="flex flex-col justify-center">
        <div class="flex ">
          <div class="border border-blue-950 my-5 w-[70px] "></div>
          <h2 class="text-blue-950 mx-4">ABOUT US</h2>
        </div>
        <h2 class="text-2xl md:text-5xl font-bold text-blue-950 mb-10">Learning with Love and Laughter</h2>

        <div class="mb-5">Fifth saying upon divide divide rule for deep their female all hath brind Days and beast
          greater grass signs abundantly have greater also days years under brought moveth.</div>

        <div class="flex gap-5 items-center mb-3">
          <i class="fa fa-search" aria-hidden="true"></i>
          <div>Him lights given i heaven second yielding seas gathered wear</div>
        </div>
        <div class="flex gap-5 items-center mb-3">
          <i class="fa fa-search" aria-hidden="true"></i>
          <div>Fly female them whales fly them day deep given night.</div>
        </div>
        <div class="mt-10 flex w-[90%]">
          <Link to={'/edit'}
            class="items-end bg-gradient-to-r from-[#056d80] from-10% to-blue-950 to-90% hover:bg-gradient-to-l px-10 py-3 rounded-lg text-white text-center hover:font-extrabold ml-auto">Edit</Link>
        </div>
      </div>
    </div>
  </section>
  )
};

export default Book;
