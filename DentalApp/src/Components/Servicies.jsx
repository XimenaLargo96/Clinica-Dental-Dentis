import React from 'react';
import Card from "./Card";
import { Container, Row, Col } from "react-bootstrap";

export default function Servicies() {

  const cardValues = [
    {
      title: "Odontologos",
      description: "Registra nuevos odontologos en tu clínica dental.",
      image: "../images/odontologo.jpg",
    },
    {
      title: "Pacientes",
      description: "Registra a tus nuevos pacientes, rápido y fácil.",
      image: "../images/paciente.jpg",
    },
    {
      title: "Turnos",
      description: "Registra nuevos turnos en tu clínica dental.",
      image: "../images/turno.png",
    },
  ];

  return (
    <>
    <h2 className='text-center fs-1 pt-5'>Nuestros Servicios</h2>
    <Container className="mt-5 mb-5">
        <Row xs={1} md={3} className="g-4">
          {cardValues.map((item, index) => (
            <Col key={index}>
              <Card
                key={item.title}
                title={item.title}
                img={item.image}
                description={item.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}
