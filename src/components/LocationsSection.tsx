
import React from 'react';

const locations = [
  {
    country: 'INDIA',
    address: 'B-25, Sector 58, Noida - 201301, Delhi - NCR, India',
    image: 'https://via.placeholder.com/150x80?text=India+Skyline'
  },
  {
    country: 'USA',
    address: '79, Madison Ave Manhattan, NY 10001, USA',
    image: 'https://via.placeholder.com/150x80?text=USA+Skyline'
  },
  {
    country: 'Australia',
    address: 'Appinventiv Australia, QLD 4169, Australia',
    image: 'https://via.placeholder.com/150x80?text=Australia+Skyline'
  },
  {
    country: 'UK',
    address: '3rd Floor, 86-90 Paul Street EC2A 4NE London, UK',
    image: 'https://via.placeholder.com/150x80?text=UK+Skyline'
  },
  {
    country: 'UAE',
    address: 'Tiger Al Yarmook Building, 13th floor B-block Al Nahda St - Sharjah',
    image: 'https://via.placeholder.com/150x80?text=UAE+Skyline'
  },
  {
    country: 'CANADA',
    address: 'Suite 3810, Bankers Hall West, 888 - 3rd Street Sw Calgary Alberta',
    image: 'https://via.placeholder.com/150x80?text=Canada+Skyline'
  },
];

const LocationsSection = () => {
  return (
    <section className="py-20 bg-app-darker">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <img 
            src="https://via.placeholder.com/200x80?text=Appinventiv+Logo" 
            alt="Appinventiv Logo"
            className="mb-6 h-10" 
          />
          <div className="inline-flex items-center px-4 py-2 bg-gray-800 rounded-full">
            <span className="mr-2 w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="text-white">Most trusted Mobile App Consulting Company on Clutch</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {locations.map((location, index) => (
            <div key={index} className="flex flex-col items-center animate-fade-in">
              <img 
                src={location.image} 
                alt={`${location.country} office`}
                className="mb-4 w-48" 
              />
              <h3 className="text-xl font-bold text-white mb-3">{location.country}</h3>
              <p className="text-gray-400 text-center">{location.address}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
