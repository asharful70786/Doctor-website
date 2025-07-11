import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaAmbulance,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      {/* Top Divider */}
      <div className="footer-divider" />

      <footer className="footer w-full">
        <div className="footer-container">
          {/* Grid Section */}
          <div className="footer-grid">
            {/* Clinic Info */}
            <div className="footer-section">
              <h3 className="footer-title">Dr. Amit Roy Clinic</h3>
              <p className="footer-description">
                Trusted pediatric care delivered with compassion. From newborns to teens, your child’s health is our mission.
              </p>
              <div className="footer-social">
                <Link to="/" className="social-link" aria-label="Facebook">
                  <FaFacebookF />
                </Link>
                <Link to="/" className="social-link" aria-label="Twitter">
                  <FaTwitter />
                </Link>
                <Link to="/" className="social-link" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </Link>
                <Link to="/" className="social-link" aria-label="Instagram">
                  <FaInstagram />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="footer-subtitle">Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/doctors">Doctors</Link></li>
                <li><Link to="/appointments">Appointments</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Specialties */}
            <div className="footer-section">
              <h4 className="footer-subtitle">Specialties</h4>
              <ul className="footer-links">
                <li><Link to="/services/general-medicine">General Medicine</Link></li>
                <li><Link to="/services/cardiology">Cardiology</Link></li>
                <li><Link to="/services/pediatrics">Pediatrics</Link></li>
                <li><Link to="/services/orthopedics">Orthopedics</Link></li>
                <li><Link to="/services/emergency">Emergency Care</Link></li>
                <li><Link to="/services/laboratory">Diagnostics</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4 className="footer-subtitle">Contact</h4>
              <ul className="contact-info">
                <li><FaMapMarkerAlt /><span> New Goria, Kolkata - 700055</span></li>
                <li><FaPhoneAlt /><span>+91 99999 00000</span></li>
                <li><FaEnvelope /><span>clinic.demo@gmail.com</span></li>
                <li><FaClock /><span>Mon–Fri: 9 AM – 8 PM<br />Sat–Sun: 10 AM – 6 PM</span></li>
              </ul>
            </div>
          </div>

          {/* Emergency Banner */}
          <div className="emergency-banner">
            <FaAmbulance className="emergency-icon" />
            <span>24/7 Emergency? Call <strong>+91 99999 00000</strong></span>
          </div>

          {/* Bottom Strip */}
          <div className="footer-bottom">
            <p>© 2024 Dr. Amit Roy Clinic. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/privacy">Privacy</Link>
              <Link to="/terms">Terms</Link>
              <Link to="/disclaimer">Disclaimer</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
