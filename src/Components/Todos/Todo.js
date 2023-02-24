import SearchTodo from "./SearchTodo";
import "./Todo.css";
import Card from "../UI/Card";
import TodoList from "./TodoList";
import { useState } from "react";

const Todo = (props) => {
  const [title, setTitle] = useState("");

  const saveTitleHandler = (enteredTitle) => {
    setTitle(enteredTitle);
  };

  const filteredTodo = props.items.filter((todo) => {
    return todo.title.toLowerCase().includes(title);
  });

  return (
    <Card className="todo">
      <SearchTodo onSearchTitle={saveTitleHandler} />
      <h1>Your To-do Items</h1>
      <TodoList items={filteredTodo} searchInput={title} />
    </Card>
  );
};

export default Todo;
