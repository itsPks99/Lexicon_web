import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from "./component/Menu/menu";
import ConnectWithUs from "./pages/Home/ConnectWithUs/connectwithUs";
import Footer from "./component/Footer/footer";
import HeroSection from "./pages/Home/HeroSection/heroSection";
import ServicesSectionWithIcons from "./pages/Home/ServicesSectionwithIcons/ServicesSectionWithIcons";
import OurServices1 from "./pages/Home/OurServices/ourServices1";
import StatisticsSection from "./pages/Home/StatisticsSection/StatisticsSection";
import TrustedPartnerSection  from "./pages/Home/PartnarSection/trustedPartnarSection.jsx";


function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <ServicesSectionWithIcons />
            <OurServices1 />
            <StatisticsSection />
            <TrustedPartnerSection />
            <ConnectWithUs />
          </>
        } />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/services/*" element={<div>Services Page</div>} />
        <Route path="/career" element={<div>Career Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;