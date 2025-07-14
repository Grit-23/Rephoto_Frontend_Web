import React from 'react';
import { Link } from 'react-router-dom';

function BottonNav() {
  return (
    <nav className="bottom-nav">
      <Link to="/">Home</Link>
      <Link to="/tag-search">Tags</Link>
      <Link to="/map">Map</Link>
      <Link to="/user">User</Link>
    </nav>
  );
}

export default BottonNav;
