import Todoitem from './Todoitem';
import styles from './Todoitems.module.css';
const TodoItems = ({todoItems ,onDeleteClick } ) => {
  return(<div className = {styles.itemscontainer}>
    {todoItems.map((item) => (
      <Todoitem  todoName={item.todoName} todoDate={item.todoDate} onDeleteClick ={onDeleteClick}></Todoitem>
    ))}
  </div>
  );
};
export default TodoItems;

