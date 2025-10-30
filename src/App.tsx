import React from 'react'
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeatureCards } from './components/FeatureCards';
import { About } from './components/About';
import { Services } from './components/Services';
import { MonitorSection } from './components/MonitorSection';
import { WorkingProcess } from './components/WorkingProcess';
import { Testimonial } from './components/Testimonial';
import { Solutions } from './components/Solutions';
import { Blog } from './components/Blog';
import { Newsletter } from './components/Newsletter';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <FeatureCards />
        <About />
        <Services />
        <MonitorSection />
        <WorkingProcess />
        <Testimonial />
        <Solutions />
        <Blog />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
