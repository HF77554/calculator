const CalculationDisplay = ({onDisplay}) => {
    return (
      <div>
        <h3 className='text-end text-break'>{onDisplay.oldValue}{onDisplay.operator}{onDisplay.newValue}</h3>
      </div>
    );
  };
  export default CalculationDisplay;
