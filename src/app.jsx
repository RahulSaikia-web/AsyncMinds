import './app.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import BookServices from './pages/BookServices'
export function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* ===============================Pages========================================  */}
        <Route path="/" element={<Home />}/>
        <Route path="/services" element={<BookServices />}/>
        <Route path="/about" element={<About />}/>

        {/* ================================ADMIN PAGES ========================================  */}
      </Routes>
    </BrowserRouter>
    </>
  )
}
