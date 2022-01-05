import { Row, Col } from "react-bootstrap";
import CalcButton from "./CalcButton";

const ButtonCol = ({ row, onInput }) => {
  return (
    <Row className="mb-2">
      {row.map((col) => (
        <Col key={col.value}>
          <CalcButton key={col.value} input={col} onInput={onInput} />
        </Col>
      ))}
    </Row>
  );
};
export default ButtonCol;