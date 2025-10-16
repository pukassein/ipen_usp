import React, { useState } from 'react';
import { Professor } from '../types';

interface ProfessorTableProps {
  professors: Professor[];
}

const CopiedEmailCell: React.FC<{ email: string }> = ({ email }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div className="flex items-center space-x-2">
            <a href={`mailto:${email}`} className="text-ipen-blue dark:text-ipen-gold hover:underline truncate">{email}</a>
            <button
                onClick={() => handleCopy(email)}
                className="text-gray-400 hover:text-ipen-blue dark:hover:text-ipen-gold transition-colors text-xs p-1 flex-shrink-0"
                title="Copiar email"
            >
                {copied ? <i className="fas fa-check text-green-500"></i> : <i className="fas fa-copy"></i>}
            </button>
        </div>
    );
}

export const ProfessorTable: React.FC<ProfessorTableProps> = ({ professors }) => {
    if (professors.length === 0) {
        return <p className="text-center text-gray-500 dark:text-gray-400 py-8">Nenhum orientador cadastrado para esta área ainda.</p>
    }

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700/50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                            Orientador
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                            Lattes
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {professors.map((prof) => (
                        <tr key={prof.name}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">{prof.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                <CopiedEmailCell email={prof.email} />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                <a href={prof.lattesUrl} target="_blank" rel="noopener noreferrer" className="text-ipen-blue dark:text-ipen-gold hover:underline flex items-center gap-1">
                                    Acessar
                                    <i className="fas fa-external-link-alt text-xs"></i>
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
