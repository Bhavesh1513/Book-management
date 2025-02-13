import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import "./BrowseBooks.css";

const BrowseBooks = () => {
  const { category } = useParams();
  const books = useSelector((state) => state.books.books);
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter(
    (book) =>
      (!category || book.category === category) &&
      (book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="browse-books">
      <h2>{category ? `${category} Books` : "All Books"}</h2>
      <input
        type="text"
        placeholder="Search by title or author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="book-table">
  <thead>
    <tr>
      <th>#</th>
      <th>Title</th>
      <th>Author</th>
      <th>Category</th>
      <th>Rating</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {books.map((book, index) => (
      <tr key={book.id}>
        <td>{index + 1}</td>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.category}</td>
        <td>{book.rating} ⭐</td>
        <td>
          <a href={`/book/${book.id}`} className="view-btn">View</a>
        </td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  );
};

export default BrowseBooks;
