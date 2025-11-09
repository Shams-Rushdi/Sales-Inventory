import { BrowserRouter, Route, Router, Routes } from "react-router"
import IndexPage from "./pages/IndexPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import PasswordReset from "./pages/PasswordReset"
import DashboardPage from "./pages/DashboardPage"
import Guard from "./components/Guard"

function App() {

  return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/register" element={<RegisterPage/>}></Route>
          <Route path="/reset-password" element={<PasswordReset/>}></Route>
          <Route path="/reset-password-otp" element={<PasswordReset/>}></Route>
          <Route path="/set-new-password" element={<PasswordReset/>}></Route>

          <Route element={<Guard/>}>
            <Route path="/dashboard" element={<DashboardPage/>}/>
          </Route>

        </Routes>
          </BrowserRouter>
      </div>
     
  )
}

export default App
