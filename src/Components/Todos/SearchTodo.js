import "./SearchTodo.css";
import { FaSearch } from "react-icons/fa";

const SearchTodo = () => {
  return (
    <div className="search">
      <FaSearch className="icon" />

      <input type="text" placeholder="Search" className="search-todo" />
    </div>
  );
};

export default SearchTodo;
