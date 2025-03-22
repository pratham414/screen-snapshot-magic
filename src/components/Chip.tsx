
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
        "chip animate-fade-in", 
        className
      )}
    >
      {children}
    </div>
  );
};

export default Chip;
