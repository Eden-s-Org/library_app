import React from "react";
import { FaArrowLeftLong, FaStar } from "react-icons/fa6";
import { Link } from "react-router";
import PagesLayouts from "../layouts/PagesLayouts";
import Image from "../assets/images/annefrank.png";
import ScrollTop from "../components/ScrollTop";

const Book = ({ title, image, author, isbn, }) => {
  return (
    <PagesLayouts>
      <section className="mt-15 bg-blue-100 h-screen mb-10">
        <div className="h-screen flex flex-col justify-center">
          <div class="bg-gray-200 grid grid-cols-1 md:grid-cols-2 md:mt-8 mx-auto w-[90%] shadow-lg shadow-blue-950 rounded-2xl justify-center relative overflow-hidden">
            <div className="flex flex-col justify-evenly rounded-s-2xl w-[80%] mx-auto">
              <Link to={'/allbooks'} className="bg-gradient-to-r from-[#056d80] from-10% to-blue-950 to-90%  p-3 rounded-full shadow-lg w-10 h-10 text-lg hover:bg-gradient-to-l text-white hover:font-extrabold absolute top-5 left-5">
                <FaArrowLeftLong className="text-white" />
              </Link>
              <img src={`https://savefiles.org/${image}?shareable_link=640`} alt={title} className="rouded-xl" />
            </div>
            <div class="flex flex-col justify-evenly">
              <h2 class="text-2xl md:text-5xl font-bold text-blue-950 mb-10 mt-7">{title}</h2>
              <div class="flex mt-1">
                <div class="border border-blue-950 my-3 md:my-5 w-[70px] "></div>
                <h2 class="text-blue-950 mx-4 md:mx-4">ABOUT US</h2>
              </div>

              <div className="">
                <div className="flex justify-start items-center ">
                  <FaStar className='text-blue-950' />
                  <FaStar className='text-blue-950' />
                  <FaStar className='text-blue-950' />
                  <FaStar className='text-gray-400' />
                <div className="text-blue-950 ml-5 font-bold">3.8 Ratings</div>
                </div>
              </div>

              <div class="mb-5 w-[90%]">
                Fifth saying upon divide divide rule for deep their female all hath brind Days and beast
                greater grass signs abundantly have greater also days years under brought moveth.
              </div>
              <div class="mb-5 w-[90%]">
                Fifth saying upon divide divide rule for deep their female all hath brind Days and beast
                greater grass signs abundantly have greater also days years under brought moveth.
              </div>

              <div class="items-center">
                <div>Him lights given i heaven second yielding seas gathered wear</div>
              </div>
              <div class="items-center">
                <div>Fly female them whales fly them day deep given night.</div>
              </div>
              <div class="mt-10 flex w-[90%]">
                <Link to={'/edit'}
                  class="items-end bg-gradient-to-r from-[#056d80] from-10% to-blue-950 to-90% hover:bg-gradient-to-l px-10 py-3 rounded-lg text-white text-center hover:font-extrabold ml-auto mb-5">Edit</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollTop />
    </PagesLayouts>
  )
};

export default Book;
