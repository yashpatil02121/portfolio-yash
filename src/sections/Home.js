import React from 'react';

const Header = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: '50px',
        animation: 'fadeIn 2s ease-in-out',
      }}
    >
      {/* Top Text */}
      <h1
        style={{
          marginBottom: '20px',
          fontSize: '3rem',
          color: '#4A90E2',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
          animation: 'slideDown 1.5s ease-in-out',
        }}
      >
        Welcome to My Portfolio
      </h1>

      {/* Profile Picture */}
      <div
        style={{
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          overflow: 'hidden',
          marginBottom: '20px',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
          transition: 'transform 0.3s ease',
          animation: 'zoomIn 2s ease-in-out',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <img
          src={require('../static/profile.jpg')}
          alt="Yash Sanjay Patil"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Bottom Text */}
      <h2
        style={{
          fontSize: '2rem',
          color: '#333',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
          animation: 'fadeInUp 2s ease-in-out',
        }}
      >
        I am Yash Sanjay Patil
      </h2>

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes slideDown {
            from {
              transform: translateY(-50px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes zoomIn {
            from {
              transform: scale(0.8);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }

          @keyframes fadeInUp {
            from {
              transform: translateY(50px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Header;
