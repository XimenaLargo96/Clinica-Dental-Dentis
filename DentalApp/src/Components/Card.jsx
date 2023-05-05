/* eslint-disable react/prop-types */
import { Card as Cards , Button} from "react-bootstrap";

export default function Card({img , title , description}) {
  return (
      <Cards style={{ width: '18rem' }}>
      <Cards.Img variant="top" src={img} />
      <Cards.Body>
        <Cards.Title>{title}</Cards.Title>
        <Cards.Text>
        {description}
        </Cards.Text>
        <Button variant="primary">Go </Button>
      </Cards.Body>
    </Cards>
  );
}
