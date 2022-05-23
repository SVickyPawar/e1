import React from "react";

import TaskApp from "./components/TaskApp";
import data from "./data/tasks.json"

function App() {

  
  const [todo, setTodo] = React.useState(data);
  // console.log(todo)
  return <div>{/* Code Here */}
  <TaskApp />

  </div>;
}

export default App;
