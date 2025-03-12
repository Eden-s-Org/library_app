export function Input({ type, placeholder, required }) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    );
  }
  