import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <h1>Book Store</h1>
    <div>
      <Link to="/">Home</Link>
      <Link to="/books">Browse Books</Link>
      <Link to="/add-book">Add Book</Link>
    </div>
  </nav>
);

export default Navbar;
