import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
  <div className="">
  <footer className="bg-blue-950 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          <div>
            <h2 className="text-xl font-bold">EdenBOOKS</h2>
            <p className="mt-2 text-gray-300">
              Your Smart Library Companion <br/> Manage your books effortlessly
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-gray-300">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/allbooks" className="hover:underline">All Books</a></li>
              <li><a href="/addbooks" className="hover:underline">Add Book</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

        
          <div>
  <h3 className="text-lg font-semibold">Follow Us</h3>
  <div className="mt-2 flex space-x-4">
    <a href="#" className="hover:text-gray-400 text-lg">
      <FaFacebookF />
    </a>
    <a href="#" className="hover:text-gray-400 text-lg">
      <FaTwitter />
    </a>
    <a href="#" className="hover:text-gray-400 text-lg">
      <FaInstagram />
    </a>
  </div>
</div>
        </div>

       
        <div className="mt-8 text-center text-gray-400 border-t border-gray-600 pt-4">
          <p>&copy; {new Date().getFullYear()} EdenBOOKS. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  </div>
  );
};

export default Footer;
