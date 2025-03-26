import './missionVisionSection.css';
import OurClients from '../../Home/OurClients/ourClients';

const missionVisionSection = () => {
  return (
    <div className="missionVisionSection-container">
      {/* About Company */}
      <section id="about-our-company" className="missionVisionSection-section missionVisionSection-split-background">
        <div className="missionVisionSection-image-container">
          <img src="/assets/aboutImage.png" alt="About" />
        </div>
        <div className="missionVisionSection-content">
          <h1>ABOUT US</h1>
          <p>
          With over two decades of expertise in delivering robust IT infrastructure and solutions, 
          Lexicon Computers has established itself as a reliable technology partner for clients 
          across diverse industries. In today’s rapidly evolving business landscape, disruptions 
          are inevitable, often challenging enterprise stability. However, Lexicon Computers 
          continues to excel by providing timely and efficient services, ensuring seamless operations 
          and minimizing downtime. Their commitment to excellence has enabled them to build lasting 
          relationships, guiding businesses towards sustainable growth and digital transformation. 
          As a trusted partner, Lexicon Computers remains dedicated to empowering enterprises with 
          innovative solutions for a future-ready technological environment.
          </p>
        </div>
      </section>

      <OurClients />

      {/* What We Do */}
      {/* <section id="what-we-do" className="missionVisionSection-section missionVisionSection-split-background">
        <div className="missionVisionSection-content">
          <h2>WHAT WE DO</h2>
          <p>
            At <strong>Yoglyf</strong>, we design, develop, and invest in world-class wellness retreats in prime destinations. 
            Our expertise covers every stage of retreat development, from vision to completion, ensuring exceptional 
            quality and innovation. By integrating sustainable practices with exclusive investment opportunities, 
            we create transformative spaces that promote well-being while delivering lasting value and growth.
          </p>
        </div>
        <div className="missionVisionSection-image-container" style={{ borderRadius: "50%" }}>
          <img src="/assets/hero_1.webp" alt="Our Vision" />
        </div>
      </section> */}

      {/* Our Values */}
      <section id="our-values" className="missionVisionSection-section missionVisionSection-split-background">
        
        <div className="missionVisionSection-content">
          <h2>OUR VALUES</h2>
          <p>
           At our core, we are committed to consistently walking the talk and delivering beyond expectations.
           We strive to be leaders, whether it’s our first attempt or a repeated effort, always pushing 
           boundaries to achieve excellence. Integrity and ethics are the cornerstones of our approach, 
           ensuring that every action we take aligns with our promises and core values. We firmly believe 
           that true leadership is not just about reaching the top but maintaining the highest standards of 
           honesty, professionalism, and dedication throughout the journey. This unwavering commitment is 
           what drives us to achieve sustainable growth and success.
          </p>
        </div>
        <div className="missionVisionSection-image-container">
          <img src="/assets/OurValue.png" alt="Our Mission" />
        </div>
      </section>
    </div>
  );
};

export default missionVisionSection;
