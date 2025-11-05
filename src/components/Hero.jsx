import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden">
      <div className="relative h-[70vh] w-full">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Gradient overlay for readability without blocking interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black"></div>
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 backdrop-blur">
              <Sparkles className="h-4 w-4 text-yellow-300" />
              <span className="text-xs tracking-wide text-gray-200">AI • Full‑Stack • Automation</span>
            </div>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl">
              HaveCodeAI
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">Intelligent Systems, Built to Scale</span>
            </h1>
            <p className="mt-4 max-w-2xl text-gray-300">
              We are a 4‑member team building RGA‑powered apps, LLM integrations, and scalable web solutions — led by Surineni Siddhartha Surineni (AI Intern | B.Tech AI & ML).
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-black shadow hover:shadow-md transition"
              >
                <Rocket className="h-4 w-4" />
                Explore Services
              </a>
              <a
                href="#team"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 px-4 py-2 text-white hover:bg-white/10 transition"
              >
                Meet the Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
