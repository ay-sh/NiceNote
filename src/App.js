import moment from 'moment';
import './App.css';

import TaskList from './components/TaskList';


/*
  status
    pending
    done
*/
function App() {
  
  const statusEnum = {
    STATUS_PENDING: false,
    STATUS_DONE: true
  }

  const sampleTasks = [{
    taskListTitle:"Work",
    taskListSize: 2,
    tasks: [{
      title: "Go for a walk",
      createdAt: moment().format('MMM Do YYYY'),
      status: statusEnum.STATUS_PENDING,
    },{
      title: "Do other work",
      createdAt: moment().add(2,'d').format('MMM Do YYYY'),
      status: statusEnum.STATUS_DONE
    },{
      title: "Do other work",
      createdAt: moment().add(2,'d').format('MMM Do YYYY'),
      status: statusEnum.STATUS_DONE
    }]
  }]

  return (
    <div className="App">
      <TaskList taskListData={sampleTasks[0]}/>
    </div>
  );
}

export default App;
