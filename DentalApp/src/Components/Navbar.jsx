import { Navbar as Navbar1 , Container , Nav } from "react-bootstrap";

export default function Navbar() {
  return (
    <>
    <Navbar1 bg="primary bg-opacity-50" variant="dark">
        <Container>
          <Navbar1.Brand href="/home">
            <img className="header-logo" src="../../public/images/logo-dentis.png" alt="" srcset="" />
          </Navbar1.Brand>
          <Nav className="me-0 flex-wrap">
            <Nav.Link className="fs-5" href="/patient">Pacientes</Nav.Link>
            <Nav.Link className="fs-5" href="/dentist">Odontologos</Nav.Link>
            <Nav.Link className="fs-5" href="/shieft">Turnos</Nav.Link>
          </Nav>
        </Container>
      </Navbar1>
    </>
  );
}
