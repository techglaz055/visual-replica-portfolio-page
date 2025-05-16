import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import TopBanner from '../components/TopBanner';
import ChatIcon from '../components/ChatIcon';
import { ArrowRight, Play } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

const LetsTalkAI = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeTab, setActiveTab] = useState('aiConsulting');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Function to play video
  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsVideoPlaying(true);
      } else {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
    }
  };

  // Ensure video plays on load
  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(e => console.log("Video autoplay was prevented:", e));
      }
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <TopBanner />
      <Navbar />
      
      {/* Hero Section with Video Background */}
      <section className="relative pt-28 pb-20 min-h-screen flex items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            ref={videoRef}
            autoPlay 
            loop 
            muted 
            playsInline
            className="object-cover w-full h-full opacity-30"
          >
            <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-app-darker to-app-dark opacity-80"></div>
          
          {/* Play Button Overlay */}
          <button 
            onClick={handlePlayVideo} 
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-app-blue bg-opacity-80 rounded-full p-4 transition-all hover:scale-110 ${isVideoPlaying ? 'opacity-0' : 'opacity-100'}`}
            aria-label="Play video"
          >
            <Play className="h-8 w-8 text-white" />
          </button>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 max-w-4xl animate-fade-in">
            Empowering Autonomous Growth With Time-Tested AI Services and Solutions
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mb-12 animate-fade-in">
            Unlock new potential and upgrade existing business capabilities with AI services that streamline operations,
            elevate customer experiences, and drive innovation.
          </p>
          
          <button className="bg-app-blue text-white px-8 py-4 rounded-md hover:bg-blue-600 hover:scale-105 transition-all flex items-center gap-2 animate-fade-in group">
            Consult Our AI Experts
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
      
      {/* Scale Smarter Section - Redesigned with Tabs/Toggle as per reference */}
      <section className="py-20 bg-gradient-to-b from-app-dark to-app-darker">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-6">
            Scale Smarter With Our Suite of Artificial Intelligence Services and Solutions
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mb-16">
            Explore our comprehensive suite of AI services designed to drive profitable innovations and deliver tangible outcomes. From consulting to development and
            beyond, our extensive artificial intelligence services and solutions are tailored to meet unique business needs in any industry.
          </p>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left sidebar for service navigation */}
            <div className="md:w-1/4">
              <div className="bg-gray-900 p-4 rounded-lg">
                <h3 className="text-white text-xl mb-6 font-medium">AI Services</h3>
                
                <ToggleGroup type="single" value={activeTab} onValueChange={(val) => val && setActiveTab(val)} className="flex flex-col space-y-1">
                  <ToggleGroupItem value="aiConsulting" className={`justify-start ${activeTab === 'aiConsulting' ? 'bg-app-blue text-white' : 'bg-transparent text-gray-300'} hover:bg-gray-800`}>
                    <div className="flex items-center">
                      <span className="text-app-blue bg-blue-900/30 rounded-full p-1 mr-3">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                      <span>AI Consulting</span>
                    </div>
                  </ToggleGroupItem>
                  
                  <ToggleGroupItem value="aiDevelopment" className={`justify-start ${activeTab === 'aiDevelopment' ? 'bg-app-blue text-white' : 'bg-transparent text-gray-300'} hover:bg-gray-800`}>
                    <div className="flex items-center">
                      <span className="text-app-blue bg-blue-900/30 rounded-full p-1 mr-3">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                      <span>AI Development</span>
                    </div>
                  </ToggleGroupItem>
                  
                  <ToggleGroupItem value="generativeAIConsulting" className={`justify-start ${activeTab === 'generativeAIConsulting' ? 'bg-app-blue text-white' : 'bg-transparent text-gray-300'} hover:bg-gray-800`}>
                    <div className="flex items-center">
                      <span className="text-app-blue bg-blue-900/30 rounded-full p-1 mr-3">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                      <span>Generative AI Consulting</span>
                    </div>
                  </ToggleGroupItem>
                  
                  <ToggleGroupItem value="generativeAIDevelopment" className={`justify-start ${activeTab === 'generativeAIDevelopment' ? 'bg-app-blue text-white' : 'bg-transparent text-gray-300'} hover:bg-gray-800`}>
                    <div className="flex items-center">
                      <span className="text-app-blue bg-blue-900/30 rounded-full p-1 mr-3">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                      <span>Generative AI Development</span>
                    </div>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
            
            {/* Right content area for service details */}
            <div className="md:w-3/4">
              {/* AI Consulting Content */}
              {activeTab === 'aiConsulting' && (
                <div className="space-y-8 animate-fade-in">
                  <h3 className="text-2xl font-bold text-white mb-4">Business Applications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all">
                      <div className="text-app-blue mb-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                        <h4 className="text-white text-lg font-semibold ml-3">Custom Roadmaps Creation</h4>
                      </div>
                      <p className="text-gray-300">
                        Develop tailored AI implementation strategies aligned with your business objectives and technological readiness.
                      </p>
                    </div>
                    
                    <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all">
                      <div className="text-app-blue mb-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                        <h4 className="text-white text-lg font-semibold ml-3">Identification of AI-Driven Automation</h4>
                      </div>
                      <p className="text-gray-300">
                        Identify processes that can benefit from AI automation to increase efficiency and reduce operational costs.
                      </p>
                    </div>
                    
                    <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all">
                      <div className="text-app-blue mb-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <h4 className="text-white text-lg font-semibold ml-3">AI Governance and Compliance</h4>
                      </div>
                      <p className="text-gray-300">
                        Establish frameworks for responsible AI use, ensuring compliance with regulations and ethical guidelines.
                      </p>
                    </div>
                    
                    <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all">
                      <div className="text-app-blue mb-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                        <h4 className="text-white text-lg font-semibold ml-3">AI Ethics and Frameworks</h4>
                      </div>
                      <p className="text-gray-300">
                        Implement responsible AI frameworks that balance innovation with ethical considerations and societal impact.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <span className="text-app-blue mr-2">// </span>Our Offerings
                    </h3>
                    <p className="text-gray-300">
                      Leverage our strategic AI consulting services to uncover new possibilities and craft a roadmap for success. 
                      As a leading AI consulting company, we help businesses understand the potential of artificial intelligence 
                      and provide guidance on implementation strategies that drive tangible results.
                    </p>
                  </div>
                </div>
              )}
              
              {/* AI Development Content - Add similar blocks for other tabs */}
              {activeTab === 'aiDevelopment' && (
                <div className="space-y-8 animate-fade-in">
                  <h3 className="text-2xl font-bold text-white mb-4">AI Development Solutions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all">
                      <div className="text-app-blue mb-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        <h4 className="text-white text-lg font-semibold ml-3">Custom AI Models</h4>
                      </div>
                      <p className="text-gray-300">
                        Build and train custom AI models tailored to your specific business needs and data requirements.
                      </p>
                    </div>
                    
                    <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all">
                      <div className="text-app-blue mb-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <h4 className="text-white text-lg font-semibold ml-3">Predictive Analytics Systems</h4>
                      </div>
                      <p className="text-gray-300">
                        Deploy AI systems that analyze patterns and predict future outcomes with remarkable accuracy.
                      </p>
                    </div>
                    
                    <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all">
                      <div className="text-app-blue mb-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <h4 className="text-white text-lg font-semibold ml-3">Natural Language Processing</h4>
                      </div>
                      <p className="text-gray-300">
                        Create systems that understand, interpret, and generate human language for improved customer interactions.
                      </p>
                    </div>
                    
                    <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all">
                      <div className="text-app-blue mb-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <h4 className="text-white text-lg font-semibold ml-3">Computer Vision Solutions</h4>
                      </div>
                      <p className="text-gray-300">
                        Implement systems that can analyze, understand, and process visual information from the world.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Generative AI Consulting Content */}
              {activeTab === 'generativeAIConsulting' && (
                <div className="space-y-8 animate-fade-in">
                  <h3 className="text-2xl font-bold text-white mb-4">Generative AI Consulting</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all">
                      <div className="text-app-blue mb-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        <h4 className="text-white text-lg font-semibold ml-3">Gen AI Opportunity Assessment</h4>
                      </div>
                      <p className="text-gray-300">
                        Identify opportunities where generative AI can create value in your products, services, and operations.
                      </p>
                    </div>
                    
                    <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all">
                      <div className="text-app-blue mb-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                        <h4 className="text-white text-lg font-semibold ml-3">LLM Implementation Strategy</h4>
                      </div>
                      <p className="text-gray-300">
                        Develop strategies for effectively implementing large language models in your business processes.
                      </p>
                    </div>
                    
                    <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all">
                      <div className="text-app-blue mb-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                        </svg>
                        <h4 className="text-white text-lg font-semibold ml-3">Generative Content Strategy</h4>
                      </div>
                      <p className="text-gray-300">
                        Create strategies for leveraging generative AI in content creation, marketing, and customer engagement.
                      </p>
                    </div>
                    
                    <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all">
                      <div className="text-app-blue mb-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        <h4 className="text-white text-lg font-semibold ml-3">Gen AI Quality Assurance</h4>
                      </div>
                      <p className="text-gray-300">
                        Establish frameworks for ensuring generative AI outputs meet quality standards and align with brand values.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Generative AI Development Content */}
              {activeTab === 'generativeAIDevelopment' && (
                <div className="space-y-8 animate-fade-in">
                  <h3 className="text-2xl font-bold text-white mb-4">Generative AI Development</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all">
                      <div className="text-app-blue mb-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <h4 className="text-white text-lg font-semibold ml-3">Custom LLM Development</h4>
                      </div>
                      <p className="text-gray-300">
                        Create and fine-tune large language models specifically for your industry and use cases.
                      </p>
                    </div>
                    
                    <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all">
                      <div className="text-app-blue mb-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <h4 className="text-white text-lg font-semibold ml-3">AI Content Generation Systems</h4>
                      </div>
                      <p className="text-gray-300">
                        Build systems that automatically generate content for marketing, product descriptions, and communications.
                      </p>
                    </div>
                    
                    <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all">
                      <div className="text-app-blue mb-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <h4 className="text-white text-lg font-semibold ml-3">Gen AI Image & Video Creation</h4>
                      </div>
                      <p className="text-gray-300">
                        Implement systems for generating visual content that aligns with your brand and messaging.
                      </p>
                    </div>
                    
                    <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all">
                      <div className="text-app-blue mb-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                        <h4 className="text-white text-lg font-semibold ml-3">AI Assistants & Chatbots</h4>
                      </div>
                      <p className="text-gray-300">
                        Develop sophisticated conversational agents powered by generative AI for customer support and engagement.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* What Makes Appinventiv Your Ideal AI Partner */}
      <section className="py-20 bg-app-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="p-8 bg-gradient-to-r from-blue-900 to-app-blue rounded-lg mb-8 shadow-lg transform hover:scale-105 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
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
              
              {/* AI Partner Features */}
              <div className="space-y-6">
                <Accordion type="single" collapsible className="border-none">
                  <AccordionItem value="item-1" className="border-none">
                    <AccordionTrigger className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors text-white">
                      <div className="text-left">
                        <h3 className="text-xl font-semibold flex items-center">
                          01/ Comprehensive and Tailored AI Services
                        </h3>
                        <p className="text-gray-400 text-sm font-normal mt-1">
                          Our holistic approach integrates all aspects of AI specifically to your custom business needs.
                        </p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="bg-gray-800 mt-2 p-6 rounded-lg text-gray-300">
                      <p>Our holistic approach integrates all aspects of AI specifically to your custom business needs, from artificial intelligence consulting 
                      and development to deployment and maintenance. We provide end-to-end custom AI technology solutions that align with your business goals and prevent
                      redundant capability development.</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2" className="border-none mt-4">
                    <AccordionTrigger className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors text-white">
                      <div className="text-left">
                        <h3 className="text-xl font-semibold flex items-center">
                          02/ Compliance-First Approach
                        </h3>
                        <p className="text-gray-400 text-sm font-normal mt-1">
                          We prioritize regulatory compliance and ethical considerations in all our AI implementations.
                        </p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="bg-gray-800 mt-2 p-6 rounded-lg text-gray-300">
                      <p>Our AI solutions adhere to all relevant regulations and ethical guidelines, ensuring your business remains compliant while leveraging 
                      cutting-edge technology. We implement governance frameworks for responsible AI adoption and usage that protect user privacy and ensure fair, 
                      transparent systems.</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3" className="border-none mt-4">
                    <AccordionTrigger className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors text-white">
                      <div className="text-left">
                        <h3 className="text-xl font-semibold flex items-center">
                          03/ Innovation-Inclusive Culture
                        </h3>
                        <p className="text-gray-400 text-sm font-normal mt-1">
                          Our team constantly explores cutting-edge AI techniques to provide innovative solutions.
                        </p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="bg-gray-800 mt-2 p-6 rounded-lg text-gray-300">
                      <p>We foster a culture of continuous learning and experimentation, ensuring our AI solutions leverage the latest advancements in the field for 
                      maximum business impact. Our dedicated research team continuously explores emerging AI technologies and methodologies to keep your solutions 
                      at the forefront of innovation.</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4" className="border-none mt-4">
                    <AccordionTrigger className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors text-white">
                      <div className="text-left">
                        <h3 className="text-xl font-semibold flex items-center">
                          04/ Proven Track Record
                        </h3>
                        <p className="text-gray-400 text-sm font-normal mt-1">
                          Our portfolio showcases successful AI implementations across diverse industries.
                        </p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="bg-gray-800 mt-2 p-6 rounded-lg text-gray-300">
                      <p>With a proven history of delivering successful AI solutions across various industries, we bring practical experience and deep understanding 
                      of industry-specific challenges. Our case studies demonstrate how we've helped businesses transform operations, enhance customer experiences, 
                      and drive growth through strategic AI implementation.</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5" className="border-none mt-4">
                    <AccordionTrigger className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors text-white">
                      <div className="text-left">
                        <h3 className="text-xl font-semibold flex items-center">
                          05/ In-House AI Accelerator
                        </h3>
                        <p className="text-gray-400 text-sm font-normal mt-1">
                          Our dedicated AI lab rapidly prototypes and tests innovative solutions.
                        </p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="bg-gray-800 mt-2 p-6 rounded-lg text-gray-300">
                      <p>Our specialized in-house AI accelerator team focuses exclusively on exploring new possibilities in artificial intelligence and 
                      machine learning. This dedicated resource allows us to quickly prototype, test, and refine cutting-edge solutions that address your 
                      specific business challenges, reducing time-to-market for your AI initiatives.</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
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
            <div className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-all transform hover:-translate-y-2">
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
            
            <div className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-all transform hover:-translate-y-2">
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
            
            <div className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-all transform hover:-translate-y-2">
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
            {[
              { name: "Python", icon: "🐍", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" },
              { name: "Big Data", icon: "📊", logoUrl: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png" },
              { name: "Machine Learning", icon: "🧠", logoUrl: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png" },
              { name: "ETL", icon: "🔄", logoUrl: "https://cdn-icons-png.flaticon.com/512/6358/6358697.png" },
              { name: "Databricks", icon: "⚡", logoUrl: "https://www.databricks.com/wp-content/uploads/2021/10/db-nav-logo.svg" },
              { name: "OpenCV", icon: "👁️", logoUrl: "https://opencv.org/wp-content/uploads/2022/05/logo.png" },
              { name: "Scikit-learn", icon: "🔬", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1200px-Scikit_learn_logo_small.svg.png" },
              { name: "Pandas", icon: "🐼", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/1200px-Pandas_logo.svg.png" },
              { name: "Tableau", icon: "📈", logoUrl: "https://www.tableau.com/sites/default/files/2022-04/TableauLogo_RGB.png" },
              { name: "Tensorflow", icon: "📱", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1915px-Tensorflow_logo.svg.png" },
              { name: "Grafana", icon: "📊", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Grafana_icon.svg/1969px-Grafana_icon.svg.png" },
              { name: "Azure", icon: "☁️", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png" }
            ].map((tech, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition-all hover:-translate-y-1">
                <div className="text-app-blue mb-4">
                  <div className="w-12 h-12 bg-blue-900/30 rounded-full mx-auto flex items-center justify-center overflow-hidden">
                    <img src={tech.logoUrl} alt={tech.name} className="max-w-full max-h-full object-contain p-1" />
                  </div>
                </div>
                <h3 className="text-white font-medium">{tech.name}</h3>
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
            <Card className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-colors">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-white mb-4">What is AI as a Service (AIaaS)?</h3>
                <p className="text-gray-300">
                  AI as a Service (AIaaS) allows businesses to leverage the power of artificial intelligence solutions through cloud-based platforms. 
                  It empowers organizations to access and implement AI technologies without requiring extensive resources to build an AI system from scratch.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-colors">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-white mb-4">How much does it cost to build a custom AI solution?</h3>
                <p className="text-gray-300">
                  The cost varies depending on the complexity, scope, and specific requirements of your AI project. Contact us for a detailed quote tailored to your needs.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-colors">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-white mb-4">Why does your business need AI services and solutions?</h3>
                <p className="text-gray-300">
                  AI services can significantly enhance your operational efficiency, provide data-driven insights, automate repetitive tasks, improve customer experiences, and give you a competitive edge in your industry.
                </p>
              </CardContent>
            </Card>
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
              <button className="bg-app-blue text-white px-6 py-3 rounded-md hover:bg-blue-600 hover:scale-105 transition-all group">
                Consult Our AI Experts <ArrowRight size={18} className="inline ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Blogs Section */}
      <section className="py-20 bg-app-dark">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Related Blogs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 overflow-hidden rounded-lg hover:bg-gray-800 transition-all transform hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop" 
                alt="AI consultants" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Hire AI Consultants for Your Business and How to Find the Perfect Fit</h3>
                <a href="#" className="text-app-blue flex items-center text-sm hover:text-blue-400 transition-colors group">
                  Read more <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            
            <div className="bg-gray-900 overflow-hidden rounded-lg hover:bg-gray-800 transition-all transform hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2070&auto=format&fit=crop" 
                alt="AI developer" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">How to Hire the Best AI Developer for Your Custom Project? Steps, Costs, and More</h3>
                <a href="#" className="text-app-blue flex items-center text-sm hover:text-blue-400 transition-colors group">
                  Read more <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            
            <div className="bg-gray-900 overflow-hidden rounded-lg hover:bg-gray-800 transition-all transform hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
                alt="AI business ideas" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">The Most Profitable AI Business Ideas for 2025: Complete Guide</h3>
                <a href="#" className="text-app-blue flex items-center text-sm hover:text-blue-400 transition-colors group">
                  Read more <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Office Locations Section */}
      <section className="py-20 bg-gradient-to-b from-app-dark to-app-darker">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Global Presence</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="mb-6">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/3787/3787184.png" 
                  alt="India" 
                  className="h-16 mx-auto opacity-70"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">INDIA</h3>
              <p className="text-gray-300">
                B-25, Sector 58,<br />
                Noida- 201301,<br />
                Delhi - NCR, India
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-6">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/4830/4830731.png" 
                  alt="USA" 
                  className="h-16 mx-auto opacity-70"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">USA</h3>
              <p className="text-gray-300">
                79, Madison Ave<br />
                Manhattan, NY 10001,<br />
                USA
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-6">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/323/323367.png" 
                  alt="Australia" 
                  className="h-16 mx-auto opacity-70"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Australia</h3>
              <p className="text-gray-300">
                Appinventiv Australia,<br />
                East Brisbane<br />
                QLD 4169, Australia
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-6">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/197/197374.png" 
                  alt="UK" 
                  className="h-16 mx-auto opacity-70"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">UK</h3>
              <p className="text-gray-300">
                3rd Floor, 86-90<br />
                Paul Street EC2A 4NE<br />
                London, UK
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-6">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/4855/4855448.png" 
                  alt="UAE" 
                  className="h-16 mx-auto opacity-70"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">UAE</h3>
              <p className="text-gray-300">
                Tiger Al Yarmook Building,<br />
                13th floor B-block<br />
                Al Nahda St - Sharjah
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-6">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/197/197430.png" 
                  alt="CANADA" 
                  className="h-16 mx-auto opacity-70"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">CANADA</h3>
              <p className="text-gray-300">
                Suite 3810, Bankers Hall West,<br />
                888 - 3rd Street Sw<br />
                Calgary Alberta
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Awards Section */}
      <section className="py-20 bg-app-dark">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-6 text-center">The Critics Responded Well To Our Commitment To Excellence</h2>
          <p className="text-center text-gray-300 max-w-4xl mx-auto mb-12">
            We have bagged multiple industry awards and global recognitions, which reflect our dedication to drive success and
            set us apart as a trusted AI consultancy company and development partner.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-all">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Clutch.co_logo.svg/1200px-Clutch.co_logo.svg.png" 
                alt="Clutch award" 
                className="h-20 w-auto object-contain"
              />
              <p className="text-white text-sm font-bold mt-2 text-center">Fastest Growth</p>
            </div>
            
            <div className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-all">
              <img 
                src="https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=1470&auto=format&fit=crop" 
                alt="Business award" 
                className="h-20 w-auto object-cover rounded"
              />
              <p className="text-white text-sm font-bold mt-2 text-center">Featured On Business/Apps</p>
            </div>
            
            <div className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-all">
              <img 
                src="https://images.unsplash.com/photo-1579869847514-7c1a19d2d2ad?q=80&w=1634&auto=format&fit=crop" 
                alt="Mobile app award" 
                className="h-20 w-auto object-cover rounded"
              />
              <p className="text-white text-sm font-bold mt-2 text-center">Mobile App Development</p>
            </div>
            
            <div className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-all">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop" 
                alt="Software award" 
                className="h-20 w-auto object-cover rounded"
              />
              <p className="text-white text-sm font-bold mt-2 text-center">Top Software Development</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer Note - Replace with your existing footer if needed */}
      <section className="py-12 bg-app-darker border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500">
            © 2025-2026 (c) Appinventiv | All Rights Reserved
          </p>
        </div>
      </section>
      
      <ChatIcon />
    </>
  );
};

export default LetsTalkAI;
