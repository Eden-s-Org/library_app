import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Book from "./pages/Book";
import AllBooks from "./pages/AllBooks";
import AddBook from "./pages/AddBook";
import AuthPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<Book />} />
        <Route path="/allbooks" element={<AllBooks />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
