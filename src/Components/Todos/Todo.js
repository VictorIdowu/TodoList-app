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

  // const filteredTodo = props.items.filter((todo) => {
  //   return todo.title === title;
  // });

  return (
    <Card className="todo">
      <SearchTodo onSearchTitle={saveTitleHandler} />
      <TodoList items={props.items} />
    </Card>
  );
};

export default Todo;
