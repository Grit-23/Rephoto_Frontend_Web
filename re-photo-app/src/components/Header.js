import React from 'react';

function Header({ onMenuClick }) {
  return (
    <header>
      <button onClick={onMenuClick}>☰</button>
      <h1>Rephoto App</h1>
    </header>
  );
}

export default Header;
