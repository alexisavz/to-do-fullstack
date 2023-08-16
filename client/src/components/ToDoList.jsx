import ToDo from "./ToDo";
import "../styles/ToDoList.scss";
import InputTask from "./InputTask";
import React, { useState, useEffect } from "react";
import axios from "axios";

function ToDoList() {
  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/pending");
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleRefresh = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <div className="list flex flex-column flex-centerHor">
        {todos.map((todo) => {
          return <ToDo key={todo.id} task={todo.task}/>
        })}
      </div>
      <div>
        <InputTask handleRefresh={handleRefresh}/>
      </div>
    </section>
  );
}

export default ToDoList;
