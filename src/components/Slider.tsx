import { useState } from 'react';

function SlideOutCard({ tabContent, children}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCard = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative"> {/* Container */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 bg-gray-200 p-2 px-4 rounded-l-md cursor-pointer" onClick={toggleCard}>
        {tabContent} 
      </div>
      <div className={`fixed right-[-100%] top-0 h-screen w-80 bg-white shadow-lg transition-right duration-300 ease-out ${isExpanded ? 'right-0' : ''}`}>
        {children} 
      </div>
    </div>
  );
}

export default SlideOutCard;
