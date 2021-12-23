import React from 'react'

import './AddTask.css'

const AddTask = () => {
    return (
        <div className="addTaskContainer">
            <input className="addTaskContainer__inputbox" placeholder="add your task..."> 
            </input>
            <button className="addTaskContainer__addbtn">D</button>
        </div>
    )
}

export default AddTask
