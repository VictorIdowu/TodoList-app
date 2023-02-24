import "./SearchTodo.css";
import { FaSearch } from "react-icons/fa";

const SearchTodo = (props) => {
  const searchHandler = (e) => {
    props.onSearchTitle(e.target.value.toLowerCase());
  };

  return (
    <div className="search">
      <FaSearch className="icon" />

      <input
        onChange={searchHandler}
        type="text"
        placeholder="Search"
        className="search-todo"
      />
    </div>
  );
};

export default SearchTodo;
