import { useState } from "react";
import { Container } from "react-bootstrap";

import MainDisplay from "./display/MainDisplay";
import InputHub from "./input/InputHub";

import AttributeAnalysis from "./logic/AttributeAnalysis";

const CalculatorBody = () => {
  const [display, displayTask] = useState("123");

    const userInputHandler = (input) => {
        console.log(input)
        //AttributeAnalysis(display, input);
    };

  return (
    <Container
      style={{ width: "500px" }}
      className="rounded mt-5 border border-dark bg bg-secondary"
    >
        <MainDisplay />
        <InputHub onInput={userInputHandler} />
    </Container>
  );
};
export default CalculatorBody;
