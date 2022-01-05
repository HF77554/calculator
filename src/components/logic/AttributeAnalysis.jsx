import Number from "./AttributeLogic/Number";

const AttributeAnalysis = (display, input) => {
  const attribute = input.attribute;
  const oldDisplay = display;
  const userInput = input.value

  switch (attribute) {
    case "number":
      const newDisplay = Number(oldDisplay, userInput);
      return newDisplay;
      break;
    case "calculation":
      console.log(input);
      console.log("calculation");
      break;
    case "result":
      console.log(input);
      console.log("result");
      break;
    default:
      console.log(`Sorry, ${attribute} does not exist.`);
  }
};
export default AttributeAnalysis;
