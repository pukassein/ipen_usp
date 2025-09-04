import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-800 p-4 shadow-md border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <a href="https://www.gov.br/ipen/pt-br" target="_blank" rel="noopener noreferrer" aria-label="Página inicial do IPEN">
            <img 
              src="/ipen_logo_azul.png" 
              alt="Logotipo do IPEN" 
              className="h-12 sm:h-16 object-contain"
            />
        </a>

        <div className="text-center">
          <h1 className="text-lg sm:text-2xl md:text-3xl font-extrabold tracking-tight text-ipen-blue dark:text-white">
            Portal do Aluno IPEN/USP
          </h1>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-300 hidden sm:block">
            Pós-Graduação em Tecnologia Nuclear
          </p>
        </div>
        
        <a href="https://www5.usp.br/" target="_blank" rel="noopener noreferrer" aria-label="Página inicial da USP">
            <img 
              src="/usp-logo-transparente-800-400.png" 
              alt="Logotipo da USP" 
              className="h-12 sm:h-16 object-contain"
            />
        </a>
      </div>
    </header>
  );
};