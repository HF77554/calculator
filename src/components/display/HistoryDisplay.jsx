const HistoryDisplay = ({ onHistory }) => {
  
  return (
    <div className="historydisplay">
      {onHistory && onHistory.map( history => 
        <h4 className='text-end text-break' key={history+Date.now()}>{history}</h4>)
      }
    </div>
  );
};
export default HistoryDisplay;