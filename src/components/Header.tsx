
import React from 'react';
import { ArrowLeft, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 border-b bg-white sticky top-0 z-10">
      <Button variant="ghost" className="text-gray-600 flex items-center gap-2 hover:bg-gray-50 transition-all">
        <ArrowLeft size={18} />
        <span>Back to results</span>
      </Button>
      
      <Button variant="outline" className="flex items-center gap-2 border-gray-200 hover:bg-gray-50 transition-all">
        <Download size={16} />
        <span>Export Details</span>
      </Button>
    </header>
  );
};

export default Header;
