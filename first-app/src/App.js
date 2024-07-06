// import {Component} from "react";
import TodoScreen from "./Screens/TodoScreen";
import {createBrowserRouter,RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
{
  path:"/",
  element:<TodoScreen/>,
},
{
  path:"/add-task",

  element:<AddTask/>,
},
]);


// class App extends Component{
//   render(){
//       return <TodoScreen />;
      
//   }
// }
const App = ()=>{
  return <RouterProvider router={router} />;
};

export default App;