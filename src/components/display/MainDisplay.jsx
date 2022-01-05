import { Container } from "react-bootstrap";

import HistoryDisplay from "./HistoryDisplay";
import CalculationDisplay from "./CalculationDisplay";

const MainDisplay = () => {
  return (
    <Container className="mt-2 rounded bg bg-dark text-light">
      <h3>MainDisplay</h3>
      <HistoryDisplay />
      <CalculationDisplay />
    </Container>
  );
};
export default MainDisplay;