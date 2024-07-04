import {useState} from "react";
const AddTask=()=>{
const [task,setTask]=useState({
  title:"",
  description:"",
})
let handleInputChange =(e)=>{
  setTask({...task,[e.target.name]:e.target.value,})
  
}

let onFormSubmit =(e)=>{
  e.preventDefault();
  console.log(task);
}

    return (
        <>
        <h3 className="ui heading center">Add New Task</h3>
        <div className="ui form">
    <form onSubmit={onFormSubmit}>
    <div className="ui form">
  <div className="field">
    <label>Title</label>
    <input type="text" placeholder="Task Title" name="title" onChange={handleInputChange}/>
  </div>
</div>
    <div classNamename="field">
    <label>Description</label>
    <textarea rows="2" placeholder="Task Description" name="description" onChange={handleInputChange}/>
    </div>
    <section>
    <button type="submit" class="ui secondary button"> Okay</button>
<button class="ui button">Cancel</button>
</section>
    </form>
    </div>
    </>
    
    )
};

export default AddTask;