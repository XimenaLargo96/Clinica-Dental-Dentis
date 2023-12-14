import React from "react";
import { Carousel} from "react-bootstrap";

export default function CarouselImg() {
  return (
    <>
    <div className="d-flex justify-content-center">

      <Carousel data-bs-theme="dark" className="w-75 h-50">
        <Carousel.Item>
          <img
            className="d-block w-100 h-75"
            src="/images/dentista.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-75"
            src="/images/paciente.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-75"
            src="/images/cita.webp"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    </>
  );
}
