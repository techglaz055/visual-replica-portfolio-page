
import React from 'react';
import { MessageSquare } from 'lucide-react';

const ChatIcon: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button className="bg-app-blue text-white rounded-full p-3 shadow-lg hover:bg-blue-600 transition-all">
        <MessageSquare size={24} />
      </button>
    </div>
  );
};

export default ChatIcon;
