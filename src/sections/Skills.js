import React from 'react';
import SkillsBackground from '../static/skills.png'; // Import the background image

const Skills = () => (
  <div
    style={{
      position: 'relative', // Enables positioning for the pseudo-element
      padding: '20px',
      borderRadius: '8px', // Optional: Rounds the container corners
      color: 'black', // Ensures text is visible
      overflow: 'hidden', // Ensures content doesn't spill outside the container
    }}
  >
    {/* Pseudo-element-like div for background image */}
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
        opacity: 0.25, // Applies opacity to the background only
        zIndex: 0, // Ensures it sits behind the content
      }}
    ></div>

    {/* Content */}
    <div style={{ position: 'relative', zIndex: 1 }}>
      <h2>Skills</h2>
      <ul>
        <li><strong>Programming Languages:</strong> Python, HTML, CSS, JavaScript</li>
        <li><strong>Framework:</strong> Django</li>
        <li><strong>Database:</strong> PostgreSQL, MySQL, SQLite</li>
        <li><strong>Data Science:</strong> Data Processing, Data Visualization, ML algorithms</li>
        <li><strong>Problem-Solving:</strong> Strong analytical and innovative thinking</li>
        <li><strong>Team Collaboration:</strong> Effective teamwork and project management</li>
        <li><strong>Communication:</strong> Fluent in English, Marathi, Hindi</li>
      </ul>
    </div>
  </div>
);

export default Skills;
