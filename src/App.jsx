import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
import Whitepaper from './sections/Whitepaper';

// Home Page Component
const HomePage = () => (
  <main>
    <Hero />
    <Problem />
    <HowItWorks />
    <Tokenomics />
    <Team />
    <Roadmap />
  </main>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
