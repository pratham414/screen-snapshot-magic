
import React from 'react';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactItem from './ContactItem';
import { Mail, Phone, Globe, CalendarDays, DollarSign, Users } from 'lucide-react';

interface SupplierCardProps {
  companyName: string;
  location: string;
  imageUrl: string;
  email: string;
  phone: string;
  website: string;
  address: string;
  established: string;
  revenue: string;
  employees: string;
}

const SupplierCard = ({
  companyName,
  location,
  imageUrl,
  email,
  phone,
  website,
  address,
  established,
  revenue,
  employees
}: SupplierCardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 animate-fade-in">
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold text-supplier-heading">{companyName}</h1>
        <div className="flex items-center text-gray-500 space-x-1">
          <MapPin size={16} />
          <span className="text-sm">{location}</span>
        </div>
        
        <div className="pt-2">
          <img 
            src={imageUrl} 
            alt={companyName} 
            className="w-full h-56 object-cover rounded-md" 
            loading="lazy"
          />
        </div>
        
        <div className="pt-6">
          <h2 className="text-lg font-medium mb-4 text-supplier-heading">Contact Information</h2>
          <div className="space-y-1">
            <ContactItem icon={Mail} text={email} />
            <ContactItem icon={Phone} text={phone} />
            <ContactItem icon={Globe} text={website} />
            <ContactItem icon={MapPin} text={address} />
            <ContactItem icon={CalendarDays} text={established} />
            <ContactItem icon={DollarSign} text={revenue} />
            <ContactItem icon={Users} text={employees} />
          </div>
        </div>
        
        <Button className="w-full mt-6 bg-supplier-blue hover:bg-supplier-blue/90 text-white">
          Contact Supplier
        </Button>
      </div>
    </div>
  );
};

export default SupplierCard;
