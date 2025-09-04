
import { ContactSection, LinkItem } from './types';

export const contactSections: ContactSection[] = [
  {
    id: 'secretaria',
    title: 'Secretaria de Pós-Graduação',
    contacts: [
      { name: 'Sara', email: 'spgipen@ipen.br', ramal: '1600' },
      { name: 'Rosana', email: 'spgipen01@ipen.br', ramal: '5971' },
      { name: 'Bianca (Graduação e PAE)', email: 'bianca.m-plansul@ipen.br', ramal: '1564' },
      { name: 'Alternativo', email: 'ppgtn@cnen.gov.br' },
    ],
  },
  {
    id: 'bolsas',
    title: 'Setor de Bolsas, Ensino e IC',
    contacts: [
      { name: 'Elsa', email: 'eppsilva@ipen.br' },
      { name: 'Andressa', email: 'assantos-maxima@ipen.br' },
      { name: 'Ilze', email: 'ilze@ipen.br' },
      { name: 'Dra Martha', email: 'mmvieira@ipen.br' },
      { name: 'Geral', email: 'ceens@ipen.br' },
      { name: 'Alternativo', email: 'ceens.ensino@gmail.com' },
      { name: 'WhatsApp', details: '(11) 2810-5021', isWhatsapp: true },
    ],
  },
  {
    id: 'pae',
    title: 'Estágio PAE',
    contacts: [
        { name: 'Bianca', email: 'bianca.m-plansul@ipen.br', ramal: '1564' },
        { name: 'Email Principal', email: 'ipen.pae@gmail.com' },
    ],
  },
  {
    id: 'biblioteca',
    title: 'Biblioteca do Ipen',
    contacts: [
        { name: 'Email', email: 'bibl@ipen.br' },
        { name: 'WhatsApp', details: '(11) 99794-7917', isWhatsapp: true },
    ],
  },
  {
    id: 'cpg',
    title: 'Presidente CPG e Representantes Discentes',
    contacts: [
      { name: 'Prof. Dr. Julian Shorto (presidente)', email: 'jmshorto@ipen.br' },
      { name: 'Prof. Dr. Edson Moreira (vice-presidente)', email: 'emoreira@ipen.br' },
      { name: 'Ana Koka (Representante Discente)', email: 'anackoka.dfm@usp.br' },
      { name: 'Thais Andrade (Representante Discente)', email: 'thais.andradedasilva@usp.br' },
      { name: 'Silas Leonel (Representante Discente)', email: 'silasleonel@usp.br' },
      { name: 'Sabrina Sgrignoli (Representante Discente)', email: 'sabrinasgrignoli@usp.br' },
    ],
  },
];

export const linkItems: LinkItem[] = [
    {
        id: 'drive_docs',
        title: 'Drive de Documentos e Formulários',
        description: [
            'Formulários para matrículas e prorrogações.',
            'Modelos para teses e apresentações (templates).',
            'Documentos sobre exames de qualificação.',
            'Editais de bolsas e resultados.',
            'Procedimentos de depósito e defesa.',
        ],
        url: 'https://drive.google.com/drive/folders/1OdBhxH097PQZnm-Mu8NLFLu5w-u81n-G?usp=sharing'
    },
    {
        id: 'drive_bolsas',
        title: 'Drive de Editais de Bolsas',
        description: 'Editais vigentes e resultados.',
        url: 'https://drive.google.com/drive/folders/1IoXjFG0tW8YaF25vrgjfojuVRMRFtqN7?usp=sharing'
    },
    {
        id: 'proficiencia',
        title: 'Exame de Proficiência',
        description: 'Informações, editais e inscrições (FFLCH/USP).',
        url: 'https://clinguas.fflch.usp.br/proficiencia-ingles-editais-anexos-inscricoes-abertas'
    },
    {
        id: 'regimento_usp',
        title: 'Regimento da USP',
        description: 'Regimento Geral da Pós-Graduação da USP.',
        url: 'https://leginf.usp.br/?resolucao=resolucao-no-7493-de-27-de-marco-de-2018-copy'
    },
    {
        id: 'regimento_cpg',
        title: 'Regimento da CPG',
        description: 'Normas do programa de Tecnologia Nuclear.',
        url: 'https://www.prpg.usp.br/pt-br/prpg/index.php/pt-br/faca-pos-na-usp/programas-de-pos-graduacao/164-tecnologia-nuclear'
    }
];