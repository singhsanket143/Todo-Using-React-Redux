import { useDispatch } from "react-redux";
import { removeTodoActionCreator } from "../redux/actions/todoActions";

function TodoItem({ id, text, isCompleted }) {
  const dispatch = useDispatch();

  function deleteTodo() {
    dispatch(removeTodoActionCreator(id));
  }

  return (
    <div className="todo-item">
      <input type="checkbox" checked={isCompleted} />
      <p>{text}</p>
      <button onClick={() => deleteTodo()}>X</button>
    </div>
  );
}

export default TodoItem;
