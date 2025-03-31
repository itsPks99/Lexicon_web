import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./component/ScrollToTop";
import Menu from "./component/Menu/menu";
import Footer from "./component/Footer/footer";
import Home from "./pages/Home/home";
import AboutPage from "./pages/About/aboutPage";
import ContactPage from './pages/Contact/contact';
import Careers from "./pages/Careers/career";

// Service pages
import NetworkingSolutions from './pages/Services/NetworkingSolutions/networkingSolutions';
// Add more services as needed
// import InfrastructureServices from './pages/Services/ItInfrastructure/itInfrastructure';
// import SecuritySystem from './pages/Services/SecuritySystem';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/career" element={<Careers />} />

        {/* 👇 Individual submenu routes under /services */}
        <Route path="/services/networking" element={<NetworkingSolutions />} />
         {/* <Route path="/services/infrastructure" element={<InfrastructureServices />} /> */}
        {/* <Route path="/services/security" element={<SecuritySystem />} />  */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
