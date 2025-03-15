import { useState } from "react";
import backgroundImage from "../assets/images/heropic.png"; // Adjust path accordingly
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router";

export default function AddBookPage() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", e.target.title.value);
    formData.append("bookDescription", e.target.bookDescription.value);
    formData.append("author", e.target.author.value);
    formData.append("ISBN", e.target.ISBN.value);
    formData.append("category", e.target.category.value);
    formData.append("yearOfPublication", e.target.yearOfPublication.value);
    formData.append("numberOfPages", e.target.numberOfPages.value);
    formData.append("image", e.target.image.files[0]); // Uploading a file

    try {
      const response = await fetch("https://library-api-t61c.onrender.com/library", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
console.log(result)

if (!response.ok) {
  throw new Error("Failed to submit the form");
}

alert("Book added successfully!");
navigate("/allbooks");
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-gray-100 p-4 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-6 shadow-lg w-full max-w-lg rounded-lg relative z-10">
        <h2 className="text-center text-xl font-bold">Add a Book</h2>
        <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
              <div>
              <input
                
                type="text"
                name="title"
                placeholder= "Title"
                className="w-full p-2 border rounded"
                required
              />
              </div>
              <div>
              <input
                
                type="text"
                name="bookDescription"
                placeholder= "Description"
                className="w-full p-2 border rounded"
                required
              />
              </div>
              <div>
              <input
                
                type="text"
                name="author"
                placeholder= "Author Name"
                className="w-full p-2 border rounded"
                required
              />
              </div>
              <div>
              <input
                
                type="text"
                name="ISBN"
                placeholder= "ISBN"
                className="w-full p-2 border rounded"
                required
              />
              </div>
              <div>
              <input
                
                type="text"
                name="category"
                placeholder= "Category"
                className="w-full p-2 border rounded"
                required
              />
              </div>
              <div>
              <input
                
                type="text"
                name="yearOfPublication"
                placeholder= "Year"
                className="w-full p-2 border rounded"
                required
              />
              </div>
              <div>
              <input
                
                type="text"
                name="numberOfPages"
                placeholder= "Number of Pages"
                className="w-full p-2 border rounded"
                required
              />
              </div>
              
          <div>
            <label className="block text-sm font-medium">
              image (JPEG, PNG)
            </label>
            <input
              type="file"
              name="image"
              required
            />
          </div>
          
          <button
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            type="submit"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
}
