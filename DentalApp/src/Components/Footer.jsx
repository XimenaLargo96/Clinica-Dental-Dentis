import React from 'react'
import { Navbar , Nav } from 'react-bootstrap';

export default function Footer() {
  return (
    <Navbar bg="primary bg-opacity-50" className="justify-content-end mt-3">
    <Nav>
      <Nav.Item>
        <Nav.Link href="/home"></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1"></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2"></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3"></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-4"></Nav.Link>
      </Nav.Item>
    </Nav>
  </Navbar>
  );
}
