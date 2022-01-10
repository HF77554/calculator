import { useState } from "react";
import { Container } from "react-bootstrap";

import MainDisplay from "./display/MainDisplay";
import InputHub from "./input/InputHub";

import AttributeAnalysis from "./logic/AttributeAnalysis";

const CalculatorBody = () => {
  const [display, displayTask] = useState({oldValue:'', operator:'', newValue:'', history:[]});

  const userInputHandler = (input) => {
            
    const res = AttributeAnalysis({display, input});
    displayTask(res)

  };

  return (
    <Container
      style={{ width: "500px" }}
      className="rounded mt-5 border border-dark bg bg-secondary"
    >
        <MainDisplay onDisplay={display} />
        <InputHub onInput={userInputHandler} />
    </Container>
  );
};
export default CalculatorBody;
