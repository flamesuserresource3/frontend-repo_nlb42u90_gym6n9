import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Editor from './components/Editor';
import Footer from './components/Footer';
import { services as defaultServices, team as defaultTeam } from './data';

function App() {
  const defaults = useMemo(() => ({ services: defaultServices, team: defaultTeam }), []);
  const [content, setContent] = useState(defaults);

  const handleApply = (json) => {
    setContent({
      services: json.services || [],
      team: json.team || [],
    });
  };

  const handleReset = () => setContent(defaults);

  return (
    <div className="min-h-screen flex flex-col bg-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Services services={content.services} />
        <Team team={content.team} />
        <Editor data={content} onApply={handleApply} onReset={handleReset} />

        {/* Simple contact CTA */}
        <section id="contact" className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-2xl md:text-3xl font-bold">Ready to build with AI?</h3>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
              Tell us about your idea and we’ll propose a clear, pragmatic plan.
            </p>
            <div className="mt-6">
              <a
                href="mailto:team@havecode.ai"
                className="inline-flex items-center justify-center rounded-md bg-black px-5 py-3 text-white shadow hover:shadow-md transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
