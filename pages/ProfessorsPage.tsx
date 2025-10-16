import React, { useState } from 'react';
import { professorSections } from '../constants';
import { ProfessorTable } from '../components/ProfessorTable';

export const ProfessorsPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState(professorSections[0]?.id || '');

    const activeSection = professorSections.find(section => section.id === activeTab);

    return (
        <main className="container mx-auto p-4 sm:p-6 md:p-8">
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-ipen-blue dark:text-ipen-gold mb-2">Corpo Docente</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">Orientadores do programa por área de concentração.</p>
            </div>

            <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6">
                <div className="border-b border-gray-200 dark:border-gray-700">
                    <nav className="-mb-px flex space-x-4 sm:space-x-6 overflow-x-auto" aria-label="Tabs">
                        {professorSections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => setActiveTab(section.id)}
                                className={`${
                                    activeTab === section.id
                                        ? 'border-ipen-blue text-ipen-blue dark:border-ipen-gold dark:text-ipen-gold'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-500'
                                } whitespace-nowrap py-4 px-2 border-b-2 font-medium text-sm transition-colors focus:outline-none`}
                                aria-current={activeTab === section.id ? 'page' : undefined}
                            >
                                {section.title}
                            </button>
                        ))}
                    </nav>
                </div>
                <div className="py-6">
                    {activeSection && (
                       <ProfessorTable professors={activeSection.professors} />
                    )}
                </div>
            </div>
        </main>
    );
};