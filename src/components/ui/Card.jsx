export function Card({ children }) {
    return <div className="bg-white p-6 rounded-lg shadow">{children}</div>;
  }
  
  export function CardHeader({ children }) {
    return <div className="mb-4">{children}</div>;
  }
  
  export function CardTitle({ children }) {
    return <h2 className="text-lg font-bold">{children}</h2>;
  }
  
  export function CardContent({ children }) {
    return <div>{children}</div>;
  }
  