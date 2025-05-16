
import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import ChatWidget from '../components/ChatWidget';
import TopBanner from '../components/TopBanner';
import StatsCard from '../components/StatsCard';
import CaseStudy from '../components/CaseStudy';
import ClientTestimonial from '../components/ClientTestimonial';
import ServicesSection from '../components/ServicesSection';
import PartnersSection from '../components/PartnersSection';
import AwardsSection from '../components/AwardsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import IndustriesSection from '../components/IndustriesSection';
import TechStackSection from '../components/TechStackSection';
import StrategicPartnerships from '../components/StrategicPartnerships';
import ContactForm from '../components/ContactForm';
import FAQSection from '../components/FAQSection';
import LocationsSection from '../components/LocationsSection';
import FooterMenu from '../components/FooterMenu';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video play error:", error);
      });
    }
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
            className="object-cover w-full h-full opacity-40"
          >
            <source src="https://cdn.dribbble.com/users/1030568/screenshots/7121868/media/fcbc48289eb63dff1bad44e17c842ef1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-app-darker to-app-dark opacity-80"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-blue-500 text-white px-3 py-1 rounded-full inline-block mb-4 animate-fade-in">
            Uncover proof of Appinventiv's impact across 3000+ digital deliveries for 35+ industries.
            <a href="/lets-talk-ai" className="ml-2 font-medium hover:underline transition-all group">
              Explore Now <ArrowRight size={14} className="inline ml-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 max-w-4xl animate-fade-in">
            Meet The Digital Drivers Of Global Disruptors
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mb-12 animate-fade-in">
            We catalyze business growth by reimagining digital experiences that 
            conquer complex challenges through innovation and agility.
          </p>
          
          <button className="bg-app-blue text-white px-8 py-4 rounded-md hover:bg-blue-600 hover:scale-105 transition-all flex items-center gap-2 animate-fade-in group">
            Consult Our Experts
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
      
      {/* Client Logos */}
      <section className="py-8 bg-app-dark border-t border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            <div className="text-center hover:scale-110 transition-all">
              <div className="text-white opacity-70 font-semibold">Clutch 100</div>
            </div>
            <div className="text-center hover:scale-110 transition-all">
              <div className="text-white opacity-70 font-semibold">Deloitte 50</div>
            </div>
            <div className="text-center hover:scale-110 transition-all">
              <div className="text-white opacity-70 font-semibold">Entrepreneur</div>
            </div>
            <div className="text-center hover:scale-110 transition-all">
              <div className="text-white opacity-70 font-semibold">India's Growth Champions</div>
            </div>
            <div className="text-center hover:scale-110 transition-all">
              <div className="text-white opacity-70 font-semibold">Business Awards</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Transforming Business Section */}
      <section className="py-20 bg-app-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transforming Businesses With Technology That Transcends Geographies And Platforms
              </h2>
            </div>
            <div className="animate-fade-in">
              <p className="text-lg text-gray-300">
                Appinventiv is one of the world's largest IT service providers helping 
                companies redefine their digital possibilities for nearly a decade now. With 
                our team of 1600+ tech evangelists, we are building the digital infrastructure 
                of our clients positioning them to be the market leaders of their respective 
                industries.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-app-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatsCard
              number="35+"
              title="Industries Mastered"
              description="With our agility & engineering expertise, we equip your critical business functions with customized tech, and expand digital capabilities."
            />
            <StatsCard
              number="1600+"
              title="Tech Evangelists"
              description="We are a dynamic team of technology enthusiasts and experts passionately driven to achieve the best results for our clients."
            />
            <StatsCard
              number="3000+"
              title="Solutions Designed And Delivered"
              description="We have empowered businesses with thousands of successful futuristic solutions that have helped them grow and scale."
            />
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-8 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-800 transition-colors">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Ready to innovate and drive an impact?</h3>
              </div>
              <div className="flex justify-end">
                <button className="bg-app-blue text-white px-6 py-3 rounded-md hover:bg-blue-600 hover:scale-105 transition-all group">
                  Partner With Us <ArrowRight size={18} className="inline ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Study Section with Adidas Image */}
      <CaseStudy
        title="Adidas"
        subtitle="Scores the perfect digital landing in UAE"
        metrics={[
          {
            label: "App downloads",
            value: "2M+",
            description: "App downloads"
          },
          {
            label: "New users",
            value: "500K",
            description: "New users acquired"
          }
        ]}
        imageSrc="/lovable-uploads/585eaf11-ce37-415d-9f00-9a4c0ed4ca13.png"
      />
      
      {/* Client Testimonial Videos Section */}
      <ClientTestimonial />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Partners Section */}
      <PartnersSection />
      
      {/* Awards Section */}
      <AwardsSection />
      
      {/* Client Testimonials Section */}
      <TestimonialsSection />
      
      {/* Industries Section */}
      <IndustriesSection />
      
      {/* Tech Stack Section */}
      <TechStackSection />
      
      {/* Strategic Partnerships */}
      <StrategicPartnerships />
      
      {/* Contact Form */}
      <ContactForm />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Locations Section */}
      <LocationsSection />
      
      {/* Footer Menu */}
      <FooterMenu />
      
      {/* Chat Widget (replaces static ChatIcon) */}
      <ChatWidget />
    </>
  );
};

export default Index;
