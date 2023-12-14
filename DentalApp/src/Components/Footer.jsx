import {Nav , Navbar} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram , faFacebook} from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <>
    <Navbar bg="primary bg-opacity-50">

      <Nav className="justify-content-end"  activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home"></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1"><FontAwesomeIcon icon={faFacebook} /> Facebook</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2"><FontAwesomeIcon icon={faInstagram} /> Instagram</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
    </>  )
}
