"use client"

import { useState } from "react"

export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [sidebarVisible, setSidebarVisible] = useState(false)

  const handlePinClick = (location) => {
    setSelectedLocation(location)
    setSidebarVisible(true)
  }

  const handleCloseSidebar = () => {
    setSidebarVisible(false)
    setSelectedLocation(null)
  }

  return (
    <div style={{ display: "flex", height: "100vh", backgroundColor: "#f3f4f6" }}>
      {/* Sidebar */}
      <div
        style={{
          width: sidebarVisible ? "320px" : "0px",
          transition: "all 0.3s ease-in-out",
          overflow: "hidden",
        }}
      >
        <PhotoSidebar location={selectedLocation} onClose={handleCloseSidebar} isVisible={sidebarVisible} />
      </div>

      {/* Map */}
      <div style={{ flex: 1, position: "relative" }}>
        <MapComponent onPinClick={handlePinClick} />
      </div>
    </div>
  )
}

// Map Component
function MapComponent({ onPinClick }) {
  const locations = [
    {
      id: 1,
      name: "덕수궁",
      lat: 37.5658,
      lng: 126.975,
      photos: [
        "https://via.placeholder.com/300x200?text=덕수궁1",
        "https://via.placeholder.com/300x200?text=덕수궁2",
        "https://via.placeholder.com/300x200?text=덕수궁3",
        "https://via.placeholder.com/300x200?text=덕수궁4",
      ],
      date: "5월 18일 (일)",
    },
    {
      id: 2,
      name: "서울시청",
      lat: 37.5663,
      lng: 126.9779,
      photos: [
        "https://via.placeholder.com/300x200?text=서울시청1",
        "https://via.placeholder.com/300x200?text=서울시청2",
      ],
      date: "5월 18일 (일)",
    },
    {
      id: 3,
      name: "명동",
      lat: 37.5636,
      lng: 126.9834,
      photos: [
        "https://via.placeholder.com/300x200?text=명동1",
        "https://via.placeholder.com/300x200?text=명동2",
        "https://via.placeholder.com/300x200?text=명동3",
      ],
      date: "5월 18일 (일)",
    },
    {
      id: 4,
      name: "청계천",
      lat: 37.5694,
      lng: 126.9784,
      photos: ["https://via.placeholder.com/300x200?text=청계천1"],
      date: "5월 18일 (일)",
    },
  ]

  const handlePinClick = (location) => {
    onPinClick(location)
  }

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {/* Google Maps Embed */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.835!2d126.9750!3d37.5658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2c74aeddea1%3A0x8b3046532cc715f6!2z642V7IiY6raB!5e0!3m2!1sko!2skr!4v1642000000000!5m2!1sko!2skr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Custom Pins Overlay */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none" }}>
        {locations.map((location) => (
          <div
            key={location.id}
            style={{
              position: "absolute",
              left: `${45 + location.id * 8}%`,
              top: `${35 + location.id * 5}%`,
              transform: "translate(-50%, -50%)",
              pointerEvents: "auto",
              cursor: "pointer",
              zIndex: 10,
            }}
            onClick={() => handlePinClick(location)}
          >
            <div style={{ position: "relative" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "#ef4444",
                  borderRadius: "50%",
                  border: "2px solid white",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              >
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    backgroundColor: "white",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  marginTop: "4px",
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "12px",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  opacity: 0,
                  transition: "opacity 0.2s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = 1)}
                onMouseLeave={(e) => (e.target.style.opacity = 0)}
              >
                {location.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Photo Sidebar Component
function PhotoSidebar({ location, onClose, isVisible }) {
  if (!location || !isVisible) return null

  return (
    <div
      style={{
        width: "320px",
        height: "100%",
        backgroundColor: "white",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div>
          <h2 style={{ fontSize: "18px", fontWeight: "bold", color: "#111827", margin: 0 }}>{location.name}</h2>
          <p style={{ fontSize: "14px", color: "#6b7280", margin: "4px 0 0 0" }}>{location.date}</p>
        </div>
        <button
          onClick={onClose}
          style={{
            padding: "4px",
            backgroundColor: "transparent",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#f3f4f6")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          <span style={{ fontSize: "20px", color: "#6b7280" }}>×</span>
        </button>
      </div>

      {/* Photos Grid */}
      <div
        style={{
          flex: 1,
          padding: "16px",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "8px",
          }}
        >
          {location.photos.map((photo, index) => (
            <div key={index} style={{ aspectRatio: "1" }}>
              <img
                src={photo || "/placeholder.svg"}
                alt={`${location.name} 사진 ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = "0.8")}
                onMouseLeave={(e) => (e.target.style.opacity = "1")}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer Button */}
      <div style={{ padding: "16px", borderTop: "1px solid #e5e7eb" }}>
        <button
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#f3f4f6",
            color: "#374151",
            border: "none",
            borderRadius: "24px",
            fontWeight: "500",
            cursor: "pointer",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#e5e7eb")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#f3f4f6")}
        >
          사진 더보기
        </button>
      </div>
    </div>
  )
}
