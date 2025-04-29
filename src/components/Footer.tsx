
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-dark text-white py-8">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-xl font-bold">
              Alaeddine<span className="text-portfolio-blue">.</span>Hammouda
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Alaeddine Hammouda. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
