import Menu from "./component/Menu/menu"
import ConnectWithUs from "./pages/Home/ConnectWithUs/connectwithUs"
import Footer from "./component/Footer/footer"
import HeroSection from "./pages/Home/HeroSection/heroSection"
import ServicesSectionWithIcons from "./pages/Home/ServicesSectionwithIcons/ServicesSectionWithIcons"
import TrustedPartnerSection from "./pages/Home/PartnarSection/trustedPartnarSection"
import OurServices from "./pages/Home/OurServices/ourServices"

function App() {

  return (
    <>
      <Menu />
      <HeroSection />
      <ServicesSectionWithIcons />
      <OurServices />
      <TrustedPartnerSection />
      <ConnectWithUs />
      <Footer />
    </>
  )
}

export default App
