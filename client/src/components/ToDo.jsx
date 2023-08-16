import "../styles/ToDo.scss";
import axios from "axios";

function ToDo({ task, id, handleRefresh, completed }) {
  const handleDelete = async () => {
    try {
      await axios.delete("http://localhost:3001/api/delete", {
        id: id, // Include the data in the request body
      });
      alert("Task Deleted Successfully");
      handleRefresh();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put("http://localhost:3001/api/update", {
        data: { id: id }, // Include the data in the request body
      });
      alert("Task has been completed!");
      handleRefresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mb-1 text-primary flex flex-row">
      <p>{task}</p>
      {!completed && (
        <div className="flex flex-row flex-centerVer flex-gap05">
          <button className="container-button-complete" onClick={handleUpdate}>
            O
          </button>
          <button className="container-button-delete" onClick={handleDelete}>
            X
          </button>
        </div>
      )}
    </div>
  );
}

export default ToDo;
