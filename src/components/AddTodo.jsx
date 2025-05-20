import { IoIosAdd } from "react-icons/io";
import React, { useState } from "react";
function AddTodo({onNewItems}) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };
  const handleAddClick = () => {
    if (todoName && todoDate) {
      onNewItems(todoName, todoDate);
      setTodoName("");
      setTodoDate("");
    } else {
      alert("Please enter both name and date");
    }
  }
  return (
    <div class="container ">
      <div class="row own-row">
        <div class="col-6">
          <input type="text" placeholder="Enter Todo"
          value={todoName}
          onChange={handleNameChange} />
        </div>
        <div class="col-4">
          <input type="date"
          value={todoDate}
          onChange={handleDateChange} />
        </div>
        <div class="col-2">
       <button type="button" class="btn btn-outline-success own-button"
       onClick={handleAddClick}>
       <IoIosAdd />
       </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
