import React from 'react';

const Experience = () => {
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div>
      <h2>Work Experience</h2>
      <div className="timeline">
        {/* Kulp Labs Section */}
        <div className="timeline-item">
          <h3>Software Developer</h3>
          <p><strong>Company:</strong> Kulp Labs Pvt Ltd Thane</p>
          <p><strong>Duration:</strong> August 2024 – {today}</p>
          <p><strong>Projects:</strong> </p>
          <ol>
            <li>
              <a href="https://kulp.app" target="_blank">kulp.app</a> - UI Builder
              <p>A software platform designed to create complete websites, incorporating data handling and logic functionalities. <br></br>Built using Nuxt.js and MongoDB.</p>
              <p><b>Roles and Responsibilities:</b></p>
              <ul>
                <li>Resolving Bugs</li>
                <li>Implementing New Features</li>
              </ul>
            </li>
          <br></br>
          <li>
            <b>KRAF</b> - School Management Software
            <p>A comprehensive web application for school management, developed with Django as the backend framework and <a href="https://kulp.app" target="_blank">kulp.app</a> for the frontend.</p>
            <p><b>Roles and Responsibilities:</b></p>
            <ul>
              <li>Implemented a robust OTP authentication system.</li>
              <li>Integrated Celery to schedule and manage notices and messages efficiently.</li>
              <li>Designed and developed an intuitive user interface.</li>
              <li>Created and optimized application logic for seamless functionality.</li>
            </ul>
          </li>
          <br></br>
          <li>
            <b>MCare</b> - Mobile Repair Course Website
            <p>An interactive platform with user authentication and role-based access for students and administrators. The website allows users to purchase mobile repair courses, comment on them, and create notes for each video. It emphasizes a user-friendly and visually appealing UI.</p>
            <p><b>Roles and Responsibilities:</b></p>
            <ul>
              <li>Designed and developed an engaging and responsive user interface.</li>
              <li>Engineered the core application logic to ensure smooth operation.</li>
            </ul>
          </li>

          </ol>
        </div>

        {/* Data Science Internship Section */}
        <div className="timeline-item">
          <h3>Data Science Trainee</h3>
          <p><strong>Duration:</strong> June 2022</p>
          <p><strong>Organization:</strong> MMRDA VCET, Vasai</p>
          <a
            href="https://drive.google.com/file/d/1NPBuOx6MLcGu-163VdTPvdMt3Vw4BmSE/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: '5px',
              padding: '5px 10px',
              backgroundColor: '#7626e6',
              color: '#fff',
              borderRadius: '5px',
              textDecoration: 'none',
              fontSize: '12px',
            }}
          >
            View Certificate
          </a>
        </div>

        {/* Automation Internship Section */}
        <div className="timeline-item">
          <h3>Automation Trainee</h3>
          <p><strong>Duration:</strong> June 2023</p>
          <p><strong>Organization:</strong> Siemens VCET, Vasai</p>
          <a
            href="https://drive.google.com/file/d/1NQLKJ2-cWJP2ztV2_cpLvazLSO3ZwpeE/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: '5px',
              padding: '5px 10px',
              backgroundColor: '#7626e6',
              color: '#fff',
              borderRadius: '5px',
              textDecoration: 'none',
              fontSize: '12px',
            }}
          >
            View Certificate
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;
