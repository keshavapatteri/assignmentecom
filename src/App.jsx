import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ProductDetails from "./components/ProductDetails";





function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:id" element={<ProductDetails />} /> {/* Params */}

      
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


// mysite.com - Home
// mysite.com/about
// mysite.com/services
// mysite.com/profile
// mysite.com/contact