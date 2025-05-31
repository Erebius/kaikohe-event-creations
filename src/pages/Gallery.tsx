import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Weddings', 'Corporate Events', 'Community Events'];

  const galleryItems = [
    {
      image: '/lovable-uploads/fc0e2c21-ca21-4f2b-9f98-e398590a93a8.png',
      title: 'Elegant Wedding Marquee Setup',
      description: 'Beautiful white marquee with open sides showcasing table and chair arrangements',
      category: 'Weddings',
      location: 'Far North'
    },
    {
      image: '/lovable-uploads/8b4f4486-94a3-4b2a-b558-169932e930f3.png',
      title: 'Complete Wedding Reception',
      description: 'Full marquee setup with wooden tables, white chairs and elegant decorations',
      category: 'Weddings',
      location: 'Kaikohe'
    },
    {
      image: '/lovable-uploads/b3e214a0-14e6-4269-91be-aa1499f26ec0.png',
      title: 'Professional Event Marquee',
      description: 'Large white marquee with side walls for corporate and community events',
      category: 'Corporate Events',
      location: 'Bay of Islands'
    },
    {
      image: '/lovable-uploads/689e4e32-9c73-4fa8-9caf-3219b0a6b0c4.png',
      title: 'Outdoor Festival Setup',
      description: 'Sturdy marquee setup perfect for outdoor festivals and community gatherings',
      category: 'Community Events',
      location: 'Paihia'
    },
    {
      image: '/lovable-uploads/f5f2394e-9a51-4aba-a01a-eb04e16925fd.png',
      title: 'Aerial View Marquee',
      description: 'Bird\'s eye view of our quality marquee installation',
      category: 'Corporate Events',
      location: 'Kerikeri'
    },
    {
      image: '/lovable-uploads/ba08dba8-b2f4-4760-a30d-1c513d0056eb.png',
      title: 'Marquee Interior Detail',
      description: 'Inside view showing the quality construction and lighting setup',
      category: 'Weddings',
      location: 'Russell'
    },
    {
      image: '/lovable-uploads/fc0e2c21-ca21-4f2b-9f98-e398590a93a8.png',
      title: 'Garden Party Setup',
      description: 'Perfect setup for outdoor celebrations and garden parties',
      category: 'Community Events',
      location: 'Kawakawa'
    },
    {
      image: '/lovable-uploads/8b4f4486-94a3-4b2a-b558-169932e930f3.png',
      title: 'Corporate Dinner Event',
      description: 'Professional setup ideal for business dinners and corporate functions',
      category: 'Corporate Events',
      location: 'Opua'
    },
    {
      image: '/lovable-uploads/b3e214a0-14e6-4269-91be-aa1499f26ec0.png',
      title: 'Anniversary Celebration',
      description: 'Elegant marquee setup perfect for milestone celebrations',
      category: 'Weddings',
      location: 'Mangonui'
    },
    {
      image: '/lovable-uploads/689e4e32-9c73-4fa8-9caf-3219b0a6b0c4.png',
      title: 'Community Fundraiser',
      description: 'Large marquee setup supporting local community fundraising events',
      category: 'Community Events',
      location: 'Kaitaia'
    },
    {
      image: '/lovable-uploads/f5f2394e-9a51-4aba-a01a-eb04e16925fd.png',
      title: 'Outdoor Conference',
      description: 'Professional outdoor venue setup for conferences and seminars',
      category: 'Corporate Events',
      location: 'Whangaroa'
    },
    {
      image: '/lovable-uploads/ba08dba8-b2f4-4760-a30d-1c513d0056eb.png',
      title: 'Reception Preparation',
      description: 'Behind-the-scenes look at our professional setup process',
      category: 'Weddings',
      location: 'Hokianga'
    }
  ];

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-earth-50">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            See Our Work in Action
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Take a look at some of the events we've helped bring to life in Kaikohe and the Far North. 
            From elegant weddings to vibrant community gatherings, our marquees, tables, and chairs 
            create memorable experiences.
          </p>
          <Button asChild size="lg" className="btn-primary">
            <Link to="/booking">Plan Your Event Now</Link>
          </Button>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? 'btn-primary' : ''}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg aspect-square">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <Badge className="mb-2 bg-white/20 text-white border-white/30">
                      {item.category}
                    </Badge>
                    <h3 className="text-lg font-serif font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-200 mb-2">{item.description}</p>
                    <p className="text-xs text-gray-300">📍 {item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types Showcase */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Events We've Proudly Supported
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From intimate gatherings to large celebrations, we've been part of countless special moments across the Far North.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl mb-3">💒</div>
              <h3 className="font-serif font-semibold mb-2">Weddings</h3>
              <p className="text-sm text-gray-600">Over 200 couples have celebrated their special day with our equipment</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl mb-3">🏢</div>
              <h3 className="font-serif font-semibold mb-2">Corporate Events</h3>
              <p className="text-sm text-gray-600">Professional setups for conferences, retreats, and team building</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl mb-3">🎪</div>
              <h3 className="font-serif font-semibold mb-2">Community Events</h3>
              <p className="text-sm text-gray-600">Supporting local hui, festivals, and fundraising events</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl mb-3">🎉</div>
              <h3 className="font-serif font-semibold mb-2">Celebrations</h3>
              <p className="text-sm text-gray-600">Birthdays, anniversaries, and milestone celebrations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial with Image */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-6xl mb-6 text-accent">"</div>
              <blockquote className="text-xl mb-6 leading-relaxed">
                The photos in this gallery speak for themselves. Kaikohe Hire transformed our venue 
                into something magical. Every detail was perfect, from the elegant marquee to the 
                beautiful table settings. Our guests are still talking about how stunning everything looked.
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="font-bold">S</span>
                </div>
                <div>
                  <p className="font-semibold">Sarah & Tom</p>
                  <p className="text-blue-200">Wedding, Bay of Islands</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/8b4f4486-94a3-4b2a-b558-169932e930f3.png" 
                alt="Beautiful wedding setup with marquee"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Create Your Own Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you create beautiful memories that will be featured in our next gallery showcase.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <Button asChild size="lg" className="btn-primary">
              <Link to="/booking">Start Planning</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Discuss Your Vision</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
