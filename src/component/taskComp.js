import React from "react";
function Todo({ todo, index, delTask }) {
  return (
    <div className="p-1">
      {todo.data !=="" ? <div className="flex px-2">
        <div className="">
          <span className="text-2xl">{index}.{todo.data}</span>
        </div>
        <div className="ml-auto">
         <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ml-2" onClick={() => delTask(index)}>X</button>
        </div>
      </div> : <></>}
    </div>
  );
}
  export default Todo;