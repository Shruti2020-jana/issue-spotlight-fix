import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertTriangle, Camera, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ReportForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Issue Report Submitted",
      description: "Your civic issue has been reported successfully. You'll receive updates on the progress.",
    });
  };

  const issueCategories = [
    'Road Damage / Potholes',
    'Street Light Outage',
    'Garbage Collection',
    'Water Supply Issue',
    'Drainage Problems',
    'Public Property Damage',
    'Traffic Signal Malfunction',
    'Park Maintenance',
    'Noise Complaints',
    'Other',
  ];

  return (
    <section id="report" className="py-20 bg-civic-gray-light">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Report a Civic Issue
            </h2>
            <p className="text-xl text-muted-foreground">
              Help us improve your community by reporting issues that need attention
            </p>
          </div>
          
          <Card className="shadow-card bg-gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-civic-warning" />
                Issue Details
              </CardTitle>
              <CardDescription>
                Please provide as much detail as possible to help us address the issue quickly
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="category">Issue Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the type of issue" />
                    </SelectTrigger>
                    <SelectContent>
                      {issueCategories.map((category) => (
                        <SelectItem key={category} value={category.toLowerCase().replace(/\s+/g, '-')}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="location" 
                      placeholder="Street address or landmark"
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description"
                    placeholder="Describe the issue in detail. Include any relevant information that would help in resolving it."
                    className="min-h-[120px]"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="contact">Contact Information (Optional)</Label>
                  <Input 
                    id="contact" 
                    type="email"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="button" variant="civic-outline" className="flex-1">
                    <Camera className="h-4 w-4 mr-2" />
                    Add Photo
                  </Button>
                  <Button type="submit" variant="civic" className="flex-1">
                    <Send className="h-4 w-4 mr-2" />
                    Submit Report
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReportForm;