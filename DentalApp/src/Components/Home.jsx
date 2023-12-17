import { Container, Row, Col } from "react-bootstrap";
import Card from "./Card";
import CarouselImg from "./CarouselImg.jsx";

export default function Home() {
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
      <CarouselImg />
      <Container className="mt-5">
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
  );
}
