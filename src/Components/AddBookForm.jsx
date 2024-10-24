// src/Components/AddBookForm.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, editBook } from '../redux/bookActions';

const AddBookForm = ({ currentBook }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(currentBook ? currentBook.title : '');
  const [author, setAuthor] = useState(currentBook ? currentBook.author : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentBook) {
      dispatch(editBook(currentBook.id, { title, author }));
    } else {
      const newBook = {
        id: Date.now(),
        title,
        author,
      };
      dispatch(addBook(newBook));
    }
    setTitle('');
    setAuthor('');
  };

  useEffect(() => {
    if (currentBook) {
      setTitle(currentBook.title);
      setAuthor(currentBook.author);
    }
  }, [currentBook]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <div>
        <button type="submit">{currentBook ? 'Update Book' : 'Add Book'}</button>
      </div>
      
    </form>
  );
};

export default AddBookForm; // Ensure this line is present
