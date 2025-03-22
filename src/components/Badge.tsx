
import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  checkmark?: boolean;
}

const Badge = ({ children, className, checkmark = false }: BadgeProps) => {
  return (
    <div 
      className={cn(
        "certificate-badge", 
        className
      )}
    >
      {checkmark && (
        <div className="flex items-center justify-center w-5 h-5 bg-blue-100 text-blue-600 rounded-full">
          <Check size={14} />
        </div>
      )}
      <span className="text-gray-700 font-medium">{children}</span>
    </div>
  );
};

export default Badge;
