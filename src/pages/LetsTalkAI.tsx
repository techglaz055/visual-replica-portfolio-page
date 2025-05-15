
import React from 'react';
import Navbar from '../components/Navbar';
import TopBanner from '../components/TopBanner';
import ChatIcon from '../components/ChatIcon';
import { ArrowRight, Play } from 'lucide-react';

const LetsTalkAI = () => {
  return (
    <>
      <TopBanner />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 bg-gradient-to-b from-app-darker to-app-dark min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 max-w-4xl animate-fade-in">
            Empowering Autonomous Growth With Time-Tested AI Services and Solutions
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mb-12 animate-fade-in">
            Unlock new potential and upgrade existing business capabilities with AI services that streamline operations,
            elevate customer experiences, and drive innovation.
          </p>
          
          <button className="bg-app-blue text-white px-8 py-4 rounded-md hover:bg-blue-600 hover:scale-105 transition-all flex items-center gap-2 animate-fade-in">
            Consult Our AI Experts
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
      
      {/* Video Section */}
      <section className="py-20 bg-app-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              See How These Leaders Became Our Proof Of AI Excellence
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              As a leading artificial intelligence consulting services provider, we take pride in the success stories we have created with our clients, 
              demonstrating the real-world value of our cutting-edge AI services.
            </p>
          </div>
          
          <div className="relative mx-auto max-w-4xl rounded-lg overflow-hidden group hover-scale">
            <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-lg">
              {/* Placeholder for video - in production, use an actual video player */}
              <div className="w-full h-full bg-gradient-to-br from-blue-900 to-app-darker flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-app-blue rounded-full flex items-center justify-center text-white hover:bg-blue-600 hover:scale-110 transition-all">
                    <Play size={36} fill="white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section className="py-20 bg-gradient-to-b from-app-dark to-app-darker">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-lg p-8 hover-scale transition-all">
              <h3 className="text-3xl font-bold text-white mb-4">Mudra</h3>
              <p className="text-gray-300 mb-6">We utilized AI to develop a chatbot-driven budget management tool, enabling users to track their spending effortlessly.</p>
              <button className="text-app-blue flex items-center hover:text-blue-400 transition-colors">
                Read Case Study <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-8 hover-scale transition-all">
              <h3 className="text-3xl font-bold text-white mb-4">JobGet</h3>
              <p className="text-gray-300 mb-6">We helped JobGet revolutionize the job market for blue-collar workers by creating an AI-driven employment platform.</p>
              <button className="text-app-blue flex items-center hover:text-blue-400 transition-colors">
                Read Case Study <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-8 hover-scale transition-all">
              <h3 className="text-3xl font-bold text-white mb-4">Vyrb</h3>
              <p className="text-gray-300 mb-6">We developed Vyrb, an innovative AI-powered social media app that allows seamless audio messaging through Bluetooth wearables.</p>
              <button className="text-app-blue flex items-center hover:text-blue-400 transition-colors">
                Read Case Study <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* What Makes Appinventiv Your Ideal AI Partner */}
      <section className="py-20 bg-app-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="p-8 bg-gradient-to-r from-blue-900 to-app-blue rounded-lg mb-8">
                <img 
                  src="https://via.placeholder.com/100" 
                  alt="Partnership icon" 
                  className="w-24 h-24 mb-6"
                />
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                What Makes Appinventiv Your Ideal AI Services and Solutions Partner?
              </h2>
            </div>
            
            <div>
              <p className="text-lg text-gray-300 mb-8">
                As a premium AI services company, we can be your ideal tech partner for offering tailored artificial intelligence services and solutions. 
                Our unmatched AI expertise, innovation, and commitment to excellence ensure that your custom AI solutions are strategically developed 
                and deliver exceptional results.
              </p>
              
              <div className="space-y-6">
                <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors">
                  <h3 className="text-xl font-semibold text-white mb-2">01/ Comprehensive and Tailored AI Services</h3>
                  <p className="text-gray-400">
                    Our holistic approach integrates all aspects of AI specifically to your custom business needs, from artificial intelligence consulting 
                    and development to deployment and maintenance.
                  </p>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors">
                  <h3 className="text-xl font-semibold text-white mb-2">02/ Compliance-First Approach</h3>
                  <p className="text-gray-400">
                    We prioritize regulatory compliance and ethical considerations in all our AI implementations.
                  </p>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors">
                  <h3 className="text-xl font-semibold text-white mb-2">03/ Innovation-Inclusive Culture</h3>
                  <p className="text-gray-400">
                    Our team constantly explores cutting-edge AI techniques to provide innovative solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* AI Solution Development Roadmap */}
      <section className="py-20 bg-gradient-to-b from-app-dark to-app-darker">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              AI Solution Development Roadmap We Offer
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Implementing AI in business requires a structured approach to ensure seamless integration, reliability, and measurable outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-all">
              <div className="text-app-blue mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Analyze Business Needs</h3>
              <p className="text-gray-300">
                First, we assess your business needs and existing tech ecosystem to determine if AI-driven solutions are the right investment.
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-all">
              <div className="text-app-blue mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Evaluate Data Sources</h3>
              <p className="text-gray-300">
                Next, we explore and evaluate data sources, including corporate assets and public databases for AI model development.
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-all">
              <div className="text-app-blue mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Design the Product</h3>
              <p className="text-gray-300">
                We choose the best tech stack, craft the product's architecture, and outline an implementation plan.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tech Stack Section */}
      <section className="py-20 bg-app-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              AI Tech Stack Cluster We Use for Intelligent Model Development
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our custom AI solutions for businesses are meticulously crafted using an ideal technology stack tailored to meet every requirement of your business.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Python", "Big Data", "Machine Learning", "ETL", 
              "Databricks", "OpenCV", "Scikit-learn", "Pandas", 
              "Tableau", "Tensorflow", "Grafana", "Azure"].map((tech, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition-all hover:-translate-y-1">
                <div className="text-app-blue mb-4">
                  <div className="w-12 h-12 bg-blue-900/30 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-xl font-bold">{tech.charAt(0)}</span>
                  </div>
                </div>
                <h3 className="text-white font-medium">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-app-dark to-app-darker">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-4">What is AI as a Service (AIaaS)?</h3>
              <p className="text-gray-300">
                AI as a Service (AIaaS) allows businesses to leverage the power of artificial intelligence solutions through cloud-based platforms. 
                It empowers organizations to access and implement AI technologies without requiring extensive resources to build an AI system from scratch.
              </p>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-4">How much does it cost to build a custom AI solution?</h3>
              <p className="text-gray-300">
                The cost varies depending on the complexity, scope, and specific requirements of your AI project. Contact us for a detailed quote tailored to your needs.
              </p>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-4">Why does your business need AI services and solutions?</h3>
              <p className="text-gray-300">
                AI services can significantly enhance your operational efficiency, provide data-driven insights, automate repetitive tasks, improve customer experiences, and give you a competitive edge in your industry.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-block bg-gray-900 p-8 rounded-lg">
              <div className="mb-4">
                <div className="w-16 h-16 bg-blue-900/30 rounded-full mx-auto flex items-center justify-center text-app-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Have A Query Specific To Your Business?</h3>
              <button className="bg-app-blue text-white px-6 py-3 rounded-md hover:bg-blue-600 hover:scale-105 transition-all">
                Consult Our AI Experts
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <ChatIcon />
    </>
  );
};

export default LetsTalkAI;
