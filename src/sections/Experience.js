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
          <ul>
            <li>Maintaining the UI Builder (kulp.app).</li>
            <li>Creating websites using the UI Builder.</li>
          </ul>
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
