import React from 'react';

type Page = 'home' | 'professors';

interface HeaderProps {
    currentPage: Page;
    onNavigate: (page: Page) => void;
}

const NavButton: React.FC<{
    page: Page;
    currentPage: Page;
    onNavigate: (page: Page) => void;
    children: React.ReactNode;
}> = ({ page, currentPage, onNavigate, children }) => {
    const isActive = currentPage === page;
    return (
        <button
            onClick={() => onNavigate(page)}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive 
                    ? 'bg-ipen-blue text-white dark:bg-ipen-gold dark:text-ipen-blue' 
                    : 'text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
        >
            {children}
        </button>
    );
};

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  return (
    <header className="bg-white dark:bg-gray-800 p-4 shadow-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between gap-4">
        {/* Left Side */}
        <div className="flex-1 flex justify-start">
            <div className="flex items-center gap-4">
                <a href="https://www.gov.br/ipen/pt-br" target="_blank" rel="noopener noreferrer" aria-label="Página inicial do IPEN">
                    <img 
                      src="/ipen_logo_azul.png" 
                      alt="Logotipo do IPEN" 
                      className="h-12 sm:h-16 object-contain"
                    />
                </a>
                <div className="hidden md:flex items-center gap-2 border-l border-gray-200 dark:border-gray-600 pl-4">
                    <NavButton page="home" currentPage={currentPage} onNavigate={onNavigate}>
                        <i className="fas fa-home mr-2"></i>Início
                    </NavButton>
                    <NavButton page="professors" currentPage={currentPage} onNavigate={onNavigate}>
                        <i className="fas fa-users mr-2"></i>Orientadores
                    </NavButton>
                </div>
            </div>
        </div>

        {/* Center */}
        <div className="text-center flex-shrink-0">
          <h1 className="text-lg sm:text-2xl md:text-3xl font-extrabold tracking-tight text-ipen-blue dark:text-white">
            Portal do Aluno IPEN/USP
          </h1>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-300 hidden sm:block">
            Pós-Graduação em Tecnologia Nuclear
          </p>
        </div>
        
        {/* Right Side */}
        <div className="flex-1 flex justify-end">
            <a href="https://www5.usp.br/" target="_blank" rel="noopener noreferrer" aria-label="Página inicial da USP">
                <img 
                  src="/usp-logo-transparente-800-400.png" 
                  alt="Logotipo da USP" 
                  className="h-12 sm:h-16 object-contain"
                />
            </a>
        </div>
      </div>
       <div className="md:hidden mt-4 container mx-auto">
         <div className="flex items-center justify-center gap-2 border-t border-gray-200 dark:border-gray-600 pt-3">
            <NavButton page="home" currentPage={currentPage} onNavigate={onNavigate}>
                <i className="fas fa-home mr-2"></i>Início
            </NavButton>
            <NavButton page="professors" currentPage={currentPage} onNavigate={onNavigate}>
                <i className="fas fa-users mr-2"></i>Orientadores
            </NavButton>
        </div>
      </div>
    </header>
  );
};