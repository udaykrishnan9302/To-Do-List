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
    
    <div className="">
    <div className="">
      <div class="p-3 text-3xl">
      <b >ADD TASKS</b>
      </div>
      <div className="">
      <input type="text" className="rounded-lg px-6 border-2 border-neutral-900 p-2" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new Tasks" />
    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ml-2" onClick={addbutton}>
      ADD
    </button>
    </div>
    </div>
    </div>

  );
}
  export default TskAdd;