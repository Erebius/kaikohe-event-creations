import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const contactMethods = [
    {
      title: 'Phone',
      value: '09 401 1044',
      description: 'Call us for immediate assistance',
      action: 'tel:09-401-1044',
      icon: '📞'
    },
    {
      title: 'Email',
      value: 'info@kaikohehire.co.nz',
      description: 'Send us a detailed inquiry',
      action: 'mailto:info@kaikohehire.co.nz',
      icon: '✉️'
    },
    {
      title: 'Address',
      value: '123 Main Road, Kaikohe',
      description: 'Visit us in person',
      action: '#',
      icon: '📍'
    }
  ];

  const faqs = [
    {
      question: 'What areas do you deliver to?',
      answer: 'We serve Kaikohe and the wider Far North, including Hokianga and the Bay of Islands. For specific locations, please contact us to confirm delivery availability.'
    },
    {
      question: 'How far in advance should I book?',
      answer: 'We recommend booking at least 2-4 weeks in advance to secure your equipment, especially during peak wedding and event seasons (October to March).'
    },
    {
      question: 'Do you offer setup and dismantling services?',
      answer: 'Yes, our team provides professional setup and dismantling for all marquees. Tables and chairs setup can also be arranged for an additional fee.'
    },
    {
      question: 'Can I customize my hire package?',
      answer: 'Absolutely! We work with you to create a tailored package that meets your specific event needs and budget. Contact us to discuss your requirements.'
    },
    {
      question: 'What happens if it rains during my event?',
      answer: 'Our marquees are completely waterproof and designed to withstand Northland weather conditions. We also offer sidewalls for additional protection.'
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
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-earth-50">
        <div className="container-custom text-center">
          <Badge className="mb-4 bg-primary/10 text-primary">Get in Touch</Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Get in Touch with Kaikohe Hire
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Kia ora! We're here to help with all your event hire needs. Contact us for inquiries, 
            bookings, or just to say hello. Our friendly team is ready to assist you in making 
            your Kaikohe event a success.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="text-xl font-serif font-semibold mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  {method.action.startsWith('#') ? (
                    <p className="font-medium text-primary">{method.value}</p>
                  ) : (
                    <a 
                      href={method.action}
                      className="font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      {method.value}
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Send Us a Message</h2>
              <Card>
                <CardContent className="p-6">
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
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="e.g., Wedding Inquiry"
                          value={formData.subject}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your event or question..."
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full btn-primary">
                      Send Message
                    </Button>

                    <p className="text-sm text-gray-600 text-center">
                      We'll get back to you within 24 hours.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Info */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Visit Our Location</h2>
              <Card className="mb-6">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <div className="text-4xl mb-2">📍</div>
                      <p className="font-medium">Interactive Map</p>
                      <p className="text-sm">123 Main Road, Kaikohe</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Business Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">By Appointment</span>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Emergency Contact:</strong> Available 24/7 for urgent event needs
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Find quick answers to common questions about our services and booking process.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Don't see your question answered?
              </p>
              <Button asChild variant="outline" size="lg">
                <a href="tel:09-401-1044">Call Us: 09 401 1044</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4">🎪</div>
              <h3 className="text-xl font-serif font-semibold mb-2">Need a Quote?</h3>
              <p className="mb-4">Get a personalized quote for your event needs.</p>
              <Button asChild className="bg-white text-primary hover:bg-gray-100">
                <Link to="/booking">Get Quote</Link>
              </Button>
            </div>
            <div>
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-serif font-semibold mb-2">Urgent Inquiry?</h3>
              <p className="mb-4">Call us directly for immediate assistance.</p>
              <Button asChild className="bg-white text-primary hover:bg-gray-100">
                <a href="tel:09-401-1044">Call Now</a>
              </Button>
            </div>
            <div>
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-serif font-semibold mb-2">Email Us</h3>
              <p className="mb-4">Send detailed questions or special requests.</p>
              <Button asChild className="bg-white text-primary hover:bg-gray-100">
                <a href="mailto:info@kaikohehire.co.nz">Send Email</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
