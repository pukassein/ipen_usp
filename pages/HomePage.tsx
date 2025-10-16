import React from 'react';
import { TabbedContacts } from '../components/TabbedContacts';
import { LinkButton } from '../components/LinkButton';
import { contactSections, linkItems } from '../constants';
import { LinkItem as LinkItemType } from '../types';

export const HomePage: React.FC = () => {
  return (
    <main className="container mx-auto p-4 sm:p-6 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Content Column */}
        <div className="lg:col-span-2">
          <div className="mb-8">
              <h2 className="text-3xl font-bold text-ipen-blue dark:text-ipen-gold mb-2">Contatos Importantes</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">Principais canais de comunicação do programa.</p>
          </div>
          <TabbedContacts sections={contactSections} />
        </div>

        {/* Sidebar Column */}
        <div className="lg:col-span-1">
          <div className="mb-8">
              <h2 className="text-3xl font-bold text-ipen-blue dark:text-ipen-gold mb-2">Links e Documentos</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">Acesso rápido a documentos, formulários e regimentos.</p>
          </div>
           <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {linkItems.map((link: LinkItemType) => (
                      <LinkButton key={link.id} link={link} />
                  ))}
              </div>
          </div>
        </div>

      </div>
    </main>
  );
};
