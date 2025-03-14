import React from 'react'
import { Link } from "react-router";
import { FaStar } from 'react-icons/fa6';

const BookCard = ({ book }) => {
    return (

        <>
            <div className="bg-white shadow-2xl hover:scale-105 transition-transform hover:shadow-xl hover:shodow-blue-950 h-130 rounded-t-xl">
                <div className="bg-blue-100 h-[50%]">
                    <img src={`https://savefiles.org/${book?.image}?shareable_link=640`} alt={book?.title} className="rounded-t-lg h-[100%] w-[100%]"/>
                </div>
                <div className='p-3 h-[50%]'>
                    <div className="mb-5">
                        <h3 className='text-xl text-blue-950 font-bold'>{book?.title}</h3>
                        <p className=''><span className='text-blue-950 font-semibold text-sm md:text-md'>ISBN:</span> <span className='
                italic text-blue-950'>{book?.ISBN}</span></p>
                        <p className=''><span className='text-blue-950 font-semibold text-sm md:text-md'>Pages:</span> <span className='text-blue-950'>{book?.numberOfPages}</span></p>
                        {/* <p className=''><span className='text-blue-950 font-semibold text-sm md:text-md'>Year:</span> <span className='text-blue-950'>{book?.yearofpublication}</span></p> */}
                    </div>
                    <div className="w-[90%] mx-auto border-t border-gray-300 py-1"></div>

                    <div className="flex justify-between items-center mb-4">
                        <div className="flex gap-3 items-center">
                            <div className="">
                                <img src={`https://savefiles.org/${book?.image}?shareable_link=640`} alt={book?.title} className="rounded-full h-[40px] w-[40px] bg-blue-100" />
                            </div>
                            <div className="">
                                <div className="text-blue-950">Authored by:</div>
                                <div className=" text-blue-950 font-bold">{book?.author}</div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex justify-between items-center">
                                <FaStar className='text-blue-950' />
                                <FaStar className='text-blue-950' />
                                <FaStar className='text-blue-950' />
                                <FaStar className='text-gray-400' />
                            </div>
                            <div className="text-blue-950 text-[12px]">3.8 Ratings</div>
                        </div>
                    </div>
                    <div className='flex'>
                        <Link to={`/book/${book?.id}`} className=" bg-gradient-to-r from-[#056d80] from-10% to-blue-950 to-90% hover:bg-gradient-to-l px-5 py-2 rounded-lg text-white text-center hover:font-extrabold w-[100%]">Read More</Link>
                    </div>
                </div>
            </div>

        </>
    );
}; 

export default BookCard;