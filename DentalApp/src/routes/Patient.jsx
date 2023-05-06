import {
  Container,
  Form,
  Row,
  Col,
  Card,
  Button,
  InputGroup,
} from "react-bootstrap";

import { useState } from "react";

export default function Patient() {
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
      <h1 className="m-3">Pacientes Clinica Dental</h1>
      <Container className="mt-5">
        <Row className="justify-content-md-center">
          <Card style={{ width: "auto" }}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group
                  className="mb-3"
                  as={Col}
                  md="3"
                  controlId="validationCustom01"
                >
                  <Form.Label>Nombre </Form.Label>
                  <Form.Control type="text" placeholder="Enter name" required />
                  <Form.Control.Feedback type="invalid">
            Please provide a valid name.
          </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  as={Col}
                  md="3"
                  controlId="validationCustom02"
                >
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Last name"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid last name.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  as={Col}
                  md="3"
                  controlId="validationCustom03"
                >
                  <Form.Label>Dni</Form.Label>
                  <Form.Control type="text" placeholder="Enter Dni" required />
                  <Form.Control.Feedback type="invalid">
            Please provide a valid dni.
          </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  as={Col}
                  md="3"
                  controlId="validationCustom04"
                >
                  <Form.Label>Fecha de Alta</Form.Label>
                  <Form.Control
                    type="date"
                    style={{ cursor: "pointer" }}
                    required
                  />
                   <Form.Control.Feedback type="invalid">
            Please provide a date.
          </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <InputGroup className="mb-3">
                <InputGroup.Text>Domicilio</InputGroup.Text>
                <Form.Control aria-label="First name" placeholder="Calle" required />
                <Form.Control aria-label="Last name" placeholder="numero" required />
                <Form.Control aria-label="Last name" placeholder="Localidad" required />
                <Form.Control aria-label="Last name" placeholder="Provincia" required />
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
