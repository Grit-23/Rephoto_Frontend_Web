import React, { useState } from "react";
import "./Home.css";
import Sidebar from "../components/Sidebar";
import UserInfo from "./UserInfo";

function Home({ onOpenUserSidebar }) {
  const sensitiveCount = 54;
  const photoUrls = Array.from({ length: 30 }, (_, i) => `/images/photo1.png`);
  const [modalImage, setModalImage] = useState(null);
  
  return (
    <div className="home-container">

      <h1 className="album-title">앨범</h1>

      {/* 민감한 사진 카드 */}
      <div className="sensitive-card" onClick={() => window.location.href = "/sensitive"}>
        <div className="sensitive-icon">!</div>
        <div className="sensitive-info">
          <div className="sensitive-count">{sensitiveCount}</div>
          <div className="sensitive-label">민감한 사진</div>
        </div>
      </div>

      {/* 사진 그리드 */}
      <div className="photo-grid">
        {photoUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`사진 ${index + 1}`}
            className="photo-item"
            onClick={() => setModalImage(url)}
          />
        ))}
      </div>

      {/* 모달 */}
      {modalImage && (
        <div className="modal-overlay" onClick={() => setModalImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="확대 사진" className="modal-image" />
            <button className="modal-close" onClick={() => setModalImage(null)}>×</button>
          </div>
        </div>
      )}
      </div>
  );
}

export default Home;
