
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
import { CalendarIcon, Phone, Mail } from 'lucide-react';
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

  const enquirySteps = [
    {
      title: 'Submit Enquiry',
      description: 'Tell us about your event needs using our enquiry form or give us a call to discuss your requirements.',
      icon: '📝',
      action: 'Start Enquiry'
    },
    {
      title: 'Receive Quote',
      description: 'We\'ll provide a detailed quote based on your specific needs and event requirements.',
      icon: '💰',
      action: 'Get Quote'
    },
    {
      title: 'Confirm by Phone',
      description: 'Once you\'re happy with the quote, call us to confirm your booking and arrange delivery details.',
      icon: '📞',
      action: 'Confirm Booking'
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
    console.log('Enquiry submitted:', formData, date);
    // Handle enquiry submission logic here
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-earth-50">
        <div className="container-custom text-center">
          <Badge className="mb-4 bg-primary/10 text-primary">Make an Enquiry</Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Enquire About Your Event Equipment
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Planning an event in the Far North? Get in touch with Kaikohe Hire to discuss your 
            marquee, table, and chair needs. We provide personalized quotes and handle all bookings 
            through direct contact to ensure we get every detail right for your special occasion.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <Button asChild size="lg" className="btn-primary">
              <Link to="#enquiry-form">Submit Enquiry</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="tel:09-401-1044">
                <Phone className="mr-2 h-4 w-4" />
                Call: 09 401 1044
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Enquiry Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              How Our Enquiry Process Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our simple three-step process ensures you get exactly what you need for your event.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {enquirySteps.map((step, index) => (
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

      {/* Contact Options */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the way that works best for you to discuss your event needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-serif font-semibold mb-3">Call Us Directly</h3>
                <p className="text-gray-600 mb-6">
                  Speak with our team immediately to discuss your event requirements and get instant answers.
                </p>
                <Button asChild size="lg" className="w-full">
                  <a href="tel:09-401-1044">09 401 1044</a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-serif font-semibold mb-3">Submit Enquiry Form</h3>
                <p className="text-gray-600 mb-6">
                  Fill out our detailed enquiry form and we'll get back to you with a personalized quote.
                </p>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <Link to="#enquiry-form">Enquiry Form</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry-form" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Submit Your Event Enquiry
              </h2>
              <p className="text-lg text-gray-600">
                Tell us about your event and we'll provide a detailed quote. All bookings are confirmed by phone or email.
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
                    <Label htmlFor="message">Event Details & Requirements</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your event, specific equipment needs, setup requirements, or any questions..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full btn-primary">
                    Submit Enquiry
                  </Button>

                  <div className="text-center space-y-2">
                    <p className="text-sm text-gray-600">
                      We'll get back to you within 24 hours with a detailed quote.
                    </p>
                    <p className="text-sm text-gray-500">
                      All bookings are confirmed by phone or email after you receive your quote.
                    </p>
                  </div>
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
            Need to Speak with Someone?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our friendly team is ready to help with your event planning. Call us for immediate assistance or to confirm your booking.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <a href="tel:09-401-1044">
                <Phone className="mr-2 h-4 w-4" />
                Call: 09 401 1044
              </a>
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
