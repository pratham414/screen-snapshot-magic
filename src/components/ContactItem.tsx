
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactItemProps {
  icon: LucideIcon;
  text: string;
}

const ContactItem = ({ icon: Icon, text }: ContactItemProps) => {
  return (
    <div className="flex items-center space-x-3 py-2 animate-fade-in">
      <div className="text-gray-500">
        <Icon size={18} />
      </div>
      <div className="text-gray-600">{text}</div>
    </div>
  );
};

export default ContactItem;
