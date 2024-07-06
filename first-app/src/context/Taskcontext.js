import { createContext, useState } from "react";

const Taskcontext= createContext();

const TaskProvider= ({children}) =>{
    const [taskList,setTaskList]=useState([]);

    const AddNewTask = (Task) =>{
        setTaskList([...taskList,{...Task,createdDate: new Date()}])
    };

    return( <Taskcontext.Provider value={{taskList,AddNewTask}}  > 
    {children} </Taskcontext.Provider>);
};

export {TaskProvider};
export default Taskcontext;