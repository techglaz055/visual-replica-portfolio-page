
import React from 'react';

const partners = [
  { 
    name: 'AWS', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' 
  },
  { 
    name: 'MongoDB', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg' 
  },
  { 
    name: 'Google Cloud', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg' 
  },
  { 
    name: 'Cloudinary', 
    logo: 'https://cdn.worldvectorlogo.com/logos/cloudinary-2.svg' 
  },
];

const StrategicPartnerships = () => {
  return (
    <section className="py-16 bg-app-darker">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in">
              Strategic Partnerships To Unlock Greater Business Value
            </h2>
            <p className="text-gray-300 mb-8 animate-fade-in">
              Our strategic partnerships with leading technology providers enable us to deliver 
              cutting-edge solutions that help businesses scale and transform digitally.
            </p>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center p-4 bg-gray-800 rounded-lg hover-scale animate-scale-in"
                style={{animationDelay: `${index * 0.15}s`}}
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-12 w-auto hover:opacity-80 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicPartnerships;
