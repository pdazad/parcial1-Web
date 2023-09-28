import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import booksData from "./books.json";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Home() {
  const [books, setBooks] = useState(booksData);
  const [selectedBook, setSelectedBook] = useState(null);
  const { id } = useParams();

  const handleBookClick = (bookId) => {
    const book = books.find((book) => book.id === bookId);
    setSelectedBook(book);
  };

  return (
    <Container className="home-container">
      <Row>
      <Col md={6}>
      <h2>Catálogo de Libros</h2>
      <Row>
        {books.map((book) => (
          <Col md={4} key={book.id}>
            <Card
              onClick={() => handleBookClick(book.id)}
              className={`book-card ${
                selectedBook && selectedBook.id === book.id ? "selected" : ""
              }`}
            >
              <Card.Img variant="top" src={book.image} alt={book.tittle} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>ISBN: {book.isbn}</Card.Text>
                <Button variant="primary" onClick={() => handleBookClick(book.id)}>
                  Ver Detalles
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </Col>
      <Col md={6}>
      {selectedBook && (
        <div className="book-details">
          <h2>Detalles del Libro</h2>
          <Card>
            <Card.Img variant="top" src={selectedBook.image} alt={selectedBook.tittle} />
            <Card.Body>
              <Card.Title>{selectedBook.tittle}</Card.Title>
              <Card.Text>ISBN: {selectedBook.isbn}</Card.Text>
              <Card.Text>Resumen: {selectedBook.summary}</Card.Text>
              <Card.Text>Autor: {selectedBook.author}</Card.Text>
              <Card.Text>Año: {selectedBook.year}</Card.Text>
              <Card.Text>Disponible en línea: {selectedBook.availableOnline ? "Sí" : "No"}</Card.Text>
              <Card.Text>Editorial: {selectedBook.publisher}</Card.Text>
              <Card.Text>Precio: {selectedBook.price}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      )}
       </Col>
        </Row>
    </Container>
  );
}

export default Home;
