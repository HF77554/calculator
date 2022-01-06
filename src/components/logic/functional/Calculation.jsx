const Calculation = (display) => {

    const oldVal = parseFloat(display.oldValue)
    const operator = display.operator
    const newVal = parseFloat(display.newValue)
    

    switch (operator) {
        case "+":
            return (oldVal+newVal)
        case "-":
            return (oldVal-newVal)
        case "/":
            return (oldVal/-newVal)
        case "X":
            return (oldVal*newVal)
        case "-":
            return (oldVal-newVal)
        default:
            return;
    }
};
export default Calculation;