import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AdditionalEquipment = () => {
  const equipment = [
    {
      category: 'Lighting Systems',
      items: [
        'String lights for romantic ambiance',
        'LED uplighting for color enhancement',
        'Spotlights for key areas',
        'Dance floor lighting'
      ],
      description: 'Create the perfect atmosphere with our professional lighting solutions.',
      image: '/lovable-uploads/7776586b-dacd-40ff-b836-120ffa42d01e.png'
    },
    {
      category: 'Dance Floors',
      items: [
        'Portable wooden dance floors',
        'Various sizes available',
        'Professional installation',
        'Safe, level surfaces'
      ],
      description: 'Keep your guests dancing all night with our premium dance floors.',
      image: '/lovable-uploads/da61d16e-5cba-4a57-9000-985030217290.png'
    },
    {
      category: 'Portable Facilities',
      items: [
        'Clean, modern portaloos',
        'Hand washing stations',
        'Mirror and lighting included',
        'Safety rails for accessibility',
        'Regular servicing available'
      ],
      description: 'Ensure guest comfort with our high-quality portable facilities.',
      image: '/lovable-uploads/ba08dba8-b2f4-4760-a30d-1c513d0056eb.png'
    },
    {
      category: 'Staging & Platforms',
      items: [
        'Modular stage systems',
        'Various heights and sizes',
        'Safety railings included',
        'Weather-resistant materials'
      ],
      description: 'Elevate your performers and speakers with our professional staging.',
      image: '/lovable-uploads/f5f2394e-9a51-4aba-a01a-eb04e16925fd.png'
    }
  ];

  const benefits = [
    {
      title: 'High-Quality Equipment',
      description: 'All our additional equipment is regularly maintained and meets professional standards.',
      icon: '⭐'
    },
    {
      title: 'Flexible Hire Terms',
      description: 'Short-term or long-term hire options to suit your event duration and budget.',
      icon: '⏰'
    },
    {
      title: 'Professional Installation',
      description: 'Our experienced team ensures safe and proper installation of all equipment.',
      icon: '🔧'
    },
    {
      title: 'Complete Solutions',
      description: 'Everything you need to make your event complete and memorable.',
      icon: '✨'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-earth-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary">Additional Equipment</Badge>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Everything You Need for a Perfect Event
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Enhance your event with our comprehensive range of additional equipment and services. 
                From practical solutions like portaloos to ambiance-enhancing options like lighting 
                and dance floors, we have it all.
              </p>
              <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex">
                <Button asChild size="lg" className="btn-primary">
                  <Link to="/booking#enquiry-form">Explore Equipment</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="tel:094011044">Call Us: 09 401 1044</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/7776586b-dacd-40ff-b836-120ffa42d01e.png" 
                alt="Event lighting setup"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Why Choose Our Additional Equipment?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              High-quality, reliable equipment with flexible hire terms to make your setup complete.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-serif font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Available Equipment
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our comprehensive range of additional equipment to enhance every aspect of your event.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {equipment.map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.category}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-serif font-semibold mb-3">{category.category}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full mt-4">
                    <Link to="/booking#enquiry-form">Add to Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Add-ons */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Popular Equipment Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Commonly requested equipment combinations for different event types.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-4">Wedding Enhancement</h3>
                <div className="space-y-2 mb-6 text-left">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">String lighting</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Dance floor</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Portable facilities</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">LED uplighting</span>
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/booking#enquiry-form">Get Package Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-4">Corporate Event</h3>
                <div className="space-y-2 mb-6 text-left">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Stage platform</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Professional lighting</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Sound system</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Portable facilities</span>
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/booking#enquiry-form">Get Package Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-4">Community Event</h3>
                <div className="space-y-2 mb-6 text-left">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Basic lighting</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Portable facilities</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Hand wash stations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Small stage</span>
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/booking#enquiry-form">Get Package Quote</Link>
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
            Complete Your Event Setup
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us help you create a comprehensive equipment package that covers all your event needs.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link to="/booking#enquiry-form">Create Equipment Package</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <a href="tel:094011044">Speak to Specialist</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdditionalEquipment;
