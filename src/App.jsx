import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import TodoWrapper from './component/TodoWrapper.jsx'
import LogIn from './LogIn.jsx'
import Footer from './component/Footer.jsx'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    
      <div>
        <Routes>
          {/* 登入頁 */}
          <Route 
            path="/login" 
            element={<LogIn onLogin={() => { setIsLoggedIn(true); console.log(isLoggedIn); }} />} 
          />

          {/* Todo 頁 (保護路由) */}
          <Route
            path="/todo"
            element={isLoggedIn ? <TodoWrapper /> : <Navigate to="/login" />}
          />

          {/* 預設路徑，導向登入 */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>

        <Footer />
      </div>
  
  )
}

export default App
