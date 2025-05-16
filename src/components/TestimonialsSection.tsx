
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    text: "We approached Appinventiv with a clear vision to build a robust and future-ready platform that could seamlessly integrate with the busy lifestyle of our customers while uplifting their overall experience and giving us a competitive edge. The Appinventiv team not only understood our vision but also enhanced the overall solution with their expertise. The end results exceeded our expectations with massive improvements in the user base and digital revenue for different brands.",
    name: "Neeraj Tiwari",
    position: "Director - Digital Engineering",
    company: "Americana",
    image: "https://source.unsplash.com/random/100x100?profile=1" 
  },
  {
    text: "We were looking for a technology partner who could understand our unique situation and needs. Appinventiv team was quick to understand what we wanted and delivered an efficient and simple solution that perfectly matched our requirements.",
    name: "Sarah Johnson",
    position: "CTO",
    company: "edfundo",
    image: "https://source.unsplash.com/random/100x100?profile=2"
  },
  {
    text: "The team at Appinventiv delivered exactly what we needed - a scalable, user-friendly platform that has significantly improved our customer engagement and operational efficiency.",
    name: "Michael Chen",
    position: "VP of Product",
    company: "GlobalTech",
    image: "https://source.unsplash.com/random/100x100?profile=3"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-app-darker">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              First-Hand Opinions Of Clients On Their Partnership Experience
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl animate-fade-in">
              We are a software and mobile application development company that ensures its expertise extends to offer a seamlessly productive and growth-oriented partnership to its clients.
            </p>
          </div>
          
          <div className="flex items-center gap-4 md:self-end">
            <button className="p-4 rounded-full border border-gray-700 hover:border-white transition-colors group">
              <ArrowLeft size={24} className="text-white group-hover:scale-110 transition-transform" />
            </button>
            <button className="p-4 rounded-full border border-gray-700 hover:border-white transition-colors group">
              <ArrowRight size={24} className="text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="border border-gray-800 p-8 rounded-lg hover:border-app-blue transition-all hover:bg-gradient-to-b from-transparent to-blue-900/10"
            >
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">{testimonial.text}</p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-gray-400">{testimonial.position}</p>
                  <p className="text-app-blue">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
