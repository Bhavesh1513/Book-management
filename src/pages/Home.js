import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => (
  <div className="home">
    <h2>Welcome to the Book Store</h2>
    <div className="categories">
      {["Fiction", "Non-Fiction", "Sci-Fi"].map((category) => (
        <Link key={category} to={`/books/${category}`} className="category">
          {category}
        </Link>
      ))}
    </div>
  </div>
);

export default Home;
