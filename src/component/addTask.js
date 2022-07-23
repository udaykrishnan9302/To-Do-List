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
      <div class="flex p-3 text-3xl justify-center">
      <b >ADD TASKS</b>
      </div>
      <div className="flex justify-center ">
      <input type="text" className="rounded-lg px-6 border-2 border-neutral-900 p-1" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new Tasks" />
    <button className="rounded-lg mx-3 px-3 border-2 border-black " onClick={addbutton}>
      ADD
    </button>
    </div>
    </div>
    </div>

  );
}
  export default TskAdd;