import './calculationDisplay.css'

const HistoryDisplay = ({onHistory}) => {
    return (
      <div className='calculationDisplay'>
        <h4 className='calculationHistory'>{onHistory}</h4>
      </div>
    );
  };
  export default HistoryDisplay;