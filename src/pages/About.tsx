
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const teamMembers = [
    {
      name: 'Aroha Smith',
      role: 'Founder & Director',
      bio: 'With over 15 years in the events industry, Aroha founded Kaikohe Hire to serve her local community.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=300'
    },
    {
      name: 'James Wilson',
      role: 'Operations Manager',
      bio: 'James ensures every delivery and setup runs smoothly, with a focus on customer satisfaction.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Event Coordinator',
      bio: 'Maria helps clients plan their perfect event setup with expert advice and creative solutions.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300'
    }
  ];

  const testimonials = [
    {
      quote: "The team went above and beyond for our community hui. Highly recommend!",
      name: "Mere W.",
      location: "Hokianga",
      event: "Community Hui"
    },
    {
      quote: "Perfect setup for our destination wedding. Thank you, Kaikohe Hire!",
      name: "Emma L.",
      location: "Auckland",
      event: "Wedding"
    },
    {
      quote: "Professional service from start to finish. Made our corporate retreat seamless.",
      name: "David K.",
      location: "Whangarei",
      event: "Corporate Event"
    }
  ];

  const milestones = [
    {
      year: '2008',
      title: 'Founded',
      description: 'Kaikohe Hire established to serve the Far North community'
    },
    {
      year: '2012',
      title: 'Expansion',
      description: 'Added tables and chairs to our marquee hire service'
    },
    {
      year: '2018',
      title: 'Growth',
      description: 'Expanded fleet to include additional equipment and lighting'
    },
    {
      year: '2024',
      title: 'Present',
      description: 'Proudly serving 500+ events annually across the Far North'
    }
  ];

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
                Kia ora! Kaikohe Hire has been proudly serving the Far North for over 15 years, 
                providing top-quality marquees, tables, and chairs for events of all sizes. 
                Founded by Aroha Smith, our mission is to make every event in Kaikohe and beyond 
                a success through reliable equipment and exceptional service.
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

      {/* Our Journey */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Our Journey in the Far North
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From humble beginnings, Kaikohe Hire has grown into the region's trusted event hire provider.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{milestone.year}</div>
                  <h3 className="text-lg font-serif font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 text-sm">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Meet Our Dedicated Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our team of local experts is passionate about helping you create memorable events.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Commitment */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Supporting Kaikohe and the Far North
              </h2>
              <p className="text-xl mb-6 leading-relaxed">
                We're deeply rooted in the Far North, working with local iwi, community groups, 
                and events like the BOI Pony Club's 75th anniversary. Our team includes members 
                from local hapū, and we're committed to promoting te ao Māori and supporting 
                community initiatives.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span>Supporting local iwi and hapū events</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span>Promoting te ao Māori values</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span>Community fundraiser partnerships</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span>Local business collaboration</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800" 
                alt="Community event in the Far North"
                className="rounded-lg shadow-xl"
              />
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
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
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
              </Card>
            ))}
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
