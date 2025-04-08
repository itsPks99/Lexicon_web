import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./component/ScrollToTop";
import Menu from "./component/Menu/menu";
import Footer from "./component/Footer/footer";
import Home from "./pages/Home/home";
import AboutPage from "./pages/About/aboutPage";
import ContactPage from './pages/Contact/contact';
import Careers from "./pages/Careers/career";

// Service pages
import NetworkingAndITSolutions from './pages/Services/NetworkingSolutions/networkingSolutions';
import AdvancedSecurityDataSolutions from './pages/Services/AdvancedSecurityDataSolutions/AdvancedSecurity&DataSolutions.jsx';
import CloudDigitalTransformation from './pages/Services/Cloud&DigitalTransformation/Cloud&DigitalTransformation.jsx';
import ManagedITServices from './pages/Services/ManagedITServices&Support/ManagedIT.jsx';
import AudioVisualCollaboration from './pages/Services/Audio-Visual&Collaboration/AudioVisualCollaboration.jsx';

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
        <Route path="/services/networking&iTSolution" element={<NetworkingAndITSolutions />} />
        <Route path="/services/advancedSecurity&DataSolution" element={<AdvancedSecurityDataSolutions />} />
        <Route path="/services/cloud&DigitalTransformation" element={<CloudDigitalTransformation />} /> 
        <Route path="/services/managedIT&support" element={<ManagedITServices />} /> 
        <Route path="/services/audioVisualCollaboration" element={<AudioVisualCollaboration />} /> 
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
