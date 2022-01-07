import StringAddition from "./functional/StringAddition";
import Calculation from "./functional/Calculation";

const AttributeAnalysis = ( {display, input}) => {
  const attribute = input.attribute;
  const userInput = input.value;
  const userHistory = display.history
    
  //switch for each button class
  switch (attribute) {
    case "number":
      return {...display, newValue: StringAddition(display.newValue, userInput)}
    case "calculation":
      if (display.newValue && !display.oldValue){
        return {...display, oldValue:display.newValue, operator:userInput, newValue:''}

      } else if (!display.oldValue && !display.newValue) {  
        return {...display, oldValue:userHistory.pop(), operator:userInput, newValue:''}
      } 
    case "result":
      const result = Calculation(display)

      //in case the '=' is pressed before 
      if(!display.oldValue || !display.operator ||!display.newValue) {
        return {...display}
      };

      //in case result not in Calculation, reset display
      if (!result) {
        return {oldValue:'', operator:'', newValue:'', history:[...userHistory]}
      }
      
      //returns calculation
      return {oldValue:'', operator:'', newValue:'', history:[...userHistory, result]}

    default:
      console.log(`Sorry, ${attribute} has not been added yet.`);
      return {...display}
  }
};
export default AttributeAnalysis;
