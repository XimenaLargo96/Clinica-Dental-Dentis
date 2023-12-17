import { Button, Row, Col, Container, Form, Card } from "react-bootstrap";
import { useState } from "react";
import ButtonComponent from "../Components/ButtonComponent";

export default function Dentist() {
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
      <h2 className="mt-3 text-center">Odontologos</h2>
      <p className="p-4 text-center">Registra nuevos odontologos en tu clínica dental</p>
      <Container>
        <Row className="justify-content-md-center">
          <Card style={{ width: "auto" }} className="p-3">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group
                  className="mb-3"
                  as={Col}
                  md="4"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Nombre </Form.Label>
                  <Form.Control type="text" placeholder="Enter name" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a name.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  as={Col}
                  md="4"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Last name"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a last name.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  as={Col}
                  md="4"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Matricula</Form.Label>
                  <Form.Control type="text" placeholder="Enter nit" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a number.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
         <ButtonComponent name={"Registar Odontologo"} />
            </Form>
          </Card>
        </Row>
      </Container>
    </>
  );
}
