import AppName from "./components/AppName"; 
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/Todoitems";
import "./App.css";
import { useState } from "react";
import Container from "./components/Container";
function App() {
  // const intialTodoItems = [
  //   { todoName: "buy milk", todoDate: "01-10-2025" },
  //   { todoName: "go to gym", todoDate: "01-10-2025" },
  //   { todoName: "chain pine ", todoDate: "01-10-2025" },
  // ];
 
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem =(itemName, itemDueDate) => {
    const newTodoItem =[ { todoName: itemName, todoDate: itemDueDate } , ...todoItems];
    setTodoItems(newTodoItem);
  };
  const handleDeleteItem = (itemName) => {
    const newTodoItems = todoItems.filter((item) => item.todoName !== itemName);
    setTodoItems(newTodoItems);
  }
  return (
    
    <Container>
    
    <center class="todo-container">
      <AppName />
      <div className="todo-header">
        <AddTodo onNewItems ={handleNewItem} />
      </div>
     
     <div className="items-container"> 
        < TodoItems todoItems ={todoItems} onDeleteClick = {handleDeleteItem}></TodoItems>
      </div>
     
    </center>
    </Container>
  );
}
export default App;

