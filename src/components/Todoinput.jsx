import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../App.css";
import Todolist from "./Todolist";
import Todoitem from "./Todoitem";
import Done from "./Done";
const Todoinput = () => {
  let [value, setvalue] = useState("");
  const [todos, settodos] = useState([]);
  const [newListData, setnewListData] = useState([]);
  const [compData, setcompData] = useState([]);
  const deleteData = (id) => {
    settodos(todos.filter((todo) => todo.id !== id));
  };

  const displayComp = (id) => {
    const compNewData = todos.filter((newData) => {
      if (newData.id === id) {
        setnewListData([...newListData, newData]);
      }
      return id !== newData.id;
    });
    settodos(compNewData);
  };
  return (
    <div>
      <input
        value={value}
        typeof="text"
        placeholder="Enter todo details...."
        onChange={(e) => {
          setvalue(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          settodos([
            ...todos,
            {
              id: uuidv4(),
              text: value,
              done: false,
            },
          ]);
          setvalue("");
        }}
      >
        {" "}
        Add
      </button>

      <Todolist>
        <div>
          {todos.map((Listdata) => (
            <Todoitem
              key={Listdata.id}
              Listdata={Listdata}
              deleteData={deleteData}
              displayComp={displayComp}
            ></Todoitem>
          ))}
        </div>
      </Todolist>

      <div>
        <button
          onClick={() => {
              console.log(newListData)
            setcompData([...newListData]);
          }}
        >
          Show Completed List{" "}
        </button>

        <Done compData={compData}></Done>
      </div>
    </div>
  );
};

export default Todoinput;
