import React,{useState} from 'react'

import './Task.css'

const Task = (props) => {
    const {title, createdAt, status} = props.taskData;
    const[localStatus, setLocalStatus] = useState(status);
    
    const taskFinishHandler = () => {
        setLocalStatus(prevLocalStatus => !prevLocalStatus);
    }

    return (
        <div className='taskContainer'>
            <button className='taskContainer__btn normalbtnStyle'>P</button>
            <button className= {`taskContainer__btn translateLeft__16--modifier ${localStatus ? 'finishbtnStyle':'normalbtnStyle'}`} 
                    
                    onClick={taskFinishHandler}>
                        D
            </button>
            <div className='taskContainer__taskdatacontainer'>
                <p className="taskContainer__title">
                    <span className={`titleStrikethrough ${localStatus ? 'titleStrikethroughDone':''}`}>{title}</span>
                </p>
                <p className="taskContainer__metadata">created at: {createdAt}</p>
            </div>
        </div>
    )
}

export default Task
