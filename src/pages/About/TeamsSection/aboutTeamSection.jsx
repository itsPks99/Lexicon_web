import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './aboutTeamSection.css';


gsap.registerPlugin(ScrollTrigger);

const AboutTeamSection = () => {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);

    // useEffect(() => {
    //     // GSAP Animation for Section 1
    //     gsap.fromTo(
    //         section1Ref.current,
    //         { opacity: 0, x:-100, visibility: 'hidden' }, // Hidden without affecting layout
    //         {
    //             opacity: 1,
    //             x: 0,
    //             visibility: 'visible', // Now becomes visible
    //             duration: 1,
    //             scrollTrigger: {
    //                 trigger: section1Ref.current,
    //                 start: 'top 80%',
    //                 end: 'bottom 60%',
    //                 toggleActions: 'play none none reverse'
    //             }
    //         }
    //     );

    //     // GSAP Animation for Section 2
    //     gsap.fromTo(
    //         section2Ref.current,
    //         { opacity: 0, x: 100, visibility: 'hidden' },
    //         {
    //             opacity: 1,
    //             x: 0,
    //             visibility: 'visible',
    //             duration: 1,
    //             scrollTrigger: {
    //                 trigger: section2Ref.current,
    //                 start: 'top 80%',
    //                 end: 'bottom 60%',
    //                 toggleActions: 'play none none reverse'
    //             }
    //         }
    //     );
    // }, []);
    return (
        <div className="aboutTeamSection">
            <h1 className="aboutTeamSection__heading">MEET THE DIRECTORS</h1>

            {/* Section 1 */}
            <div className="aboutTeamSection__block" ref={section1Ref}>
                
                <div className="aboutTeamSection__textContainer">
                    <blockquote className="aboutTeamSection__quote">“Innovations can happen only when you believe in the world of countless possibilities.”</blockquote>
                    <p><strong style={{ color: "#4d70b5" }}>Mr. Jigesh Shah,</strong> as the Technical Director at Lexicon Computers Pvt. Ltd., plays a pivotal role in staying ahead of emerging technologies
                        in the market. He actively monitors industry trends to ensure that the company is always equipped with the latest innovations.
                        Jigesh is responsible for driving technology upgrades and seamlessly implementing them within the organization, enhancing
                        operational efficiency and service offerings. He is also dedicated to defining and enforcing strict technical policies to maintain high
                        standards of quality, security, and compliance. Additionally, his strategic vision includes forming strong statistical tie-ups with OEMs,
                        ensuring that Lexicon has access to cutting-edge resources and support, further strengthening the company’s technical capabilities</p>

                </div>
                <div className="aboutTeamSection__imageContainer">
                    <img src="/assets/jigesh.jpg" alt="Neel Shah" />
                    <h3>Mr. Jigesh Shah</h3>
                    <p>Co-Founder
                        Technical Director
                    </p>
                </div>
            </div>

         

            {/* Section 2 */}
            <div className="aboutTeamSection__block" ref={section2Ref}>
            <div className="aboutTeamSection__imageContainer">
                    <img src="/assets/Ashlesh.jpg" alt="Gunjana Shah" />
                    <h3>Mr. Ashlesh Shah </h3>
                    <p> Co-Founder & Director Of
                        Marketing & Client Relation</p>
                </div>
                <div className="aboutTeamSection__textContainer">
                    <blockquote className="aboutTeamSection__quote">“Any solution should not only bring a change, it should revolutionize lives dynamically.”</blockquote>
                    <p> <strong style={{ color: "#4d70b5" }}>Mr. Ashlesh Shah</strong> is the face of Lexicon Computers Pvt. Ltd. in the market. As the head of Marketing and Client Relations, Ashlesh is
                        responsible for shaping the company’s branding, communication, and relationship building strategies. With his strong
                        background in marketing and a deep understanding of client needs, he plays a key role in driving business growth and ensuring
                        customer satisfaction. Ashlesh’s approach is all about building lasting partnerships and delivering value to clients. His passion for
                        innovative marketing strategies and commitment to fostering strong client relationships have been integral to Lexicon's success.
                        Outside of work, Ashlesh enjoys keeping up with the latest trends in digital marketing and client relationship management.</p>
                </div>
                
            </div>
        </div>
    );
};

export default AboutTeamSection;
