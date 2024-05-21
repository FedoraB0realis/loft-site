import { useState } from 'react';

interface SlideOutCardProps {
  tabContent: React.ReactNode; // Explicitly define tabContent type
  children: React.ReactNode;
}

function SlideOutCard({ tabContent, children }: SlideOutCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCard = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative"> 
      <div 
        className="fixed right-0 top-1/2 -translate-y-1/2 bg-gray-200 p-2 px-4 rounded-l-md cursor-pointer z-10"
        onClick={toggleCard}
      >
        {tabContent}
      </div>
      <div 
        className={`fixed right-full top-0 h-screen w-80 bg-white shadow-lg transition-transform duration-300 ease-out ${isExpanded ? 'translate-x-full' : ''}`}
      >
        {children}
      </div>
    </div>
  );
}

export default SlideOutCard;
