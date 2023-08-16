import '../styles/InputTask.scss'

function InputTask() {
    return (
      <div className="input-container mt-2 flex flex-centerHor flex-column">
        <h3 className='input-title'>Add New Task</h3>
        <input type="text" id="complete" name="todo" />
        <button className='input-button'>Add Task</button>
      </div>
    );
  }
  
  export default InputTask;