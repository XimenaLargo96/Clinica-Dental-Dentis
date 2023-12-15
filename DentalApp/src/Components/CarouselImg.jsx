import React from "react";
import { Carousel} from "react-bootstrap";

export default function CarouselImg() {
  return (
    <>
    <div className="carousel-content-img">
      <Carousel data-bs-theme="dark" className="w-100">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/Carousel-imgs/carousel1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2  className="fs-2">Reserva tus citas</h2>
            <p className="fs-5">Ingresa con tu cuenta y programa tus citas con tu médico fávorito</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/Carousel-imgs/carousel2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h2 className="fs-2">Atención personalizada</h2>
            <p className="fs-5">Contamos con un excelente servicio para que te sientas como en casa.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/Carousel-imgs/carousel3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h2  className="fs-2">Citas Infantiles</h2>
            <p className="fs-5">
              Nuestros especialistas infantiles están capacitados para que los niños se sientan seguros.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    </>
  );
}
