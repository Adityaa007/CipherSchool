import { useContext } from "react";
import AddTask from "./components/AddTask";
import TodoScreen from "./Screens/TodoScreen";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import {TaskProvider} from "./context/TaskContext";
import Taskcontext from "./context/TaskContext";

 const router = createBrowserRouter([
    {
      path: "/",
      element: <TodoScreen/>,
    },
    {
      path:"/add-task",
      element:<AddTask onSubmit={addNewTask}/>,
    },
    ]);

const App = ()=>{
  const {taskList,addNewTask}=useContext(Taskcontext);

 
  
  
  return (<TaskProvider><RouterProvider router={router}/> </TaskProvider>);
};

export default App;