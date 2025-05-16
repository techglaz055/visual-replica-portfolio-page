
import React from 'react';
import { Input } from '@/components/ui/input';

const ContactForm = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 via-blue-900 to-teal-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in">
              Our Technology Experts Are Change Catalysts
            </h2>
            <p className="text-xl text-gray-200 mb-8 animate-fade-in">
              Discover how our team of experts can elevate your business with cutting-edge technology solutions customized to your unique needs.
            </p>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-lg animate-fade-in">
            <form className="space-y-6">
              <div>
                <Input 
                  type="text" 
                  placeholder="Full Name" 
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="E-mail ID*" 
                  required
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
              <div>
                <Input 
                  type="tel" 
                  placeholder="Contact Number*" 
                  required
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
              <div>
                <select className="w-full h-10 px-3 py-2 text-base bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-app-blue focus:border-transparent">
                  <option value="" disabled selected>Select a Budget Range</option>
                  <option value="under10k">Under $10,000</option>
                  <option value="10k-50k">$10,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="over100k">Over $100,000</option>
                </select>
              </div>
              <button 
                type="submit" 
                className="w-full bg-app-blue text-white px-6 py-3 rounded-md hover:bg-blue-600 hover:scale-105 transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
