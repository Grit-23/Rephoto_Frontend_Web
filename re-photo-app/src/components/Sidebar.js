// Sidebar.js
import React from "react";
import "./Sidebar.css";

function Sidebar({ open, onClose, children }) {
  if (!open) return null;

   console.log("Sidebar 열림. children:", children);

  return (
    <aside className="sidebar">
      <button className="close-btn" onClick={onClose}>×</button>
      {children}
    </aside>
  );
}

export default Sidebar;
