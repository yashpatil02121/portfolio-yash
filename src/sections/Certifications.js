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
    title: 'Coursera Data Analysis with Python',
    image: DataAnalysisPNG,
  },
  {
    title: 'Coursera Python Data Structures',
    image: PythonDataStructuresPNG,
  },
  {
    title: 'Coursera Python for Data Science, AI & Development',
    image: PythonForDataSciencePNG,
  },
  {
    title: 'Coursera Python for Everybody',
    image: PythonForEverybodyPNG,
  },
  {
    title: 'Coursera Statistics for Data Science with Python',
    image: StatisticsPNG,
  },
  {
    title: 'Coursera Tools for Data Science',
    image: ToolsForDataSciencePNG,
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
            <img
              src={cert.image}
              alt={cert.title}
              style={{ width: '100%', borderRadius: '8px', maxHeight: '300px', objectFit: 'contain' }}
            />
            <p style={{ marginTop: '10px' }}>{cert.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Certifications;
