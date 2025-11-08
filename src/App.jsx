import { BrowserRouter, Route, Router, Routes } from "react-router"
import IndexPage from "./pages/IndexPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"

function App() {

  return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/register" element={<RegisterPage/>}></Route>
        </Routes>
          </BrowserRouter>
      </div>
     
  )
}

export default App
