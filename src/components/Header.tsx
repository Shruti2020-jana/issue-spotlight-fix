import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Users, FileText } from 'lucide-react';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-civic-blue" />
            <h1 className="text-xl font-bold text-civic-blue">CivicFix</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-muted-foreground hover:text-civic-blue transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('report')}
              className="text-muted-foreground hover:text-civic-blue transition-colors"
            >
              Report Issue
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-civic-blue transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('login')}
              className="text-muted-foreground hover:text-civic-blue transition-colors"
            >
              Login
            </button>
          </div>
          
          <Button 
            variant="civic" 
            onClick={() => scrollToSection('report')}
            className="hidden md:flex"
          >
            Report Issue
          </Button>
          
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
          >
            <FileText className="h-4 w-4" />
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;