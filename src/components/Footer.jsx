import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-white font-semibold text-lg">HaveCodeAI</h3>
          <p className="text-sm text-gray-400 mt-1">© {new Date().getFullYear()} HaveCodeAI. All rights reserved.</p>
        </div>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#team" className="hover:text-white">Team</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
