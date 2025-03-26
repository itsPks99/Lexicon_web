import ConnectWithUs from "./ConnectWithUs/connectwithUs";
import HeroSection from "./HeroSection/heroSection";
import ServicesSectionWithIcons from "./ServicesSectionwithIcons/ServicesSectionWithIcons";
import OurServices1 from "./OurServices/ourServices1";
import StatisticsSection from "./StatisticsSection/StatisticsSection";
import TrustedPartnerSection  from "./PartnarSection/trustedPartnarSection.jsx";


function Home () {

    return(
        <>
            <HeroSection />
            <ServicesSectionWithIcons />
            <OurServices1 />
            <StatisticsSection />
            <TrustedPartnerSection />
            <ConnectWithUs />
        </>
    )
}

export default Home;