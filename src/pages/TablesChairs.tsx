
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TablesChairs = () => {
  const tableOptions = [
    {
      type: 'Round Tables',
      sizes: ['1.2m (4-6 people)', '1.5m (6-8 people)', '1.8m (8-10 people)'],
      description: 'Perfect for intimate dining and conversation',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=400',
    },
    {
      type: 'Rectangular Tables',
      sizes: ['1.8m x 0.8m (6-8 people)', '2.4m x 0.8m (8-10 people)'],
      description: 'Ideal for formal events and maximizing space',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400',
    },
  ];

  const chairOptions = [
    {
      type: 'Chiavari Chairs',
      description: 'Elegant and classic, perfect for weddings and formal events',
      features: ['Available in multiple colors', 'Lightweight yet sturdy', 'Stackable for easy storage'],
    },
    {
      type: 'Folding Chairs',
      description: 'Practical and comfortable for any occasion',
      features: ['Easy setup and storage', 'Weather-resistant', 'Cost-effective option'],
    },
    {
      type: 'Stacking Chairs',
      description: 'Versatile and modern design suitable for corporate events',
      features: ['Contemporary styling', 'Comfortable seating', 'Space-efficient'],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-earth-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary">Tables & Chairs</Badge>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Elegant Tables and Chairs for Every Occasion
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Complete your event setup with our versatile range of tables and chairs. From classic 
                Chiavari chairs for weddings to sturdy folding chairs for community events, we offer 
                options to match any theme or budget.
              </p>
              <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex">
                <Button asChild size="lg" className="btn-primary">
                  <Link to="/booking">Browse Options</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Get Recommendations</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800" 
                alt="Elegant table and chair setup"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Table Options */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Table Options
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our selection of round and rectangular tables to suit your event layout and guest count.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tableOptions.map((table, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={table.image} 
                    alt={table.type}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-serif font-semibold mb-3">{table.type}</h3>
                  <p className="text-gray-600 mb-4">{table.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Available Sizes:</h4>
                    {table.sizes.map((size, sizeIndex) => (
                      <div key={sizeIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-gray-600">{size}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chair Options */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Chair Styles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select from our range of chair styles, each designed to complement your event's atmosphere and requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chairOptions.map((chair, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-primary rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-3 text-center">{chair.type}</h3>
                  <p className="text-gray-600 mb-4 text-center">{chair.description}</p>
                  <div className="space-y-2">
                    {chair.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Package Examples */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Popular Combinations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here are some popular table and chair combinations for different event types.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3">Wedding Package</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600">1.5m Round Tables</p>
                  <p className="text-gray-600">Chiavari Chairs</p>
                  <p className="text-gray-600">50-100 guests</p>
                </div>
                <p className="text-2xl font-bold text-primary mb-4">From $12/setting</p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/booking">Select Package</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3">Corporate Package</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600">Rectangular Tables</p>
                  <p className="text-gray-600">Stacking Chairs</p>
                  <p className="text-gray-600">20-80 guests</p>
                </div>
                <p className="text-2xl font-bold text-primary mb-4">From $8/setting</p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/booking">Select Package</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3">Community Package</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600">Mix of Table Sizes</p>
                  <p className="text-gray-600">Folding Chairs</p>
                  <p className="text-gray-600">30-150 guests</p>
                </div>
                <p className="text-2xl font-bold text-primary mb-4">From $6/setting</p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/booking">Select Package</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Create the Perfect Seating Arrangement
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our team help you choose the ideal table and chair combination for your event.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link to="/booking">Get Custom Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/contact">Speak to Expert</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TablesChairs;
