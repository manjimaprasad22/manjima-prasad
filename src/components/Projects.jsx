import React from 'react';
import { motion } from 'framer-motion';
import trip from '../assets/images/tripsman.png';
import ayush from '../assets/images/ayush.png';
import wed from '../assets/images/wed.png';
import forex from '../assets/images/forx.png';
import zq from '../assets/images/zq.png';
import rent from '../assets/images/rent.png';
import crm from '../assets/images/crm.jpeg';
import crm2 from '../assets/images/crm2.png';
import wea from '../assets/images/wea.jpg';
import hall from '../assets/images/hall.png';
import res from '../assets/images/dash.jpg';
import tm from '../assets/images/tm.png';

const projects = [
  {
  title: 'Indian Consular Application (CPV)',
  // image: cpv,
  points: [
    'Developed a responsive consular application to streamline passport and consular service requests for citizens.',
    'Built modules for application submission, document verification, appointment scheduling, and status tracking.',
    'Implemented reusable UI components in React and TypeScript with strong form validation using Zod, ensuring a secure and user-friendly experience.',
  ],
},
  {
  title: 'TravelMythri',
  link: 'https://travelmythri.com/',
  image: tm,
  points: [
    'Developed a responsive travel booking platform for bus, flight, and hotel reservations with a seamless user experience.',
    'Built features for searching, comparing, and booking travel options, along with itinerary management and secure payment workflows.',
    'Implemented reusable UI components in React and TypeScript with strong form validation using Zod for a scalable and reliable application.',
  ],
},
  {
  title: 'CRM Platform',
  image: crm2,
  points: [
    'Developed a comprehensive CRM platform for Study Abroad, Holidays, and Academy management with a responsive and intuitive interface.',
    'Built modules to manage leads, students, customers, bookings, admissions, courses, packages, payments, and workflow tracking from a single dashboard.',
    'Implemented reusable UI components in React and TypeScript with strong form validation using Zod, ensuring scalability and a seamless user experience.',
  ],
},
  {
    title: 'Forex Project',
    image: forex,
    points: [
      'Engineered a responsive money exchange app to manage multi-currency transactions and rate settings across branches.',
      'Built a user-friendly money exchange web app to manage multi-currency transactions across branches..',
      'Implemented UI components in React and TypeScript, with strong form validation using Zod.',
    ],
  },
   {
    title: 'Restaurant ERP',
    image: res,
    points: [
      'Provides a real-time overview of key metrics such as sales, inventory levels, and recent orders.',
      'Manages masters like supplier, branch, products etc.',
      'Detailed reports on sales performance, inventory and financial summaries',
    ],
  },
  {
    title: 'Tripsman',
    image: trip,
    points: [
      'Handled 6 modules and implemented new features and played a crucial role in bug fixing ',
      'Implemented a dashboard application for data visualization using React.js, providing users with real-time insights through interactive charts and graphs',
      'Implemented Localization using i18next',
      'Deployed in AWS.',
      'Integrated payment gateway using react RazorPay',
    ],
  },
  {
    title: 'Ayushman',
    image: ayush,
    points: [
      'Implemented state management using Redux',
      'Perform unit testing, ensure quality assurance of applications through system testing.',
      'Deployed in Hostinger.',
    ],
  },
  {
    title: 'Zimple-Q',
    image: zq,
    points: [
      'Converted an existing project from Vue.js',
      'Write high quality code following architecture',
      'Deployed in Hostinger',
      'Integrated payment gateway with react RazorPay',
    ],
  },
  {
    title: 'CRM',
    image: crm,
    points: [
      'Collaborated with UX/UI designers to create a visually appealing and user-friendly interface.',
      'Organized and wrote modular, well-structured code',
    ],
  },
 
  {
    title: 'Auditorium Booking Register',
    image: hall,
   points: [
  'Built a full-stack auditorium booking platform using Next.js with a responsive and intuitive user interface.',
  'Implemented event scheduling with color-coded halls and time slots, ensuring efficient booking management and preventing scheduling conflicts.',
  'Utilized NeonDB for persistent data storage and leveraged Next.js API Routes and server-side rendering to deliver a fast, scalable, and secure application.',
],
  },
  {
    title: 'Hex-Rentals',
    image: rent,
    points: ['Developed a responsive interface, Implemented React packages for pleasant view'],
  },
  {
    title: 'Weather App',
    image: wea,
    points: [
      'Developed a user-friendly weather application using the OpenWeatherMap API to provide real-time weather information.',
      'Location Search: Users can search for weather details by city name or coordinates.',
      'Weather Details: Displayed current weather conditions, temperature, humidity, wind speed, and weather forecasts.',
    ],
  },
  {
    title: 'Wedding Portfolio',
    image: wed,
    link: 'https://theyellowanchor.netlify.app/',
    featured: false,
    points: [
      'Crafted a digital wedding invitation using React.js.',
      'Used Firebase for data storage and Netlify for hosting.',
    ],
  },
];

const Projects = () => {
  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <motion.article
          key={project.title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, delay: index * 0.05 }}
          className={`project-card ${project.featured ? 'featured' : ''}`}
        >
          <div className="project-media">
            <img src={project.image} alt={project.title} />
            {project.featured && <span className="project-badge">Featured</span>}
          </div>
          <div className="project-body">
            <h3>{project.title}</h3>
            <ul>
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" className="text-link">
                Open project <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </motion.article>
      ))}
    </div>
  );
};

export default Projects;
