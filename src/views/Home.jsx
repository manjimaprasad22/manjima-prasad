import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import NavBarComp from '../components/NavBarComp';
import Bannerabout from '../components/Bannerabout';
import Skills from '../components/Skills';
import '../assets/style.css';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Education from '../components/Education';
import { ContactUs } from '../components/ContactUs';
import Footers from '../components/Footers';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
  const [activeSection, setActiveSection] = useState('About');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.style.background = theme === 'dark' ? '#060816' : '#f8fafc';
  }, [theme]);

  useEffect(() => {
    const sectionNames = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'hire'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute('name'));
          }
        });
      },
      { threshold: 0.35 }
    );

    sectionNames.forEach((name) => {
      const element = document.querySelector(`[name="${name}"]`);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <NavBarComp activeSection={activeSection} theme={theme} setTheme={setTheme} />
      <main className="portfolio-shell">
        <section className="hero-shell">
          <div className="aurora aurora-one" />
          <div className="aurora aurora-two" />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="container"
          >
            <Element name="About" >
              <Bannerabout />
            </Element>
          </motion.div>
        </section>

        <div className="container">
          <Element name="Skills" >
            <div className="section-heading">
              <div>
                <p className="eyebrow">Core stack</p>
                <h2>Crafting polished interfaces and resilient systems.</h2>
              </div>
            </div>
            <Skills />
          </Element>

          <Element name="Experience" >
            <div className="section-heading">
              <div>
                <p className="eyebrow">Experience</p>
                <h2>Professional milestones and product impact.</h2>
              </div>
            </div>
            <Experience />
          </Element>

          <Element name="Projects" >
            <div className="section-heading">
              <div>
                <p className="eyebrow">Selected work</p>
                <h2>Product-minded builds shipped across web experiences.</h2>
              </div>
            </div>
            <Projects />
          </Element>

          <Element name="Education" >
            <div className="section-heading">
              <div>
                <p className="eyebrow">Education</p>
                <h2>A strong technical foundation backed by consistent learning.</h2>
              </div>
            </div>
            <Education />
          </Element>

          <Element name="hire" >
            <ContactUs />
          </Element>
        </div>

        <Footers />
      </main>
    </>
  );
};

export default Home;
