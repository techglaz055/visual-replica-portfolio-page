
import React from 'react';

const partners = [
  { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
  { name: 'MongoDB', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg' },
  { name: 'Google Cloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg' },
  { name: 'Cloudinary', logo: 'https://cloudinary-res.cloudinary.com/image/upload/c_scale,w_140/v1638459971/website_2021/cloudinary_logo_blue_0720_2x.png' },
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
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center">
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
