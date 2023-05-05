import { Button, Row, Container, Form, Card } from "react-bootstrap";

export default function Dentist() {
  return (
    <>
    <h1>Odontologos Clinica Dental</h1>
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Card style={{ width: "18rem" }}>
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
              <Form.Label>Matricula</Form.Label>
              <Form.Control type="text" placeholder="Enter nit" />
            </Form.Group>

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
