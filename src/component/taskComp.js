import React from "react";
function Todo({ todo, index, delTask }) {
  return (
    <div>
      {todo.data !="" ? <div>
 
        <span>{todo.data}</span>

   
        <button variant="outline-secondary" onClick={() => delTask(index)}>
        🗑
        </button>
      </div> : <></>}
      
      
    </div>
  );
}
  export default Todo;