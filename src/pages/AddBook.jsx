import { useState } from "react";

export default function AddBookPage() {
  const [formData, setFormData] = useState({ author: "", title: "", isbn: "", category: "", librarian: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Book Data Submitted:", formData);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 shadow-lg w-full max-w-lg">
        <h2 className="text-center text-xl font-bold">Add a Book</h2>
        <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
          {Object.keys(formData).map((key) => (
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
          ))}
          <button className="w-full bg-blue-500 text-white py-2 rounded" type="submit">Add Book</button>
        </form>
      </div>
    </div>
  );
}
