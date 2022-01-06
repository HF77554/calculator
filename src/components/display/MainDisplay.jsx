import { Container, Row } from "react-bootstrap";

import './MainDisplay.css'

import HistoryDisplay from "./HistoryDisplay";
import CalculationDisplay from "./CalculationDisplay";

const MainDisplay = ({onDisplay, onHistory}) => {
  return (
    <Container className="mt-3 mb-3 rounded bg bg-dark text-light maindisplay">
      <Row>
        <HistoryDisplay onHistory={onHistory}/>
      </Row>
      <Row>
        <CalculationDisplay onDisplay={onDisplay}/>
      </Row>
    </Container>
  );
};
export default MainDisplay;