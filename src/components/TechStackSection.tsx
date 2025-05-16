
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const techCategories = [
  { id: 'frontend', name: 'Frontend Programming Languages' },
  { id: 'backend', name: 'Backend Programming Languages' },
  { id: 'mobile', name: 'Mobile' },
  { id: 'bigdata', name: 'Big Data' },
  { id: 'database', name: 'Databases / Data Storages' },
  { id: 'cloud', name: 'Cloud DB, Warehouses And Storage' },
];

const techStacks = {
  frontend: [
    { name: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
    { name: 'HTML', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
    { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' },
    { name: 'Angular', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg' },
    { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'Vue.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg' },
    { name: 'Ember', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Ember-logo.svg' },
    { name: 'Meteor', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Meteor-logo.png' },
    { name: 'Next.js', logo: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg' },
  ],
  backend: [
    { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
    { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
    { name: 'Java', logo: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' },
    { name: 'PHP', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg' },
  ],
  mobile: [
    { name: 'Swift', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg' },
    { name: 'Kotlin', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin-logo.svg' },
    { name: 'React Native', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'Flutter', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Google-flutter-logo.svg' },
  ],
  bigdata: [
    { name: 'Hadoop', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Hadoop_logo.svg' },
    { name: 'Spark', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg' },
    { name: 'Kafka', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Apache_kafka.svg' },
  ],
  database: [
    { name: 'MySQL', logo: 'https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg' },
    { name: 'MongoDB', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg' },
    { name: 'PostgreSQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' },
  ],
  cloud: [
    { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'Google Cloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg' },
    { name: 'Azure', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg' },
  ],
};

const TechStackSection = () => {
  const [activeTech, setActiveTech] = useState('frontend');

  return (
    <section className="py-20 bg-app-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 max-w-4xl animate-fade-in">
          Tech Capabilities Driving Digital Transformation For Our Clients
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <div className="flex flex-col gap-4">
              {techCategories.map((category) => (
                <button
                  key={category.id}
                  className={`p-4 rounded-lg flex items-center justify-between text-left text-lg ${activeTech === category.id ? 'bg-app-blue text-white' : 'bg-gray-900 text-gray-300 hover:text-white'} transition-colors`}
                  onClick={() => setActiveTech(category.id)}
                >
                  <span>{category.name}</span>
                  <ArrowRight size={20} className={`transition-transform ${activeTech === category.id ? 'transform rotate-90' : ''}`} />
                </button>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-8 bg-gray-900 p-8 rounded-lg">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {techStacks[activeTech as keyof typeof techStacks].map((tech, index) => (
                <div 
                  key={index}
                  className="bg-gray-800 p-4 rounded-lg flex flex-col items-center hover:bg-gray-700 transition-colors"
                >
                  <div className="h-16 flex items-center justify-center mb-3">
                    <img src={tech.logo} alt={tech.name} className="max-h-full max-w-[80px]" />
                  </div>
                  <p className="text-gray-300">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
