import AboutTeamSection from "./TeamsSection/aboutTeamSection";
import MissionVisionSection from "./MissionVisionSection/missionVisionSection.jsx";
import OurClients from '../Home/OurClients/ourClients.jsx';
// import WhatWeOffer from "./WhatWeOffer/whatWeOffer.jsx";
// import ConnectWithUs from "../Home/ConnectWithUs/connectwithUs.jsx";
import AboutBanner from "./AboutBanner/AboutBanner.jsx";

function AboutPage() {
    return (
        <>
        <AboutBanner />
        <MissionVisionSection />
        <OurClients />
        {/* <WhatWeOffer /> */}
        <AboutTeamSection />   
        {/* <ConnectWithUs /> */}
        </>
    );
}

export default AboutPage;