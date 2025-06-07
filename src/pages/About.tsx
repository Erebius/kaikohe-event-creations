
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-earth-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary">Our Story</Badge>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                About Kaikohe Hire
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Kia ora! Kaikohe Hire has been proudly serving the Far North for over 30 years, providing top-quality marquees, tables, and chairs for events of all sizes. Our mission is to make every event in Kaikohe and beyond a success through reliable equipment and exceptional service.
              </p>
              <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex">
                <Button asChild size="lg" className="btn-primary">
                  <Link to="/services">Our Services</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=800" 
                alt="Kaikohe Hire team setting up event" 
                className="rounded-lg shadow-xl" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-earth-600 to-earth-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Work with Our Team?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us help make your next event in the Far North unforgettable. Get in touch today!
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <Button asChild size="lg" className="bg-white text-earth-700 hover:bg-gray-100">
              <Link to="/booking">Book Your Event</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-earth-700">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
