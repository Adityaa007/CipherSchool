import { formatDate } from "../utils/Dateutil";
const Task = ({task: {title, Description, createdDate}}) => {
    return (
//      


<div>
<div class="ui cards">
  <div class="card">
    <div class="content">
      <div class="header">  {title}  </div>
      <div class="meta">{formatDate(createdDate)}</div>
      <div class="description">{Description}</div>
    </div>
    <div class="extra content">
      <div class="ui two buttons">
        <div class="ui basic green button">Edit</div>
        <div class="ui basic red button">Delete</div>
      </div>
    </div>
  </div>
</div>
</div>

    );
};

export default Task;