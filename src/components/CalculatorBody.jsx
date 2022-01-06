import { useState } from "react";
import { Container } from "react-bootstrap";

import MainDisplay from "./display/MainDisplay";
import InputHub from "./input/InputHub";

import AttributeAnalysis from "./logic/AttributeAnalysis";

const CalculatorBody = () => {
  const [display, displayTask] = useState({oldValue:'', operator:'', newValue:''});
  const [history, historyTask] =  useState([]);

  const userInputHandler = (input) => {
      const res = AttributeAnalysis({display:display, history:history, input:input});
      displayTask(res.display)
      historyTask(res.history)
  };

  return (
    <Container
      style={{ width: "500px" }}
      className="rounded mt-5 border border-dark bg bg-secondary"
    >
        <MainDisplay onDisplay={display} onHistory={history}/>
        <InputHub onInput={userInputHandler} />
    </Container>
  );
};
export default CalculatorBody;
