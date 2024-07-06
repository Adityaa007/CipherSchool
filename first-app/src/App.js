import { useContext, useState } from "react";
import AddTask from "./components/AddTask";
import TodoScreen from "./Screens/TodoScreen";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import {TaskProvider} from "./context/Taskcontext";
import Taskcontext from "./context/Taskcontext";



const App = ()=>{
  const {taskList,addNewTask}=useContext(Taskcontext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <TodoScreen taskList={taskList}/>,
    },
    {
      path:"/add-task",
      element:<AddTask onSubmit={addNewTask}/>,
    },
    ]);
  
  
  return (<TaskProvider><RouterProvider router={router}/> </TaskProvider>);
};

export default App;