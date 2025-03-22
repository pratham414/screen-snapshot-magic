
import React from 'react';
import { cn } from '@/lib/utils';

interface TabButtonProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

const TabButton = ({ children, active = false, onClick }: TabButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "tab-button px-8 py-4 font-medium text-gray-600 border-b-2 border-transparent transition-all duration-200",
        active && "border-supplier-blue text-supplier-blue"
      )}
    >
      {children}
    </button>
  );
};

export default TabButton;
