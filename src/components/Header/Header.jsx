import { Search } from "lucide-react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-container">
        <a href="/" className="logo">
          7U
        </a>
        <div className="nav-links">
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/company" className="nav-link">
            Company
          </a>
          <a href="/services" className="nav-link">
            Services
          </a>
          <a href="/products" className="nav-link">
            Products
          </a>
          <a href="/career" className="nav-link">
            Career
          </a>
          <a href="/contact" className="nav-link">
            Contact
          </a>
          <Search className="search-icon" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
