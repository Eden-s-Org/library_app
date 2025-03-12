export function Button({ children, ...props }) {
    return (
      <button
        {...props}
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
      >
        {children}
      </button>
    );
  }
  