import { useState } from "react"

const HistoryItems = ({onHistory, onCollapsed}) => {

    console.log(onHistory)

    return(
        <div>
            {onCollapsed ?
                "test"
            :
                onHistory.map( history => <h4 className='text-end text-break' key={Math.floor(Math.random()*Math.random()*1000)}>{history}</h4>)
            }
        </div>
    )
}
export default HistoryItems