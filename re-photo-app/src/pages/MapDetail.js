import React from 'react';

export default function MapSVG({ locations, selected, onSelect }) {
  return (
    <svg viewBox="0 0 300 200" className="map-svg">
      <image href="https://upload.wikimedia.org/wikipedia/commons/8/80/Seoul_location_map.svg"
             x="0" y="0" width="300" height="200" />

      {locations.map(loc => (
        <circle
          key={loc.id}
          cx={loc.cx}
          cy={loc.cy}
          r={selected?.id === loc.id ? 12 : 8}
          fill={selected?.id === loc.id ? 'red' : 'blue'}
          stroke="black"
          strokeWidth="1"
          onClick={() => onSelect(loc)}
          style={{ cursor: 'pointer' }}
        />
      ))}
    </svg>
  );
}
