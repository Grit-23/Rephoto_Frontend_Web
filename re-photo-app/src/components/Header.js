import React from 'react';

function Header({ onMenuClick }) {
  return (
    <header>
      <button onClick={onMenuClick}>☰</button>
      <h1>사진을 다시 보다, 리포토</h1>
    </header>
  );
}

export default Header;
