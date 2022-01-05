import { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";

import { ButtonGrid } from "../reusable/ButtonGrid";
import ArrowButton from "../reusable/ArrowButton";

import {TRIG_BUTTONS} from "../logic/ButtonConstant";

const TrigInputs = ({ onInput }) => {
  const constGrid = TRIG_BUTTONS;
  const [collapse, collapseTask] = useState(false);

  const onPressHandler = () => {
    collapseTask(!collapse);
  };

  return (
    <Container className="mb-1">
      <Row>
        <Col xs={9}>
          <ButtonGrid grid={constGrid} onInput={onInput}/>
        </Col>
        <Col xs={3}>
          <ArrowButton onCollapse={collapse} onPress={() => onPressHandler()} />
        </Col>
      </Row>
    </Container>
  );
};
export default TrigInputs;
