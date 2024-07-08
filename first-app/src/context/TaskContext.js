import { createContext, useState } from "react";

const TaskContext= createContext();

const TaskProvider= ({children}) =>{
    const [taskList,setTaskList]=useState([]);

    const AddNewTask = (task) =>{
        setTaskList([...taskList,{...task,createdDate: new Date()}])
    };

    return( <TaskContext.Provider value={{taskList,AddNewTask}}  > 
    {children} </TaskContext.Provider>);
};

export {TaskProvider};
export default TaskContext;