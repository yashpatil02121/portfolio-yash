import React from 'react';

// Import background images
// import BusImage from '../static/bus.jpg';
import BusImage from '../static/bus.gif';
// import BloggingGenerationImage from '../static/bloggingGeneration.jpg';
import BloggingGenerationImage from '../static/blogGeneration.gif';
// import DigitalWatermarkingImage from '../static/digitalWatermarking.jpg';
import DigitalWatermarkingImage from '../static/digitalWatermarking.gif';
// import AndroidImage from '../static/android.png';
import AndroidImage from '../static/android.gif';
// import CarImage from '../static/car.jpg';
import CarImage from '../static/car.gif';
// import BlogImage from '../static/blog.jpg';
import BlogImage from '../static/blog.gif';

const projects = [
  {
    title: 'Enhanced Routing Efficiency (VRP)',
    description:
      'Developed a VRP-based optimization algorithm to improve routing efficiency and scheduling.',
    link: 'https://github.com/yashpatil02121/Enhanced-Routing-Efficiency-for-Educational-Bus-Networks',
    image: BusImage,
  },
  {
    title: 'Blog Generation App',
    description:
      'Created a blog generation app using LLAMA-2 7B GGML, allowing users to create topic-based posts.',
    link: 'https://github.com/yashpatil02121/Blog-Generation-App-using-Llama-2-7B-Chat-GGML',
    image: BloggingGenerationImage,
  },
  {
    title: 'Digital Watermarking',
    description:
      'Designed a digital watermarking system using Robust Reversible Watermarking and LSB algorithm.',
    link: 'https://github.com/yashpatil02121/Digital-Water-Marking',
    image: DigitalWatermarkingImage,
  },
  {
    title: 'Android Botnet Detection',
    description:
      'Developed an Android botnet detection model using SVM-based static feature analysis.',
    link: 'https://github.com/yashpatil02121/Android-Botnet-Detection-Using-Machine-Learning',
    image: AndroidImage,
  },
  {
    title: 'Car Trade with Price Prediction',
    description:
      'Built a car trading website with an ML-based price predictor using linear regression.',
    link: 'https://github.com/yashpatil02121/CAR-TRADE-WITH-PRICE-PREDICTION',
    image: CarImage,
  },
  {
    title: 'Blog Platform',
    description:
      'A Django-based blog platform with user authentication and registration, featuring models, views, and templates for blog posts.',
    link: 'https://github.com/yashpatil02121/blogs_platform',
    image: BlogImage,
  },
];

const Projects = () => (
  <div style={{ padding: '20px' }}>
    <style>{`
      .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
      }

      .project-card {
        position: relative;
        overflow: hidden;
        border-radius: 8px;
        height: 250px;
        background: #f9f9f9;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s, box-shadow 0.3s;
      }

      .background-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        opacity: 0.25;
        transition: opacity 0.3s;
        z-index: 0;
      }

      .content {
        position: relative;
        z-index: 1;
        padding: 20px;
        color: black;
        text-align: center;
      }

      .project-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      }

      .project-card:hover .background-image {
        opacity: 0.4;
      }
    `}</style>
    <h2>Projects</h2>
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          {/* Background Image */}
          <div
            className="background-image"
            style={{
              backgroundImage: `url(${project.image})`,
            }}
          ></div>

          {/* Content */}
          <div className="content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'black', textDecoration: 'underline' }}
            >
              GitHub Link
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
