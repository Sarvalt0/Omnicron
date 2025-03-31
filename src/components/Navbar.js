import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '64px',
      backgroundColor: '#1976d2',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      padding: '0 20px',
      zIndex: 1000
    }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.5rem' }}>
        Omnicron
      </Link>
    </nav>
  );
}

export default Navbar; 