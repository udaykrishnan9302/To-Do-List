import React from "react";
import TskAdd from './component/addTask';
import Todo from './component/taskComp';

function App() {
  const [tasks, setTasks] = React.useState([
    {
      data:"",
    },
  ]);

  const addTask = (data) => {
    
    const nwTsk = [...tasks, { data }];
    setTasks(nwTsk);
  };

  const delTask = (index) => {
    const nwTsk = [...tasks];
    nwTsk.splice(index, 1);
    setTasks(nwTsk);
  };

  return (
    <div className="App">
      <div className="flex-col content-center">
        
        <h1 className="text-5xl" ><ul>To Do List</ul></h1>
        <TskAdd addTask={addTask} />
        
        <div className="border-2 border-black ">
        {tasks.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} delTask={delTask} />
        ))}
        </div>
  
      </div>
      
      
    </div>
  );
}

export default App;