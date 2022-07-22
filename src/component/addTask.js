import React from "react";
function TskAdd({ addTask }) {
  const [value, setValue] = React.useState("");

  const addbutton = e => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("");
  };

  return (
    
    <div className="container">
    <div className="">
      <div class="p-2">
      <b >ADD TASKS :</b>
      </div>
      <div class="p-2">
      <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new Tasks" />
      </div>
      <div class="p-2">
    <button  variant="outline-dark " onClick={addbutton}>
      ADD
    </button>
    </div>
    </div>
    </div>

  );
}
  export default TskAdd;