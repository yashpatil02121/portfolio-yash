// src/pages/Experience.js
import React from 'react';

const Experience = () => (
  <div>
    <h2>Work Experience</h2>
    <div className="timeline">
      <div className="timeline-item">
        <h3>Software Developer</h3>
        <p><strong>Company:</strong> Kulp Labs Pvt Ltd Thane</p>
        <p><strong>Duration:</strong> August 2024 – Present</p>
        <ul>
          <li>Maintaining the UI Builder (kulp.app).</li>
          <li>Creating websites using the UI Builder.</li>
        </ul>
      </div>
      <div className="timeline-item">
        <h3>Data Science Trainee</h3>
        <p><strong>Duration:</strong> June 2022</p>
        <p><strong>Organization:</strong> MMRDA VCET, Vasai</p>
      </div>
      <div className="timeline-item">
        <h3>Automation Trainee</h3>
        <p><strong>Duration:</strong> June 2023</p>
        <p><strong>Organization:</strong> Siemens VCET, Vasai</p>
      </div>
    </div>
  </div>
);

export default Experience;
