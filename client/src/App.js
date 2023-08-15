import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="flex flex-column flex-centerVer">
      <h1 className="text-primary text-center mt-2 mb-2">To-Do List</h1>
      <ToDoList />
    </div>
  );
}

export default App;
