import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../assets/style.css';
import { Link } from 'react-scroll';
import { GitBranch, Moon, Sun } from 'lucide-react';

const NavBarComp = ({ activeSection, theme, setTheme }) => {
  const navItems = [
    { label: 'About', target: 'About' },
    { label: 'Skills', target: 'Skills' },
    { label: 'Experience', target: 'Experience' },
    { label: 'Projects', target: 'Projects' },
    { label: 'Education', target: 'Education' },
    { label: 'Hire me', target: 'hire' },
  ];

  return (
    <Navbar expand="lg" fixed="top" className="floating-nav">
      <Container>
        <Link to="About" smooth={true} duration={500} offset={-80} className="brand-mark">
          MP
        </Link>

        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle color theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Navbar.Toggle aria-controls="portfolio-nav" />
        </div>

        <Navbar.Collapse id="portfolio-nav">
          <div className="nav-links">
            {navItems.map((item) => (
              <Link
                key={item.target}
                to={item.target}
                smooth={true}
                duration={500}
                offset={-80}
                className={`nav-link-item ${activeSection === item.target ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
            <a className="pill-button" href="https://github.com/manjimaprasad22" target="_blank" rel="noreferrer">
              <GitBranch size={16} /> GitHub
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComp;
