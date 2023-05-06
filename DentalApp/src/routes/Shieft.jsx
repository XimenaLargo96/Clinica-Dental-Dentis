import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useState } from "react";

export default function Shieft() {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <h1 className="m-3">Turnos Clinica Dental</h1>
      <Container className="mt-5">
        <Row className="justify-content-md-center">
          <Card style={{ width: "auto" }}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group
                  className="mb-3"
                  as={Col}
                  md="4"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Id del paciente </Form.Label>
                  <Form.Control type="text" placeholder="paciente" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide the patient id.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  as={Col}
                  md="4"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Id del odontologo</Form.Label>
                  <Form.Control type="text" placeholder="odontologo" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide the dentist id.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  as={Col}
                  md="4"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Fecha del turno</Form.Label>
                  <Form.Control type="date" style={{ cursor: "pointer" }} required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a date.
                  </Form.Control.Feedback>
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
