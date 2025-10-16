
export interface Contact {
  name: string;
  email?: string | string[];
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
  id:string;
  title: string;
  url: string;
  description: string | string[];
}

export interface Professor {
  name: string;
  lattesUrl: string;
  email: string;
}

export interface ProfessorAreaSection {
  id: 'TNR' | 'TNA' | 'TNM';
  title: string;
  fullName: string;
  professors: Professor[];
}
