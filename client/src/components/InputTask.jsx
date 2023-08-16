import "../styles/InputTask.scss";
import React, { useRef } from "react";
import axios from "axios";

function InputTask({ handleRefresh }) {
  const inputRef = useRef(null);

  const handleSubmit = async () => {
    if (inputRef.current) {
      await axios
        .post("http://localhost:3001/api/create", {
          task: inputRef.current.value,
        })
        .then((response) => {
          alert("Task Added Succesfully");
          handleRefresh();
          inputRef.current.value = "";
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert("Please add a valid task");
    }
  };

  return (
    <div className="input-container mt-2 flex flex-centerHor flex-column">
      <h3 className="input-title">Add New Task</h3>
      <input type="text" id="complete" name="todo" ref={inputRef} />
      <button className="input-button" onClick={handleSubmit}>
        Add Task
      </button>
    </div>
  );
}

export default InputTask;
