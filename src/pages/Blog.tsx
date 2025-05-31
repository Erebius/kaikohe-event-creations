
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Blog = () => {
  const categories = ['Event Planning', 'Local Events', 'Equipment Tips'];
  
  const blogPosts = [
    {
      title: 'Top 5 Tips for Planning a Stress-Free Wedding in Kaikohe',
      excerpt: 'Planning a wedding in Kaikohe? From choosing the perfect marquee to coordinating with local vendors, these tips will ensure your big day is seamless.',
      category: 'Event Planning',
      date: '2024-03-15',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=400',
      readTime: '5 min read'
    },
    {
      title: 'How to Choose the Right Marquee Size for Your Event',
      excerpt: 'Not sure which marquee size is right? Our guide helps you pick the perfect option for your guest list and event type.',
      category: 'Equipment Tips',
      date: '2024-03-10',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=400',
      readTime: '3 min read'
    },
    {
      title: 'Kaikohe Events Calendar: What\'s On in the Far North',
      excerpt: 'Discover upcoming events in Kaikohe, like the Whangaroa RSA centennial, and see how Kaikohe Hire can help.',
      category: 'Local Events',
      date: '2024-03-05',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=400',
      readTime: '4 min read'
    },
    {
      title: 'Setting Up Your Marquee: Weather Considerations in Northland',
      excerpt: 'Learn how to prepare your marquee event for Northland\'s variable weather conditions with our expert tips.',
      category: 'Equipment Tips',
      date: '2024-02-28',
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=400',
      readTime: '6 min read'
    },
    {
      title: 'Community Hui Planning: Honoring Tikanga Māori',
      excerpt: 'Essential considerations for planning community hui that honor tikanga Māori and create meaningful gatherings.',
      category: 'Event Planning',
      date: '2024-02-20',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400',
      readTime: '7 min read'
    },
    {
      title: 'Corporate Events in the Far North: Unique Venue Ideas',
      excerpt: 'Explore unique venue options and setup ideas for memorable corporate events across the Far North region.',
      category: 'Event Planning',
      date: '2024-02-15',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=400',
      readTime: '5 min read'
    }
  ];

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Event Planning':
        return 'bg-primary/10 text-primary';
      case 'Local Events':
        return 'bg-accent/10 text-accent';
      case 'Equipment Tips':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-earth-50">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Event Planning Tips and Inspiration
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Stay inspired with our blog, featuring expert tips on event planning, highlights from 
            Kaikohe events, and advice on choosing the right equipment. Whether you're organizing 
            a wedding or a community fundraiser, our blog has you covered.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="outline" className="bg-primary text-white">All Posts</Button>
            {categories.map((category) => (
              <Button key={category} variant="outline">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold mb-8 text-center">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-3 mb-4">
                    <Badge className={getCategoryColor(featuredPost.category)}>
                      {featuredPost.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {new Date(featuredPost.date).toLocaleDateString('en-NZ', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <Button>Read More</Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Regular Posts Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-serif font-bold mb-8 text-center">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Badge className={getCategoryColor(post.category)}>
                      {post.category}
                    </Badge>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-serif font-semibold mb-3 leading-tight">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {new Date(post.date).toLocaleDateString('en-NZ', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                    <Button variant="outline" size="sm">Read More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Stay Updated with Event Tips
            </h2>
            <p className="text-xl mb-8">
              Subscribe to our newsletter for the latest event planning tips, equipment guides, 
              and Far North event highlights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <Button className="bg-white text-primary hover:bg-gray-100 px-6 py-3">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-blue-100 mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Plan Your Event?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Put our expert advice into action. Book your equipment and let us help create your perfect event.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <Button asChild size="lg" className="btn-primary">
              <Link to="/booking">Book Equipment</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Get Expert Advice</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
