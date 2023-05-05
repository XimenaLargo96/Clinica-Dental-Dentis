import {
  Container,
  Form,
  Row,
  Card,
  Button,
  InputGroup,
} from "react-bootstrap";

export default function Patient() {
  return (
    <>
      <h1>Pacientes Clinica Dental</h1>
      <Container className="mt-5">
        <Row className="justify-content-md-center">
          <Card style={{ width: "auto"}}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre </Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="text" placeholder="Enter Last name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Dni</Form.Label>
                <Form.Control type="text" placeholder="Enter Dni" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Fecha de Alta</Form.Label>
                <Form.Control type="date" style={{ cursor: "pointer" }} />
              </Form.Group>
              <InputGroup className="mb-3">
                <InputGroup.Text>Domicilio</InputGroup.Text>
                <Form.Control aria-label="First name" placeholder="Calle" />
                <Form.Control aria-label="Last name" placeholder="numero" />
                <Form.Control aria-label="Last name" placeholder="Localidad" />
                <Form.Control aria-label="Last name" placeholder="Provincia" />
              </InputGroup>
              <Button variant="primary" type="submit">
                Registrar
              </Button>
            </Form>
          </Card>
        </Row>
      </Container>
    </>
  );
}
