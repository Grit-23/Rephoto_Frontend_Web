import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import BottomNav from './components/BottomNav';

import Login from './pages/Login';
import Home from './pages/Home';
import TagSearch from './pages/TagSearch';
import Map from './pages/Map';
import MapDetail from './pages/MapDetail';
import UserInfo from './pages/UserInfo';
import SensitivePage from "./pages/SensitivePage";

import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  if (!isLoggedIn) return <Login onLogin={() => setIsLoggedIn(true)} />;

  return (
    <div className="app">
      <Header onMenuClick={() => setSidebarOpen(true)} />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)}>
        <UserInfo />
      </Sidebar>


      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tag-search" element={<TagSearch />} />
          <Route path="/map" element={<Map />} />
          <Route path="/map/:id" element={<MapDetail />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/sensitive" element={<SensitivePage />} />
        </Routes>
      </div>

      <BottomNav />
    </div>
  );
}

export default App;
