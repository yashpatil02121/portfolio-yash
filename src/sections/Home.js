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
      }}
    >
      {/* Top Text */}
      <h1 style={{ marginBottom: '20px' }}>Welcome to My Portfolio</h1>

      {/* Profile Picture */}
      <div
        style={{
          width: '300px', // Adjust size as needed
          height: '300px',
          borderRadius: '50%', // Makes it circular
          overflow: 'hidden',
          marginBottom: '20px',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Optional for a nice effect
        }}
      >
        <img
          src={require('../static/profile.jpg')}
          alt="Yash Sanjay Patil"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover', // Ensures the image fits nicely in the circular frame
          }}
        />
      </div>

      {/* Bottom Text */}
      <h2>I am Yash Sanjay Patil</h2>
    </div>
  );
};

export default Header;
