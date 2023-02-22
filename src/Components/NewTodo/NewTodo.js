import "./NewTodo.css";
import TodoForm from "./TodoForm";
import { useState } from "react";
import Card from "../UI/Card";

const NewTodo = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const openTodoFormHandler = () => {
    setIsEditing(true);
  };

  const closeTodoFormHandler = () => {
    setIsEditing(false);
  };

  const saveTodoDataHandler = (enteredTodoData) => {
    const todoData = {
      ...enteredTodoData,
      id: Math.random().toString(),
    };
    props.onAddTodo(todoData);
    setIsEditing(false);
  };

  return (
    <Card className="new-todo">
      {!isEditing && (
        <button onClick={openTodoFormHandler} className="btn" type="button">
          Create new Items
        </button>
      )}
      {isEditing && (
        <TodoForm
          onSaveTodoData={saveTodoDataHandler}
          onCancel={closeTodoFormHandler}
        />
      )}
    </Card>
  );
};

export default NewTodo;
