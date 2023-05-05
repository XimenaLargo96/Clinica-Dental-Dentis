import { Navbar as Navbar1 , Container , Nav } from "react-bootstrap";

export default function Navbar() {
  return (
    <>
    <Navbar1 bg="primary" variant="dark">
        <Container>
          <Navbar1.Brand href="/home">Home</Navbar1.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/patient">Pacientes</Nav.Link>
            <Nav.Link href="/dentist">Odontologos</Nav.Link>
            <Nav.Link href="/shieft">Turnos</Nav.Link>
          </Nav>
        </Container>
      </Navbar1>
    </>
  );
}
