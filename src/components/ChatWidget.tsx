
import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{text: string, sender: 'user' | 'bot', timestamp: Date}[]>([
    {
      text: 'Hello! How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Add user message
    const userMessage = {
      text: message,
      sender: 'user' as const,
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage]);
    setMessage('');
    
    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        text: "Thanks for your message! One of our representatives will get back to you soon.",
        sender: 'bot' as const,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-gray-900 w-80 sm:w-96 h-96 rounded-lg shadow-2xl mb-4 flex flex-col border border-gray-800 animate-fade-in">
          <div className="bg-app-blue p-4 rounded-t-lg flex items-center justify-between">
            <h3 className="text-white font-medium">Chat with Appinventiv</h3>
            <button 
              onClick={toggleChat}
              className="text-white hover:bg-blue-600 p-1 rounded-full"
            >
              <X size={18} />
            </button>
          </div>
          
          <div className="flex-grow p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`mb-4 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.sender === 'user' 
                      ? 'bg-app-blue text-white' 
                      : 'bg-gray-800 text-white'
                  }`}
                >
                  {msg.text}
                  <div className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-blue-200' : 'text-gray-400'}`}>
                    {msg.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-800 flex">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow bg-gray-800 border border-gray-700 rounded-l-md px-4 py-2 text-white focus:outline-none focus:border-app-blue"
            />
            <button
              type="submit"
              className="bg-app-blue text-white px-4 rounded-r-md hover:bg-blue-600 transition-colors"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
      
      <button 
        onClick={toggleChat}
        className="bg-app-blue text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:shadow-xl"
      >
        <MessageSquare size={24} />
      </button>
    </div>
  );
};

export default ChatWidget;
