import React from 'react';

function Sidebar({ open, onClose }) {
  if (!open) return null;

  return (
    <aside>
      <button onClick={onClose}>Close</button>
      <p>Sidebar Content Here</p>
    </aside>
  );
}

export default Sidebar;
