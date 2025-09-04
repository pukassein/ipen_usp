import React, { useState } from 'react';
import { ContactSection, Contact } from '../types';
import { ContactItem } from './ContactItem';

interface TabbedContactsProps {
  sections: ContactSection[];
}

export const TabbedContacts: React.FC<TabbedContactsProps> = ({ sections }) => {
  const [activeTab, setActiveTab] = useState(sections[0]?.id || '');

  const activeSection = sections.find(section => section.id === activeTab);

  return (
    <div className="w-full">
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-6 overflow-x-auto" aria-label="Tabs">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveTab(section.id)}
              className={`${
                activeTab === section.id
                  ? 'border-ipen-blue text-ipen-blue dark:border-ipen-gold dark:text-ipen-gold'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-500'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors focus:outline-none`}
              aria-current={activeTab === section.id ? 'page' : undefined}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </div>

      <div className="py-6">
        {activeSection && (
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="space-y-4">
              {activeSection.contacts.map((contact: Contact, index: number) => (
                <ContactItem key={index} contact={contact} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};