import React from "react";
import TskAdd from './component/addTask';
import Todo from './component/taskComp';
var count=1;
function App() {

  const [tasks, setTasks] = React.useState([
    {
      data:""
    }
  ]);

  const addTask = (data) => {
    tasks.length==1 ?count=1:count=count+1;
    const nwTsk = [...tasks, { data:` ${data}` }];
    setTasks(nwTsk);
  };

  const delTask = (index) => {
    const nwTsk = [...tasks];
    nwTsk.splice(index, 1);
    setTasks(nwTsk);
    console.log(index);
  };

  return (
    <div className="flex justify-center p-8">
      <div className=" p-10 text-center bg-cyan-50 shadow-xl rounded-lg" >
        <h1 className="text-5xl p-4" >To Do List</h1>
        <TskAdd addTask={addTask} />
       {tasks.length===1 ?
       <div className="p-4">
       {tasks.map((todo, index) => (
         <Todo index={index} todo={todo} delTask={delTask} />
       ))}
       </div>
       :
       <div className="border-2 border-black mr-3 mt-3 rounded-lg">
       {tasks.map((todo, index) => (
         <Todo key={index} index={index} todo={todo} delTask={delTask} />
       ))}
       </div>
      }
      </div>
    </div>
  );
}

export default App;