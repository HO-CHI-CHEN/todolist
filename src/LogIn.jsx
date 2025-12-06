import { useState } from "react";
import  LogInComponent  from "./LogInComponent.jsx";
import { useNavigate } from 'react-router-dom'

function LogIn({onLogin}) {
    const navigate = useNavigate()  
    const handleLogin = () => {
        // 假設登入成功，呼叫 onLogin 回傳給父元件
      
        if (onLogin) {
            onLogin(true);
            navigate('/todo'); // 假設登入後導向待辦事項頁面
            console.log("登入成功");
        }
    }

  return (
    <div>
      <h2>登入頁面</h2>
      <LogInComponent type="text" />
      <LogInComponent type="password" />
      <button onClick={handleLogin}>登入</button>
    </div>
  );
}

export default LogIn;
