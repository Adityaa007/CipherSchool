import { useContext, useState } from "react";
import { formatDate } from "../utils/Dateutil";
import TaskContext from "../context/TaskContext";
const Task = ({task: {title, description, createdDate,taskId}}) => {

const {deleteTask}=useContext(TaskContext);
const [isEditing,setIsEditing]=useState(false)
 
if(isEditing){
  return (
    <div>
    <div className="ui cards">
      <div className="card">
        <div className="content">
          <div className="header">  {title}  </div>
          <div className="meta">{formatDate(createdDate)}</div>
          <div className="description">{description}</div>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button" onClick={()=> setIsEditing(!isEditing)}>Save</div>
            <div className="ui basic red button" onClick={()=> deleteTask(taskId)}>Cancel</div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
        );
    
} 
else{
return (
<div>
<div className="ui cards">
  <div className="card">
    <div className="content">
      <div className="header">  {title}  </div>
      <div className="meta">{formatDate(createdDate)}</div>
      <div className="description">{description}</div>
    </div>
    <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button" onClick={()=> setIsEditing(!isEditing)}>Edit</div>
        <div className="ui basic red button" onClick={()=> deleteTask(taskId)}>Delete</div>
      </div>
    </div>
  </div>
</div>
</div>

    );
}
};

export default Task;