
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
}

const CaseStudy: React.FC<CaseStudyProps> = ({ title, subtitle, metrics }) => {
  return (
    <div className="py-16 border-t border-gray-800">
      <div className="container mx-auto px-6">
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
        
        <button className="inline-flex items-center gap-2 border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-app-darker transition-colors">
          View Case Study
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default CaseStudy;
