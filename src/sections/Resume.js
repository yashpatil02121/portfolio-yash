import React from 'react';
import { FaEye, FaDownload } from 'react-icons/fa'; // Importing react-icons for eye and download icons

const ResumeSection = () => {
  const handleViewResume = () => {
    // Replace this with the actual URL or functionality for viewing the resume
    window.open('https://drive.google.com/file/d/1ZZ6gUltPn3Mpg_uwaBmVteLF-b2fjRxo/view', '_blank');
  };

//   const handleDownloadResume = () => {
//     // Replace this with the actual URL or functionality for downloading the resume
//     const link = document.createElement('a');
//     link.href = 'https://drive.google.com/file/d/1ZZ6gUltPn3Mpg_uwaBmVteLF-b2fjRxo/view'; // Provide the resume file path
//     link.download = 'Resume_Yash_Patil.pdf'; // Set the file name for download
//     link.click();
//   };

const handleDownloadResume = () => {
    // Use a direct Google Drive download link
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1ZZ6gUltPn3Mpg_uwaBmVteLF-b2fjRxo'; // Direct download link
    link.download = 'Resume_Yash_Patil.pdf'; // Set the file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={styles.resumeSection}>
      <h2 style={styles.resumeTitle}>Resume</h2>
      <div style={styles.resumeActions}>
        <button
          style={{ ...styles.resumeButton, ...styles.viewButton }}
          onClick={handleViewResume}
          aria-label="View Resume"
        >
          <FaEye size={28} />
        </button>
        <button
          style={{ ...styles.resumeButton, ...styles.downloadButton }}
          onClick={handleDownloadResume}
          aria-label="Download Resume"
        >
          <FaDownload size={28} />
        </button>
      </div>
    </div>
  );
};

const styles = {
  resumeSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    // backgroundColor: '#f9f9f9',
    // border: '1px solid #ddd',
    borderRadius: '8px',
    maxWidth: '400px',
    margin: '20px auto',
  },
  resumeTitle: {
    fontSize: '1.5rem',
    marginBottom: '15px',
  },
  resumeActions: {
    display: 'flex',
    gap: '15px',
  },
  resumeButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '55px',
    height: '55px',
    border: 'none',
    borderRadius: '50%',
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  viewButton: {
    backgroundColor: '#28a745',
  },
  viewButtonHover: {
    backgroundColor: '#218838',
  },
  downloadButton: {
    backgroundColor: '#ffc107',
  },
  downloadButtonHover: {
    backgroundColor: '#e0a800',
  },
};

export default ResumeSection;
