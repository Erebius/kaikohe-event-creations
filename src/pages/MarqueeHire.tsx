
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const MarqueeHire = () => {
  const marqueeSizes = [
    { size: '6x6m', guests: 'Up to 25 guests', price: '$500', duration: '1-3 days' },
    { size: '6x9m', guests: 'Up to 35 guests', price: '$700', duration: '1-3 days' },
    { size: '12x12m', guests: 'Up to 100 guests', price: '$1,800', duration: '1-3 days' },
    { size: '12x18m', guests: 'Up to 140 guests', price: '$2,700', duration: '1-3 days' },
    { size: '12x24m', guests: 'Up to 180 guests', price: '$3,100', duration: '1-3 days' },
    { size: '12x30m', guests: 'Large events', price: '$3,900', duration: '1-3 days' },
    { size: '12x36m', guests: 'Large events', price: '$4,600', duration: '1-3 days' },
    { size: 'Star 8x8m', guests: 'Special events', price: 'Enquiry Only', duration: '1-3 days' },
  ];

  const features = [
    'Weatherproof materials for all seasons',
    'Optional sidewalls available',
    'Professional setup and dismantling included',
    'Various sizes to accommodate any guest count',
    'High-quality, modern designs',
    'Suitable for all event types',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-earth-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary">Marquee Hire</Badge>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Stunning Marquees for Any Event
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your event with our range of marquees, perfect for weddings, corporate functions, 
                or community events in Kaikohe. Available in various sizes, our marquees are durable, 
                weather-resistant, and customizable to suit your needs.
              </p>
              <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex">
                <Button asChild size="lg" className="btn-primary">
                  <Link to="/booking#enquiry-form">Get a Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="tel:094011044">Call Us: 09 401 1044</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/09bbb2a9-1f6a-4ac9-832f-0db0cd93bcb6.png" 
                alt="Elegant marquee setup"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Why Choose Our Marquees?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our team handles professional setup and dismantling, so you can focus on enjoying your event.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <div className="w-6 h-6 bg-primary rounded-full"></div>
                  </div>
                  <p className="font-medium">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Marquee Sizes & Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the perfect size for your event. All prices include professional setup and dismantling.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marqueeSizes.map((marquee, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <h3 className="text-2xl font-serif font-bold text-primary">{marquee.size}</h3>
                    <p className="text-gray-600">{marquee.guests}</p>
                  </div>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{marquee.price}</span>
                    <p className="text-sm text-gray-500">{marquee.duration}</p>
                  </div>
                  <Button asChild className="w-full" variant="outline">
                    <Link to="/booking#enquiry-form">Select This Size</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Need a custom size or have special requirements?
            </p>
            <Button asChild variant="outline" size="lg">
              <a href="tel:094011044">Contact Us for Custom Quote</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              See Our Marquees in Action
            </h2>
            <p className="text-lg text-gray-600">
              Browse our gallery to see how our marquees transform events across the Far North.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/09bbb2a9-1f6a-4ac9-832f-0db0cd93bcb6.png"
                alt="Marquee setup 1"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/243c1067-153c-4ff2-b60b-5bacbd5d5b02.png"
                alt="Marquee setup 2"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/689e4e32-9c73-4fa8-9caf-3219b0a6b0c4.png"
                alt="Marquee setup 3"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/7397773b-bfd0-4ad3-896e-b3adebcff057.png"
                alt="Marquee setup 4"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/8b4f4486-94a3-4b2a-b558-169932e930f3.png"
                alt="Marquee setup 5"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/b3e214a0-14e6-4269-91be-aa1499f26ec0.png"
                alt="Marquee setup 6"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Book Your Marquee?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get in touch today for a personalized quote and let us help create the perfect setting for your event.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link to="/booking#enquiry-form">Get Quote Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <a href="tel:094011044">Call Us: 09 401 1044</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarqueeHire;
