
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Services = () => {
  const services = [
    {
      title: 'Marquee Hire',
      description: 'Transform your event with our range of marquees, perfect for weddings, corporate functions, or community events in Kaikohe.',
      features: ['Various sizes available', 'Weather-resistant', 'Professional setup included'],
      image: '/lovable-uploads/09bbb2a9-1f6a-4ac9-832f-0db0cd93bcb6.png',
      link: '/services/marquee-hire',
    },
    {
      title: 'Tables and Chairs',
      description: 'Complete your event setup with our versatile range of tables and chairs, suitable for any occasion and theme.',
      features: ['Round and rectangular tables', 'Various chair styles', 'Flexible quantities'],
      image: '/lovable-uploads/3c60f3dc-8a94-4c5a-b636-8abb26a02e44.png',
      link: '/services/tables-chairs',
    },
    {
      title: 'Additional Equipment',
      description: 'Enhance your event with our comprehensive range of additional equipment and services.',
      features: ['Lighting systems', 'Dance floors', 'Portable facilities'],
      image: '/lovable-uploads/7776586b-dacd-40ff-b836-120ffa42d01e.png',
      link: '/services/additional-equipment',
    },
  ];

  const chairsTablesData = [
    { item: "Stacking Chair", price: "$2.50" },
    { item: "Folding Chair", price: "$3.00" },
    { item: "Plastic Round Table 1.2m", price: "$12.00" },
    { item: "Plastic Round Table 1.8m", price: "$19.50" },
    { item: "Rectangular Plastic Table", price: "$12.00" },
    { item: "Wood Trestle Table", price: "$12.00" },
    { item: "Stage Panel", price: "$60.00" }
  ];

  const portableToiletsData = [
    { item: "Standard Portable Toilet", price: "$100.00" },
    { item: "Flushing Portable Toilet", price: "$150.00" }
  ];

  const marqueesData = [
    { item: "6x6m Marquee", price: "$500.00" },
    { item: "6x9m Marquee", price: "$700.00" },
    { item: "12x9m Marquee", price: "$1,300–$1,500" },
    { item: "12x12m Marquee", price: "$1,800.00" },
    { item: "12x18m Marquee", price: "$2,700.00" },
    { item: "12x24m Marquee", price: "$3,100.00" },
    { item: "12x30m Marquee", price: "$3,900.00" },
    { item: "12x36m Marquee", price: "$4,600.00" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-earth-50">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Comprehensive Event Hire Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            At Kaikohe Hire, we provide everything you need to create a memorable event in the Far North. 
            From stunning marquees to elegant tables and chairs, our high-quality equipment and exceptional 
            service ensure your event runs smoothly.
          </p>
          <Button asChild size="lg" className="btn-primary">
            <Link to="/booking">Get Started</Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-serif font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild className="w-full">
                    <Link to={service.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              January 2025 Equipment Hire Prices
            </h2>
            <p className="text-muted-foreground italic text-lg">
              Prices for 1–3 day hireage. All prices are subject to change.
            </p>
          </div>

          <div className="space-y-12">
            {/* Section 1: Chairs and Tables */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Chairs and Tables</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold text-foreground">Item</TableHead>
                        <TableHead className="font-semibold text-foreground text-right">Price (NZD)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {chairsTablesData.map((row, index) => (
                        <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <TableCell className="font-medium">{row.item}</TableCell>
                          <TableCell className="text-right font-medium">{row.price}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {/* Section 2: Portable Toilets */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Portable Toilets</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold text-foreground">Item</TableHead>
                        <TableHead className="font-semibold text-foreground text-right">Price (NZD)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {portableToiletsData.map((row, index) => (
                        <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <TableCell className="font-medium">{row.item}</TableCell>
                          <TableCell className="text-right font-medium">{row.price}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {/* Section 3: Marquees */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Marquees</CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  All marquees are peg and pole, requiring setup on grass with an additional 1.5m of available area on each side.
                </p>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold text-foreground">Item</TableHead>
                        <TableHead className="font-semibold text-foreground text-right">Price (NZD)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {marqueesData.map((row, index) => (
                        <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <TableCell className="font-medium">{row.item}</TableCell>
                          <TableCell className="text-right font-medium">{row.price}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Plan Your Event?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore our complete range of services and get a personalized quote for your upcoming event.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <Button asChild size="lg" className="btn-primary">
              <Link to="/booking">Book Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
