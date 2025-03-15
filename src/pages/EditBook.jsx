import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import backgroundImage from "../assets/images/heropic.png";
import axios from "axios";

export default function EditBookPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`https://library-api-t61c.onrender.com/library/${id}`);
        setBook(response.data.book);
        setFormData(response.data.book);
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    };
    fetchBook();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://library-api-t61c.onrender.com/library/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to update the book");
      }

      alert("Book updated successfully!");
      navigate("/allbooks");
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  if (!book) return <p>Loading...</p>;

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
        <h2 className="text-center text-xl font-bold">Edit Book</h2>
        <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
          <input type="text" name="title" value={formData.title || ""} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="text" name="bookDescription" value={formData.bookDescription || ""} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="text" name="author" value={formData.author || ""} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="text" name="ISBN" value={formData.ISBN || ""} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="text" name="category" value={formData.category || ""} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="text" name="yearOfPublication" value={formData.yearOfPublication || ""} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="text" name="numberOfPages" value={formData.numberOfPages || ""} onChange={handleChange} className="w-full p-2 border rounded" required />
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition" type="submit">
            Update Book
          </button>
        </form>
      </div>
    </div>
  );
}
