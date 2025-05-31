
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const MarqueeHire = () => {
  const marqueeSizes = [
    { size: '6x6m', guests: '10-50 guests', price: '$500', duration: '1-3 days' },
    { size: '6x9m', guests: '30-70 guests', price: '$750', duration: '1-3 days' },
    { size: '12x9m', guests: '50-100 guests', price: '$1500', duration: '1-3 days' },
    { size: '12x12m', guests: '70-120 guests', price: '$1800', duration: '1-3 days' },
    { size: '12x18m', guests: '100+ guests', price: '$2900', duration: '1-3 days' },
    { size: '12x24m', guests: '150+ guests', price: '$3500', duration: '1-3 days' },
    { size: '12x30m', guests: '200+ guests', price: '$4200', duration: '1-3 days' },
    { size: '12x36m', guests: '250+ guests', price: '$4900', duration: '1-3 days' },
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
                  <Link to="/booking">Get a Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Ask Questions</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=800" 
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
                    <Link to="/booking">Select This Size</Link>
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
              <Link to="/contact">Contact Us for Custom Quote</Link>
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
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src={`https://images.unsplash.com/photo-${item % 2 === 0 ? '1721322800607-8c38375eef04' : '1487958449943-2429e8be8625'}?q=80&w=400`}
                  alt={`Marquee setup ${item}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
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
              <Link to="/booking">Get Quote Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/contact">Call Us: 09 401 1044</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarqueeHire;
