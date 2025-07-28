import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const Whitepaper = () => {
  const [activeSection, setActiveSection] = useState('executive-summary');
  const [expandedSections, setExpandedSections] = useState({
    'executive-summary': true,
    'introduction': false,
    'problem': false,
    'solution': false,
    'technology': false,
    'tokenomics': false,
    'roadmap': false,
    'team': false,
    'disclaimer': false
  });

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const sections = [
    { id: 'executive-summary', title: 'Executive Summary', level: 1 },
    { id: 'introduction', title: '1. Introduction', level: 1 },
    { id: 'vision-mission', title: '1.1. Vision & Mission', level: 2 },
    { id: 'market-opportunity', title: '1.2. Market Opportunity', level: 2 },
    { id: 'problem', title: '2. The Problem: The Trust Deficit', level: 1 },
    { id: 'traditional-resumes', title: '2.1. The Dilemma of Traditional Resumes', level: 2 },
    { id: 'verification-cost', title: '2.2. The High Cost of Skill Verification', level: 2 },
    { id: 'education-gap', title: '2.3. The Gap Between Education and Employment', level: 2 },
    { id: 'solution', title: '3. The Solution: The VeriCred Protocol', level: 1 },
    { id: 'core-concept', title: '3.1. Core Concept: The Assetization of Skills', level: 2 },
    { id: 'ecosystem-participants', title: '3.2. Ecosystem Participants', level: 2 },
    { id: 'user-journey', title: '3.3. User Journey Example', level: 2 },
    { id: 'technology', title: '4. Technology Architecture', level: 1 },
    { id: 'system-overview', title: '4.1. System Overview', level: 2 },
    { id: 'proof-of-skill', title: '4.2. Proof-of-Skill (PoSk) Mechanism', level: 2 },
    { id: 'smart-contracts', title: '4.3. Smart Contract System', level: 2 },
    { id: 'tokenomics', title: '5. Tokenomics ($VRC)', level: 1 },
    { id: 'token-details', title: '5.1. Token Details', level: 2 },
    { id: 'core-utility', title: '5.2. Core Utility', level: 2 },
    { id: 'token-allocation', title: '5.3. Token Allocation & Vesting Schedule', level: 2 },
    { id: 'roadmap', title: '6. Roadmap', level: 1 },
    { id: 'team', title: '7. Team & Advisors', level: 1 },
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <div className="bg-primary/80 backdrop-blur-sm border-b border-accent/20 sticky top-0 z-40">
        <div className="container py-4">
          <h1 className="text-2xl font-bold text-white">VeriCred Whitepaper V1.0</h1>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-primary/30 backdrop-blur-sm border-r border-accent/20 sticky top-16 h-screen overflow-y-auto">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Table of Contents</h3>
            <nav className="space-y-1">
              {sections.map(item => (
                <div 
                  key={item.id}
                  className={`cursor-pointer py-2 px-3 rounded-lg transition-colors ${
                    activeSection === item.id ? 'bg-accent/20 text-accent' : 'text-light hover:text-white hover:bg-primary/50'
                  } ${item.level === 2 ? 'ml-4 text-sm' : ''}`}
                  onClick={() => scrollToSection(item.id)}
                >
                  <span className={item.level === 1 ? 'font-medium' : ''}>{item.title}</span>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 max-w-4xl">
          <div className="bg-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
            <h1 className="text-5xl font-bold text-white mb-8">VeriCred Whitepaper V1.0</h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="prose prose-invert prose-lg max-w-none"
            >
            {/* Executive Summary */}
            <section id="executive-summary" className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Executive Summary</h2>
              <div className="text-light leading-relaxed space-y-4">
                <p>
                  VeriCred is a revolutionary, blockchain-based decentralized protocol designed to solve the long-standing skill verification and trust crisis in the global job market. Traditional resumes are filled with unverified information, leading to inefficient recruitment and mismatched opportunities. VeriCred addresses this by creating a distributed database called the "Skill Ledger," which transforms individuals' skills and knowledge into verifiable, immutable digital assets—the $VRC token.
                </p>
                <p>
                  Our vision is to build a new trust layer that allows everyone's abilities to be measured and showcased fairly and transparently, thereby enabling true meritocracy. Learners in the ecosystem can "Learn-to-Earn" through partnered educational platforms or peer reviews; employers can verify candidate abilities efficiently and cost-effectively; and educational institutions can endow their certificates with real, traceable value.
                </p>
                <p>
                  The $VRC token is the core of the entire ecosystem. It not only serves as a value carrier for skills but also drives the platform's governance, incentives, and value flow, aiming to create a sustainable, self-driven global skill economy.
                </p>
              </div>
            </section>

            {/* Introduction */}
            <section id="introduction" className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">1. Introduction</h2>
              
              <div id="vision-mission" className="mb-8">
                <h3 className="text-2xl font-semibold text-accent mb-4">1.1. Vision & Mission</h3>
                <div className="text-light leading-relaxed space-y-4">
                  <p><strong>Vision:</strong> To establish a global, decentralized network for skill verification and value exchange, enabling any skill possessed by anyone to be trusted, measured, and connected.</p>
                  <p><strong>Mission:</strong> To empower individuals with tools for skill sovereignty and provide enterprises with efficient trust solutions through blockchain technology, thereby bridging the gap between education and employment and unleashing the true potential of global talent.</p>
                </div>
              </div>

              <div id="market-opportunity" className="mb-8">
                <h3 className="text-2xl font-semibold text-accent mb-4">1.2. Market Opportunity</h3>
                <div className="text-light leading-relaxed space-y-4">
                  <p>An analysis of the massive market size of global online education, Human Resources Technology (HR Tech), and the Gig Economy.</p>
                  <p>Highlighting that within this multi-trillion-dollar market, the absence of trust and verification is the core bottleneck hindering development—this is precisely where VeriCred makes its entry.</p>
                </div>
              </div>
            </section>

            {/* Continue with other sections... */}
            {/* For brevity, I'll include a few more key sections */}
            
            {/* Problem */}
            <section id="problem" className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">2. The Problem: The Trust Deficit</h2>
              
              <div id="traditional-resumes" className="mb-8">
                <h3 className="text-2xl font-semibold text-accent mb-4">2.1. The Dilemma of Traditional Resumes</h3>
                <div className="text-light leading-relaxed space-y-4">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Lack of transparency in resume information, with skill embellishment and even fabrication becoming commonplace.</li>
                    <li>Absence of a standardized system for measuring capabilities.</li>
                  </ul>
                </div>
              </div>

              <div id="verification-cost" className="mb-8">
                <h3 className="text-2xl font-semibold text-accent mb-4">2.2. The High Cost of Skill Verification</h3>
                <div className="text-light leading-relaxed space-y-4">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Enterprises invest significant time and money in multiple interview rounds, background checks, and technical assessments during recruitment.</li>
                    <li>For freelancers, building personal credibility is a long and difficult process.</li>
                  </ul>
                </div>
              </div>

              <div id="education-gap" className="mb-8">
                <h3 className="text-2xl font-semibold text-accent mb-4">2.3. The Gap Between Education and Employment</h3>
                <div className="text-light leading-relaxed space-y-4">
                  <ul className="list-disc list-inside space-y-2">
                    <li>A vast number of online course certificates lack authority and market recognition.</li>
                    <li>There is a significant conversion barrier between "what is learned" and "what can be applied."</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Tokenomics */}
            <section id="tokenomics" className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">5. Tokenomics ($VRC)</h2>
              
              <div id="token-details" className="mb-8">
                <h3 className="text-2xl font-semibold text-accent mb-4">5.1. Token Details</h3>
                <div className="text-light leading-relaxed">
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Name:</strong> VeriCred</li>
                    <li><strong>Ticker:</strong> $VRC</li>
                    <li><strong>Total Supply:</strong> 1,000,000,000 (1 Billion)</li>
                    <li><strong>Blockchain:</strong> Ethereum L2 (TBD)</li>
                  </ul>
                </div>
              </div>

              <div id="token-allocation" className="mb-8">
                <h3 className="text-2xl font-semibold text-accent mb-4">5.3. Token Allocation & Vesting Schedule</h3>
                <div className="text-light leading-relaxed space-y-4">
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Ecosystem Fund (40%):</strong> To incentivize learners, developers, and educational partners.</li>
                    <li><strong>Team & Advisors (20%):</strong> 12-month lock-up, followed by a 36-month linear vesting period.</li>
                    <li><strong>Community & Early Supporters (15%):</strong> For airdrops, community events, and early funding rounds.</li>
                    <li><strong>Foundation Reserve (15%):</strong> For long-term operations and strategic partnerships.</li>
                    <li><strong>Public Sale / Liquidity (10%):</strong> To provide initial liquidity on decentralized exchanges.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Team */}
            <section id="team" className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">7. Team & Advisors</h2>
              <div className="text-light leading-relaxed space-y-6">
                <div className="bg-primary/50 backdrop-blur-sm border border-accent/20 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-accent mb-2">Alex Chen - Founder & CEO</h4>
                  <p>A product visionary with over a decade of experience in HR technology. Alex was formerly a Senior Product Manager at LinkedIn's Talent Solutions division, where he was responsible for developing enterprise-level skill analytics tools that helped Fortune 500 companies understand their workforce capabilities.</p>
                </div>
                
                <div className="bg-primary/50 backdrop-blur-sm border border-accent/20 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-accent mb-2">Priya Sharma - CTO</h4>
                  <p>A seasoned distributed systems engineer with deep expertise in Web3. Priya previously worked as a Staff Software Engineer at Google Cloud, specializing in decentralized identity protocols and large-scale data processing systems for emerging technologies.</p>
                </div>
                
                <div className="bg-primary/50 backdrop-blur-sm border border-accent/20 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-accent mb-2">Ben Carter - COO</h4>
                  <p>A growth and operations expert with a proven track record in scaling Web3 ecosystems. Ben was formerly the Head of Growth for APAC at a leading Web3 infrastructure platform, where he led ecosystem partnerships and expanded the community across more than a dozen countries.</p>
                </div>
                
                <div className="bg-primary/50 backdrop-blur-sm border border-accent/20 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-accent mb-2">Dr. Evelyn Reed - Advisor</h4>
                  <p>A respected academic in the field of digital economy. Dr. Reed is a Research Fellow at Stanford's Digital Economy Lab, where her work focuses on the future of work, digital credentialing systems, and the impact of technology on labor markets.</p>
                </div>
              </div>
            </section>
            </motion.div>
           </div>
         </div>
       </div>
     </div>
   );
 };

export default Whitepaper;