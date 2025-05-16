
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What mobile app development services do you offer?',
    answer: 'We offer end-to-end mobile app development services including iOS and Android native apps, cross-platform development, UI/UX design, backend development, app testing, and ongoing maintenance and support.'
  },
  {
    question: 'What software development services do you offer?',
    answer: 'Our software development services include custom software development, web application development, enterprise software solutions, API development and integration, legacy system modernization, and cloud-native application development.'
  },
  {
    question: 'What is the average cost and timeline for developing a mobile app?',
    answer: 'The cost and timeline for mobile app development varies based on complexity, features, platforms, and design requirements. Simple apps may start from $25,000 and take 2-3 months, while complex apps can cost $100,000+ and take 6+ months to develop.'
  },
  {
    question: 'How do you ensure the security and quality of the software you develop?',
    answer: 'We implement security best practices at every stage of development, conduct regular code reviews, perform automated and manual testing, and follow industry standards like OWASP. Our quality assurance process includes unit testing, integration testing, UI/UX testing, and performance testing.'
  },
  {
    question: 'Do you offer app maintenance and support services?',
    answer: 'Yes, we provide comprehensive maintenance and support services including bug fixes, security updates, performance optimization, feature enhancements, and 24/7 technical support based on your service level agreement (SLA).'
  },
  {
    question: 'Do you assist with software integration and data migration?',
    answer: 'Yes, we offer seamless integration services with third-party systems and APIs. Our data migration services include assessment, planning, execution, validation, and post-migration support to ensure minimal disruption to your business operations.'
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-app-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 animate-fade-in">
          Frequently Asked Questions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden animate-fade-in"
            >
              <button
                className={`w-full p-6 flex items-center justify-between text-left ${openIndex === index ? 'text-app-blue' : 'text-white'} hover:text-app-blue transition-colors`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-300">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
