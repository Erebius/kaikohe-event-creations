
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const services = [
    {
      title: 'Marquee Hire',
      description: 'Create a stunning event space with our versatile marquees.',
      link: '/services/marquee-hire',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=800',
    },
    {
      title: 'Tables and Chairs',
      description: 'Complete your setup with our range of seating and table options.',
      link: '/services/tables-chairs',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800',
    },
    {
      title: 'Additional Equipment',
      description: 'Enhance your event with extras like portaloos and lighting.',
      link: '/services/additional-equipment',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800',
    },
  ];

  const whyChooseUs = [
    {
      title: 'Local Expertise',
      description: "We've been in this game for a long time",
      icon: '🏔️',
    },
    {
      title: 'Quality Equipment',
      description: 'Our marquees, tables, and chairs are modern, well-maintained, and suitable for any occasion.',
      icon: '⭐',
    },
    {
      title: 'Affordable Pricing',
      description: 'Competitive rates with flexible packages to suit your budget.',
      icon: '💰',
    },
    {
      title: 'Exceptional Service',
      description: 'Our friendly team ensures seamless delivery and setup, so you can focus on your event.',
      icon: '🤝',
    },
  ];

  const testimonials = [
    {
      quote: "Kaikohe Hire made our wedding day perfect. The marquee was stunning, and the team was so helpful!",
      name: "Sarah T.",
      location: "Kaikohe",
    },
    {
      quote: "Reliable, professional, and affordable. They made our corporate event a breeze.",
      name: "James R.",
      location: "Whangarei",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-earth-50">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=1920')`,
          }}
        />
        <div className="relative z-10 container-custom text-center text-white">
          <Badge className="mb-6 bg-primary/20 text-white border-white/20">
            Kia ora! Welcome to Kaikohe Hire
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
            Elevate Your Event with <span className="text-accent">Kaikohe Hire</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Quality Marquees, Tables, and Chairs for Every Occasion in the Far North
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <Button asChild size="lg" className="btn-primary text-lg px-8 py-4">
              <Link to="/booking">Book Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-secondary text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-gray-900">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg leading-relaxed text-gray-700">
              Kia ora! Welcome to Kaikohe Hire, your trusted partner for marquee, tables, and chairs hire in Kaikohe and the Far North. 
              Whether you're planning a wedding, corporate event, community hui, or backyard party, we provide high-quality equipment 
              and exceptional service to make your event unforgettable. As a locally owned business, we understand the unique needs 
              of our region and are committed to delivering hassle-free solutions from inquiry to setup.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Why Kaikohe Hire?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="space-y-4">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-serif font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Event Hire Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our range of hire services designed to make your event a success. From elegant marquees to stylish tables and chairs, we have everything you need.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={service.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg text-blue-100">
              Hear from our satisfied clients who trusted Kaikohe Hire to make their events special.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4 text-accent">"</div>
                  <p className="text-lg mb-6 leading-relaxed">{testimonial.quote}</p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <span className="font-bold text-white">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-blue-200">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-earth-600 to-earth-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Plan Your Perfect Event?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get in touch today for a personalized quote and let us help make your event unforgettable.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <Button asChild size="lg" className="bg-white text-earth-700 hover:bg-gray-100 px-8 py-4 text-lg">
              <Link to="/booking">Book Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-earth-700 px-8 py-4 text-lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
