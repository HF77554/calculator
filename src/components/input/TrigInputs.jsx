import { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";

import { ButtonGrid } from "../reusable/ButtonGrid";
import ArrowButton from "../reusable/ArrowButton";

import {TRIG_BUTTONS} from "../logic/ButtonConstant";

const TrigInputs = ({ onInput }) => {
  const constGrid = TRIG_BUTTONS;
  const [gridState, gridStateTask] = useState([constGrid[0]])
  const [collapsed, collapsedTask] = useState(true);

  const onPressHandler = () => {
    collapsedTask(!collapsed);
    if (!collapsed) {
      gridStateTask([constGrid[0]])
    } else {
      gridStateTask(constGrid)
    }
  };

  return (
    <Container className="mb-1">
      <Row>
        <Col xs={9}>
          <ButtonGrid grid={gridState} onInput={onInput}/>
        </Col>
        <Col xs={3}>
          <ArrowButton onCollapse={collapsed} onPress={() => onPressHandler()} />
        </Col>
      </Row>
    </Container>
  );
};
export default TrigInputs;
