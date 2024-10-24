import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/bookActions';
const BookItem = ({ book, onEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteBook(book.id));
  };

  return (
    <div className="book-item-container">
      <div className="book-info-container">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">{book.author}</p>
      </div>
      <div className="book-action-buttons">
        <button className="edit-button" onClick={() => onEdit(book)}>Edit</button>
        <button className="delete-button" style={{color:"red"}} onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default BookItem;
