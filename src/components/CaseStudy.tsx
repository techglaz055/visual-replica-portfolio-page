
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CaseStudyProps {
  title: string;
  subtitle: string;
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  imageSrc?: string;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ title, subtitle, metrics, imageSrc }) => {
  return (
    <div className="py-16 border-t border-gray-800 bg-app-dark">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-blue-500 mb-4">Case Study</div>
            <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
            <p className="text-xl text-white mb-8">{subtitle}</p>
            
            <div className="flex flex-wrap gap-8 mb-8">
              {metrics.map((metric, index) => (
                <div key={index} className="flex flex-col">
                  <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-400">{metric.description}</div>
                </div>
              ))}
            </div>
            
            <button className="inline-flex items-center gap-2 border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-app-darker transition-colors group">
              View Case Study
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          {imageSrc && (
            <div className="hover-scale transform transition-all">
              <img 
                src={imageSrc} 
                alt={`${title} case study`} 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
