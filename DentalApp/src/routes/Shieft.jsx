import { Container , Row , Card , Form , Button } from "react-bootstrap"

export default function Shieft() {
  return (
    <>
    <h1>Turnos Clinica Dental</h1>
    <Container className="mt-5">
        <Row className="justify-content-md-center">
          <Card style={{ width: "auto"}}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Id del paciente </Form.Label>
                <Form.Control type="text" placeholder="paciente" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Id del odontologo</Form.Label>
                <Form.Control type="text" placeholder="odontologo" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Fecha del turno</Form.Label>
                <Form.Control type="date" style={{ cursor: "pointer" }} />
              </Form.Group>

              <Button variant="primary" type="submit">
                Registrar
              </Button>
            </Form>
          </Card>
        </Row>
      </Container>
    </>
  )
}
