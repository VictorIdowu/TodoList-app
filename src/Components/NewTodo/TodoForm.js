import "./TodoForm.css";

const TodoForm = (props) => {
  return (
    <form>
      <div className="new-todo__controls">
        <div className="new-todo__control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-todo__control">
          <label>On or before</label>
          <input type="date" />
        </div>
        <div className="new-todo__control">
          <label>Describe</label>
          <input type="text" />
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
