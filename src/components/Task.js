import React from 'react'

import './Task.css'

const Task = () => {
    return (
        <div className='taskContainer'>
            <button className='taskContainer__finishbtn'>P</button>
            <button className='taskContainer__finishbtn  translateLeft__16--modifier'>D</button>
            <div className='taskContainer__taskdatacontainer'>
                <p className="taskContainer__title">Implement task sorting</p>
                <p className="taskContainer__metadata">created at: 12/22/2021</p>
            </div>
        </div>
    )
}

export default Task
