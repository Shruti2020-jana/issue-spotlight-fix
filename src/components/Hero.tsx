import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Users, CheckCircle, Clock } from 'lucide-react';

const Hero = () => {
  const scrollToReport = () => {
    const element = document.getElementById('report');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: MapPin, label: 'Issues Reported', value: '2,847' },
    { icon: CheckCircle, label: 'Issues Resolved', value: '2,156' },
    { icon: Clock, label: 'Avg. Response Time', value: '3.2 days' },
    { icon: Users, label: 'Active Citizens', value: '12,394' },
  ];

  return (
    <section id="home" className="relative bg-gradient-hero py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-civic-blue/5 to-civic-blue-light/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Report Civic Issues &
            <span className="block text-civic-blue-light">Track Their Resolution</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of citizens making their communities better. Report problems, track progress, and see real change happen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToReport}
              className="text-lg px-8 py-6"
            >
              Report an Issue
            </Button>
            <Button 
              variant="civic-outline" 
              size="lg"
              className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-civic-blue"
            >
              View Map
            </Button>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-background/10 backdrop-blur border-primary-foreground/20 p-6 text-center">
                <stat.icon className="h-8 w-8 text-primary-foreground mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary-foreground">{stat.value}</div>
                <div className="text-sm text-primary-foreground/80">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;