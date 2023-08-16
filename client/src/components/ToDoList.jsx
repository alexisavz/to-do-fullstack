import ToDo from "./ToDo";
import "../styles/ToDoList.scss";
import InputTask from "./InputTask";
import React, { useState, useEffect } from "react";
import axios from "axios";

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [isToggled, setIsToggled] = useState([]);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/pending");
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const fetchCompleted = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/completed");
      setCompleted(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleRefresh = () => {
    fetchData();
    fetchCompleted();
  };

  useEffect(() => {
    fetchData();
    fetchCompleted();
  }, []);

  return (
    <section>
      <div>
        <button
          className={`toggle toggle${
            isToggled ? "-pending" : "-completed"
          } mb-1`}
          onClick={handleToggle}
        >
          {isToggled ? "Get Completed" : "Get Pending"}
        </button>
      </div>
      <div className="list flex flex-column flex-centerHor">
        {isToggled
          ? todos.map((todo) => {
              return (
                <ToDo
                  key={todo.id}
                  task={todo.task}
                  id={todo.id}
                  completed={todo.completed}
                  handleRefresh={handleRefresh}
                />
              );
            })
          : completed.map((completed) => {
              return (
                <ToDo
                  key={completed.id}
                  task={completed.task}
                  id={completed.id}
                  completed={completed.completed}
                  handleRefresh={handleRefresh}
                />
              );
            })}
      </div>
      {isToggled && (
        <div>
          <InputTask handleRefresh={handleRefresh} />
        </div>
      )}
    </section>
  );
}

export default ToDoList;
