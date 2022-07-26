import React from "react";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useState, useEffect } from "react";

function App() {
  const [Task, setTask] = useState([{}]);
  const TaskCollectionRef = collection(db, "TaskCollection");

  const createTask = async () => {
    await addDoc(TaskCollectionRef, { Task: value });
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "TaskCollection", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getList = async () => {
      const dat = await getDocs(TaskCollectionRef);
      setCount(dat.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log({ TDetails });
    };
    getList();
  }, []);

  const [value, setValue] = React.useState("");
  const [TDetails, setCount] = useState([{}]);

  const delTask = (index) => {
    const nwTsk = [...TDetails];
    nwTsk.splice(index, 1);
    setCount(nwTsk);
  };

  const addbutton = (e) => {
    e.preventDefault();
    const nwTsk = [...TDetails, { TaskVal: value }];
    setTask(nwTsk);

    if (!value) return;
    var tskStore = [...TDetails, { Task: value }];
    setCount(tskStore);
    createTask();
    setValue("");
  };

  /*DATA DISPLAYING AND DELETE BUTTON*/
  function Todo({ todo, index, delTask }) {
    return (
      <div className="p-1">
        {todo.Task !== "" ? (
          <div className="flex px-2">
            <span className="text-2xl">
              {index + 1}.{todo.Task}
            </span>

            <div className="ml-auto">
              <button
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ml-2"
                onClick={() => {
                  delTask(index);
                  deleteUser(todo.id);
                }}
              >
                X
              </button>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  }
  /*App func return */
  return (
    <div className="flex justify-center p-8">
      <div className=" p-10 text-center bg-cyan-50 shadow-xl rounded-lg">
        <h1 className="text-5xl p-4">To Do List</h1>

        <div class="p-3 text-3xl">
          <b>ADD TASKS</b>
        </div>

        <input
          type="text"
          className="rounded-lg px-6 border-2 border-neutral-900 p-2"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add new Tasks"
        />
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ml-2"
          onClick={addbutton}
        >
          ADD
        </button>
        {TDetails.length === 0 ? (
          <div className="p-4">
            {TDetails.map((todo, index) => (
              <Todo index={index} todo={todo} delTask={delTask} />
            ))}
          </div>
        ) : (
          <div className="border-2 border-black mr-3 mt-3 rounded-lg">
            {TDetails.map((todo, index) => (
              <Todo key={index} index={index} todo={todo} delTask={delTask} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
