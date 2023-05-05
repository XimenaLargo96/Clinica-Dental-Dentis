import { Row, Col } from "react-bootstrap";
import Card from "./Card";

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
      <h1>Bienvenido a la clinica dental Dentist</h1>
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
    </>
  );
}
