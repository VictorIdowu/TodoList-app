import Card from "../UI/Card";
import "./TodoItems.css";

const TodoItems = (props) => {
  return (
    <li>
      <Card className="to-do__item">
        <div className="to-do__text">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
        <div className="to-do__date">
          <p>On or Before</p>
          <p></p>
        </div>
      </Card>
    </li>
  );
};

export default TodoItems;
