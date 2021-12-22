import React from 'react'

import './TaskList.css'

import Task from './Task'

const TaskList = ({taskListData, ...props}) => {
    //taskListSize also present can be used
    const {taskListTitle, tasks} = taskListData;

    return (
        <div className='taskListContainer'>
            <p className='taskListContainer__title'>{taskListTitle}</p>
            <button className="taskListContainer__addbtn">Add</button>
            <div className='taskListContainer__taskcont'>
            {tasks.map((task, index)=>
                <Task key={index} taskData={task}/>
            )}
            </div>
        </div>
    )
}

export default TaskList
