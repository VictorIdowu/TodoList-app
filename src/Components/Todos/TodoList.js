import "./TodoList.css";
import TodoItems from "./TodoItems";

const TodoList = (props) => {
  return (
    <ul className="to-do__list">
      <h1>Your To-do Items</h1>
      {props.items.map((todo) => (
        <TodoItems
          key={todo.id}
          title={todo.title}
          description={todo.description}
          date={todo.date}
        />
      ))}
    </ul>
  );
};

export default TodoList;
