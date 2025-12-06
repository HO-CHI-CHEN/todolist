import { useState } from "react";

function EditTodo({ edittodo, todo, toggleEdit }) {

  const [content, setContent] = useState(todo.content);

  const handleSubmit = (e) => {
    e.preventDefault(); //防止表單送出後頁面重新整理
    edittodo(todo.id, content);
    setContent("");
  };

  return (

    <form className="createForm" onSubmit={handleSubmit}>
      <input
        type="text"
        
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button type="submit"> 新增</button> 
    </form>
  );
}

export default EditTodo;
