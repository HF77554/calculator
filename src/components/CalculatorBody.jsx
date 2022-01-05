import { useState } from "react";
import { Container } from "react-bootstrap";

import MainDisplay from "./display/MainDisplay";
import InputHub from "./input/InputHub";

import AttributeAnalysis from "./logic/AttributeAnalysis";

const CalculatorBody = () => {
  const [display, displayTask] = useState("12345687");
  const [displayHistory, displayHistoryTask] =  useState("12345687");

  const userInputHandler = (input) => {
      const newDisplay = AttributeAnalysis(display, input);
      displayTask(newDisplay)
  };

  return (
    <Container
      style={{ width: "500px" }}
      className="rounded mt-5 border border-dark bg bg-secondary"
    >
        <MainDisplay onDisplay={display} onHistory={displayHistory}/>
        <InputHub onInput={userInputHandler} />
    </Container>
  );
};
export default CalculatorBody;
