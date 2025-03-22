
import React, { useState } from 'react';
import Header from '@/components/Header';
import SupplierCard from '@/components/SupplierCard';
import TabButton from '@/components/TabButton';
import Chip from '@/components/Chip';
import Badge from '@/components/Badge';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const factoryImage = '/lovable-uploads/1f438b6a-bc14-4247-b9c1-09ce3ce137ee.png';

const Index = () => {
  const [activeTab, setActiveTab] = useState('capabilities');

  return (
    <div className="min-h-screen bg-supplier-lightGray flex flex-col">
      <Header />
      
      <div className="w-full border-b bg-white px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center">
          <Button variant="ghost" className="text-gray-600 font-medium gap-2 px-0 hover:bg-transparent">
            <ArrowLeft size={18} />
            Back to results
          </Button>
          
          <div className="ml-auto">
            <Button variant="outline" className="text-gray-600 font-medium">
              Export Details
            </Button>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row p-8 gap-8 max-w-7xl mx-auto w-full">
        {/* Left Column */}
        <div className="w-full md:w-1/3">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 animate-fade-in mb-6">
            <div className="space-y-4">
              <h1 className="text-2xl font-semibold text-supplier-heading">TechPrecision Manufacturing</h1>
              <div className="flex items-center text-gray-500 space-x-1">
                <span className="text-sm">San Francisco, CA</span>
              </div>
              
              <div className="pt-2">
                <img 
                  src={factoryImage} 
                  alt="TechPrecision Manufacturing" 
                  className="w-full h-56 object-cover rounded-md" 
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          
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
                <div className="space-y-8">
                  <div>
                    <h2 className="text-xl font-semibold mb-6 text-supplier-heading">Manufacturing Capabilities</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-medium mb-4 text-supplier-heading">Materials</h3>
                        <div className="space-y-3">
                          <Chip>Aluminum</Chip>
                          <Chip>Steel</Chip>
                          <Chip>Stainless Steel</Chip>
                          <Chip>Plastics</Chip>
                          <Chip>Composites</Chip>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-4 text-supplier-heading">Technologies</h3>
                        <div className="space-y-3">
                          <Chip>3-Axis CNC</Chip>
                          <Chip>5-Axis CNC</Chip>
                          <Chip>CAD/CAM Software</Chip>
                          <Chip>Quality Control Systems</Chip>
                          <Chip>Automated Inspection</Chip>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-4 text-supplier-heading">Production Capacity</h2>
                    <p className="text-supplier-text leading-relaxed">
                      This supplier operates a 50,000 sq ft facility with capacity for both low and high volume production runs. 
                      They can handle orders ranging from prototypes to full production runs of 100,000+ units per month.
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-4 text-supplier-heading">Quality Control</h2>
                    <p className="text-supplier-text leading-relaxed mb-6">
                      Quality control processes include automated and manual inspection at multiple stages of production. All 
                      products undergo rigorous testing to ensure they meet or exceed industry standards.
                    </p>
                    
                    <h3 className="text-lg font-medium mb-4 text-supplier-heading">Quality Metrics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="border rounded-lg p-6 text-center">
                        <h4 className="text-3xl font-bold text-supplier-blue mb-2">99.8%</h4>
                        <p className="text-gray-600">On-Time Delivery</p>
                      </div>
                      <div className="border rounded-lg p-6 text-center">
                        <h4 className="text-3xl font-bold text-supplier-blue mb-2">99.9%</h4>
                        <p className="text-gray-600">Quality Rate</p>
                      </div>
                      <div className="border rounded-lg p-6 text-center">
                        <h4 className="text-3xl font-bold text-supplier-blue mb-2">&lt;0.5%</h4>
                        <p className="text-gray-600">Return Rate</p>
                      </div>
                    </div>
                  </div>
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
