
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const serviceCategories = [
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    description: 'We leverage AI to craft intelligent solutions that streamline operations and enhance decision-making capabilities.',
    icon: '🧠'
  },
  {
    id: 'gen-ai',
    title: 'Generative AI',
    description: 'We utilize Generative AI technology to create solutions that produce new content, automate creative processes and enhance user experiences.',
    icon: '✨'
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    description: 'We use ML to build intelligent systems that analyze data patterns and predict outcomes while continuously improving operations.',
    icon: '📊'
  },
  {
    id: 'nlp',
    title: 'Natural Language Processing',
    description: 'Our NLP solutions enable systems to understand, interpret, and generate human language for enhanced communication interfaces.',
    icon: '💬'
  }
];

const services = [
  {
    id: 'mobile',
    title: 'Mobile App Development',
    description: 'We build intuitive, responsive mobile apps tailored to meet your specific business needs and enhance user engagement.',
    icon: '📱'
  },
  {
    id: 'software',
    title: 'Software Development',
    description: 'From custom development to system upgrades, we craft software that enhances operational efficiency and drives innovation.',
    icon: '<>'
  },
  {
    id: 'digital',
    title: 'Digital Transformation',
    description: 'We help businesses stay competitive by transforming legacy systems with modern, digital-first solutions that drive growth.',
    icon: '🔄'
  },
  {
    id: 'ideation',
    title: 'Ideation And Design Strategy',
    description: 'Our strategic ideation and design processes ensure that your digital products are not only functional but also well-resonated with users.',
    icon: '💡'
  },
  {
    id: 'qa',
    title: 'Quality Assurance',
    description: 'Our comprehensive testing services ensure your software meets the highest quality standards for reliability and performance.',
    icon: '✓'
  },
  {
    id: 'cloud',
    title: 'Cloud Services',
    description: 'We help businesses leverage cloud technologies for scalability, flexibility, and enhanced collaboration across teams.',
    icon: '☁️'
  }
];

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('ai');
  const [activeService, setActiveService] = useState('mobile');

  return (
    <section className="py-20 bg-app-dark">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-fade-in">
            Navigate The Digital Frontier With Our Engineering Excellence
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div 
                key={service.id}
                className={`p-6 rounded-lg border border-gray-800 hover:border-app-blue transition-all cursor-pointer animate-fade-in ${activeService === service.id ? 'border-app-blue bg-gradient-to-b from-transparent to-blue-900/20' : ''}`}
                onClick={() => setActiveService(service.id)}
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 animate-fade-in">
            We Create New Solutions And Transform Existing Ones With Technologies That Beat Industry-Best Timelines
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-r from-gray-900 to-black p-8 rounded-lg animate-fade-in">
              <div className="text-4xl mb-6">🚀</div>
              <h3 className="text-3xl font-bold text-white mb-4">Fuel Your Digital-First Idea</h3>
              <p className="text-xl text-gray-400 mb-8">With 1600+ Transformation Experts</p>
              
              <button className="bg-app-blue text-white px-6 py-3 rounded-md hover:bg-blue-600 hover:scale-105 transition-all group flex items-center gap-2">
                Innovate With Us
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="lg:col-span-2">
              <div className="mb-6 border-b border-gray-800">
                <div className="flex overflow-x-auto">
                  {serviceCategories.map((category) => (
                    <button 
                      key={category.id}
                      className={`px-6 py-4 whitespace-nowrap text-lg font-medium ${activeTab === category.id ? 'text-app-blue border-b-2 border-app-blue' : 'text-gray-400 hover:text-white'}`}
                      onClick={() => setActiveTab(category.id)}
                    >
                      {category.title}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="p-6 border border-gray-800 rounded-lg animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="bg-app-blue p-3 rounded-full text-white text-xl">
                    {serviceCategories.find(cat => cat.id === activeTab)?.icon || '🔍'}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {serviceCategories.find(cat => cat.id === activeTab)?.title || 'Service'}
                    </h3>
                    <p className="text-gray-300">
                      {serviceCategories.find(cat => cat.id === activeTab)?.description || 'Service description'}
                    </p>
                  </div>
                </div>
                <div className="flex justify-end mt-6">
                  <button className="text-app-blue flex items-center gap-2 hover:underline group">
                    Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
