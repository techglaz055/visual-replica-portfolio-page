
import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';

const ChatIcon: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button 
        className={`bg-app-blue text-white rounded-full p-3 shadow-lg transition-all duration-300 ${
          isHovered ? 'scale-110 bg-blue-600 shadow-xl' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <MessageSquare size={24} />
      </button>
    </div>
  );
};

export default ChatIcon;
