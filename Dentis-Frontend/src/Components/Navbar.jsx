import { Navbar as Navbar1 , Container , Nav } from "react-bootstrap";

export default function Navbar() {
  return (
    <>
    <Navbar1 bg="light" data-bs-theme="light" className="justify-content-between pe-5 ps-5">
          <Navbar1.Brand href="/home">
            <img className="header-logo" src="../../public/images/logo-dentis.png" alt="banner" />
          </Navbar1.Brand>
          <Nav className="me-0 justify-content-between flex-wrap">
            <Nav.Link className="fs-5" href="/patient">Pacientes</Nav.Link>
            <Nav.Link className="fs-5" href="/dentist">Odontologos</Nav.Link>
            <Nav.Link className="fs-5" href="/shieft">Turnos</Nav.Link>
          </Nav>
      </Navbar1>
    </>
  );
}
