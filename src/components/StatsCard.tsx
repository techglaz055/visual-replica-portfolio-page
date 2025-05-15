
import React from 'react';

interface StatsCardProps {
  number: string;
  title: string;
  description: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ number, title, description }) => {
  return (
    <div className="p-6 flex flex-col w-full">
      <h2 className="text-5xl font-bold text-app-blue mb-2">{number}</h2>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default StatsCard;
