import Card from "../UI/Card";
import TodoDate from "./TodoDate";
import "./TodoItems.css";
import { RiDeleteBin5Line } from "react-icons/ri";
import DeleteTodo from "./DeleteTodo";
import { useState } from "react";

const TodoItems = (props) => {
  const [isDeleteing, setIsDeleteing] = useState(false);
  const [item, setItem] = useState("");

  const checkHandler = (e) => {
    const parent = e.target.closest(".to-do__item");

    parent.classList.toggle("checked");
  };

  const deleteItemHandler = (e) => {
    setItem(e.target.closest(".to-do__item"));
    setIsDeleteing(true);
  };

  const onCancelHandler = (e) => {
    setIsDeleteing(false);
  };

  const onProceedHandler = (item) => {
    props.handleProceed(item);
  };

  return (
    <li>
      <Card className="to-do__item">
        <div className="to-do__item-main">
          <div className="to-do__date">
            <p>On or Before</p>
            <TodoDate date={props.date} />
          </div>
          <div className="to-do__text">
            <h3>{props.title}</h3>
          </div>
          <input onChange={checkHandler} type="checkbox" />
        </div>
        <RiDeleteBin5Line className="item-icon" onClick={deleteItemHandler} />
      </Card>
      {isDeleteing && (
        <DeleteTodo deleteItem={item} onCancel={onCancelHandler} />
      )}
    </li>
  );
};

export default TodoItems;
