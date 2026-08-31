export type Project = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  disciplines: string[];
  year: string;
  organization: string;
  role: string;
  technology: string;
  tone: string;
  sections: { title: string; body: string }[];
};

export const projects: Project[] = [
  {
    slug: 'ita-africa', number: '01', title: 'ITA Africa', subtitle: 'Digital Publishing Platform',
    summary: 'Redesign and ongoing development for an established custom publishing platform—bringing interface design, responsive implementation and CMS work into one evolving system.',
    disciplines: ['Web Design', 'PHP / CMS', 'Front-End'], year: 'Ongoing', organization: 'ITA Africa',
    role: 'Web Development / Digital Platform Management', technology: 'PHP, Custom CMS, HTML, CSS, JavaScript', tone: 'ink',
    sections: [
      { title: 'Context', body: 'ITA Africa is an existing digital publishing platform with an active content operation and a custom PHP-based content management system.' },
      { title: 'The challenge', body: 'The work requires design improvements to fit within a live, established codebase—balancing editorial clarity, responsive behaviour and practical publishing needs.' },
      { title: 'Design direction', body: 'The interface direction prioritises readable content hierarchy, clear navigation and a flexible visual system suited to frequent publishing.' },
      { title: 'Development approach', body: 'Ongoing work spans responsive front-end implementation, PHP CMS customisation, platform maintenance and infrastructure involvement.' },
      { title: 'Outcome / ongoing work', body: 'This active engagement continues across interface refinement, responsive implementation, CMS customisation and platform maintenance.' },
    ],
  },
  {
    slug: 'evoke-impact', number: '02', title: 'Evoke Impact', subtitle: 'Executive Summit Digital Experiences',
    summary: 'A connected body of websites and visual communication created in a professional role for executive events across finance, healthcare, sustainability and leadership.',
    disciplines: ['Web Design', 'Development', 'Visual Design'], year: 'Ongoing', organization: 'Evoke Impact', role: 'Digital Creative Manager',
    technology: 'WordPress, HTML, CSS, Adobe Creative Suite', tone: 'terracotta',
    sections: [
      { title: 'Professional context', body: 'This work was completed as part of Samuel’s role at Evoke Impact and represents a portfolio of connected digital and visual outputs rather than a single event.' },
      { title: 'A system for multiple initiatives', body: 'The work spans summit websites, responsive page systems, campaign creative, brochures, social media graphics and branded event collateral.' },
      { title: 'Across sectors', body: 'Projects support executive events in finance, healthcare, sustainability, governance and leadership, each with its own audience and visual character.' },
      { title: 'Capabilities in practice', body: 'The portfolio demonstrates web and UI design, WordPress implementation, ongoing website management and visual communication across formats.' },
    ],
  },
  {
    slug: 'selected-visual-work', number: '03', title: 'Selected Visual Work', subtitle: 'Brochures, Campaigns & Corporate Collateral',
    summary: 'A curated editorial selection of visual communication across print, digital campaigns and corporate applications.',
    disciplines: ['Graphic Design', 'Editorial', 'Digital'], year: 'Selected work', organization: 'Various professional projects', role: 'Graphic Designer',
    technology: 'Adobe Creative Suite', tone: 'blue',
    sections: [
      { title: 'Editorial selection', body: 'This section is designed for a considered sequence of brochures, event flyers, corporate stationery, campaign graphics and social artwork.' },
      { title: 'Varied formats', body: 'The case-study system supports portrait and landscape work, paired images, detail crops and full-width features without forcing every piece into the same frame.' },
    ],
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
