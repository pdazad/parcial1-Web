import React, { useState, useEffect } from "react";
import data from "./datos.json";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Home() {
  const [cars, setCars] = useState(data);
  const [selectedcar, setSelectedcar] = useState(null);
  const [error, setError] = useState("");
  const { state: { userRole } } = useLocation();

  const handlecarClick = (carModel) => {
    const car = cars.find((car) => car.carModel === carModel);
    setSelectedcar(car);
    
  };

  const handleMakerChange = (newCarMaker) => {
    // Maneja el cambio del título si el usuario tiene permisos para editarlo
    setSelectedcar({ ...selectedcar, carMaker: newCarMaker });
  };

  const handleModelChange = (newModel) => {
    // Maneja el cambio del título si el usuario tiene permisos para editarlo
    setSelectedcar({ ...selectedcar, carModel: newModel });
  }

  const handleYearChange = (newYear) => {
    // Maneja el cambio del título si el usuario tiene permisos para editarlo
    setSelectedcar({ ...selectedcar, carYear: newYear });
  }

    const handleDescriptionChange = (newDescription) => {
    // Maneja el cambio del título si el usuario tiene permisos para editarlo
    setSelectedcar({ ...selectedcar, description: newDescription });
    }

    const handlePriceChange = (newPrice) => {
    // Maneja el cambio del título si el usuario tiene permisos para editarlo
    setSelectedcar({ ...selectedcar, price: newPrice });
    }

    const handleAvalaibleChange = (newAvalaible) => {
    // Maneja el cambio del título si el usuario tiene permisos para editarlo
    setSelectedcar({ ...selectedcar, avalaible: newAvalaible });
    }

  useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("https://github.com/pdazad/parcial1-Web/blob/main/parcial1/src/views/datos.json");
            if (!response.ok) {
              throw new Error("Error al obtener los libros");
            }
            const data = await response.json();
            setCars(data);
          } catch (error) {
            setError(error.message);
          }
        };
        fetchData();
       }, []);

  return (
    <Container className="home-container">
      <Row>
      <Col md={6}>
      <h2>Catálogo de Carros</h2>
      <Row>
        {cars.map((car) => (
          <Col md={4} key={car.carModel}>
            <Card
              onClick={() => handlecarClick(car.carModel)}
              className={`car-card ${
                selectedcar && selectedcar.carModel === car.carModel ? "selected" : ""
              }`}
            >
              <Card.Img variant="top" src={car.image} alt={car.carModel} />
              <Card.Body>
                <Card.Title>{car.partName}</Card.Title>
                <Button variant="primary" onClick={() => handlecarClick(car.carModel)}>
                  Ver Detalles
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </Col>
      <Col md={6}>
      {selectedcar && (
        <div className="car-details">
          <h2>Detalles del Carro</h2>
          <Card>
            <Card.Img variant="top" src={selectedcar.image} alt={selectedcar.tittle} />
            {userRole ? ( 
            <Card.Body>
              <Card.Title>{selectedcar.partName}</Card.Title>
              <Card.Text>Hecho por: 
              <input type="text" value={selectedcar.carMaker} onChange={(e) => handleMakerChange(e.target.value)} />
              </Card.Text>
            <Card.Text>Modelo:
              <input type="text" value={selectedcar.carModel} onChange={(e) => handleModelChange(e.target.value)} />
            </Card.Text>
            <Card.Text>Año:
              <input type="text" value={selectedcar.carYear} onChange={(e) => handleYearChange(e.target.value)} />
            </Card.Text>
            <Card.Text>Disponible:
              <input type="text" value={selectedcar.avalaible} onChange={(e) => handleAvalaibleChange(e.target.value)} />
            </Card.Text>
            <Card.Text>Descripción:
              <input type="text" value={selectedcar.description} onChange={(e) => handleDescriptionChange(e.target.value)} />
            </Card.Text>
            <Card.Text>Precio:
              <input type="text" value={selectedcar.price} onChange={(e) => handlePriceChange(e.target.value)} />
            </Card.Text>
            </Card.Body>
            ) : (
            <Card.Body>
              <Card.Title>{selectedcar.partName}</Card.Title>
              <Card.Text>Hecho por: {selectedcar.carMaker}</Card.Text>
              <Card.Text>Modelo: {selectedcar.carModel}</Card.Text>
              <Card.Text>Año: {selectedcar.carYear}</Card.Text>
              <Card.Text>Disponible: {selectedcar.avalaible ? "Sí" : "No"}</Card.Text>
              <Card.Text>Descripción: {selectedcar.description}</Card.Text>
              <Card.Text>Precio: {selectedcar.price}</Card.Text>
            </Card.Body> )}
          </Card>
        </div>
      )}
       </Col>
        </Row>
    </Container>
  );
}

export default Home;


