import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, Zap, Eye, Target, Heart, Clock, Award, Globe, CheckCircle, TrendingUp, Star } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Citizens report issues and work together with local authorities to create positive change.',
    },
    {
      icon: Eye,
      title: 'Transparent Process',
      description: 'Track the status of your reports and see how issues are being addressed in real-time.',
    },
    {
      icon: Zap,
      title: 'Quick Response',
      description: 'Issues are automatically routed to the right departments for faster resolution.',
    },
    {
      icon: Shield,
      title: 'Verified Reports',
      description: 'All submissions are reviewed to ensure legitimate issues receive proper attention.',
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Round-the-clock system monitoring ensures no issue goes unnoticed.',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Every resolution is quality-checked to ensure lasting solutions.',
    },
    {
      icon: Globe,
      title: 'City-Wide Coverage',
      description: 'Comprehensive coverage across all neighborhoods and districts.',
    },
    {
      icon: CheckCircle,
      title: 'Verified Solutions',
      description: 'Solutions are verified by both authorities and community members.',
    },
  ];

  const mission = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To bridge the gap between citizens and local government, creating more responsive and accountable public services.',
    },
    {
      icon: Heart,
      title: 'Our Vision',
      description: 'Empowering communities to actively participate in improving their neighborhoods and quality of life.',
    },
    {
      icon: TrendingUp,
      title: 'Our Goal',
      description: 'Continuously improving civic services through data-driven insights and community feedback.',
    },
    {
      icon: Star,
      title: 'Our Values',
      description: 'Transparency, accountability, and citizen empowerment are at the core of everything we do.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Shaktiman
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connecting citizens with local authorities to build stronger, more responsive communities
            </p>
          </div>
          
          {/* Mission, Vision & Values */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {mission.map((item, index) => (
              <Card key={index} className="shadow-card bg-gradient-card border-l-4 border-l-civic-blue">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-civic-blue/10 p-3 rounded-lg">
                      <item.icon className="h-6 w-6 text-civic-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* How It Works */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">How It Works</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="shadow-card hover:shadow-hero transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="bg-civic-blue/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <feature.icon className="h-8 w-8 text-civic-blue" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Statistics */}
          <div className="bg-civic-blue/5 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">Making a Real Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-civic-blue mb-2">75%</div>
                <div className="text-muted-foreground">Average Resolution Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-civic-blue mb-2">3.2 Days</div>
                <div className="text-muted-foreground">Average Response Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-civic-blue mb-2">50+</div>
                <div className="text-muted-foreground">Partner Municipalities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;