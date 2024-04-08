import React from "react";
import Card from "./Card";
import { Container, Row, Col } from "react-bootstrap";

export default function Servicies() {
  const cardValues = [
    {
      title: "Odontologos",
      description: "Registra nuevos odontologos en tu clínica dental.",
      image: "../images/odontologo.jpg",
      url: "/dentist",
    },
    {
      title: "Pacientes",
      description: "Registra a tus nuevos pacientes, rápido y fácil.",
      image: "../images/paciente.jpg",
      url: "/patient",
    },
    {
      title: "Turnos",
      description: "Registra nuevos turnos en tu clínica dental.",
      image: "../images/turno.png",
      url: "/shieft",
    },
  ];

  return (
    <>
      <h2 className="text-center fs-1 pt-5 mb-5">Nuestros Servicios</h2>
      <div className="d-flex justify-content-evenly flex-wrap" >
      {cardValues.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            img={item.image}
            description={item.description}
            url={item.url}
          />
        ))}
        </div>
    </>
  );
}
