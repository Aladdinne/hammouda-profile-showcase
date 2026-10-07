
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    toast({
      title: "Message envoyé !",
      description: "Merci pour votre message. Je vous répondrai dès que possible.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="section-title mb-16">Contact</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-portfolio-dark">Envoyez-moi un message</CardTitle>
              <CardDescription>Remplissez le formulaire ci-dessous et je vous répondrai dès que possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-portfolio-dark">Nom</label>
                    <Input id="name" placeholder="Votre nom" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-portfolio-dark">Email</label>
                    <Input id="email" type="email" placeholder="votre@email.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-portfolio-dark">Message</label>
                  <Textarea id="message" placeholder="Votre message" rows={5} required />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-portfolio-blue hover:bg-portfolio-light-blue text-white"
                >
                  Envoyer
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-6 animate-slide-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-portfolio-dark">Coordonnées</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-portfolio-blue" size={20} />
                  <div>
                    <p className="text-sm text-portfolio-medium-dark">Email</p>
                    <a 
                      href="mailto:alaeddine.hammouda213@gmail.com" 
                      className="text-portfolio-dark hover:text-portfolio-blue"
                    >
                      alaeddine.hammouda213@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="text-portfolio-blue" size={20} />
                  <div>
                    <p className="text-sm text-portfolio-medium-dark">Téléphone</p>
                    <a 
                      href="tel:+21622623703" 
                      className="text-portfolio-dark hover:text-portfolio-blue"
                    >
                      +216 22 623 703
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="text-portfolio-blue" size={20} />
                  <div>
                    <p className="text-sm text-portfolio-medium-dark">Localisation</p>
                    <p className="text-portfolio-dark">Ariana, Tunisie</p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <p className="text-sm text-portfolio-medium-dark mb-2">Retrouvez-moi sur</p>
                  <div className="flex gap-4">
                    <a 
                      href="https://www.linkedin.com/in/alaeddine-hammouda-93927415b/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-portfolio-dark hover:text-portfolio-blue transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={24} />
                    </a>
                    <a 
                      href="https://github.com/Aladdinne" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-portfolio-dark hover:text-portfolio-blue transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={24} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
