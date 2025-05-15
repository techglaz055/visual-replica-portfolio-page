
import React from 'react';
import Navbar from '../components/Navbar';
import ChatIcon from '../components/ChatIcon';
import StatsCard from '../components/StatsCard';
import CaseStudy from '../components/CaseStudy';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 bg-gradient-to-b from-app-darker to-app-dark min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="bg-blue-500 text-white px-3 py-1 rounded-full inline-block mb-4">
            Uncover proof of Appinventiv's impact across 3000+ digital deliveries for 35+ industries.
            <a href="#" className="ml-2 font-medium">
              Explore Now &gt;
            </a>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 max-w-4xl">
            Meet The Digital Drivers Of Global Disruptors
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mb-12">
            We catalyze business growth by reimagining digital experiences that 
            conquer complex challenges through innovation and agility.
          </p>
          
          <button className="bg-app-blue text-white px-8 py-4 rounded-md hover:bg-blue-600 transition-colors flex items-center gap-2">
            Consult Our Experts
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
      
      {/* Client Logos */}
      <section className="py-8 bg-app-dark border-t border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            <div className="text-center">
              <div className="text-white opacity-70 font-semibold">Clutch 100</div>
            </div>
            <div className="text-center">
              <div className="text-white opacity-70 font-semibold">Deloitte 50</div>
            </div>
            <div className="text-center">
              <div className="text-white opacity-70 font-semibold">Entrepreneur</div>
            </div>
            <div className="text-center">
              <div className="text-white opacity-70 font-semibold">India's Growth Champions</div>
            </div>
            <div className="text-center">
              <div className="text-white opacity-70 font-semibold">Business Awards</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Transforming Business Section */}
      <section className="py-20 bg-app-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transforming Businesses With Technology That Transcends Geographies And Platforms
              </h2>
            </div>
            <div>
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
          
          <div className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Ready to innovate and drive an impact?</h3>
              </div>
              <div className="flex justify-end">
                <button className="bg-app-blue text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors">
                  Partner With Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Study Section */}
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
      />
      
      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-r from-app-darker to-app-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-white mb-10">Let's Spark A Transformative Conversation</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white rounded-full p-1 mt-1">
                    <div className="bg-app-blue rounded-full w-5 h-5 flex items-center justify-center text-white">✓</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">Get A Consultation</h3>
                    <p className="text-gray-300">
                      Discuss your project idea with our AI solutions provider to know the intricacies of your project.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white rounded-full p-1 mt-1">
                    <div className="bg-app-blue rounded-full w-5 h-5 flex items-center justify-center text-white">✓</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">Get A Quotation</h3>
                    <p className="text-gray-300">
                      Based on your project, we will share a proposal for cost and timeline estimates.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white rounded-full p-1 mt-1">
                    <div className="bg-app-blue rounded-full w-5 h-5 flex items-center justify-center text-white">✓</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">Project Kickoff</h3>
                    <p className="text-gray-300">
                      Sign the contract and form a partnership with us to kick-start your project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-8">
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-3 border-b border-gray-300 focus:border-app-blue outline-none"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email*"
                    className="w-full p-3 border-b border-gray-300 focus:border-app-blue outline-none"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Contact Number*"
                    className="w-full p-3 border-b border-gray-300 focus:border-app-blue outline-none"
                    required
                  />
                </div>
                <div>
                  <select
                    className="w-full p-3 border-b border-gray-300 focus:border-app-blue outline-none"
                  >
                    <option value="">Select a Budget Range</option>
                    <option value="0-10k">$0 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k+">$100,000+</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Describe Your Project/Idea In Brief (Helps Us Come Back Better Prepared)"
                    rows={4}
                    className="w-full p-3 border-b border-gray-300 focus:border-app-blue outline-none resize-none"
                  ></textarea>
                </div>
                
                <div className="flex items-center gap-3">
                  <p className="text-gray-600">2 + 3 = </p>
                  <input
                    type="text"
                    className="w-20 p-2 border-b border-gray-300 focus:border-app-blue outline-none"
                  />
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-app-blue text-white py-3 rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Schedule Free Consultation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <ChatIcon />
    </>
  );
};

export default Index;
