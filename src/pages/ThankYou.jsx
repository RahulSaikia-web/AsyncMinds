import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Thank You!</h1>
      <p style={styles.message}>
        Your message has been successfully submitted. We will get back to you soon.
      </p>
      <Link to="/" style={styles.link}>
        Go Back to Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f9',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: 0,
  },
  heading: {
    color: '#4CAF50',
    fontSize: '2.5rem',
  },
  message: {
    fontSize: '1.2rem',
    color: '#555',
    textAlign: 'center',
    margin: '10px 0',
  },
  link: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    display: 'inline-block',
  },
};

export default ThankYou;
