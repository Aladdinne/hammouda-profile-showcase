
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Langages',
      skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'HTML/CSS'],
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['Spring Boot', 'Angular', 'Node.js', 'React.js', 'Express.js'],
    },
    {
      title: 'Bases de données',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
    },
    {
      title: 'DevOps',
      skills: ['Docker', 'GitLab CI', 'Jenkins', 'Prometheus', 'Grafana', 'Git'],
    },
    {
      title: 'Méthodologie',
      skills: ['Agile', 'SCRUM', 'Kanban'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="section-title mb-16">Compétences</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div 
              key={category.title} 
              className="bg-portfolio-light-gray p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-portfolio-blue mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="skill-tag"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
