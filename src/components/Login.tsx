import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { User, Building2, Shield, LogIn } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login Successful",
      description: "Welcome to your CivicFix dashboard!",
    });
  };

  const userRoles = [
    {
      value: 'citizen',
      label: 'Local Citizen',
      icon: User,
      description: 'Report issues and track their resolution',
    },
    {
      value: 'representative',
      label: 'Local Representative',
      icon: Building2,
      description: 'Manage and respond to citizen reports',
    },
    {
      value: 'authority',
      label: 'Higher Authority',
      icon: Shield,
      description: 'Oversee municipal operations and policies',
    },
  ];

  return (
    <section id="login" className="py-20 bg-civic-gray-light">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Login to CivicFix
            </h2>
            <p className="text-muted-foreground">
              Access your dashboard based on your role
            </p>
          </div>
          
          <Card className="shadow-card bg-gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LogIn className="h-5 w-5 text-civic-blue" />
                Choose Your Role
              </CardTitle>
              <CardDescription>
                Select your user type to access the appropriate dashboard
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="role">User Role</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      {userRoles.map((role) => (
                        <SelectItem key={role.value} value={role.value}>
                          <div className="flex items-center gap-2">
                            <role.icon className="h-4 w-4" />
                            {role.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    type="password"
                    placeholder="Enter your password"
                  />
                </div>
                
                <Button type="submit" variant="civic" className="w-full">
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Button>
                
                <div className="text-center">
                  <button 
                    type="button"
                    className="text-sm text-civic-blue hover:underline"
                  >
                    Forgot your password?
                  </button>
                </div>
              </form>
            </CardContent>
          </Card>
          
          {/* Role descriptions */}
          <div className="mt-8 space-y-4">
            {userRoles.map((role) => (
              <Card key={role.value} className="border-l-4 border-l-civic-blue/30">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <role.icon className="h-5 w-5 text-civic-blue" />
                    <div>
                      <div className="font-medium text-foreground">{role.label}</div>
                      <div className="text-sm text-muted-foreground">{role.description}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;