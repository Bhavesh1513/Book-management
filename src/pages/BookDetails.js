import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./BookDetails.css";

const BookDetails = () => {
  const { id } = useParams();
  const book = useSelector((state) => state.books.books.find(b => b.id === Number(id)));

  if (!book) return <h2>Book not found</h2>;

  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>{book.description}</p>
      <p>Rating: {book.rating}⭐</p>
      <Link to="/books">Back to Browse</Link>
    </div>
  );
};

export default BookDetails;
