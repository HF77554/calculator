import StringAddition from "./functional/StringAddition";
import Calculation from "./functional/Calculation";


const AttributeAnalysis = ({display, history, input}) => {
  const attribute = input.attribute;
  const userInput = input.value
  const resetDisplay ={oldValue:'', operator:'', newValue:''}
  
  switch (attribute) {
    case "number":
      return {
          display:{...display, newValue: StringAddition(display.newValue, userInput)},
          history:history
      }
    case "calculation":
      return {
        display:{oldValue:display.newValue, operator:userInput, newValue:''},
        history:history
      }
    case "result":
      const result = Calculation(display)

      if(!display.oldValue || !display.operator ||!display.newValue) {
        return {
          display:display,
          history:history
        }
      };

      //in case result not in Calculation, reset display
      if (!result) {
        return {
          display:resetDisplay,
          history:history
        }
      }
  
      return {
        display:resetDisplay,
        history:[...history, result]
      }
    default:
      console.log(`Sorry, ${attribute} has not been added yet.`);
      return {
        display:display,
        history:history
      }
  }
};
export default AttributeAnalysis;
