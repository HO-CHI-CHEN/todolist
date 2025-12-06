import { useState } from "react";

function CreateForm({ addtodo }) {

  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); //防止表單送出後頁面重新整理
    addtodo(content);
    setContent("");
  };

  return (
    <form className="createForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="請輸入待辦事項"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button type="submit"> 新增</button> 
    </form>
  );
}

export default CreateForm;
