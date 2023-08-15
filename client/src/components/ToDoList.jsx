import ToDo from "./ToDo";
import "../styles/ToDoList.scss";

function ToDoList() {
  return (
    <section>
      <div className="list flex flex-column flex-centerHor">
        <ToDo />
        <ToDo />
      </div>
      <div className="flex flex-gap1 mt-1">
        <button className="list-complete">Complete</button>
        <button className="list-delete">Delete</button>
      </div>
    </section>
  );
}

export default ToDoList;
