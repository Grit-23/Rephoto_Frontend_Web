import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the Rephoto App!</p>
      <nav>
        <Link to="/tag-search">Go to Tag Search</Link><br/>
        <Link to="/map">Go to Map</Link><br/>
        <Link to="/user">Go to User Info</Link>
      </nav>
    </div>
  );
}

export default Home;
