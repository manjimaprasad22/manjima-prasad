import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import ktu from '../assets/images/ktu.jpg';
import kerala from '../assets/images/kerala.jpg';
import cbse from '../assets/images/cbse.jpg';

const educationItems = [
  {
    title: 'BTech - Information Technology',
    institution: 'Government Engineering College Idukki',
    year: '2018-2022',
    score: 'CGPA: 6.7',
    logo: ktu,
    badgeLink: 'https://www.cloudskillsboost.google/public_profiles/f453072c-0d0c-48a0-8c8b-7c68b4045dc3',
    icon: GraduationCap,
  },
  {
    title: 'Higher Secondary',
    institution: 'Kunhali Marakkar HSS Kottakkal',
    year: '2018',
    score: 'Percentage: 84%',
    logo: kerala,
    icon: BookOpen,
  },
  {
    title: '10th Grade',
    institution: 'Vidyaniketan Public School Payyoli',
    year: '2016',
    score: 'CGPA: 9.8',
    logo: cbse,
    icon: Award,
  },
];

const Education = () => {
  return (
    <div className="education-grid">
      {educationItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            className="education-card"
          >
            <div className="education-card-head">
              <img src={item.logo} alt={item.institution} className="education-logo" />
              <div className="education-icon-wrap">
                <Icon size={18} />
              </div>
            </div>
            <div className="education-card-body">
              <h3>{item.title}</h3>
              <p className="course-name">{item.institution}</p>
              <p className="education-year">{item.year}</p>
              <p className="education-score">{item.score}</p>
              {item.badgeLink && (
                <a href={item.badgeLink} target="_blank" rel="noreferrer" className="text-link inline-link">
                  Badges ↗
                </a>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Education;
