const Calculation = (display) => {

    const oldVal = parseFloat(display.oldValue)
    const operator = display.operator
    const newVal = parseFloat(display.newValue)
    

    switch (operator) {
        case "+":
            return (oldVal+newVal).toString()
        case "-":
            return (oldVal-newVal).toString()
        case "/":
            return (oldVal/newVal).toString()
        case "x":
            return (oldVal*newVal).toString()
        case "-":
            return (oldVal-newVal).toString()
        default:
            return;
    }
};
export default Calculation;