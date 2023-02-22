import Card from "../UI/Card";
import TodoDate from "./TodoDate";
import "./TodoItems.css";
import { RiDeleteBin5Line } from "react-icons/ri";

const TodoItems = (props) => {
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
          <input type="checkbox" />
        </div>
        <RiDeleteBin5Line className="item-icon" />
      </Card>
    </li>
  );
};

export default TodoItems;
