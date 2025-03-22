
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
        "tab-button",
        active && "active"
      )}
    >
      {children}
    </button>
  );
};

export default TabButton;
