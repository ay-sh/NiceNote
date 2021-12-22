import moment from 'moment';
import './App.css';

import Task from './components/Task';


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
    title: "Go for a walk",
    createdAt: moment().format('MMM Do YYYY'),
    status: statusEnum.STATUS_PENDING,
  },{
    title: "Do other work",
    createdAt: moment().add(2,'d').format('MMM Do YYYY'),
    status: statusEnum.STATUS_DONE
  }] 

  return (
    <div className="App">
      <Task taskData={sampleTasks[0]}/>
      <Task taskData={sampleTasks[1]}/>
    </div>
  );
}

export default App;
