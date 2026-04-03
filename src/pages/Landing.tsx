import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { McpSection } from '../components/McpSection';
import { DocsNav } from '../components/DocsNav';
import { BusinessScenes } from '../components/BusinessScenes';
import { SecuritySection } from '../components/SecuritySection';
import { Footer } from '../components/Footer';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900 font-sans">
      <Header />
      <main>
        <Hero />
        <McpSection />
        <DocsNav />
        <BusinessScenes />
        <SecuritySection />
      </main>
      <Footer />
    </div>
  );
}
