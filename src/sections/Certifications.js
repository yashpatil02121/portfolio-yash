import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import PNGs from src/static folder
import DataAnalysisPNG from '../static/Coursera Data Analysis with Python.png';
import PythonDataStructuresPNG from '../static/Coursera Python Data Structures.png';
import PythonForDataSciencePNG from '../static/Coursera Python for Data Science, AI & Development.png';
import PythonForEverybodyPNG from '../static/Coursera Python for Everybody.png';
import StatisticsPNG from '../static/Coursera Statistics for Data Science with Python.png';
import ToolsForDataSciencePNG from '../static/Coursera Tools for Data Science.png';

const certifications = [
  {
    title: 'Meta: Django Web Framework',
    link: 'https://coursera.org/share/529ea591cf073b5b17642fb265555b61',
    image: DataAnalysisPNG,
  },
  {
    title: 'University of Michigan: Python Data Structures',
    link: 'https://coursera.org/share/a22eebb31188dfd11555a3a8b9f9bf42',
    image: PythonDataStructuresPNG,
  },
  {
    title: 'IBM: Tools for Data Science',
    link: 'https://coursera.org/share/4e088a7a85d9d6ae6ae0bb66a4f5ea92',
    image: ToolsForDataSciencePNG,
  },
  {
    title: 'Vanderbilt University: Prompt Engineering for ChatGPT',
    link: 'https://coursera.org/share/ba7102687034f41e99cdba07d3b0f858',
    image: PythonForEverybodyPNG,
  },
  {
    title: 'Python for Data Science, AI & Development',
    link: 'https://coursera.org/share/9bc9fc413c6109f51169ad5317f70e0d',
    image: PythonForDataSciencePNG,
  },
  {
    title: 'Programming for Everybody (Getting Started with Python)',
    link: 'https://coursera.org/share/8c94054aa923a2f999e02dc5d7b0b43b',
    image: StatisticsPNG,
  },
];

const Certifications = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h2>Certifications</h2>
      <Slider {...settings}>
        {certifications.map((cert, index) => (
          <div key={index} style={{ textAlign: 'center', padding: '10px' }}>
            {/* Title Container */}
            <div
              style={{
                height: '60px', // Fixed height for the title container
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '10px',
              }}
            >
              <h4 style={{ fontSize: '16px', fontWeight: 'bold', textAlign: 'center' }}>
                {cert.title}
              </h4>
            </div>

            {/* Image */}
            <img
              src={cert.image}
              alt={cert.title}
              style={{
                width: '100%',
                borderRadius: '8px',
                maxHeight: '300px',
                objectFit: 'contain',
                marginBottom: '10px',
              }}
            />

            {/* Button */}
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <button
                style={{
                  padding: '10px 20px',
                  margin: '10px 25% 20px 25%',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                View Certification
              </button>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Certifications;
