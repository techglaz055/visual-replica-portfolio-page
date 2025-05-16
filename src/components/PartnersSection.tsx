
import React from 'react';

const partners = [
  { name: 'IKEA', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Ikea_logo.svg' },
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'BCG', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Boston_Consulting_Group_logo.svg' },
  { name: 'KFC', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png' },
  { name: 'TGI Fridays', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/13/TGI_Fridays_Logo.svg' },
  { name: 'Moo', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Moo.com_logo.svg' },
  { name: 'Krispy Kreme', logo: 'https://upload.wikimedia.org/wikipedia/en/d/d4/Krispy_Kreme_logo.svg' },
  { name: 'Hardees', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Hardee%27s_logo.svg' },
  { name: 'Bajaj', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Bajaj_Auto_logo.svg' },
  { name: 'Dominos', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Domino%27s_pizza_logo.svg' },
  { name: 'SuperShe', logo: 'https://via.placeholder.com/150x50?text=SuperShe' },
  { name: 'Wimpy', logo: 'https://upload.wikimedia.org/wikipedia/en/9/94/Wimpy_logo_2018.svg' },
];

const PartnersSection = () => {
  return (
    <section className="py-20 bg-app-darker">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 max-w-4xl animate-fade-in">
          Our Partnerships Have Transformed How You Experience These Global Leaders
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center py-4 hover:scale-110 transition-transform"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
