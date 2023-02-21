import SearchTodo from "./SearchTodo";
import "./Todo.css";
import Card from "../UI/Card";
import TodoList from "./TodoList";

const Todo = (props) => {
  return (
    <Card className="todo">
      <SearchTodo />
      <TodoList items={props.items} />
    </Card>
  );
};

export default Todo;
