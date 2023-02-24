import "./TodoList.css";
import TodoItems from "./TodoItems";

const TodoList = (props) => {
  if (props.items.length === 0) {
    return (
      <h2 className="todo-list__fallback">
        You do not have any item that matches "{props.searchInput}"
      </h2>
    );
  }

  return (
    <ul className="to-do__list">
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
