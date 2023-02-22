import "./TodoDate.css";

const TodoDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "short" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const date = `${day}-${month}-${year}`;

  return <div className="date">{date}</div>;
};

export default TodoDate;
