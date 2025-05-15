
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-app-darker bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="text-3xl font-bold text-white">
              <span className="text-app-blue">a</span>ppinventiv
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-200 hover:text-white uppercase text-sm font-medium">LET'S TALK AI</Link>
          <Link to="/about" className="text-gray-200 hover:text-white uppercase text-sm font-medium">ABOUT</Link>
          <Link to="/services" className="text-gray-200 hover:text-white uppercase text-sm font-medium">SERVICES</Link>
          <Link to="/industries" className="text-gray-200 hover:text-white uppercase text-sm font-medium">INDUSTRIES</Link>
          <Link to="/portfolio" className="text-gray-200 hover:text-white uppercase text-sm font-medium">PORTFOLIO</Link>
          <Link to="/resources" className="text-gray-200 hover:text-white uppercase text-sm font-medium">RESOURCES</Link>
          <Link to="/contact" className="ml-4 px-6 py-2 bg-app-blue text-white rounded-md hover:bg-blue-600 transition-colors uppercase text-sm font-medium">CONTACT US</Link>
        </nav>
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
