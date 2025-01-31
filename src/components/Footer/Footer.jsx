import { Linkedin, Instagram, Twitter, Youtube } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <a href="/" className="footer-logo">
            7U
          </a>
          <div className="footer-links-container">
            <div className="footer-links-section">
              <h3 className="footer-heading">Navigation</h3>
              <div className="line"></div>
              <div className="footer-links">
                <a href="/" className="footer-link">
                  Home
                </a>
                <a href="/company" className="footer-link">
                  Company
                </a>
                <a href="/services" className="footer-link">
                  Services
                </a>
                <a href="/products" className="footer-link">
                  Products
                </a>
                <a href="/career" className="footer-link">
                  Career
                </a>
              </div>
            </div>
            <div className="footer-links-section">
              <h3 className="footer-heading">Others</h3>
              <div className="footer-links">
                <a href="/contact" className="footer-link">
                  Contact
                </a>
                <a href="/privacy" className="footer-link">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="social-links">
            <a href="#" className="social-link">
              <Linkedin className="social-icon" />
            </a>
            <a href="#" className="social-link">
              <Instagram className="social-icon" />
            </a>
            <a href="#" className="social-link">
              <Twitter className="social-icon" />
            </a>
            <a href="#" className="social-link">
              <Youtube className="social-icon" />
            </a>
          </div>
          <p className="copyright">© 2024 - Unireal. all rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
