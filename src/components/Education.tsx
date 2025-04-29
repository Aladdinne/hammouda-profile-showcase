
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Education = () => {
  const educationItems = [
    {
      degree: "Ingénieur en informatique",
      institution: "École Supérieure Privée d'Ingénierie et de Technologies (ESPRIT)",
      period: "2021 - 2024",
      description: "Spécialisation en développement web, DevOps et systèmes embarqués."
    },
    {
      degree: "Licence en Électronique, Électrotechnique et Automatique (EEA)",
      institution: "Faculté des Sciences de Monastir (FSM)",
      period: "2018 - 2021",
      description: "Formation en électronique, automatique et systèmes embarqués."
    }
  ];

  return (
    <section id="education" className="py-20 bg-portfolio-light-gray">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="section-title mb-16">Formation</h2>
        
        <div className="space-y-8">
          {educationItems.map((item, index) => (
            <Card 
              key={index} 
              className="animate-fade-in bg-white"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <CardTitle className="text-xl font-bold text-portfolio-blue">{item.degree}</CardTitle>
                  <CardDescription className="font-medium">{item.period}</CardDescription>
                </div>
                <CardDescription className="text-lg font-semibold text-portfolio-dark">
                  {item.institution}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-portfolio-medium-dark">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
