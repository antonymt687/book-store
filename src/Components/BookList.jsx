import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BookList = ({ onEdit }) => {
  const books = useSelector((state) => state.books.books);

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} book={book} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default BookList;
