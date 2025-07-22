import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaRobot, FaPhone, FaComments, FaTimes } from "react-icons/fa";
import "./FloatingButton.css"; 
import { useNavigate } from "react-router-dom";

function FloatingButtons() {
   const navigate = useNavigate();
  
  const [showButtons, setShowButtons] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [clickedButton, setClickedButton] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowButtons(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // When someone clicks the main floating button
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // For when a user clicks any of the mini buttons
  const handleClick = (type, action) => {
    setClickedButton(type);
    setTimeout(() => setClickedButton(null), 300);
    action();
  };

  // Actions for each button
  const openWhatsApp = () => {
   
    window.open("https://wa.me/917076091389", "_blank");
  };

  const startAIChat = () => {
    navigate("/ai-doctor");
  };

  const callPhone = () => {
    window.open("tel:+917076091389");
  };

  // These are the two cute floating buttons
  const buttons = [
    {
      id: "whatsapp",
      icon: FaWhatsapp,
      label: "Chat on WhatsApp",
      color: "#25D366",
      hover: "#128C7E",
      onClick: openWhatsApp,
    },
    {
      id: "ai",
      icon: FaRobot,
      label: "Talk to AI",
      color: "#6f42c1",
      hover: "#5a2d91",
      onClick: startAIChat,
    },
  ];

  return (
    <>
      {/* Floating buttons box */}
      <div className={`floating-container ${showButtons ? "visible" : ""}`}>
        {/* Dark blur backdrop when menu opens */}
        {menuOpen && <div className="floating-backdrop" onClick={toggleMenu} />}

        {/* Small action buttons */}
        <div className={`action-buttons ${menuOpen ? "expanded" : ""}`}>
          {buttons.map((btn, index) => {
            const Icon = btn.icon;
            return (
              <div
                key={btn.id}
                className={`action-button-wrapper ${menuOpen ? "show" : ""}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Tooltip */}
                <div className="button-tooltip">
                  <span className="tooltip-text">{btn.label}</span>
                  <div className="tooltip-arrow" />
                </div>

                {/* Actual button */}
                <button
                  className={`action-button ${
                    clickedButton === btn.id ? "active" : ""
                  }`}
                  onClick={() => handleClick(btn.id, btn.onClick)}
                  style={{
                    "--button-color": btn.color,
                    "--button-hover-color": btn.hover,
                  }}
                >
                  <Icon className="button-icon" />
                  <div className="button-ripple" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Big main floating button */}
        <div className="main-button-wrapper">
          <button
            className={`main-button ${menuOpen ? "expanded" : ""}`}
            onClick={toggleMenu}
            title={menuOpen ? "Close" : "Help options"}
          >
            <div className="button-content">
              <FaComments className={`main-icon ${menuOpen ? "hide" : "show"}`} />
              <FaTimes className={`close-icon ${menuOpen ? "show" : "hide"}`} />
            </div>
            <div className="button-pulse" />
            <div className="button-ripple" />
          </button>

          {/* Tooltip beside main button */}
          <div className={`main-tooltip ${menuOpen ? "hide" : "show"}`}>
            <span>Need Help?</span>
            <div className="tooltip-arrow" />
          </div>
        </div>

        {/* Cute floating particles animation */}
        <div className="floating-particles">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>    
    </>
  );
}

export default FloatingButtons;
