import { Container, Row } from "react-bootstrap";

import './MainDisplay.css'

import HistoryDisplay from "./HistoryDisplay";
import CalculationDisplay from "./CalculationDisplay";

const MainDisplay = ({onDisplay}) => {
  return (
    <Container className="mt-3 mb-3 rounded bg bg-dark text-light mainDisplay">
      <Row>
        <HistoryDisplay onDisplay={onDisplay}/>
      </Row>
      <Row>
        <CalculationDisplay onDisplay={onDisplay}/>
      </Row>
    </Container>
  );
};
export default MainDisplay;