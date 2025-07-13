import React from 'react';
import { Link } from 'react-router-dom';

function Map() {
  return (
    <div>
      <h2>Map Page</h2>
      <Link to="/map/1">Go to Map Detail 1</Link>
    </div>
  );
}

export default Map;
