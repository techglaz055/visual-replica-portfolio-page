
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const awards = [
  {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Entrepreneur_logo.svg', 
    year: '2020',
    title: 'App Development Company Of The Year'
  },
  {
    logo: 'https://via.placeholder.com/150x150?text=Clutch100', 
    year: '2025',
    title: 'Fastest-Growing Company'
  },
  {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Deloitte_Logo.png', 
    year: '2024-2023',
    title: 'Fastest Growing Technology Company'
  },
  {
    logo: 'https://via.placeholder.com/150x150?text=AI+Expert', 
    year: '2024',
    title: 'Fastest Growing AI Development Companies'
  }
];

const AwardsSection = () => {
  return (
    <section className="py-20 bg-app-dark">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white max-w-3xl animate-fade-in">
            Our Growth Journey As A Mobile App Development Company Has Bagged A Few Reputed Accolades As Well
          </h2>
          
          <div className="hidden md:flex gap-4">
            <button className="p-4 rounded-full border border-gray-700 hover:border-white transition-colors group">
              <ArrowLeft size={24} className="text-white group-hover:scale-110 transition-transform" />
            </button>
            <button className="p-4 rounded-full border border-gray-700 hover:border-white transition-colors group">
              <ArrowRight size={24} className="text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 hover:border-app-blue transition-all">
              <CardContent className="p-8 flex flex-col items-center">
                <div className="h-32 flex items-center justify-center mb-8">
                  <img 
                    src={award.logo} 
                    alt={award.title} 
                    className="max-h-full w-auto" 
                  />
                </div>
                <div className="text-center">
                  <p className="text-xl text-gray-400 mb-2">{award.year}</p>
                  <h3 className="text-xl text-white font-semibold">{award.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
