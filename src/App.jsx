import React from 'react';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Sections
import Hero from './sections/Hero';
import Problem from './sections/Problem';
import HowItWorks from './sections/HowItWorks';
import Tokenomics from './sections/Tokenomics';
import Team from './sections/Team';
import Roadmap from './sections/Roadmap';

function App() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Tokenomics />
        <Team />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
}

export default App;
