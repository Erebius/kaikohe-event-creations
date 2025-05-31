
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const testimonials = [{
    quote: "The team went above and beyond for our community hui. Highly recommend!",
    name: "Mere W.",
    location: "Hokianga",
    event: "Community Hui"
  }, {
    quote: "Perfect setup for our destination wedding. Thank you, Kaikohe Hire!",
    name: "Emma L.",
    location: "Auckland",
    event: "Wedding"
  }, {
    quote: "Professional service from start to finish. Made our corporate retreat seamless.",
    name: "David K.",
    location: "Whangarei",
    event: "Corporate Event"
  }];

  return <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-earth-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary">Our Story</Badge>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                About Kaikohe Hire
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">Kia ora! Kaikohe Hire has been proudly serving the Far North for over 30 years, providing top-quality marquees, tables, and chairs for events of all sizes. Our mission is to make every event in Kaikohe and beyond a success through reliable equipment and exceptional service.</p>
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
              <img src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=800" alt="Kaikohe Hire team setting up event" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Hear from Our Happy Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our customers love working with us. Read their stories and see how Kaikohe Hire made their events special.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4 text-primary">"</div>
                  <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.quote}</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <span className="font-bold text-white">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                      <p className="text-xs text-primary">{testimonial.event}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
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
    </div>;
};

export default About;
