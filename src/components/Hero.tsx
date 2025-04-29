
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone, FileText } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-20 bg-gradient-to-br from-white to-portfolio-light-gray">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-start animate-fade-in">
          <div className="mb-4">
            <span className="text-portfolio-blue font-medium">Bonjour, je suis</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-portfolio-dark mb-4">
            Alaeddine Hammouda
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-medium-dark mb-8">
            Développeur Full Stack Java/Angular
          </h2>
          <div className="max-w-2xl">
            <p className="text-lg text-portfolio-medium-dark mb-8">
              Ingénieur informatique passionné par le développement web et les technologies Java/Angular, 
              avec une expérience pratique dans la création d'applications web performantes et évolutives. 
              Spécialisé dans le développement full stack, DevOps et les systèmes embarqués.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Button asChild className="bg-portfolio-blue hover:bg-portfolio-light-blue text-white">
              <a href="#contact">Me contacter</a>
            </Button>
            <Button variant="outline" asChild className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue/10">
              <a href="/CV-Alaeddine-Hammouda.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <FileText size={16} /> Télécharger CV
              </a>
            </Button>
          </div>
          
          <div className="flex gap-4">
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <Linkedin size={isMobile ? 20 : 24} />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <Github size={isMobile ? 20 : 24} />
            </a>
            <a href="mailto:alaeddine.hammouda213@gmail.com" className="social-icon" aria-label="Email">
              <Mail size={isMobile ? 20 : 24} />
            </a>
            <a href="tel:+21622623703" className="social-icon" aria-label="Phone">
              <Phone size={isMobile ? 20 : 24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
