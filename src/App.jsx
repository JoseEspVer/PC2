import NavBar from "./components/NavBar"
import Login from "./components/Login"
import Register from "./components/Register"
import Productos from "./components/Productos"
import './App.css'
import { BrowserRouter as Router , Routes, Route } from "react-router-dom"
import { AuthProvider } from "./AuthContext"

const Inicio = () => {
  <div>
    <h2>Welcome to the DBP-Market!</h2>
    <p>Please use the menu to navigate through the application.</p>
  </div>
  
       
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
          <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/productos' element={<Productos/>}/>
          </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
