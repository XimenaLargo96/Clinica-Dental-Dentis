import {Nav , Navbar} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram , faFacebook , faTwitter , faYoutube} from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <>
    <Navbar bg="info bg-opacity-50" className="justify-content-end pe-5">
      <Nav activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home"></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1"><FontAwesomeIcon icon={faFacebook} /></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2"><FontAwesomeIcon icon={faInstagram} /></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3"><FontAwesomeIcon icon={faTwitter} /></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4"><FontAwesomeIcon icon={faYoutube} /></Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
    </>  )
}
