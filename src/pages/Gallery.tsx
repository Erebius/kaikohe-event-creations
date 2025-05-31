import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Weddings', 'Corporate Events', 'Community Events'];
  const galleryItems = [{
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=800',
    title: 'Elegant Wedding Marquee',
    description: 'Beautiful 12x18m marquee setup for a wedding at Ngawha Springs',
    category: 'Weddings',
    location: 'Ngawha Springs'
  }, {
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800',
    title: 'Corporate Conference Setup',
    description: 'Professional rectangular table arrangement for corporate retreat',
    category: 'Corporate Events',
    location: 'Bay of Islands'
  }, {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800',
    title: 'Community Hui Gathering',
    description: 'Traditional hui setup with mixed seating arrangements',
    category: 'Community Events',
    location: 'Kaikohe'
  }, {
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800',
    title: 'Outdoor Wedding Reception',
    description: 'Romantic outdoor setup with string lighting and round tables',
    category: 'Weddings',
    location: 'Hokianga'
  }, {
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=800',
    title: 'Festival Stage Setup',
    description: 'Large marquee with stage platform for community festival',
    category: 'Community Events',
    location: 'Paihia'
  }, {
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=800',
    title: 'Business Launch Event',
    description: 'Modern setup with LED lighting for product launch',
    category: 'Corporate Events',
    location: 'Kerikeri'
  }, {
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800',
    title: 'Garden Wedding Ceremony',
    description: 'Intimate ceremony setup with chiavari chairs',
    category: 'Weddings',
    location: 'Russell'
  }, {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800',
    title: 'School Fundraiser',
    description: 'Community fundraising event with practical seating',
    category: 'Community Events',
    location: 'Kawakawa'
  }, {
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800',
    title: 'Waterfront Corporate Dinner',
    description: 'Elegant waterfront setup for executive dinner',
    category: 'Corporate Events',
    location: 'Opua'
  }, {
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=800',
    title: 'Anniversary Celebration',
    description: '50th wedding anniversary celebration setup',
    category: 'Weddings',
    location: 'Mangonui'
  }, {
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=800',
    title: 'Charity Gala Dinner',
    description: 'Formal gala setup with premium table settings',
    category: 'Community Events',
    location: 'Kaitaia'
  }, {
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800',
    title: 'Team Building Event',
    description: 'Outdoor team building day with flexible seating',
    category: 'Corporate Events',
    location: 'Whangaroa'
  }];
  const filteredItems = activeCategory === 'All' ? galleryItems : galleryItems.filter(item => item.category === activeCategory);
  return <div>
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
            {categories.map(category => <Button key={category} variant={activeCategory === category ? 'default' : 'outline'} onClick={() => setActiveCategory(category)} className={activeCategory === category ? 'btn-primary' : ''}>
                {category}
              </Button>)}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg aspect-square">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
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
              </div>)}
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
              <p className="text-sm text-gray-600">Client</p>
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
              <img src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=600" alt="Happy couple at their wedding" className="rounded-lg shadow-xl" />
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
    </div>;
};
export default Gallery;