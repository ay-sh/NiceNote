import React,{useState} from 'react'

import './TaskList.css'

import Task from './Task'
import AddTask from './AddTask'

const TaskList = ({taskListData, ...props}) => {
    //taskListSize also present can be used
    const {taskListTitle, tasks} = taskListData;
    const [openAddMenu, setopenAddMenu] = useState(false);

    const handleOpenAddMenu = () => {
        setopenAddMenu(prevState => !prevState);
    }

    return (
        <div className='taskListContainer'>
            <p className='taskListContainer__title'>{taskListTitle}</p>
            <button className="taskListContainer__addbtn" onClick={handleOpenAddMenu}>Add</button>
            <div className={`taskListContainer__addmenucontainer ${openAddMenu ? 'menuOpen' : ''}`}>
                {openAddMenu && <AddTask/>}
            </div>
            <div className='taskListContainer__taskcont'>
                {tasks.map((task, index)=>
                    <Task key={index} taskData={task}/>
                )}
            </div>
        </div>
    )
}

export default TaskList
