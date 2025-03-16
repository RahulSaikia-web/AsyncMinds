import './app.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import BookServices from './pages/BookServices'
import Terms from './pages/Terms';
import Policy from './pages/Policy';
import Products from './pages/Products';
export function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* ===============================Pages========================================  */}
        <Route path="/" element={<Home />}/>
        <Route path="/bookservices" element={<BookServices />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/developers" element={<About />}/>
        <Route path="/terms" element={<Terms />}/>
        <Route path="/privacy-policies" element={<Policy />}/>

        {/* ================================ADMIN PAGES ========================================  */}
      </Routes>
    </BrowserRouter>
    </>
  )
}
