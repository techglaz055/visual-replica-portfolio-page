
import React from 'react';
import { Play } from 'lucide-react';

const ClientTestimonial = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 to-app-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 max-w-5xl animate-fade-in">
          Our Clients Are Our Superheroes. We Prioritize Delivering Excellent Products, Thorough Training, And Optimal Execution
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div 
              key={item} 
              className="relative rounded-lg overflow-hidden hover-scale group cursor-pointer"
            >
              <img 
                src={`https://source.unsplash.com/random/300x400?person=${item}`} 
                alt={`Client testimonial ${item}`} 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white p-2 rounded-full">
                  <Play className="text-app-blue" size={30} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonial;
