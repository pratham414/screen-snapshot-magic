
import React from 'react';
import { cn } from '@/lib/utils';

interface ChipProps {
  children: React.ReactNode;
  className?: string;
}

const Chip = ({ children, className }: ChipProps) => {
  return (
    <div 
      className={cn(
        "flex items-center gap-2 py-1.5 text-supplier-text", 
        className
      )}
    >
      <div className="w-1.5 h-1.5 rounded-full bg-supplier-blue"></div>
      <span>{children}</span>
    </div>
  );
};

export default Chip;
