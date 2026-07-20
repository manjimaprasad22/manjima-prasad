import React from 'react';
import { ArrowUp, ExternalLink, GitBranch } from 'lucide-react';
import '../assets/style.css';

const Footers = () => {
  const socialLinks = [
    { icon: ExternalLink, href: 'https://x.com/ManjimaPrasad?t=HIDlGnt2ogtKkYE3Rz2OZw&s=08' },
    { icon: ExternalLink, href: 'https://www.instagram.com/_manj_ima___' },
    { icon: ExternalLink, href: 'https://www.linkedin.com/in/manjima-prasad-pj-7934921b9/' },
    { icon: GitBranch, href: 'https://github.com/manjimaprasad22' },
  ];

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer-shell">
      <div className="container footer-grid">
        <div>
          <p className="eyebrow">Portfolio</p>
          <h3>Manjima Prasad</h3>
          <p>Building thoughtful web experiences with modern UI and reliable engineering.</p>
        </div>
        <div>
          <h4>Quick links</h4>
          <ul className="footer-links">
            <li><a href="#About">About</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Experience">Experience</a></li>
            <li><a href="#hire">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Follow</h4>
          <div className="footer-socials">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="icon-chip" aria-label="social link">
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      {/* <div className="footer-bottom">
       
        <button type="button" className="scroll-top" onClick={scrollTop} aria-label="Back to top">
          <ArrowUp size={16} />
        </button>
      </div> */}
    </footer>
  );
};

export default Footers;
