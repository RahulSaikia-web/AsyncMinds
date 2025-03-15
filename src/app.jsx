import './app.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';

export function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* ===============================Pages========================================  */}
        <Route path="/" element={<Home />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/about" element={<About />}/>

        {/* ================================ADMIN PAGES ========================================  */}
      </Routes>
    </BrowserRouter>
    </>
  )
}
