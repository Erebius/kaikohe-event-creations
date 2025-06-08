
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Contact = () => {
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
    }
  ];

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-2xl mx-auto">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="text-xl font-serif font-semibold mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <a 
                    href={method.action}
                    className="font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    {method.value}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Email Message Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-serif font-bold mb-4">Send Us a Message</h2>
              <p className="text-gray-600">Get in touch with your event requirements and we'll get back to you soon.</p>
            </div>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">✉️</div>
                <h3 className="text-xl font-serif font-semibold mb-4">
                  Open Your Email App
                </h3>
                <p className="text-gray-600 mb-6">
                  Click the button below to open your default email app with our email address pre-filled.
                </p>
                <Button 
                  asChild
                  size="lg" 
                  className="w-full btn-primary mb-4"
                >
                  <a href="mailto:info@kaikohehire.co.nz?subject=Event Inquiry - Kaikohe Hire">
                    Open Email App
                  </a>
                </Button>
                <p className="text-sm text-gray-600">
                  Or email us directly at: 
                  <a href="mailto:info@kaikohehire.co.nz" className="text-primary hover:text-primary/80 ml-1">
                    info@kaikohehire.co.nz
                  </a>
                </p>
              </CardContent>
            </Card>
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
