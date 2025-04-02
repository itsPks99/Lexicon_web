import React from "react";
import './career.css';
import { useState } from "react";
import CareerBanner from './CareerBanner/careerBanner'
// import ConnectWithUs from "../Home/ConnectWithUs/connectwithUs";

const CareerPage = () => {
  const [resume, setResume] = useState(null);

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data
    alert("Form Submitted Successfully!");
  };

  return (
    <>
    <div className="career-page">
      <CareerBanner/>
      {/* Section 1 - Application Form */}
      <section className="career-form-section">
        <div className="career-form-container">
          <h2>Apply for a Position</h2>
          <form onSubmit={handleSubmit} className="career-form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone Number" required />
            <textarea placeholder="Why do you want to join us?" rows="5" required></textarea>
            <label>Upload Resume (PDF, DOCX):</label>
            <input type="file" accept=".pdf, .docx" onChange={handleResumeChange} required />
            <button type="submit">Submit Application</button>
          </form>
        </div>
      </section>

      {/* Section 2 - Why Join Us */}
      <section className="career-why-join-section">
        <div className="why-join-content">
          <h2>Why Join Us?</h2>
          <p>At Lexicon Computers, we value our people and their growth. Our work environment encourages creativity, innovation, and collaboration. Join us and grow your career with the best mentors in the industry. We provide excellent benefits, inclusive culture, and endless opportunities to learn and evolve.</p>
        </div>
      </section>
    </div>
    {/* <ConnectWithUs/> */}
    </>
  );
};

export default CareerPage;
