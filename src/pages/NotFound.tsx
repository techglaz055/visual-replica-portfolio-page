
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-app-dark">
        <div className="text-center px-6">
          <h1 className="text-5xl font-bold text-white mb-4">404</h1>
          <p className="text-xl text-gray-300 mb-8">The page you are looking for doesn't exist.</p>
          <Link to="/" className="bg-app-blue text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors">
            Return Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
