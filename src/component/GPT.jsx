import { useState, useEffect } from "react";

function GPT() {
  // 初始化時，從 localStorage 讀取資料
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState("");

  // 每次 todos 改變時，存回 localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // 新增 todo
  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput("");
  };

  // 切換完成狀態
  const toggleDone = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  // 刪除 todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="輸入待辦事項"
      />
      <button onClick={addTodo}>新增</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span 
              style={{ textDecoration: todo.done ? "line-through" : "none", cursor: "pointer" }}
              onClick={() => toggleDone(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>刪除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GPT;
