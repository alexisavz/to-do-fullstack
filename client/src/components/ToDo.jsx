import '../styles/ToDo.scss'

function ToDo({task}) {


    return (
      <div className="container mb-1 text-primary flex flex-row">
        <p>{task}</p>
        <div className='flex flex-row flex-centerVer flex-gap05'>
          <button className='container-button-complete'>O</button>
          <button className='container-button-delete'>X</button>
        </div>
      </div>
    );
  }
  
  export default ToDo;