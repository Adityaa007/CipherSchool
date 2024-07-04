import { useState} from "react";
import Task from "../components/Task";
import AddTask from "../components/AddTask";
// import { Component } from "react";


// class TodoScreen extends Component{
//     state={
//         taskcount:0,

//     }

//     render(){
//         return(
//             <div className="screen">
//             <h1 className="UI-heading center">ToDo List</h1>
//             <div>
//                 <button onClick={
//                     (e) => {
//                         this.setState({...this.state,taskcount:this.state.taskcount+1})
//                         console.log("Add event button was clicked");
//                     }

//                 } className="ui secondary button"> Add Task</button>
//                 <p>No of Task Added till now:{this.state.taskcount}
//                 </p>
//             </div>
//             </div>

//         )
//     }
// }

const TodoScreen = () =>{
    const [taskList,setTasklist]=useState([]);

    let addNewTask=(task)=>{
        setTasklist([...taskList,{...task,cresatedDate:new Date()}])
    }

    return(
        <div className="screen">
        <h1 className="Ui-heading center">ToDo List</h1>
        <div>
            <button onClick= { (e)=>{
                setTasklist([...taskList,{
                    title:"Go to Gym",
                    Description:"To Being in the Shape"
                },
            ]);
            }
            } className="ui secondary button"> Add Task</button>
            <section className="section">
            <div class="ui cards">
            {taskList.map((task,index)=>
                <Task task={task} key={index}/>
                )}
                </div>
                </section>
        </div>
        <AddTask/>
        </div>

    );
}

export default TodoScreen;