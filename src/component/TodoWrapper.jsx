import { useState, useEffect, use } from "react";
import CreateForm from "./CreateFrom.jsx";
import Todo from "./Todo.jsx";
import { useNavigate } from 'react-router-dom'
function TodoWrapper() {
   const navigate = useNavigate();
  
  const [todos, setTodos] = useState(() => {
   
    const saved = localStorage.getItem("todos");  
    const parse = JSON.parse(saved);
    
    return  [];
    //return parse.length > 0 ? parse : [ { content: "學習 React", id: 1, isDone: false, isEditing: false }, { content: "學習 Vue", id: 2, isDone: false, isEditing: false, } ];
  });

  
  useEffect(() => {  
    console.log("todos 存進", todos);
    //localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);// 每次 todos 改變時，就會執行

  const addtodo = (content) => {
    if (content === "") return;

    const newTodo = { content: content, id: Math.random(), isDone: false, isEditing: false };
    setTodos([...todos, newTodo]);
  };

  const deletetodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const doneTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const toggleEdit = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const edittodo = (id, newContent) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, content: newContent, isEditing: false }
          : todo
      )
    );
  };

  return (
    <div className="wrapper">
      <h1>待辦清單</h1>

      <CreateForm addtodo={addtodo} />

      {todos.map((todo) => {
        return (
          
          <Todo
            todo={todo}
            key={todo.id}
            deletetodo={deletetodo}
            doneTodo={doneTodo}
            toggleEdit={toggleEdit}
            edittodo={edittodo}
          />
       
          
        );
      })}
         <button onClick={() => navigate('/login')}>登出</button>
    </div>
  );
}

export default TodoWrapper;
