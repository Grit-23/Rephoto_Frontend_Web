import React from 'react';
import './UserInfo.css';
import { FiBell, FiSettings, FiLogOut, FiUser, FiLink, FiTrash, FiHelpCircle } from 'react-icons/fi';

function UserInfo() {
  return (
    <div className="user-page">
      {/* 상단 유저 정보 */}
      <div className="user-header">
        <div className="user-profile">
          <div className="profile-circle" />
          <div className="user-name">홍길동</div>
        </div>
        <div className="user-icons">
          <FiBell size={20} />
          <FiSettings size={20} />
        </div>
      </div>

      {/* 메뉴 리스트 */}
      <div className="user-menu">
        <MenuItem icon={<FiUser />} label="아이디" />
        <MenuItem icon={<FiLink />} label="공유된 사진" />
        <MenuItem icon={<FiTrash />} label="Trash" />
        <MenuItem icon={<FiHelpCircle />} label="고객센터" />
      </div>

      {/* 로그아웃 */}
      <div className="logout-button">
        <FiLogOut />
        <span>로그아웃</span>
      </div>
    </div>
  );
}

// 개별 메뉴 항목
function MenuItem({ icon, label }) {
  return (
    <div className="menu-item">
      <div className="menu-left">
        {icon}
        <span>{label}</span>
      </div>
      <span className="menu-arrow">›</span>
    </div>
  );
}

export default UserInfo;
