
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Pricing = () => {
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white py-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo Placeholder */}
            <div className="w-48 h-16 bg-gray-200 border-2 border-dashed border-gray-400 flex items-center justify-center rounded">
              <span className="text-gray-500 text-sm">LOGO</span>
            </div>
            
            {/* Title and Disclaimer */}
            <div className="text-center flex-1">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
                January 2025 Equipment Hire Prices
              </h1>
              <p className="text-muted-foreground italic text-sm md:text-base">
                Prices for 1–3 day hireage. All prices are subject to change.
              </p>
            </div>
            
            {/* Spacer for balance */}
            <div className="w-48 hidden md:block"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="section-padding">
        <div className="container-custom space-y-12">
          
          {/* Section 1: Chairs and Tables */}
          <section>
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
          </section>

          {/* Section 2: Portable Toilets */}
          <section>
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
          </section>

          {/* Section 3: Marquees */}
          <section>
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
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-gray-50 py-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <Button asChild size="lg" className="btn-primary">
              <a href="/contact">Contact Us</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/booking">Get Quote</a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;
