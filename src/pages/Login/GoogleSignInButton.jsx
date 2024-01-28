import React from 'react';
import PropTypes from 'prop-types';

const GoogleSignInButton = ({ onSignIn }) => {
  return (
    <div onClick={onSignIn} style={styles.buttonContainer}>
      <div style={styles.iconContainer}>
        <svg width="20" height="20" viewBox="0 0 48 48">
        <path
            fill="#4285F4"
            d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
          />
          <path
            fill="#34A853"
            d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
          />
          <path
            fill="#FBBC05"
            d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"
          />
          <path
            fill="#EA4335"
            d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
          />
          <path d="M2 2h44v44H2z" fill="none" />
        </svg>
      </div>
      <div style={styles.textContainer}>
        <span style={styles.text}>Sign in with </span>
        <span style={{ ...styles.text, color: "#4285F4" }}>G</span>
        <span style={{ ...styles.text, color: "#EA4335" }}>o</span>
        <span style={{ ...styles.text, color: "#FBBC04" }}>o</span>
        <span style={{ ...styles.text, color: "#4285F4" }}>g</span>
        <span style={{ ...styles.text, color: "#34A853" }}>l</span>
        <span style={{ ...styles.text, color: "#EA4335" }}>e</span>
      </div>
    </div>
  );
};

const styles = {
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '10px',
    borderRadius: '4px',
    boxShadow: '0 3px 4px rgba(0,0,0,0.3)',
    cursor: 'pointer',
    userSelect: 'none',
  },
  iconContainer: {
    marginRight: '10px',
  },
  textContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    fontSize: '14px',
    fontWeight: 'bold',
  },
};

GoogleSignInButton.propTypes = {
  onSignIn: PropTypes.func.isRequired,
};

export default GoogleSignInButton;