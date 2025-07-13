import React from 'react';
import { useParams } from 'react-router-dom';

function MapDetail() {
  const { id } = useParams();
  return (
    <div>
      <h2>Map Detail Page</h2>
      <p>Detail for location ID: {id}</p>
    </div>
  );
}

export default MapDetail;
