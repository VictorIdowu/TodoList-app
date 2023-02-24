import Card from "../UI/Card";
import "./DeleteTodo.css";

const DeleteTodo = (props) => {
  const proceedHandler = () => {
    props.deleteItem.remove();
    props.onCancel();
  };

  return (
    <Card className="delete-todo">
      <p>Are you sure you want delete this Item?</p>
      <div className="delete-actions">
        <button onClick={props.onCancel} className="btn">
          Cancel
        </button>
        <button onClick={proceedHandler} className="btn">
          Proceed
        </button>
      </div>
    </Card>
  );
};

export default DeleteTodo;
