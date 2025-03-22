
import React, { useState } from 'react';
import Header from '@/components/Header';
import SupplierCard from '@/components/SupplierCard';
import TabButton from '@/components/TabButton';
import Chip from '@/components/Chip';
import Badge from '@/components/Badge';

const factoryImage = '/lovable-uploads/1f438b6a-bc14-4247-b9c1-09ce3ce137ee.png';

const Index = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-supplier-lightGray flex flex-col">
      <Header />
      
      <div className="flex flex-col md:flex-row p-8 gap-8 max-w-7xl mx-auto w-full">
        {/* Left Column */}
        <div className="w-full md:w-1/3">
          <SupplierCard 
            companyName="TechPrecision Manufacturing"
            location="San Francisco, CA"
            imageUrl={factoryImage}
            email="info@techprecision.example"
            phone="+1 (206) 555-0123"
            website="www.techprecisionmanufacturing.example"
            address="123 Industrial Parkway, Seattle, WA"
            established="Established since 1995"
            revenue="$2 million per annum"
            employees="250 Employees"
          />
        </div>
        
        {/* Right Column */}
        <div className="w-full md:w-2/3 space-y-6">
          {/* Tabs */}
          <div className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm">
            <div className="flex border-b overflow-x-auto">
              <TabButton 
                active={activeTab === 'overview'} 
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </TabButton>
              <TabButton 
                active={activeTab === 'capabilities'} 
                onClick={() => setActiveTab('capabilities')}
              >
                Capabilities
              </TabButton>
              <TabButton 
                active={activeTab === 'facility'} 
                onClick={() => setActiveTab('facility')}
              >
                Facility
              </TabButton>
            </div>
            
            <div className="p-6 animate-fade-in">
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-xl font-semibold mb-3 text-supplier-heading">Supplier Overview</h2>
                    <p className="text-supplier-text leading-relaxed">
                      Specializing in high-precision electronic components and assemblies with advanced CNC capabilities.
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-4 text-supplier-heading">Industry Focus</h2>
                    <div className="flex flex-wrap gap-2">
                      <Chip>Electronics</Chip>
                      <Chip>Custom Components</Chip>
                      <Chip>OEM Manufacturing</Chip>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-4 text-supplier-heading">Manufacturing Processes</h2>
                    <div className="flex flex-wrap gap-2">
                      <Chip>CNC Machinery</Chip>
                      <Chip>Assembly</Chip>
                      <Chip>Finishing</Chip>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-4 text-supplier-heading">Quality & Certifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Badge checkmark>ISO 9001</Badge>
                      <Badge checkmark>ISO 14001</Badge>
                      <Badge checkmark>OHSAS 15001</Badge>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'capabilities' && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold mb-2 text-supplier-heading">Capabilities</h2>
                  <p className="text-supplier-text">
                    Detailed information about TechPrecision's manufacturing capabilities and specialties.
                  </p>
                </div>
              )}
              
              {activeTab === 'facility' && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold mb-2 text-supplier-heading">Facility</h2>
                  <p className="text-supplier-text">
                    Information about TechPrecision's manufacturing facilities, equipment, and capacity.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
