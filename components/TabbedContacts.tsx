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
      {/* Desktop: Tab View */}
      <div className="hidden lg:block">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="-mb-px flex space-x-6" aria-label="Tabs">
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

      {/* Mobile: Accordion View */}
      <div className="lg:hidden space-y-3">
        {sections.map((section) => {
            const isActive = activeTab === section.id;
            return (
                <div key={section.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300">
                    <h2 id={`accordion-header-${section.id}`} className="m-0">
                        <button
                            type="button"
                            onClick={() => setActiveTab(isActive ? '' : section.id)}
                            className="w-full flex justify-between items-center p-4 text-left font-semibold text-ipen-blue dark:text-ipen-gold hover:bg-gray-50 dark:hover:bg-gray-700/50"
                            aria-expanded={isActive}
                            aria-controls={`accordion-panel-${section.id}`}
                        >
                            <span className="text-base">{section.title}</span>
                            <i className={`fas fa-chevron-down transition-transform duration-300 ease-in-out ${isActive ? 'transform rotate-180' : ''}`}></i>
                        </button>
                    </h2>
                    <div
                        id={`accordion-panel-${section.id}`}
                        role="region"
                        aria-labelledby={`accordion-header-${section.id}`}
                        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                    >
                        <div className="overflow-hidden">
                            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                                <div className="space-y-4">
                                    {section.contacts.map((contact, index) => (
                                        <ContactItem key={index} contact={contact} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })}
      </div>
    </div>
  );
};
