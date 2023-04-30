import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/home">
      <img src="../images/DH.png" width="200px" height="50px" />
      </Link>
      <ul>
        <li>
          <Link to="/patient">Pacientes</Link>
        </li>
        <li>
          <Link to="/dentist">Odontologos</Link>
        </li>
        <li>
          <Link to="/shieft">Turnos</Link>
        </li>
        <li>Cerrar sesion</li>
      </ul>
    </nav>
  );
}
