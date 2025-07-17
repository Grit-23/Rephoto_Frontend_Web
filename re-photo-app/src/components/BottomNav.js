import React from 'react';
import { Link } from 'react-router-dom';
import './BottomNav.css';

function BottonNav() {
  return (
    <nav className="bottom-nav">
      <Link to="/">홈</Link>
      <Link to="/tag-search">검색</Link>
      <Link to="/map">지도</Link>
      <Link to="/user">사용자</Link>
    </nav>
  );
}

export default BottonNav;
