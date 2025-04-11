import React, { useState, useEffect } from "react";
import './career.css';
import CareerBanner from './CareerBanner/careerBanner';
// import ConnectWithUs from "../Home/ConnectWithUs/connectwithUs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CareerPage = () => {
  const [resume, setResume] = useState(null);

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully!");
  };

  useEffect(() => {
    gsap.utils.toArray(".fade-in").forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          }
        }
      );
    });
  }, []);

  return (
    <>
      <div className="career-page">
        <CareerBanner />

        {/* Section - Application Form */}
        <section className="career-form-section fade-in">
          <div className="career-form-container" id="career-form">
            <h2>Apply for a Position</h2>
            <form
            action="https://usebasin.com/f/69524152868b"
            method="POST"
            encType="multipart/form-data"
            className="career-form"
          >
            <select className="career-dropdown" name="position" required>
              <option value="" >Select Position</option>
              <option value="Network Engineer">Network Engineer</option>
              <option value="IT Support Specialist">IT Support Specialist</option>
              <option value="Cybersecurity Analyst">Cybersecurity Analyst</option>
              <option value="Cloud Solutions Architect">Cloud Solutions Architect</option>
              <option value="AV Technician">AV Technician</option>
              <option value="Project Manager – IT Infrastructure">Project Manager – IT Infrastructure</option>
              <option value="Sales & Business Development – IT Solutions">Sales & Business Development – IT Solutions</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
              <option value="Software Developer">Software Developer</option>
              <option value="Asset Management Engineer">Asset Management Engineer</option>
              <option value="Back Office Executive">Back Office Executive</option>
              <option value="Accounts Executive / Finance Associate">Accounts Executive / Finance Associate</option>
              <option value="Operations Coordinator / Operations Executive">Operations Coordinator / Operations Executive</option>
              <option value="Human Resources (HR) Executive / HR Manager">Human Resources (HR) Executive / HR Manager</option>
            </select>
            <input type="text" name="fullName" placeholder="Full Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="tel" name="phone" placeholder="Phone Number" required />
            <textarea name="message" placeholder="Why do you want to join us?" rows="5" required></textarea>
            <label>Upload Resume (PDF, DOCX):</label>
            <input type="file" name="resume" accept=".pdf,.docx" required />

            <input type="hidden" name="_redirect" value="http://localhost:5173//thank-you" />
            <input type="hidden" name="_error" value="http://localhost:5173//error" />

            <button type="submit">Submit Application</button>
          </form>
          </div>
        </section>

        {/* Section - Why Join Us */}
        <section className="career-why-join-section fade-in">
          <div className="why-join-content">
            <h2>Why Join Us?</h2>
            <p>
              At Lexicon Computers, we value our people and their growth. Our work environment encourages creativity, innovation, and collaboration.
              Join us and grow your career with the best mentors in the industry.
            </p>
          </div>
        </section>

        {/* Section - Life at Lexicon */}
        {/* <section className="career-life-section fade-in">
          <div className="life-content">
            <div className="life-text">
              <h2>Life at Lexicon</h2>
              <p>We foster a culture of belonging, learning, and advancement. Our team thrives on problem-solving and teamwork.</p>
              <div className="benefits-grid">
                <div className="benefit-card">🚀 Career Growth</div>
                <div className="benefit-card">🌎 Hybrid Work Culture</div>
                <div className="benefit-card">💡 Tech Learning Support</div>
                <div className="benefit-card">🏆 Employee Recognition</div>
              </div>
            </div>
            <div className="life-image">
              <img src="/assets/lifeatLexicon.jpg.png" alt="Team Collaboration" />
            </div>
          </div>
        </section> */}
      </div>

      {/* <ConnectWithUs /> */}
    </>
  );
};

export default CareerPage;
