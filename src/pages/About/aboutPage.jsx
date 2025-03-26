import AboutTeamSection from "./TeamsSection/aboutTeamSection";
import MissionVisionSection from "./MissionVisionSection/missionVisionSection.jsx";
import WhatWeOffer from "./WhatWeOffer/whatWeOffer.jsx";
import ConnectWithUs from "../Home/ConnectWithUs/connectwithUs.jsx";
import AboutBanner from "./AboutBanner/AboutBanner.jsx";
// import Hero from "../../pages/Home/HeroSection/heroSection.jsx";

function AboutPage() {
    return (
        <>
        {/* <Hero title="About Us" /> */}
        <AboutBanner />
        <MissionVisionSection />
        <WhatWeOffer />
        <AboutTeamSection />   
        <ConnectWithUs />
        </>
    );
}

export default AboutPage;