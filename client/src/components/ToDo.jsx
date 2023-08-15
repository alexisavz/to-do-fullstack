import '../styles/ToDo.scss'

function ToDo() {
    return (
      <div className="container mb-1 text-primary flex flex-row">
        <p>Take out the trash</p>
        <input type="checkbox" id="complete" name="todo" />
      </div>
    );
  }
  
  export default ToDo;