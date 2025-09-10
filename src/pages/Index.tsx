import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ReportForm from '@/components/ReportForm';
import About from '@/components/About';
import Login from '@/components/Login';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ReportForm />
        <About />
        <Login />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
