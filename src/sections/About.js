import React from 'react';

const About = () => (
  <div
    style={{
      position: 'relative',
      padding: '10px',
      borderRadius: '12px',
      overflow: 'hidden',
      color: 'black',
    }}
  >
    <style>
      {`
        .about-heading-container {
          text-align: center;
          margin-bottom: 30px;
        }

        .about-heading {
          // font-size: 2.5rem;
          font-weight: bold;
          color: #5a0f99;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .about-subheading {
          // font-size: 1.8rem;
          text-transform: capitalize;
          color: #7626e6;
          margin-bottom: 15px;
          text-align: center;
        }

        .about-content {
          font-size: 1.2rem;
          color: #444;
        }


        .about-content ul li {
          margin-bottom: 10px;
        }

        .about-highlight {
          font-weight: bold;
          color: #7626e6;
        }

        .about-link {
          color: #5a0f99;
          text-decoration: none;
          font-weight: bold;
        }

        .about-link:hover {
          text-decoration: underline;
        }

        .contact-list li {
          display: flex;
          align-items: center;
          justify-content: left;
          gap: 10px;
        }

        .contact-icon {
          font-size: 1.5rem;
          color: #5a0f99;
        }

        @media (max-width: 768px) {
          .about-heading {
            font-size: 1.4rem;
          }

          .about-subheading {
            font-size: 1.3rem;
          }

          .about-content {
            font-size: 1rem;
          }
        }
      `}
    </style>

    {/* Content */}
    <div style={{ position: 'relative', zIndex: 1 }}>
      <div className="about-heading-container">
        <h2 className="about-heading">About Me</h2>
      </div>

      <div>
        <h3 className="about-subheading">Objective</h3>
        <p className="about-content">
          I am an aspiring <span className="about-highlight">Computer Engineer</span> with a strong foundation in software
          development. I have a passion for innovative solutions and aim to leverage my technical skills and academic
          knowledge in a dynamic tech environment.
        </p>
      </div>

      <div>
        <h3 className="about-subheading">Contact Information</h3>
        <ul className="about-content contact-list">
          <li>
            <span className="contact-icon">📞</span>
            +91 8828587896
          </li>
          <li>
            <span className="contact-icon">✉️</span>
            <a className="about-link" href="mailto:yashspatil202002@gmail.com">
              yashspatil202002@gmail.com
            </a>
          </li>
          <li>
            <span className="contact-icon">🔗</span>
            <a className="about-link" href="https://www.linkedin.com/in/yash-patil-6655b5215/">
              linkedin/yash-patil
            </a>
          </li>
          <li>
            <span className="contact-icon">👨‍💻</span>
            <a className="about-link" href="https://github.com/yashpatil02121">
              github.com/yashpatil02121
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="about-subheading">Education</h3>
        <ul className="about-content">
          <li>
            <b>B.E.</b> in <span className="about-highlight">Artificial Intelligence & Data Science </span>with Honours in{' '}
            <span className="about-highlight">Cyber Security</span>, <br></br> University of Mumbai (2020-2024) <br></br>
            Final Semester CGPA: <span className="about-highlight">9.71</span> <br></br>
            Average CGPA: <span className="about-highlight">8.7</span> <br></br>
            Honours CGPA: <span className="about-highlight">8</span>
          </li>
          <li>
            <b>HSC</b> in Computer Science, S.V.P. Junior College of Science:{' '}
            <span className="about-highlight">67.23%</span>
          </li>
          <li>
            <b>SSC</b>, St. Francis High School:{' '}
            <span className="about-highlight">88.20%</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default About;
