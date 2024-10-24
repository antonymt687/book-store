import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddBookForm from './Components/AddBookForm';
import BookList from './Components/BookList';
import './App.css'; 




const App = () => {
  const [currentBook, setCurrentBook] = useState(null);

  const handleEdit = (book) => {
    setCurrentBook(book);
  };

  return (
    <Provider store={store}>
      <h1 style={{textAlign:"center"}}>Book Store</h1>
      <AddBookForm currentBook={currentBook} />
      <BookList onEdit={handleEdit} />
    </Provider>
  );
};

export default App;

