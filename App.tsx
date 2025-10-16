import React, { useState } from 'react';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { ProfessorsPage } from './pages/ProfessorsPage';

type Page = 'home' | 'professors';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen font-sans text-gray-800 dark:text-gray-200">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'professors' && <ProfessorsPage />}
      
      <footer className="text-center p-6 bg-gray-100 dark:bg-gray-800 mt-12">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Este é um portal não-oficial, criado por alunos para facilitar o acesso à informação.
        </p>
      </footer>
    </div>
  );
};

export default App;
