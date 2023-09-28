import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './views/Home';
import Login from  './views/Login';
import BookDetail from './components/BookDetail';
import './App.css';

function App() {

  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/book/:id" element={<BookDetail />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
