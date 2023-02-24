import NewTodo from "./Components/NewTodo/NewTodo";
import Todo from "./Components/Todos/Todo";
import { useState } from "react";
import Card from "./Components/UI/Card";

const dummyTodoItems = [
  {
    title: "Work-Out",
    description: "Do 25 Push-ups and 10min Planking",
    date: new Date(2021, 5, 12),
    id: "td1",
  },

  {
    title: "Cycle",
    description: "Cycle round the sport center twice",
    date: new Date(2022, 7, 1),
    id: "td2",
  },
];

function App() {
  const [todoItems, setTodoItems] = useState(dummyTodoItems);

  const addExpenseHandler = (todoItem) => {
    setTodoItems((prevTodoItems) => {
      return [todoItem, ...prevTodoItems];
    });
  };

  return (
    <Card className="App">
      <NewTodo onAddTodo={addExpenseHandler} />
      <Todo items={todoItems} />
    </Card>
  );
}

export default App;
