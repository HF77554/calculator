import { Container, Col } from "react-bootstrap";

const CalculationDisplay = ({onDisplay}) => {
    return (
      <Container>
        <Col xs={10} className="generalDisplay">
          <h3 className='text-end text-break'>{onDisplay.oldValue}{onDisplay.operator}{onDisplay.newValue}</h3>
        </Col>
      </Container>
    );
  };
  export default CalculationDisplay;
