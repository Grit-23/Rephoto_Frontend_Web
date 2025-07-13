import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import TagSearch from './pages/TagSearch';
import Map from './pages/Map';
import MapDetail from './pages/MapDetail';
import UserInfo from './pages/UserInfo';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import BottonNav from './components/BottonNav';

import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <Router>
      <div className="app">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tag-search" element={<TagSearch />} />
            <Route path="/map" element={<Map />} />
            <Route path="/map/:id" element={<MapDetail />} />
            <Route path="/user" element={<UserInfo />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>

        <BottonNav />
      </div>
    </Router>
  );
}

export default App;
