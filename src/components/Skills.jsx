import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Cloud, Workflow, Wrench, Cpu } from "lucide-react";

const skillsByCategory = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["React.js", "Next.js", "TypeScript", "Redux"],
  },
  {
    title: "Backend",
    icon: Cpu,
    items: [
      "Node.js",
      "Express",
      "REST APIs",
      "Authentication",
      // "State management",
    ],
  },
  {
    title: "Database",
    icon: Database,
    items: [
      "PostgreSQL",
      "MongoDB",
      "Firebase",
      // "Database Design",
      "Schema Design",
    ],
  },
  {
    title: "Cloud",
    icon: Cloud,
    items: ["Cloudinary","Vercel", "Netlify", "Hostinger", "Deployment pipelines"],
  },
  {
    title: "DevOps",
    icon: Workflow,
    items: ["Git", "GitLab", "CI/CD awareness", "Version control"],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Vite", "Webpack", "Razorpay", "i18next", "Zod"],
  },
];

const Skills = () => {
  return (
    <div className="skills-grid">
      {skillsByCategory.map((category, index) => {
        const Icon = category.icon;
        return (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            className="skill-category-card"
          >
            <div className="skill-category-header">
              <div className="skill-icon-wrap">
                <Icon size={18} />
              </div>
              <div>
                <h3>{category.title}</h3>
                <p>Core focus</p>
              </div>
            </div>
            <div className="skill-badges">
              {category.items.map((skill) => (
                <span key={skill} className="skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Skills;
