import { Container } from "react-bootstrap";

import HistoryDisplay from "./HistoryDisplay";
import CalculationDisplay from "./CalculationDisplay";

const MainDisplay = ({onDisplay, onHistory}) => {
  return (
    <Container className="mt-2 mb-3 rounded bg bg-dark text-light">
      <HistoryDisplay onHistory={onHistory}/>
      <CalculationDisplay onDisplay={onDisplay}/>
    </Container>
  );
};
export default MainDisplay;