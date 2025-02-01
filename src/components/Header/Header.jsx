import { useState } from "react";
import { Search, Menu, X } from "lucide-react"; // Import icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-white">
          7U
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="/" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="/company" className="text-white hover:text-gray-300">
            Company
          </a>
          <a href="/ecl" className="text-white hover:text-gray-300">
            Services
          </a>
          <a href="/products" className="text-white hover:text-gray-300">
            Products
          </a>
          <a href="/career" className="text-white hover:text-gray-300">
            Career
          </a>
          <a href="/contact" className="text-white hover:text-gray-300">
            Contact
          </a>
          <Search
            className="text-white cursor-pointer hover:text-gray-300"
            size={20}
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={28} color="white" />
          ) : (
            <Menu size={28} color="white" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black shadow-md">
          <div className="flex flex-col items-center space-y-4 py-6">
            <a
              href="/"
              className="text-white hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="/company"
              className="text-white hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Company
            </a>
            <a
              href="/ecl"
              className="text-white hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="/products"
              className="text-white hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Products
            </a>
            <a
              href="/career"
              className="text-white hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Career
            </a>
            <a
              href="/contact"
              className="text-white hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <Search
              className="text-gray-700 cursor-pointer hover:text-black"
              size={20}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
