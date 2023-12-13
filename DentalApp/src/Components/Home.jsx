import { Container, Row, Col } from "react-bootstrap";
import Card from "./Card";
import Header from "./Header/Header.jsx";

export default function Home() {
  const cardValues = [
    {
      title: "Odontologos",
      description: "Puedes gestionar tus odontologos aquí",
      image: "../images/odontologo.jpg",
    },
    {
      title: "Pacientes",
      description: "Puedes gestionar tus pacientes aquí",
      image: "../images/paciente.jpg",
    },
    {
      title: "Turnos",
      description: "Puedes gestionar tus turnos aquí",
      image: "../images/turno.png",
    },
  ];

  return (
    <>
    <Header/>
      <Container className="mt-5">
      <Row xs={1} md={3} className="g-4">
        {cardValues.map((item , index) => (
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
  );
}
