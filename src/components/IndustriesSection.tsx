
import React from 'react';
import { ArrowRight } from 'lucide-react';

const industries = [
  { id: 'healthcare', name: 'Healthcare', icon: '❤️' },
  { id: 'finance', name: 'Finance', icon: '💰' },
  { id: 'restaurant', name: 'Restaurant', icon: '🍽️' },
  { id: 'ecommerce', name: 'eCommerce', icon: '🛍️' },
  { id: 'ev', name: 'Electric Vehicle (EV)', icon: '🔋' },
  { id: 'saas', name: 'SaaS', icon: '☁️' },
  { id: 'travel', name: 'Travel', icon: '✈️' },
  { id: 'entertainment', name: 'Entertainment', icon: '🎬' },
  { id: 'on-demand', name: 'On-Demand', icon: '📱' },
  { id: 'social-media', name: 'Social Media', icon: '📢' },
  { id: 'logistics', name: 'Logistics', icon: '🚚' },
  { id: 'education', name: 'Education', icon: '🎓' },
];

const IndustriesSection = () => {
  return (
    <section className="py-20 bg-app-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white max-w-2xl animate-fade-in">
            A Unified Vision That Caters To Diverse Industry Demands
          </h2>
          
          <button className="bg-app-blue text-white px-6 py-3 rounded-md hover:bg-blue-600 hover:scale-105 transition-all group flex items-center gap-2">
            Explore More In Industries
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <div 
              key={industry.id}
              className="border border-gray-800 rounded-lg p-6 hover:border-app-blue hover:bg-gradient-to-b from-transparent to-blue-900/10 transition-all cursor-pointer flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="text-xl font-bold text-white">{industry.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
