import { Container } from "react-bootstrap";

import HistoryDisplay from "./HistoryDisplay";
import CalculationDisplay from "./CalculationDisplay";

const MainDisplay = () => {
  return (
    <Container className="mt-2 mb-3 rounded bg bg-dark text-light">
      <HistoryDisplay />
      <CalculationDisplay />
    </Container>
  );
};
export default MainDisplay;