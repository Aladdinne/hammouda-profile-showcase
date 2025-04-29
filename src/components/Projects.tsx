
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Workflow Management System",
      description: "Système de gestion de workflow permettant l'automatisation des processus métier avec suivi en temps réel et analytics.",
      technologies: ["Java", "Spring Boot", "Angular", "PostgreSQL", "Docker"],
      github: "https://github.com/user/workflow-management",
      image: "/placeholder.svg"
    },
    {
      title: "Projet DevOps CI/CD",
      description: "Pipeline d'intégration et de déploiement continu complet avec Jenkins, SonarQube et Docker pour applications Java/Angular.",
      technologies: ["Jenkins", "SonarQube", "Docker", "GitLab CI", "Kubernetes"],
      github: "https://github.com/user/devops-pipeline",
      image: "/placeholder.svg"
    },
    {
      title: "Gestion Camping Full-Stack",
      description: "Application complète de gestion de camping avec réservations, paiements, et gestion des ressources.",
      technologies: ["Spring Boot", "Angular", "MySQL", "Docker", "JWT"],
      github: "https://github.com/user/camping-management",
      image: "/placeholder.svg"
    },
    {
      title: "Plateforme éducative",
      description: "Plateforme éducative combinant une interface web et desktop pour l'apprentissage interactif et la gestion des cours.",
      technologies: ["React.js", "Node.js", "MongoDB", "Electron", "Socket.IO"],
      github: "https://github.com/user/education-platform",
      image: "/placeholder.svg"
    },
    {
      title: "Système embarqué ADAS",
      description: "Système avancé d'assistance à la conduite avec détection de voies et surveillance de fatigue du conducteur.",
      technologies: ["Python", "OpenCV", "TensorFlow", "Raspberry Pi", "C++"],
      github: "https://github.com/user/adas-system",
      image: "/placeholder.svg"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="section-title mb-16">Projets académiques</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-40 bg-portfolio-light-gray flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-16 h-16 opacity-50" 
                />
              </div>
              <CardHeader>
                <CardTitle className="text-portfolio-dark">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-portfolio-medium-dark mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-1 mt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" asChild className="w-full">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 justify-center"
                  >
                    <Github size={16} /> Voir sur GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
