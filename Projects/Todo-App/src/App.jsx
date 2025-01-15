import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";
function App() {
  const todoItems = [
    {
      name: "Goto University",
      duedate: "12/01/2025",
    },
    {
      name: "Have dinner with everything",
      duedate: "01/01/2025",
    },
    {
      name: "Have dinner with everything",
      duedate: "01/01/2025",
    },
  ];

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
