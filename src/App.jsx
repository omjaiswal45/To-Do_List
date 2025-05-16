import AppName from "./components/AppName"; 
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/Todoitems";
import "./App.css";

function App() {
  const todoItems = [
    { todoName: "buy milk", todoDate: "01/10/2025" },
    { todoName: "buy banana", todoDate: "02/10/2025" },
    { todoName: "buy eggs", todoDate: "03/10/2025" },
    { todoName: "buy bread", todoDate: "04/10/2025" },
    { todoName: "buy butter", todoDate: "05/10/2025" },
    { todoName: "buy sugar", todoDate: "06/10/2025" },
    { todoName: "buy salt", todoDate: "07/10/2025" },
    { todoName: "buy rice", todoDate: "08/10/2025" },
    { todoName: "buy flour", todoDate: "09/10/2025" },
    { todoName: "buy oil", todoDate: "10/10/2025" },
  ];
  return (
    <center class="todo-container">
      <AppName />
      <div className="todo-header">
        <AddTodo />
      </div>
     
     <div className="items-container"> 
        < TodoItems todoItems ={todoItems}></TodoItems>
      </div>
     
    </center>
  );
}
export default App;

