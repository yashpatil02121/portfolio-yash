import React from 'react';
import SkillsBackground from '../static/skills.png'; // Import the background image

const Skills = () => (
  <div
    style={{
      position: 'relative',
      padding: '40px',
      borderRadius: '12px',
      overflow: 'hidden',
      color: 'black',
    }}
  >
    <style>
      {`
        @keyframes slideRightToLeft {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .skills-heading-container {
          position: relative;
          margin-bottom: 30px;
          text-align: center;
        }

        .skills-heading {
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #ffffff;
          position: relative;
          z-index: 2;
        }

        .skills-heading::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          transform: translate(-50%, -50%);
          background: linear-gradient(45deg, rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.1));
          filter: blur(20px);
          z-index: -1;
          border-radius: 12px;
        }

        .skills-subheading {
          font-size: 1.5rem;
          text-align: center;
          margin: 20px 0 10px;
          text-transform: capitalize;
          color: rgba(118, 38, 230, 0.8);
        }

        .skills-content {
          font-size: 1.2rem;
          margin: 10px 0;
          overflow: hidden;
          white-space: nowrap;
          position: relative;
          height: 1.5em;
        }

        .skills-content div {
          display: inline-block;
          white-space: nowrap;
          padding-left: 15%; /* Reduced padding to decrease interval */
          animation: slideRightToLeft 12s linear infinite; /* Faster animation */
        }

        .skills-content span {
          margin-right: 30px;
          display: inline-block;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .skills-heading {
            font-size: 1.5rem;
          }

          .skills-subheading {
            font-size: 1.2rem;
            text-align: center;
          }

          .skills-content {
            font-size: 0.9rem;
          }
        }
      `}
    </style>

    {/* Background Image */}
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${SkillsBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.3,
        zIndex: 0,
      }}
    ></div>

    {/* Content */}
    <div style={{ position: 'relative', zIndex: 1 }}>
      <div className="skills-heading-container">
        <h2 className="skills-heading">Skills</h2>
      </div>

      <div>
        <h3 className="skills-subheading">Programming Languages</h3>
        <div className="skills-content">
          <div>
            <span>Python</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="skills-subheading">Framework</h3>
        <div className="skills-content">
          <div>
            <span>Django</span>
            <span>React</span>
            <span>Vue.js</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="skills-subheading">Database</h3>
        <div className="skills-content">
          <div>
            <span>PostgreSQL</span>
            <span>MySQL</span>
            <span>SQLite</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="skills-subheading">Data Science</h3>
        <div className="skills-content">
          <div>
            <span>Data Processing</span>
            <span>Data Visualization</span>
            <span>ML Algorithms</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="skills-subheading">Problem-Solving</h3>
        <div className="skills-content">
          <div>
            <span>Strong Analytical Thinking</span>
            <span>Innovative Solutions</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="skills-subheading">Team Collaboration</h3>
        <div className="skills-content">
          <div>
            <span>Effective Teamwork</span>
            <span>Project Management</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="skills-subheading">Communication</h3>
        <div className="skills-content">
          <div>
            <span>English</span>
            <span>Marathi</span>
            <span>Hindi</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
