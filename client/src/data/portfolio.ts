export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  technologies: string[];
  before: {
    title: string;
    points: string[];
  };
  after: {
    title: string;
    points: string[];
  };
  imageEmoji: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "restaurant-bella-italia",
    title: "Restaurant Bella Italia",
    client: "Bella Italia GmbH",
    category: "Gastronomie",
    year: "2024",
    challenge:
      "Das Restaurant hatte eine veraltete Website ohne Online-Reservierung. Kunden mussten telefonisch buchen, was zu verpassten Reservierungen und Umsatzeinbußen führte.",
    solution:
      "Entwicklung einer modernen Website mit integriertem Reservierungssystem, interaktiver Speisekarte und automatischen Bestätigungs-E-Mails.",
    results: [
      {
        metric: "+65%",
        value: "Mehr Online-Reservierungen",
        description: "Steigerung innerhalb von 3 Monaten",
      },
      {
        metric: "+40%",
        value: "Höhere Tischauslastung",
        description: "Durch bessere Planbarkeit",
      },
      {
        metric: "-80%",
        value: "Weniger Telefonanrufe",
        description: "Entlastung des Personals",
      },
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Booking API"],
    before: {
      title: "Vorher",
      points: [
        "Veraltetes Design aus 2015",
        "Keine Online-Reservierung",
        "Nicht mobiloptimiert",
        "Langsame Ladezeiten (4+ Sekunden)",
        "Keine Online-Speisekarte",
      ],
    },
    after: {
      title: "Nachher",
      points: [
        "Modernes, appetitliches Design",
        "24/7 Online-Reservierungssystem",
        "Perfekt für Smartphones optimiert",
        "Blitzschnell (<1 Sekunde Ladezeit)",
        "Interaktive digitale Speisekarte",
      ],
    },
    imageEmoji: "🍝",
  },
  {
    id: "zahnarztpraxis-schmidt",
    title: "Zahnarztpraxis Dr. Schmidt",
    client: "Dr. med. dent. Michael Schmidt",
    category: "Gesundheit",
    year: "2024",
    challenge:
      "Die Praxis verlor potenzielle Patienten an Konkurrenten mit moderneren Websites. Die alte Website wirkte nicht vertrauenswürdig und bot keine Online-Terminbuchung.",
    solution:
      "Professionelle, vertrauenserweckende Website mit Online-Terminbuchung, Patientenportal und ausführlichen Leistungsbeschreibungen.",
    results: [
      {
        metric: "+120%",
        value: "Mehr Terminanfragen",
        description: "Über die Website",
      },
      {
        metric: "+85%",
        value: "Neue Patienten",
        description: "Im ersten Quartal",
      },
      {
        metric: "#1",
        value: "Google-Ranking",
        description: "Für lokale Suchanfragen",
      },
    ],
    technologies: ["Next.js", "SEO-Optimierung", "Booking System", "DSGVO-konform"],
    before: {
      title: "Vorher",
      points: [
        "Unprofessionelles Erscheinungsbild",
        "Keine Terminbuchung online",
        "Schlechtes Google-Ranking (Seite 3)",
        "Keine Informationen zu Leistungen",
        "Nicht DSGVO-konform",
      ],
    },
    after: {
      title: "Nachher",
      points: [
        "Vertrauenserweckendes Design",
        "Komfortable Online-Terminbuchung",
        "Top Google-Ranking (Platz 1-3)",
        "Ausführliche Leistungsübersicht",
        "100% DSGVO-konform",
      ],
    },
    imageEmoji: "🦷",
  },
  {
    id: "boutique-mode-stil",
    title: "Boutique Mode & Stil",
    client: "Mode & Stil Boutique",
    category: "Einzelhandel",
    year: "2023",
    challenge:
      "Die Boutique hatte keine Online-Präsenz und verlor Kunden an Online-Shops. Der Umsatz stagnierte, besonders während der Pandemie.",
    solution:
      "Entwicklung eines eleganten Online-Shops mit Produktkatalog, Größenberatung, Click & Collect und Integration des Kassensystems.",
    results: [
      {
        metric: "+200%",
        value: "Online-Umsatz",
        description: "Im ersten Jahr",
      },
      {
        metric: "+50%",
        value: "Gesamtumsatz",
        description: "Durch zusätzlichen Online-Kanal",
      },
      {
        metric: "24/7",
        value: "Verkaufszeiten",
        description: "Auch außerhalb der Ladenöffnung",
      },
    ],
    technologies: ["E-Commerce", "WordPress", "WooCommerce", "Payment Gateway"],
    before: {
      title: "Vorher",
      points: [
        "Keine Online-Verkaufsmöglichkeit",
        "Nur lokale Kundschaft erreichbar",
        "Begrenzte Öffnungszeiten",
        "Keine Produktpräsentation online",
        "Verpasste Umsatzchancen",
      ],
    },
    after: {
      title: "Nachher",
      points: [
        "Vollwertiger Online-Shop",
        "Deutschlandweiter Versand",
        "Rund-um-die-Uhr Verkauf",
        "Professionelle Produktfotos & Beschreibungen",
        "Zusätzlicher Umsatzkanal",
      ],
    },
    imageEmoji: "👗",
  },
  {
    id: "fitness-studio-powergym",
    title: "Fitness Studio PowerGym",
    client: "PowerGym Fitness GmbH",
    category: "Sport & Fitness",
    year: "2024",
    challenge:
      "Das Studio hatte Schwierigkeiten, neue Mitglieder zu gewinnen. Die Website war unübersichtlich und zeigte keine aktuellen Kurspläne.",
    solution:
      "Dynamische Website mit Live-Kursplan, Online-Mitgliedschaftsabschluss, Trainer-Profilen und Mitgliederbereich für Trainingspläne.",
    results: [
      {
        metric: "+95%",
        value: "Neue Mitgliedschaften",
        description: "Über die Website",
      },
      {
        metric: "+70%",
        value: "Kursauslastung",
        description: "Durch bessere Sichtbarkeit",
      },
      {
        metric: "-60%",
        value: "Verwaltungsaufwand",
        description: "Durch Automatisierung",
      },
    ],
    technologies: ["React", "Dashboard", "Member Portal", "Real-time Updates"],
    before: {
      title: "Vorher",
      points: [
        "Veralteter, statischer Kursplan",
        "Keine Online-Anmeldung",
        "Unübersichtliche Navigation",
        "Keine Trainer-Informationen",
        "Kein Mitgliederbereich",
      ],
    },
    after: {
      title: "Nachher",
      points: [
        "Live-Kursplan mit Verfügbarkeit",
        "Online-Mitgliedschaft & Kursanmeldung",
        "Intuitive, moderne Navigation",
        "Detaillierte Trainer-Profile",
        "Persönlicher Mitgliederbereich",
      ],
    },
    imageEmoji: "💪",
  },
  {
    id: "anwaltskanzlei-mueller",
    title: "Anwaltskanzlei Müller & Partner",
    client: "Rechtsanwälte Müller & Partner",
    category: "Recht",
    year: "2023",
    challenge:
      "Die Kanzlei wirkte durch die veraltete Website nicht professionell. Mandanten hatten keine Möglichkeit, Dokumente sicher auszutauschen.",
    solution:
      "Seriöse, professionelle Website mit verschlüsseltem Mandantenportal, Online-Terminvereinbarung und ausführlichen Rechtsgebiets-Informationen.",
    results: [
      {
        metric: "+110%",
        value: "Mandatsanfragen",
        description: "Über die Website",
      },
      {
        metric: "+80%",
        value: "Effizienzsteigerung",
        description: "Durch digitalen Dokumentenaustausch",
      },
      {
        metric: "100%",
        value: "Sicherheit",
        description: "Ende-zu-Ende-Verschlüsselung",
      },
    ],
    technologies: ["Security", "Portal", "Encryption", "DSGVO"],
    before: {
      title: "Vorher",
      points: [
        "Veraltetes, unseriöses Design",
        "Kein sicherer Dokumentenaustausch",
        "Keine Online-Terminvereinbarung",
        "Unzureichende Rechtsgebiets-Infos",
        "Schlechte Mobile-Erfahrung",
      ],
    },
    after: {
      title: "Nachher",
      points: [
        "Professionelles, vertrauenswürdiges Design",
        "Verschlüsseltes Mandantenportal",
        "Komfortable Online-Terminbuchung",
        "Ausführliche Fachgebiets-Darstellung",
        "Perfekte Mobile-Optimierung",
      ],
    },
    imageEmoji: "⚖️",
  },
];
