import { useState } from 'react'
import './App.css'
import AnimatedRoute from './components/AnimatedRoute'
import {Link} from 'react-router-dom'
import Login from './Pages/Login'
import React from 'react'

import {ProtectedAdminPage , ProtectedCoursesPage,ProtectedEmployeePage} from '../src/pages/ProtectedPages'
import EmployeeForm from './forms/EmployeeForm'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
       <nav>
        <Link to="/">Home</Link> { " | "}
        <Link to="/employees">Employee</Link>{ " | "}
        <Link to="/courses">Courses</Link>{ " | "}
        <Link to="/admin">Admin</Link>{ " | "}
       </nav>
       <AnimatedRoute/>
            
        <Login/>
        <ProtectedEmployeePage/>
        <ProtectedAdminPage/>
        <ProtectedCoursesPage />
        <div style={{padding:"40px"}}>
          <EmployeeForm/>
        </div>
    
    </>
  )
}
export default App