import React from "react";
function Todo({ todo, index, delTask }) {
  return (
    <div className="p-1">
      {todo.data !=="" ? <div className="flex px-2">
        <div className="">
          <span className="">{todo.data}</span>
        </div>
        <div className="ml-auto">
         <button className="" onClick={() => delTask(index)}>🗑</button>
        </div>
      </div> : <></>}
    </div>
  );
}
  export default Todo;