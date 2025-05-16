import Todoitem from './Todoitem';
const TodoItems = ({todoItems}) => {
  return(<div className ="items-container">
    {todoItems.map((item) => (
      <Todoitem  todoName={item.todoName} todoDate={item.todoDate}></Todoitem>
    ))}
  </div>
  );
};
export default TodoItems;