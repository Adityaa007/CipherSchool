// import { Component } from "react";
import { useState } from "react";
import AddTask from "./components/AddTask";
import ToDoScreen from "./Screens/TodoScreen";
// for this i used the react router dom package from npm website 
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { TaskProvider } from "./context/TaskContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ToDoScreen />
  },
  {
    path:"/add-task",
    element:<AddTask/>
  }
])

const App = () => {
  // const [tasks,setTasks]=useState([]);



  return (
    <TaskProvider>
      <RouterProvider router={router} />;
    </TaskProvider>
  )
}

export default App;


// import { useContext, useState } from "react";
// import AddTask from "./components/AddTask";
// import TodoScreen from "./Screens/TodoScreen";
// import {createBrowserRouter,RouterProvider} from "react-router-dom";
// import {TaskProvider} from "./context/TaskContext";
// import Taskcontext from "./context/TaskContext";

//  const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <TodoScreen/>,
//     },
//     {
//       path:"/add-task",
//       element:<AddTask/>,
//     },
//     ]);

// const App = ()=>{
//   const {taskList,addNewTask}=useContext(Taskcontext);


 
  
  
//   return (<TaskProvider><RouterProvider router={router}/> </TaskProvider>);

// };

// export default App;