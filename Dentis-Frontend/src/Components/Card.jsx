/* eslint-disable react/prop-types */
import { Card as Cards , Button} from "react-bootstrap";
import ButtonComponent from "./ButtonComponent";

export default function Card({img , title , description , url}) {
  return (
      <Cards style={{ width: '18rem' }} className="text-center mb-3">
      <Cards.Img variant="top" src={img} />
      <Cards.Body>
        <Cards.Title>Gestiona tus {title}</Cards.Title>
        <Cards.Text>
        {description}
        </Cards.Text>
      <ButtonComponent name={"Acceder"} redirect={url}/>
      </Cards.Body>
    </Cards>
  );
}
