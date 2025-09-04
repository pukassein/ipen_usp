
export interface Contact {
  name: string;
  email?: string;
  ramal?: string;
  details?: string;
  isWhatsapp?: boolean;
}

export interface ContactSection {
  id: string;
  title: string;
  contacts: Contact[];
}

export interface LinkItem {
  id: string;
  title: string;
  url: string;
  description: string | string[];
}