import { useState } from "react";
import backgroundImage from "../assets/images/heropic.png"; // Adjust path accordingly
import NavBar from "../components/NavBar";

export default function AddBookPage() {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    isbn: "",
    category: "",
    librarian: "",
    yearOfPublication: "",
    numberOfPages: "",
    coverImage: null,
    uploadFile: null,
  });

  const handleChange = (e) => {
    const { name, type } = e.target;
    const value = type === "file" ? e.target.files[0] : e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Book Data Submitted:", formData);
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
          {Object.keys(formData).map((key) =>
            key !== "coverImage" && key !== "uploadFile" ? (
              <input
                key={key}
                type="text"
                name={key}
                placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                value={formData[key]}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            ) : null
          )}
          <div>
            <label className="block text-sm font-medium">
              Cover Image (JPEG, PNG)
            </label>
            <input
              type="file"
              name="coverImage"
              accept="image/jpeg, image/png"
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Upload File (PDF, DOC)
            </label>
            <input
              type="file"
              name="uploadFile"
              accept="application/pdf, application/msword"
              onChange={handleChange}
              className="w-full p-2 border rounded"
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
