import { useContext} from "react";
import Task from "../components/Task";
import AddTask from "../components/AddTask";
import Taskcontext from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

const TodoScreen = () =>{
    const { taskList}=useContext(Taskcontext);
    const navigate=useNavigate();

    return(
        <>
        <div className="screen">
        <h1 className="Ui-heading center">ToDo List</h1>
        <div>
            <button 
                onClick= { (e)=>
            {
                navigate("/add-task")
            }
            } className="ui secondary button"> Add Task</button>
            <section className="section">
            <div className="ui cards">
            {taskList.map((task)=>
                <Task task={task} key={task.taskId}/>
                )}
                </div>
                </section>
        </div>
        {/* <AddTask onSubmit={AddNewTask}/> */}
        </div>
        </>
    );
}

export default TodoScreen;