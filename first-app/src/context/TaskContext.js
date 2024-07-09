import { createContext, useState } from "react";
import {v4 as  randomUUID} from "uuid";
const TaskContext= createContext();

const TaskProvider= ({children}) =>{
    const [taskList,setTaskList]=useState([]);

    const AddNewTask = (task) =>{
        setTaskList([...taskList,{...task,createdDate: new Date(),taskId: randomUUID()}])
    };

    const deleteTask=(taskId)=>{
       setTaskList(taskList.filter((task)=>task.taskId !==taskId));
    }

    return( <TaskContext.Provider value={{taskList,AddNewTask,deleteTask}}> 
    {children} </TaskContext.Provider>);
};

export {TaskProvider};
export default TaskContext;