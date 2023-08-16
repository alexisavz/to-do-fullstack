import "../styles/ToDo.scss";
import axios from "axios";

function ToDo({ task, id, handleRefresh }) {

  const handleDelete = async () => {
    try {
      await axios.delete("http://localhost:3001/api/delete", {
        data: { id: id }, // Include the data in the request body
      });
      alert("Task Deleted Successfully");
      handleRefresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mb-1 text-primary flex flex-row">
      <p>{task}</p>
      <div className="flex flex-row flex-centerVer flex-gap05">
        <button className="container-button-complete">O</button>
        <button className="container-button-delete" onClick={handleDelete}>
          X
        </button>
      </div>
    </div>
  );
}

export default ToDo;
