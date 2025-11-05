import React, { useEffect, useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#hero');

  useEffect(() => {
    const sections = links.map(l => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { root: null, threshold: 0.6 }
    );

    sections.forEach((sec) => sec && observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 text-white" onClick={(e)=>handleNavClick(e,'#hero')}>
          <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
            <Rocket className="h-4 w-4 text-black" />
          </div>
          <span className="font-semibold">HaveCodeAI</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e)=>handleNavClick(e,l.href)}
              className={`text-sm transition ${active === l.href ? 'text-white' : 'text-gray-300 hover:text-white'}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button className="md:hidden text-white" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur border-t border-white/10">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e)=>handleNavClick(e,l.href)}
                className={`text-base ${active === l.href ? 'text-white' : 'text-gray-300'}`}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
