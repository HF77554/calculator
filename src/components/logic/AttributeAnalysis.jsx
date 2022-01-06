import StringAddition from "./functional/StringAddition";
import Calculation from "./functional/Calculation";

const AttributeAnalysis = ( { display, history, input }) => {
  const attribute = input.attribute;
  const userInput = input.value
  const resetDisplay = {oldValue:'', operator:'', newValue:''}
  
  
  //switch for each button class
  switch (attribute) {
    case "number":
      return {
          display:{...display, newValue: StringAddition(display.newValue, userInput)},
          history:[...history]
      }
    case "calculation":
      if (display.newValue && !display.oldValue){
        return {
          display:{oldValue:display.newValue, operator:userInput, newValue:''},
          history:[...history]
        }
      } else if (!display.oldValue && !display.newValue) {
        const newHistory = history
        console.log('Check Value')
        console.log(newHistory)

        return {
          display:{oldValue:history.pop(), operator:userInput, newValue:''},
          history:[...newHistory]
        }
      } 
    case "result":
      const result = Calculation(display)

      //in case the '=' is pressed before 
      if(!display.oldValue || !display.operator ||!display.newValue) {
        return {
          display:display,
          history:[...history]
        }
      };

      //in case result not in Calculation, reset display
      if (!result) {
        return {
          display:resetDisplay,
          history:[...history]
        }
      }
      
      //returns calculation
      return {
        display:resetDisplay,
        history:[...history, result]
      }
    default:
      console.log(`Sorry, ${attribute} has not been added yet.`);
      return {
        display:display,
        history:[...history]
      }
  }
};
export default AttributeAnalysis;
