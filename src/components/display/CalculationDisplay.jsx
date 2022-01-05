import './calculationDisplay.css'

const CalculationDisplay = ({onDisplay}) => {
    return (
      <div className='calculationDisplay'>
        <h3 className='calculationNumber'>{onDisplay}</h3>
      </div>
    );
  };
  export default CalculationDisplay;