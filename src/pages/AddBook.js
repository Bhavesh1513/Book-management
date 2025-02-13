import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../redux/booksSlice";
import "./AddBook.css";

const AddBook = () => {
  const [book, setBook] = useState({ title: "", author: "", category: "", description: "", rating: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => setBook({ ...book, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(book).some(val => !val)) return alert("All fields required!");
    dispatch(addBook({ ...book, rating: Number(book.rating) }));
    navigate("/books");
  };

  return (
    <form className="add-book" onSubmit={handleSubmit}>
      <h2>Add a New Book</h2>
      <input type="text" name="title" placeholder="Title" onChange={handleChange} />
      <input type="text" name="author" placeholder="Author" onChange={handleChange} />
      <input type="text" name="category" placeholder="Category" onChange={handleChange} />
      <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
      <input type="number" name="rating" placeholder="Rating (1-5)" onChange={handleChange} />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
