import {useState} from 'react'

const HistoryDisplay = ({ onHistory }) => {
  
  return (
    <div>
      <h5 className='historydisplay text-end text-break'>{onHistory.map(val => <div key={val+Date.now()}>{val}</div> )}</h5>
      <h4 className='historydisplay text-end text-break'>{onHistory}</h4>
    </div>
  );
};
export default HistoryDisplay;