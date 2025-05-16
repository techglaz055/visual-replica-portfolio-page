
import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const menuItems = [
  {
    title: 'About',
    links: ['Our company', 'Core Team', 'Career', 'CSR', 'How We Work']
  },
  {
    title: 'Services',
    links: ['iOS App Development', 'Android App Development', 'Software Development', 'Ideation & Design', 'Mobile App Dev', 'Research & Innovation', 'Digital Transformation', 'more...']
  },
  {
    title: 'Technologies',
    links: ['Blockchain', 'Artificial Intelligence', 'AR and VR', 'Cloud Computing', 'Internet of Things', 'Metaverse Development', 'NFT Development', 'more...']
  },
  {
    title: 'Industries',
    links: ['Healthcare', 'Education', 'SaaS', 'Finance', 'On-Demand', 'eCommerce', 'Logistics', 'more...']
  },
  {
    title: 'Portfolio',
    links: ['KFC', 'Adidas', 'IKEA', 'Hukoomi', 'Domino\'s', 'Pizza Hut', 'YouCOMM']
  },
  {
    title: 'Resources',
    links: ['Blog', 'Press Release', 'Guides', 'Ebooks']
  }
];

const FooterMenu = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-app-darker border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex justify-end mb-8">
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <ArrowUp size={24} className="text-white" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {menuItems.map((menu, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-white mb-4">{menu.title}</h3>
              <ul className="space-y-3">
                {menu.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to="#" 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-gray-400 mb-4 md:mb-0">
            <img 
              src="https://via.placeholder.com/120x50?text=DMCA.com" 
              alt="DMCA Protected"
              className="h-8 mr-4" 
            />
            <p>Full stack mobile (iOS, Android) and web app design and development agency</p>
          </div>
          <div>
            <p className="text-gray-400">&copy; 2025 Appinventiv. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMenu;
