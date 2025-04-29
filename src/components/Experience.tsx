
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "UpTech",
      period: "février 2024 - Présent",
      description: "Développement d'un système de gestion de stock RFID pour optimiser le suivi d'inventaire et la logistique en temps réel.",
      technologies: ["Java", "Spring Boot", "Angular", "PostgreSQL", "Docker", "RFID"],
    },
    {
      company: "Digi Smart Solutions",
      period: "2023",
      description: "Conception et développement d'un tableau de bord IoT en temps réel permettant la visualisation et l'analyse des données provenant de divers capteurs.",
      technologies: ["Node.js", "React", "MongoDB", "MQTT", "Redis", "Docker"],
    },
    {
      company: "Tunisie Telecom",
      period: "2022",
      description: "Participation à un projet d'optimisation et de maintenance des réseaux mobiles 2G/3G/4G, avec focus sur l'amélioration des performances et de la couverture.",
      technologies: ["Python", "Bash", "SQL", "Systèmes embarqués", "Réseaux"],
    },
  ];

  return (
    <section id="experiences" className="py-20 bg-portfolio-light-gray">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="section-title mb-16">Expérience professionnelle</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="experience-card animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-bold text-portfolio-dark">{exp.company}</h3>
                <span className="text-portfolio-medium-dark font-medium">{exp.period}</span>
              </div>
              <p className="text-portfolio-medium-dark mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
