
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopBanner = () => {
  return (
    <div className="bg-app-blue text-white py-2 px-4 text-center">
      <div className="container mx-auto">
        <p className="text-sm md:text-base">
          Uncover proof of Appinventiv's impact across 3000+ digital deliveries for 35+ industries.
          <Link to="/lets-talk-ai" className="ml-2 font-medium inline-flex items-center hover:underline transition-all group">
            Explore Now <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default TopBanner;
