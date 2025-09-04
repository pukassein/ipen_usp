
import React, { useState } from 'react';
import { Contact } from '../types';

interface ContactItemProps {
  contact: Contact;
}

export const ContactItem: React.FC<ContactItemProps> = ({ contact }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="flex flex-col text-sm">
        <p className="font-semibold text-gray-700 dark:text-gray-300">{contact.name}</p>
        {contact.email && (
            <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                <i className="fas fa-envelope fa-fw text-gray-400"></i>
                <span className="flex-grow">{contact.email}</span>
                <button
                    onClick={() => handleCopy(contact.email ?? '')}
                    className="text-gray-400 hover:text-ipen-blue dark:hover:text-ipen-gold transition-colors text-xs p-1"
                    title="Copiar email"
                >
                    {copied ? <i className="fas fa-check text-green-500"></i> : <i className="fas fa-copy"></i>}
                </button>
            </div>
        )}
        {contact.ramal && (
            <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                <i className="fas fa-phone fa-fw text-gray-400"></i>
                <span>Ramal: {contact.ramal}</span>
            </div>
        )}
        {contact.details && (
             <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                {contact.isWhatsapp ? <i className="fab fa-whatsapp fa-fw text-green-500"></i> : <i className="fas fa-info-circle fa-fw text-gray-400"></i>}
                <span>{contact.details}</span>
             </div>
        )}
    </div>
  );
};
