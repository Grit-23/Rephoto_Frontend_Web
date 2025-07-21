import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header({ onMenuClick }) {
  const navigate = useNavigate(); 

  return (
    <header>
      <button onClick={onMenuClick}>☰</button>
      <h1 style={{ cursor: 'pointer' }} onClick={() => navigate("/")}>
        사진을 다시 보다, 리포토
      </h1>
    </header>
  );
}

export default Header;
