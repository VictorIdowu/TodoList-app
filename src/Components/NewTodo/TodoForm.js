import "./TodoForm.css";
import { useState } from "react";

const TodoForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const todoData = {
      title: enteredTitle,
      date: new Date(enteredDate),
    };
    props.onSaveTodoData(todoData);
    setEnteredTitle("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-todo__controls">
        <div className="new-todo__control">
          <label>Title</label>
          <input
            maxlength="20"
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-todo__control">
          <label>On or before</label>
          <input type="date" value={enteredDate} onChange={dateChangeHandler} />
        </div>
        <div className="new-todo__actions">
          <button onClick={props.onCancel} className="btn" type="button">
            Cancel
          </button>
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
