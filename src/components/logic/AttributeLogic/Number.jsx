const Number = ({ display, data }) => {
    const oldDisplay = display.value;
    const newDisplay = oldDisplay + data.value;
    return newDisplay;
  };
  export default Number;