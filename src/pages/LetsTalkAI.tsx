
import React from 'react';
import Navbar from '../components/Navbar';
import TopBanner from '../components/TopBanner';
import ChatIcon from '../components/ChatIcon';
import { ArrowRight, ChevronDown, Play } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../components/ui/hover-card';
import { Card, CardContent } from '../components/ui/card';

const LetsTalkAI = () => {
  return (
    <>
      <TopBanner />
      <Navbar />
      
      {/* Hero Section with Video Background */}
      <section className="relative pt-28 pb-20 min-h-screen flex items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            className="object-cover w-full h-full opacity-30"
          >
            <source src="https://cdn.dribbble.com/users/2973561/screenshots/5727211/focus-labs-dribbble.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-app-darker to-app-dark opacity-80"></div>
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
          
          <Carousel className="max-w-5xl mx-auto">
            <CarouselContent>
              {/* Case Study 1 */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <div className="rounded-lg overflow-hidden hover-scale bg-gray-800">
                    <img 
                      src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071&auto=format&fit=crop" 
                      alt="Budget management tool" 
                      className="w-full h-48 object-cover mb-4" 
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-white mb-2">Mudra</h3>
                      <p className="text-gray-300 mb-4">
                        We utilized AI to develop a chatbot-driven budget management tool, enabling users to track their spending effortlessly.
                      </p>
                      <div className="text-sm text-gray-400 mb-2">
                        <span className="block font-bold text-blue-400 text-lg">12+</span>
                        Countries Launched the Solution
                      </div>
                      <button className="text-app-blue flex items-center text-sm hover:text-blue-400 transition-colors group">
                        Read Case Study <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              
              {/* Case Study 2 */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <div className="rounded-lg overflow-hidden hover-scale bg-gray-800">
                    <img 
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
                      alt="JobGet platform" 
                      className="w-full h-48 object-cover mb-4" 
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-white mb-2">JobGet</h3>
                      <p className="text-gray-300 mb-4">
                        We helped JobGet revolutionize the job market for blue-collar workers by creating an AI-driven employment platform.
                      </p>
                      <div className="text-sm text-gray-400 mb-2">
                        <span className="block font-bold text-blue-400 text-lg">$52 Million</span>
                        Series B Funding Raised
                      </div>
                      <button className="text-app-blue flex items-center text-sm hover:text-blue-400 transition-colors group">
                        Read Case Study <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              
              {/* Case Study 3 */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <div className="rounded-lg overflow-hidden hover-scale bg-gray-800">
                    <img 
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop" 
                      alt="Vyrb social media app" 
                      className="w-full h-48 object-cover mb-4" 
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-white mb-2">Vyrb</h3>
                      <p className="text-gray-300 mb-4">
                        We developed Vyrb, an innovative AI-powered social media app that allows seamless audio messaging through Bluetooth wearables.
                      </p>
                      <div className="text-sm text-gray-400 mb-2">
                        <span className="block font-bold text-blue-400 text-lg">50k+</span>
                        App Downloads
                      </div>
                      <button className="text-app-blue flex items-center text-sm hover:text-blue-400 transition-colors group">
                        Read Case Study <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 hover:scale-110 bg-gray-800 border-none text-white" />
              <CarouselNext className="static translate-y-0 hover:scale-110 bg-gray-800 border-none text-white" />
            </div>
          </Carousel>
        </div>
      </section>
      
      {/* Scale Smarter Section */}
      <section className="py-20 bg-gradient-to-b from-app-dark to-app-darker">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-6">
            Scale Smarter With Our Suite of Artificial Intelligence Services and Solutions
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mb-16">
            Explore our comprehensive suite of AI services designed to drive profitable innovations and deliver tangible outcomes. From consulting to development and
            beyond, our extensive artificial intelligence services and solutions are tailored to meet unique business needs in any industry.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all transform hover:-translate-y-2">
              <div className="text-white w-12 h-12 bg-gradient-to-br from-blue-800 to-app-blue rounded-full flex items-center justify-center mb-4 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI Consulting</h3>
              <p className="text-gray-400">
                Expert guidance on AI strategy, implementation, and optimization for your business needs.
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all transform hover:-translate-y-2">
              <div className="text-white w-12 h-12 bg-gradient-to-br from-blue-800 to-app-blue rounded-full flex items-center justify-center mb-4 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI Development</h3>
              <p className="text-gray-400">
                Custom AI solution development with cutting-edge technologies and best practices.
              </p>
            </div>
            
            {/* Service 3 */}
            <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all transform hover:-translate-y-2">
              <div className="text-white w-12 h-12 bg-gradient-to-br from-blue-800 to-app-blue rounded-full flex items-center justify-center mb-4 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Generative AI Consulting</h3>
              <p className="text-gray-400">
                Leverage generative AI models to create innovative solutions for your business challenges.
              </p>
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
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
                      <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                        01/ Comprehensive and Tailored AI Services 
                        <ChevronDown className="ml-2 w-5 h-5 text-gray-400" />
                      </h3>
                      <p className="text-gray-400">
                        Our holistic approach integrates all aspects of AI specifically to your custom business needs.
                      </p>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-96 bg-gray-800 border-gray-700 text-white">
                    <div className="space-y-2">
                      <h4 className="font-medium">Comprehensive and Tailored AI Services</h4>
                      <p className="text-gray-300 text-sm">
                        Our holistic approach integrates all aspects of AI specifically to your custom business needs, from artificial intelligence consulting 
                        and development to deployment and maintenance.
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
                      <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                        02/ Compliance-First Approach 
                        <ChevronDown className="ml-2 w-5 h-5 text-gray-400" />
                      </h3>
                      <p className="text-gray-400">
                        We prioritize regulatory compliance and ethical considerations in all our AI implementations.
                      </p>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-96 bg-gray-800 border-gray-700 text-white">
                    <div className="space-y-2">
                      <h4 className="font-medium">Compliance-First Approach</h4>
                      <p className="text-gray-300 text-sm">
                        Our AI solutions adhere to all relevant regulations and ethical guidelines, ensuring your business remains compliant while leveraging 
                        cutting-edge technology.
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
                      <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                        03/ Innovation-Inclusive Culture 
                        <ChevronDown className="ml-2 w-5 h-5 text-gray-400" />
                      </h3>
                      <p className="text-gray-400">
                        Our team constantly explores cutting-edge AI techniques to provide innovative solutions.
                      </p>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-96 bg-gray-800 border-gray-700 text-white">
                    <div className="space-y-2">
                      <h4 className="font-medium">Innovation-Inclusive Culture</h4>
                      <p className="text-gray-300 text-sm">
                        We foster a culture of continuous learning and experimentation, ensuring our AI solutions leverage the latest advancements in the field for 
                        maximum business impact.
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
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
              { name: "Python", icon: "🐍" },
              { name: "Big Data", icon: "📊" },
              { name: "Machine Learning", icon: "🧠" },
              { name: "ETL", icon: "🔄" },
              { name: "Databricks", icon: "⚡" },
              { name: "OpenCV", icon: "👁️" },
              { name: "Scikit-learn", icon: "🔬" },
              { name: "Pandas", icon: "🐼" },
              { name: "Tableau", icon: "📈" },
              { name: "Tensorflow", icon: "📱" },
              { name: "Grafana", icon: "📊" },
              { name: "Azure", icon: "☁️" }
            ].map((tech, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition-all hover:-translate-y-1">
                <div className="text-app-blue mb-4">
                  <div className="w-12 h-12 bg-blue-900/30 rounded-full mx-auto flex items-center justify-center text-2xl">
                    {tech.icon}
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
      
      <ChatIcon />
    </>
  );
};

export default LetsTalkAI;
