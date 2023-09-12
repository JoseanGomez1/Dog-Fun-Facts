import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    borderBottom: '.2rem solid black',
    padding: '.5rem',
    width: '90%',
    margin: 'auto',
  };

  return (
    <header>
      <h1>Dogs</h1>
      <nav style={navStyle}>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link> {/* Add the link to the "About" page */}
      </nav>
    </header>
  );
}

export default Header;
