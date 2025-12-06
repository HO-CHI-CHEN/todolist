import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import EditTodo from "./EditTodo.jsx";
function Todo({ todo, deletetodo, doneTodo, toggleEdit, edittodo }) {
  return (
    //如果todo.isEditing是true就顯示編輯表單，反之顯示待辦事項
    todo.isEditing ? (
      <EditTodo todo={todo} edittodo={edittodo} />
    ) : (
      <div className={`todo ${todo.isDone ? "done" : ""}`}>
        <p onClick={() => doneTodo(todo.id)}>{todo.content} </p>
        <MdDelete
          size="24px"
          style={{ cursor: "pointer" }}
          onClick={() => deletetodo(todo.id)}
        />
        <CiEdit size="24px" style={{ cursor: "pointer", marginLeft: "5px" }} onClick={() => toggleEdit(todo.id)} />
      </div>
    )
  );  
}
export default Todo;
