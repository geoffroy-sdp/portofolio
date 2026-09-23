export type RouteId = 'hub' | 'cellier' | 'portrait' | 'lutrin' | 'expedition'

export type HubZone = {
  id: Exclude<RouteId, 'hub'>
  title: string
  label: string
  description: string
}

export const hubZones: HubZone[] = [
  {
    id: 'cellier',
    title: 'Le Cellier',
    label: 'Projets',
    description: 'Bouteilles, millésimes et réalisations techniques.',
  },
  {
    id: 'portrait',
    title: 'Le Portrait',
    label: 'About',
    description: 'Une carte du vigneron, parcours et expériences.',
  },
  {
    id: 'lutrin',
    title: 'Le Lutrin',
    label: 'Stack',
    description: 'Compétences organisées comme un classeur de cépages.',
  },
  {
    id: 'expedition',
    title: "L'Expédition",
    label: 'Contact',
    description: 'Caisse ouverte pour échanger, collaborer et écrire.',
  },
]

export const portfolioData = {
  profile: {
    name: 'Geoffroy',
    role: 'Développeur full-stack & créatif digital',
    intro:
      'Je conçois des interfaces claires et des expériences web sérieuses, avec une sensibilité visuelle forte.',
  },
  projects: [
    {
      id: 'project-1',
      title: 'Portfolio Cave à Vin',
      year: '2026',
      type: 'Brand / UX',
      summary: 'Un portfolio narratif inspiré du monde viticole.',
      stack: ['React', 'TypeScript', 'Vite'],
    },
    {
      id: 'project-2',
      title: 'Dashboard Ops',
      year: '2025',
      type: 'Productivity',
      summary: 'Outil de pilotage de données métiers pour équipes.',
      stack: ['Node.js', 'React', 'PostgreSQL'],
    },
  ],
  skills: [
    { category: 'Frontend', items: ['React', 'TypeScript', 'CSS', 'Accessibility'] },
    { category: 'Backend', items: ['Node.js', 'API REST', 'PostgreSQL', 'Auth'] },
    { category: 'Outils', items: ['Git', 'Docker', 'CI/CD', 'Figma'] },
  ],
  experience: [
    { period: '2024 — Aujourd’hui', title: 'Développeur web', description: 'Création d’interfaces et de produits orientés UX.' },
    { period: '2022 — 2024', title: 'Alternant / junior dev', description: 'Développement d’applications web et maintenance produit.' },
  ],
  contact: {
    email: 'contact@example.com',
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/',
  },
}
