import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./component/ScrollToTop";  // Fix the import path
import Menu from "./component/Menu/menu";           // Fix the Menu import path
import Footer from "./component/Footer/footer";
import Home from "./pages/Home/home";
import AboutPage from "./pages/About/aboutPage";
import ContactPage from './pages/Contact/contact';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* This will scroll to top on route change */}
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services/*" element={<div>Services Page</div>} />
        <Route path="/career" element={<div>Career Page</div>} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
