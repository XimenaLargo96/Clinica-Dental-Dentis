import {
  Container,
  Form,
  Row,
  Col,
  Card,
  InputGroup,
} from "react-bootstrap";

import { useState } from "react";
import ButtonComponent from "../Components/ButtonComponent";

export default function Patient() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    alert("Form enviado con exito")
  };

  return (
    <>
      <h2 className="m-3 text-center">Pacientes Clinica Dental</h2>
      <p className="p-4 text-center">Registra nuevos pacientes en tu clínica dental</p>
      <Container>
        <Row className="justify-content-md-center">
          <Card style={{ width: "auto" }} className="p-3">
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
                <Form.Control
                  aria-label="First name"
                  placeholder="Calle"
                  required
                />
                <Form.Control
                  aria-label="Last name"
                  placeholder="numero"
                  required
                />
                <Form.Control
                  aria-label="Last name"
                  placeholder="Localidad"
                  required
                />
                <Form.Control
                  aria-label="Last name"
                  placeholder="Provincia"
                  required
                />
              </InputGroup>
              <ButtonComponent name={"Registrar Paciente"}/>
            </Form>
          </Card>
        </Row>
      </Container>
    </>
  );
}
