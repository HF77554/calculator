import './MainDisplay.css'

const HistoryItems = ({onHistory, onCollapsed, onSelect}) => {

    return(
        <div>
            {onCollapsed ?
            //shows only last value to be displayed
            <h4 className='text-end text-break'>{onHistory[onHistory.length-1]}</h4>
            :
            //shows history of values, select item 
            onHistory.map( item => <h4 className='text-end text-break historyItem' onClick={() => onSelect({value:item, attribute:'number', color:'grey'})} key={Math.random()*Math.random()*1000}>{item}</h4>)
            }
        </div>
    )
}
export default HistoryItems