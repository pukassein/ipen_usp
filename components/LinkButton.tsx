import React from 'react';
import { LinkItem } from '../types';

interface LinkButtonProps {
  link: LinkItem;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ link }) => {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
    >
        <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 bg-ipen-blue/10 dark:bg-ipen-gold/10 text-ipen-blue dark:text-ipen-gold rounded-lg h-10 w-10 flex items-center justify-center">
                <i className="fas fa-link"></i>
            </div>
            <div className="flex-grow">
                <h4 className="font-bold text-lg text-ipen-blue dark:text-ipen-gold">{link.title}</h4>
                {typeof link.description === 'string' ? (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{link.description}</p>
                ) : (
                    <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-400 mt-2 space-y-1">
                        {link.description.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="text-gray-400">
                <i className="fas fa-arrow-up-right-from-square"></i>
            </div>
        </div>
    </a>
  );
};