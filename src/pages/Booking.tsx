
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const Booking = () => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    guestCount: '',
    venue: '',
    message: ''
  });

  const bookingSteps = [
    {
      title: 'Check Availability',
      description: 'Enter your event date and select the equipment you need to see if it\'s available.',
      icon: '📅',
      action: 'Check Now'
    },
    {
      title: 'Get a Quote',
      description: 'Fill out our quick form, and we\'ll provide a tailored quote for your event needs.',
      icon: '💰',
      action: 'Request Quote'
    },
    {
      title: 'Confirm Booking',
      description: 'Review your quote and confirm your booking. We\'ll handle the rest!',
      icon: '✅',
      action: 'Book Now'
    }
  ];

  const popularPackages = [
    {
      name: 'Intimate Wedding',
      guests: '50-80 guests',
      includes: ['6x9m Marquee', '8 Round Tables', '60 Chiavari Chairs', 'Basic Lighting'],
      price: 'From $2,200'
    },
    {
      name: 'Corporate Event',
      guests: '40-100 guests',
      includes: ['12x9m Marquee', '10 Rectangular Tables', '80 Stacking Chairs', 'Stage Platform'],
      price: 'From $2,800'
    },
    {
      name: 'Community Gathering',
      guests: '100-150 guests',
      includes: ['12x18m Marquee', '15 Round Tables', '120 Folding Chairs', 'Portable Facilities'],
      price: 'From $3,500'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData, date);
    // Handle form submission logic here
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-earth-50">
        <div className="container-custom text-center">
          <Badge className="mb-4 bg-primary/10 text-primary">Easy Booking Process</Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Reserve Your Event Equipment Today
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Booking with Kaikohe Hire is simple and stress-free. Use our online tools to check equipment 
            availability, request a personalized quote, or confirm your booking directly. We recommend 
            booking early to secure your preferred marquees, tables, and chairs for your event.
          </p>
          <Button asChild size="lg" className="btn-primary">
            <Link to="#booking-form">Start Booking Now</Link>
          </Button>
        </div>
      </section>

      {/* Booking Steps */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our simple three-step process makes booking your event equipment effortless.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bookingSteps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-serif font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <Button variant="outline" className="w-full">
                    {step.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Packages */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Popular Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quick-start packages for common event types. All packages can be customized to your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularPackages.map((pkg, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-center">
                    <h3 className="text-xl font-serif font-semibold">{pkg.name}</h3>
                    <p className="text-sm text-gray-600 mt-2">{pkg.guests}</p>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {pkg.includes.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-2xl font-bold text-primary text-center">{pkg.price}</p>
                    <Button className="w-full mt-4">Select Package</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking-form" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Get Your Personalized Quote
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we'll provide a tailored quote for your event needs.
              </p>
            </div>
            
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Event Date *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="eventType">Event Type</Label>
                      <Input
                        id="eventType"
                        name="eventType"
                        placeholder="e.g., Wedding, Corporate Event"
                        value={formData.eventType}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guestCount">Expected Guest Count</Label>
                      <Input
                        id="guestCount"
                        name="guestCount"
                        placeholder="e.g., 50-80"
                        value={formData.guestCount}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="venue">Event Venue/Location</Label>
                    <Input
                      id="venue"
                      name="venue"
                      placeholder="e.g., Kaikohe, Bay of Islands"
                      value={formData.venue}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your event, specific requirements, or questions..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full btn-primary">
                    Request Quote
                  </Button>

                  <p className="text-sm text-gray-600 text-center">
                    We'll get back to you within 24 hours with a personalized quote.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Prefer to Talk?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Give us a call to discuss your event needs or get immediate answers to your questions.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <a href="tel:09-401-1044">Call: 09 401 1044</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/contact">Contact Page</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
