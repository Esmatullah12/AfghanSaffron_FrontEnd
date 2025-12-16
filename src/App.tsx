
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import Profile from "./pages/Profile"
function App() {

  return (
    <Router basename="/AfghanSaffron_FrontEnd">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </Router>
  )
}

export default App
