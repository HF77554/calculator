import { useState, useEffect } from "react"

const HistoryItems = ({onDisplay, onCollapsed}) => {

    const [lastValue, lastValueTask] = useState()
    

    useEffect(() => {
        const arrayCopy = onDisplay.history
        const arrayLastVal = arrayCopy[arrayCopy.length - 1]
        lastValueTask(arrayLastVal)
        
      }, [onDisplay]);

    return(
        <div>
            {onCollapsed ?
            <h4 className='text-end text-break'>{lastValue}</h4>
            :
            onDisplay.history.map( history => <h4 className='text-end text-break' key={Math.random()*Math.random()*1000}>{history}</h4>)
            }
        </div>
    )
}
export default HistoryItems