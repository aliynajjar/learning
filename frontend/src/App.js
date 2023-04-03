import { Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage/loginpage";

function App() {
  return (
    <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="*" element={<div>404</div>} />
    </Routes>
    )
}

export default App;
