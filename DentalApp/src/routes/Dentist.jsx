import { Button, Row, Col, Container, Form, Card } from "react-bootstrap";

export default function Dentist() {
  return (
    <>
      <h1 className="m-3">Odontologos Clinica Dental</h1>
      <Container className="mt-5">
        <Row className="justify-content-md-center">
          <Card style={{ width: "auto" }}>
            <Form>
              <Row className="mb-3">
                <Form.Group
                  className="mb-3"
                  as={Col}
                  md="4"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Nombre </Form.Label>
                  <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  as={Col}
                  md="4"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control type="text" placeholder="Enter Last name" />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  as={Col}
                  md="4"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Matricula</Form.Label>
                  <Form.Control type="text" placeholder="Enter nit" />
                </Form.Group>
              </Row>

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
