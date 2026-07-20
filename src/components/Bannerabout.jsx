import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Download, ExternalLink, GitBranch, Mail, Send } from 'lucide-react';
import ima from '../assets/images/dev.png';
import pdfUrl from '../assets/images/MANJIMA PRASAD.pdf';
import { Link } from 'react-router-dom';

const Bannerabout = () => {
  const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'ManjimaPrasad.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socials = [
    { icon: GitBranch, href: 'https://github.com/manjimaprasad22', label: 'GitHub' },
    { icon: ExternalLink, href: 'https://www.linkedin.com/in/manjima-prasad-pj-7934921b9/', label: 'LinkedIn' },
    { icon: ExternalLink, href: 'https://x.com/ManjimaPrasad?t=HIDlGnt2ogtKkYE3Rz2OZw&s=08', label: 'Twitter' },
  ];

  return (
    <div className="hero-grid">
      <motion.div initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="hero-copy">
        <span className="eyebrow">Software Developer • React • Product-focused</span>
        <h1>Manjima Prasad</h1>
        <TypeAnimation
          sequence={['React Developer', 1000, 'Software Developer', 1000, 'Frontend Engineer', 1000]}
          repeat={Infinity}
          className="typed-text"
        />
        <p>
          I build elegant, high-performing web experiences with a strong focus on clean architecture, thoughtful UX, and reliable delivery.
          My background spans React, modern frontend tooling, and collaborative product development across fast-moving teams.
        </p>

        <div className="hero-actions">
          <button type="button" className="primary-button" onClick={downloadPdf}>
            <Download size={18} /> Download Resume
          </button>
        
        </div>

        <div className="social-row">
          {socials.map((item) => {
            const Icon = item.icon;
            return (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label} className="icon-chip">
                <Icon size={18} />
              </a>
            );
          })}
          <a href="mailto:manjimaprasad22@gmail.com" className="icon-chip" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="hero-visual">
        <div className="portrait-card">
          <img src={ima} alt="Manjima Prasad" className="hero-image" />
          <div className="floating-badge">
            <span>4 years</span>
            <strong>Frontend engineering</strong>
          </div>
        </div>
        <div className="mini-card">
          <p>Currently building polished web products with accessible, maintainable interfaces.</p>
          {/* <a href="#Projects" className="text-link">
            Explore projects <ArrowRight size={16} />
          </a> */}
        </div>
      </motion.div>
    </div>
  );
};

export default Bannerabout;
