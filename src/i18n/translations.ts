export type Locale = 'fr' | 'en';

export interface Translation {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    experience: string;
    skills: string;
    projects: string;
    services: string;
    contact: string;
    cv: string;
  };
  hero: {
    badge: string;
    titleLine1Before: string;
    titleLine1Accent: string;
    titleLine2Connector: string;
    titleLine2Mono: string;
    tagline: string;
    location: string;
    remote: string;
    education: string;
    ctaPrimary: string;
    ctaSecondary: string;
    terminalTitle: string;
    terminalRole: string;
    terminalComment: string;
    terminalHintStart: string;
  };
  terminalI18n: {
    inputAria: string;
    bootGreeting: string;
    helpHeader: string;
    commandNotFound: string;
    tryHelp: string;
    rmrf: string;
    sudo: string;
    nmapOutput: string;
    matrixDone: string;
    catNotFound: string;
    projectNotFound: string;
    clearHint: string;
  };
  about: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    metaLocation: string;
    metaFormation: string;
    metaFormationValue: string;
    metaLanguages: string;
    metaLanguagesValue: string;
    metaAvailability: string;
    metaAvailabilityValue: string;
    certsTitle: string;
    certsIssuer: string;
    certsName: string;
    certsDate: string;
    certsModules: Array<{ label: string; score: string }>;
    certsDownload: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    lead: string;
    badgeCurrent: string;
    items: Array<{
      role: string;
      company: string;
      period: string;
      current: boolean;
      highlights: string[];
      tags: string[];
    }>;
  };
  skills: {
    eyebrow: string;
    title: string;
    lead: string;
    catDevOps: string;
    catCyber: string;
    catSystems: string;
    catDev: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    lead: string;
    statusProduction: string;
    statusPersonal: string;
    statusLive: string;
    statusDeployed: string;
    items: Array<{
      meta: string;
      status: string;
      title: string;
      description: string;
      stack: string[];
      links: Array<{ label: string; href: string }>;
    }>;
  };
  services: {
    eyebrow: string;
    title: string;
    lead: string;
    intro: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
      duration: string;
    }>;
    methodologyTitle: string;
    methodologySteps: Array<{ title: string; description: string }>;
    legalItems: string[];
    ctaPrimary: string;
    ctaSecondary: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    channels: {
      emailLabel: string;
      linkedinLabel: string;
      githubLabel: string;
      calendlyLabel: string;
      calendlyValue: string;
    };
    form: {
      typeLabel: string;
      typeOptions: string[];
      nameLabel: string;
      emailLabel: string;
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
    };
  };
  footer: {
    rights: string;
    tagline: string;
  };
}

export const translations: Record<Locale, Translation> = {
  fr: {
    meta: {
      title: 'Tahirihasina Rakotomanga · Ingénieur Système & Sécurité · DevOps',
      description: "Ingénieur Système et Sécurité, spécialisé DevOps : CI/CD, automatisation, déploiement d'infrastructures cloud. Passionné de cybersécurité et SOC.",
    },
    nav: {
      about: 'À propos',
      experience: 'Parcours',
      skills: 'Skills',
      projects: 'Projets',
      services: 'Freelance',
      contact: 'Contact',
      cv: '↓ CV',
    },
    hero: {
      badge: 'Open to opportunities · CDI + Freelance',
      titleLine1Before: 'Ingénieur ',
      titleLine1Accent: 'Système & Sécurité',
      titleLine2Connector: '& ',
      titleLine2Mono: 'DevOps.',
      tagline: "Spécialisé en CI/CD, automatisation et déploiement d'infrastructures cloud sécurisées. Passionné par la cybersécurité, le pentest et le SOC.",
      location: '📍 Antananarivo, Madagascar',
      remote: '🌐 Remote-friendly',
      education: '🎓 Master 2 MISA',
      ctaPrimary: 'Me contacter →',
      ctaSecondary: 'Voir mes projets',
      terminalTitle: 'visitor@tahirihasina:~',
      terminalRole: 'Ingénieur Système & Sécurité · DevOps',
      terminalComment: '# Passionné de cybersécurité & SOC',
      terminalHintStart: 'Type help to start',
    },
    terminalI18n: {
      inputAria: 'Terminal interactif — tapez une commande',
      bootGreeting: "Bienvenue sur tahirihasina.dev — tapez <span class=\"terminal-link\">help</span> pour voir les commandes disponibles.",
      helpHeader: 'Commandes disponibles :',
      commandNotFound: 'Commande introuvable',
      tryHelp: 'Tapez <span class="terminal-link">help</span> pour voir la liste.',
      rmrf: 'Bien tenté. Je suis ingénieur Système & Sécurité. ;)',
      sudo: 'Permission denied — contactez-moi via la section Contact pour les droits sudo.',
      nmapOutput: 'Starting Nmap scan...\nHost is up (0.001s latency).\nPort 22/tcp  open  ssh\nPort 80/tcp  open  http\nPort 443/tcp open  https\nPort 8080/tcp open  contact-me\n\nScan terminé — host disponible pour CDI et missions freelance.',
      matrixDone: 'There is no spoon. ¯\\_(ツ)_/¯',
      catNotFound: 'Fichier introuvable. Essayez : skills.txt, stack.txt, about.txt, contact.txt',
      projectNotFound: 'Projet introuvable. Tapez ls projects/ pour voir la liste.',
      clearHint: 'écran nettoyé.',
    },
    about: {
      eyebrow: 'about',
      title: 'À propos',
      p1: "Ingénieur DevOps spécialisé en CI/CD, automatisation et déploiement d'infrastructures cloud. Expérience dans la mise en place de pipelines avec GitHub Actions, la conteneurisation avec Docker et l'automatisation avec Ansible sur des environnements multi-cloud (AWS, OVH, VPS).",
      p2: "Axé sur la <strong>fiabilité et la performance</strong>, avec une capacité à automatiser et à <strong style=\"color: var(--color-accent)\">sécuriser les déploiements en environnement de production</strong>. Actuellement Ingénieur Système et Sécurité chez CSS Ankorondrano, en parallèle d'un poste d'Ingénieur IA & Développeur chez Redsmite AI.",
      p3: "Passionné par la <strong style=\"color: var(--color-accent)\">cybersécurité</strong> : pentest (Nmap, Metasploit, BurpSuite, Hydra), sécurité réseau (iptables, pfSense), et SIEM avec Wazuh. Ouvert aux opportunités CDI et missions freelance. Bilingue FR/EN, remote-friendly.",
      metaLocation: 'Localisation',
      metaFormation: 'Formation',
      metaFormationValue: 'Master 2 MISA',
      metaLanguages: 'Langues',
      metaLanguagesValue: 'FR · EN · MG',
      metaAvailability: 'Disponibilité',
      metaAvailabilityValue: 'Open · 2026',
      certsTitle: 'certifications',
      certsIssuer: 'ANSSI · SecNumacadémie',
      certsName: 'Attestation MOOC SecNumacadémie — 4 modules SSI',
      certsDate: 'Délivrée le 30 juin 2025',
      certsModules: [
        { label: 'Panorama de la SSI', score: '84%' },
        { label: 'Sécurité de l\'authentification', score: '86%' },
        { label: 'Sécurité sur Internet', score: '94%' },
        { label: 'Sécurité du poste de travail & nomadisme', score: '90%' },
      ],
      certsDownload: '↓ Télécharger l\'attestation',
    },
    experience: {
      eyebrow: 'experience',
      title: 'Parcours professionnel',
      lead: 'Expériences pro en parallèle de mes études — Système, Sécurité, DevOps, IA.',
      badgeCurrent: '● en cours',
      items: [
        {
          role: 'Ingénieur Système et Sécurité',
          company: 'Customer Service Subcontractor (CSS) — Ankorondrano',
          period: 'Décembre 2025 — Présent',
          current: true,
          highlights: [
            'Déploiement Wazuh SIEM en production via Docker (manager + indexer + dashboard, agents, règles, alerting)',
            'Mise en production de GLPI via Docker (Contabo, reverse proxy, persistance volumes)',
            'Automatisation des configurations avec Ansible (IaC)',
            'Déploiement de services sécurisés sur AWS et OVH (EC2 / VPS + Nginx)',
          ],
          tags: ['Wazuh', 'Docker', 'Ansible', 'AWS', 'OVH', 'Nginx'],
        },
        {
          role: 'Ingénieur IA & Développeur',
          company: 'Redsmite AI',
          period: 'Mars 2026 — Présent',
          current: true,
          highlights: [
            "Développement d'applications automatisées basées sur des modèles d'IA",
            'Intégration de workflows automatisés et déploiement de services intelligents',
            "Participation à l'optimisation et à l'automatisation des processus applicatifs",
          ],
          tags: ['Python', 'IA', 'Automatisation', 'Workflows'],
        },
        {
          role: 'Ingénieur DevOps',
          company: "Faculté des Sciences — Université d'Antananarivo",
          period: 'Octobre 2025 — Février 2026',
          current: false,
          highlights: [
            "Mise en place d'un pipeline CI/CD (GitHub Actions)",
            "Déploiement d'applications conteneurisées (Docker)",
            'Automatisation des mises en production',
          ],
          tags: ['GitHub Actions', 'Docker', 'CI/CD', 'Linux'],
        },
        {
          role: 'Administrateur Serveur',
          company: "Projet Vote en ligne FMSA — Université d'Antananarivo",
          period: 'Septembre 2025 — Octobre 2025',
          current: false,
          highlights: [
            "Déploiement d'application (NestJS / Next.js) sur Linux",
            'Configuration reverse proxy (Apache2, WebSocket)',
            'Gestion PostgreSQL et services applicatifs',
          ],
          tags: ['NestJS', 'Next.js', 'Apache2', 'PostgreSQL'],
        },
        {
          role: 'Administrateur Réseau',
          company: 'MISA',
          period: 'Février 2024 — Décembre 2025',
          current: false,
          highlights: [
            "Administration et sécurisation de l'infrastructure réseau",
            'Gestion du serveur de la MISA : installation, mise à jour, sécurisation et sauvegarde',
          ],
          tags: ['Linux', 'Sécu réseau', 'Backup', 'Hardening'],
        },
        {
          role: 'Développeur API',
          company: 'Etech',
          period: 'Octobre 2024 — Novembre 2024',
          current: false,
          highlights: [
            'Développement API REST (Django)',
            'Tests et documentation',
          ],
          tags: ['Django REST', 'Python', 'Tests'],
        },
      ],
    },
    skills: {
      eyebrow: 'stack',
      title: 'Stack technique',
      lead: 'Les technologies que j\'utilise au quotidien, organisées par domaine.',
      catDevOps: 'DevOps & Cloud',
      catCyber: 'Cybersécurité',
      catSystems: 'Systèmes & Réseau',
      catDev: 'Développement',
    },
    projects: {
      eyebrow: 'projects',
      title: 'Projets sélectionnés',
      lead: 'Des projets concrets — code, déploiement et documentation publics.',
      statusProduction: '● Production',
      statusPersonal: '● Projet personnel',
      statusLive: '● Live',
      statusDeployed: '● Déployé',
      items: [
        {
          meta: 'SIEM · SOC · Cybersécurité',
          status: '● Production',
          title: 'Déploiement Wazuh SIEM en production (CSS)',
          description: "Mise en place d'une plateforme SIEM Wazuh complète via Docker en production : manager + indexer + dashboard, déploiement des agents sur le parc serveur, configuration des règles de détection, alerting et monitoring temps réel des incidents de cybersécurité. Hardening de l'infrastructure (iptables, reverse proxy, persistance volumes).",
          stack: ['Wazuh', 'Docker', 'Linux', 'iptables', 'Nginx', 'SOC'],
          links: [{ label: '→ Détails', href: '#' }],
        },
        {
          meta: 'DevOps · IaC · Sécurité',
          status: '● Production',
          title: 'Déploiement GLPI Dockerisé (CSS)',
          description: 'Mise en production de GLPI via Docker sur Contabo : reverse proxy, persistance volumes, automatisation Ansible (IaC). Services sécurisés sur AWS et OVH (EC2/VPS + Nginx).',
          stack: ['Docker', 'Ansible', 'Nginx', 'AWS', 'OVH'],
          links: [{ label: '→ GitHub', href: '#' }],
        },
        {
          meta: 'Cybersécurité · Visualisation',
          status: '● Projet personnel',
          title: 'Visualisation des cyber incidents',
          description: "Outil de visualisation des incidents de cybersécurité : ingestion, agrégation et restitution graphique. Stack Flask + PostgreSQL, conteneurisé Docker, versionné Git.",
          stack: ['Flask', 'PostgreSQL', 'Docker', 'Git'],
          links: [{ label: '→ GitHub', href: '#' }],
        },
        {
          meta: 'DevOps · CI/CD',
          status: '● Production',
          title: 'Pipeline CI/CD Faculté des Sciences',
          description: "Mise en place complète d'un pipeline GitHub Actions, conteneurisation Docker et automatisation des mises en production sur l'environnement de la Faculté.",
          stack: ['GitHub Actions', 'Docker', 'Linux'],
          links: [{ label: '→ GitHub', href: '#' }],
        },
        {
          meta: 'Backend · Sysadmin',
          status: '● Live',
          title: 'Vote en ligne FMSA',
          description: "Administration et mise en production d'une application de vote (NestJS / Next.js) sur Linux : reverse proxy Apache2, WebSocket, gestion PostgreSQL et services applicatifs.",
          stack: ['NestJS', 'Next.js', 'Apache2', 'PostgreSQL'],
          links: [{ label: '→ GitHub', href: '#' }],
        },
        {
          meta: 'Backend · API REST',
          status: '● Déployé',
          title: 'API Django REST + Render',
          description: "Développement et déploiement du backend d'une API de groupe : Django REST Framework, PostgreSQL, hébergement Render (Cloud). Tests et documentation associés.",
          stack: ['Django REST', 'PostgreSQL', 'Render', 'Python'],
          links: [{ label: '→ GitHub', href: '#' }],
        },
      ],
    },
    services: {
      eyebrow: 'freelance',
      title: 'Missions freelance',
      lead: 'Déployer, automatiser ou sécuriser ton infrastructure. Cadre clair, NDA systématique, rapport livrable.',
      intro: '<span style="color: var(--color-accent)">$</span> Je propose mes services en freelance pour PME et scale-up qui souhaitent <strong>déployer, automatiser ou sécuriser</strong> leur infrastructure.',
      items: [
        { icon: '[ deploy ]', title: 'Déploiement & CI/CD', description: "Mise en place pipelines GitHub Actions, conteneurisation Docker, automatisation Ansible. Déploiement applicatif sécurisé sur AWS, OVH ou VPS.", duration: "⏱ 3-10 jours · à partir d'un brief" },
        { icon: '[ hardening ]', title: 'Audit & hardening infra', description: 'Audit configuration serveur, durcissement Linux/pfSense, sécurité réseau (iptables, reverse proxy). Rapport et plan d\'action priorisé.', duration: '⏱ 2-7 jours · selon périmètre' },
        { icon: '[ pentest ]', title: 'Pentest & SIEM', description: "Test d'intrusion réseau et applicatif (Nmap, Metasploit, BurpSuite). Déploiement Wazuh pour monitoring et alerting. Rapport détaillé.", duration: '⏱ 5-15 jours · selon scope' },
      ],
      methodologyTitle: 'methodology',
      methodologySteps: [
        { title: 'Cadrage', description: 'Appel découverte 20 min + scope écrit + NDA signé.' },
        { title: 'Recon & analyse', description: "Cartographie, énumération, identification des surfaces d'attaque." },
        { title: 'Exécution', description: 'Tests outillés et manuels avec journal horodaté.' },
        { title: 'Livrable', description: 'Rapport exec + technique + recommandations priorisées.' },
      ],
      legalItems: ['Pentest autorisé uniquement', 'NDA systématique', 'Rapport livrable', 'Discrétion absolue'],
      ctaPrimary: 'Réserver un appel (20 min · gratuit)',
      ctaSecondary: 'Demander un devis',
    },
    contact: {
      eyebrow: 'contact',
      title: 'Travaillons ensemble',
      lead: "Une opportunité CDI, une mission freelance, ou juste envie d'échanger ? Tous les canaux sont ouverts.",
      channels: {
        emailLabel: 'Email',
        linkedinLabel: 'LinkedIn',
        githubLabel: 'GitHub',
        calendlyLabel: 'Calendly',
        calendlyValue: 'Appel découverte · 20 min',
      },
      form: {
        typeLabel: 'Type de demande',
        typeOptions: [
          'Opportunité CDI · Système / DevOps / Sécurité',
          'Mission freelance · Déploiement & CI/CD',
          'Mission freelance · Audit & hardening infra',
          'Mission freelance · Pentest & SIEM',
          'Autre / échange',
        ],
        nameLabel: 'Nom',
        emailLabel: 'Email',
        messageLabel: 'Message',
        messagePlaceholder: 'Contexte, périmètre, délai souhaité...',
        submit: 'Envoyer →',
      },
    },
    footer: {
      rights: '© 2026 Tahirihasina Rakotomanga',
      tagline: 'Built with care · Deployed on Netlify · Source on GitHub',
    },
  },
  en: {
    meta: {
      title: 'Tahirihasina Rakotomanga · Systems & Security Engineer · DevOps',
      description: 'Systems & Security Engineer specialized in DevOps: CI/CD, automation, cloud infrastructure deployment. Passionate about cybersecurity and SOC.',
    },
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      services: 'Freelance',
      contact: 'Contact',
      cv: '↓ Resume',
    },
    hero: {
      badge: 'Open to opportunities · Full-time + Freelance',
      titleLine1Before: '',
      titleLine1Accent: 'Systems & Security',
      titleLine2Connector: '& ',
      titleLine2Mono: 'DevOps Engineer.',
      tagline: 'Specialized in CI/CD, automation, and secure cloud infrastructure deployment. Passionate about cybersecurity, pentesting, and SOC.',
      location: '📍 Antananarivo, Madagascar',
      remote: '🌐 Remote-friendly',
      education: '🎓 MSc MISA (in progress)',
      ctaPrimary: 'Get in touch →',
      ctaSecondary: 'See my projects',
      terminalTitle: 'visitor@tahirihasina:~',
      terminalRole: 'Systems & Security · DevOps Engineer',
      terminalComment: '# Passionate about cybersecurity & SOC',
      terminalHintStart: 'Type help to start',
    },
    terminalI18n: {
      inputAria: 'Interactive terminal — type a command',
      bootGreeting: 'Welcome to tahirihasina.dev — type <span class="terminal-link">help</span> to see the available commands.',
      helpHeader: 'Available commands:',
      commandNotFound: 'Command not found',
      tryHelp: 'Type <span class="terminal-link">help</span> to see the list.',
      rmrf: "Nice try. I'm a Systems & Security engineer. ;)",
      sudo: 'Permission denied — reach me via the Contact section to grant sudo rights.',
      nmapOutput: 'Starting Nmap scan...\nHost is up (0.001s latency).\nPort 22/tcp  open  ssh\nPort 80/tcp  open  http\nPort 443/tcp open  https\nPort 8080/tcp open  contact-me\n\nScan complete — host available for full-time and freelance missions.',
      matrixDone: 'There is no spoon. ¯\\_(ツ)_/¯',
      catNotFound: 'File not found. Try: skills.txt, stack.txt, about.txt, contact.txt',
      projectNotFound: 'Project not found. Type ls projects/ to see the list.',
      clearHint: 'screen cleared.',
    },
    about: {
      eyebrow: 'about',
      title: 'About',
      p1: 'DevOps engineer specialized in CI/CD, automation, and cloud infrastructure deployment. Experienced in building pipelines with GitHub Actions, containerization with Docker, and automation with Ansible across multi-cloud environments (AWS, OVH, VPS).',
      p2: "Focused on <strong>reliability and performance</strong>, with the ability to automate and <strong style=\"color: var(--color-accent)\">secure production deployments</strong>. Currently Systems & Security Engineer at CSS Ankorondrano, in parallel with an AI Engineer & Developer role at Redsmite AI.",
      p3: 'Passionate about <strong style="color: var(--color-accent)">cybersecurity</strong>: pentesting (Nmap, Metasploit, BurpSuite, Hydra), network security (iptables, pfSense), and SIEM with Wazuh. Open to full-time opportunities and freelance missions. Bilingual FR/EN, remote-friendly.',
      metaLocation: 'Location',
      metaFormation: 'Education',
      metaFormationValue: 'MSc MISA (in progress)',
      metaLanguages: 'Languages',
      metaLanguagesValue: 'FR · EN · MG',
      metaAvailability: 'Availability',
      metaAvailabilityValue: 'Open · 2026',
      certsTitle: 'certifications',
      certsIssuer: 'ANSSI · SecNumacadémie (French Cybersecurity Agency)',
      certsName: 'MOOC SecNumacadémie Certificate — 4 SSI modules',
      certsDate: 'Issued on June 30, 2025',
      certsModules: [
        { label: 'Overview of Information System Security', score: '84%' },
        { label: 'Authentication Security', score: '86%' },
        { label: 'Internet Security', score: '94%' },
        { label: 'Workstation & Nomadic Security', score: '90%' },
      ],
      certsDownload: '↓ Download certificate',
    },
    experience: {
      eyebrow: 'experience',
      title: 'Professional journey',
      lead: 'Professional experience alongside my studies — Systems, Security, DevOps, AI.',
      badgeCurrent: '● current',
      items: [
        {
          role: 'Systems & Security Engineer',
          company: 'Customer Service Subcontractor (CSS) — Ankorondrano',
          period: 'December 2025 — Present',
          current: true,
          highlights: [
            'Wazuh SIEM production deployment via Docker (manager + indexer + dashboard, agents, rules, alerting)',
            'GLPI production rollout via Docker (Contabo, reverse proxy, volume persistence)',
            'Configuration automation with Ansible (IaC)',
            'Secure service deployment on AWS and OVH (EC2 / VPS + Nginx)',
          ],
          tags: ['Wazuh', 'Docker', 'Ansible', 'AWS', 'OVH', 'Nginx'],
        },
        {
          role: 'AI Engineer & Developer',
          company: 'Redsmite AI',
          period: 'March 2026 — Present',
          current: true,
          highlights: [
            'Development of automated applications based on AI models',
            'Integration of automated workflows and intelligent service deployment',
            'Contribution to optimization and automation of application processes',
          ],
          tags: ['Python', 'AI', 'Automation', 'Workflows'],
        },
        {
          role: 'DevOps Engineer',
          company: "Faculty of Sciences — University of Antananarivo",
          period: 'October 2025 — February 2026',
          current: false,
          highlights: [
            'Set up of a CI/CD pipeline (GitHub Actions)',
            'Containerized application deployment (Docker)',
            'Production deployment automation',
          ],
          tags: ['GitHub Actions', 'Docker', 'CI/CD', 'Linux'],
        },
        {
          role: 'Server Administrator',
          company: 'FMSA Online Voting Project — University of Antananarivo',
          period: 'September 2025 — October 2025',
          current: false,
          highlights: [
            'Application deployment (NestJS / Next.js) on Linux',
            'Reverse proxy configuration (Apache2, WebSocket)',
            'PostgreSQL and application services management',
          ],
          tags: ['NestJS', 'Next.js', 'Apache2', 'PostgreSQL'],
        },
        {
          role: 'Network Administrator',
          company: 'MISA',
          period: 'February 2024 — December 2025',
          current: false,
          highlights: [
            'Administration and securing of network infrastructure',
            'MISA server management: install, updates, hardening, and backups',
          ],
          tags: ['Linux', 'Network sec', 'Backup', 'Hardening'],
        },
        {
          role: 'API Developer',
          company: 'Etech',
          period: 'October 2024 — November 2024',
          current: false,
          highlights: [
            'REST API development (Django)',
            'Tests and documentation',
          ],
          tags: ['Django REST', 'Python', 'Tests'],
        },
      ],
    },
    skills: {
      eyebrow: 'stack',
      title: 'Technical stack',
      lead: 'Technologies I use daily, organized by domain.',
      catDevOps: 'DevOps & Cloud',
      catCyber: 'Cybersecurity',
      catSystems: 'Systems & Network',
      catDev: 'Development',
    },
    projects: {
      eyebrow: 'projects',
      title: 'Selected projects',
      lead: 'Real projects — public code, deployment, and documentation.',
      statusProduction: '● Production',
      statusPersonal: '● Personal project',
      statusLive: '● Live',
      statusDeployed: '● Deployed',
      items: [
        {
          meta: 'SIEM · SOC · Cybersecurity',
          status: '● Production',
          title: 'Wazuh SIEM production deployment (CSS)',
          description: 'Full Wazuh SIEM platform set-up via Docker in production: manager + indexer + dashboard, agent rollout across server fleet, detection rules tuning, alerting and real-time monitoring of cyber incidents. Infrastructure hardening (iptables, reverse proxy, volume persistence).',
          stack: ['Wazuh', 'Docker', 'Linux', 'iptables', 'Nginx', 'SOC'],
          links: [{ label: '→ Details', href: '#' }],
        },
        {
          meta: 'DevOps · IaC · Security',
          status: '● Production',
          title: 'Dockerized GLPI deployment (CSS)',
          description: 'Production deployment of GLPI via Docker on Contabo: reverse proxy, volume persistence, Ansible automation (IaC). Secured services on AWS and OVH (EC2/VPS + Nginx).',
          stack: ['Docker', 'Ansible', 'Nginx', 'AWS', 'OVH'],
          links: [{ label: '→ GitHub', href: '#' }],
        },
        {
          meta: 'Cybersecurity · Visualization',
          status: '● Personal project',
          title: 'Cyber incidents visualization',
          description: 'Tool to visualize cybersecurity incidents: ingestion, aggregation, and graphical rendering. Flask + PostgreSQL stack, Docker-containerized, Git-versioned.',
          stack: ['Flask', 'PostgreSQL', 'Docker', 'Git'],
          links: [{ label: '→ GitHub', href: '#' }],
        },
        {
          meta: 'DevOps · CI/CD',
          status: '● Production',
          title: 'CI/CD Pipeline — Faculty of Sciences',
          description: 'Complete setup of a GitHub Actions pipeline, Docker containerization, and production deployment automation on the Faculty environment.',
          stack: ['GitHub Actions', 'Docker', 'Linux'],
          links: [{ label: '→ GitHub', href: '#' }],
        },
        {
          meta: 'Backend · Sysadmin',
          status: '● Live',
          title: 'FMSA Online Voting',
          description: 'Administration and production deployment of a voting app (NestJS / Next.js) on Linux: Apache2 reverse proxy, WebSocket, PostgreSQL management, and application services.',
          stack: ['NestJS', 'Next.js', 'Apache2', 'PostgreSQL'],
          links: [{ label: '→ GitHub', href: '#' }],
        },
        {
          meta: 'Backend · REST API',
          status: '● Deployed',
          title: 'Django REST API + Render',
          description: 'Development and deployment of a group API backend: Django REST Framework, PostgreSQL, Render Cloud hosting. Tests and documentation included.',
          stack: ['Django REST', 'PostgreSQL', 'Render', 'Python'],
          links: [{ label: '→ GitHub', href: '#' }],
        },
      ],
    },
    services: {
      eyebrow: 'freelance',
      title: 'Freelance missions',
      lead: 'Deploy, automate, or secure your infrastructure. Clear scope, NDA by default, deliverable report.',
      intro: '<span style="color: var(--color-accent)">$</span> I offer freelance services to SMBs and scale-ups that want to <strong>deploy, automate, or secure</strong> their infrastructure.',
      items: [
        { icon: '[ deploy ]', title: 'Deployment & CI/CD', description: 'Setting up GitHub Actions pipelines, Docker containerization, Ansible automation. Secured application deployment on AWS, OVH, or VPS.', duration: '⏱ 3-10 days · from brief' },
        { icon: '[ hardening ]', title: 'Audit & infra hardening', description: 'Server configuration audit, Linux/pfSense hardening, network security (iptables, reverse proxy). Report and prioritized action plan.', duration: '⏱ 2-7 days · per scope' },
        { icon: '[ pentest ]', title: 'Pentest & SIEM', description: 'Network and application penetration testing (Nmap, Metasploit, BurpSuite). Wazuh deployment for monitoring and alerting. Detailed report.', duration: '⏱ 5-15 days · per scope' },
      ],
      methodologyTitle: 'methodology',
      methodologySteps: [
        { title: 'Scoping', description: '20-min discovery call + written scope + signed NDA.' },
        { title: 'Recon & analysis', description: 'Mapping, enumeration, attack surface identification.' },
        { title: 'Execution', description: 'Tooled and manual tests with timestamped journal.' },
        { title: 'Deliverable', description: 'Exec summary + technical report + prioritized recommendations.' },
      ],
      legalItems: ['Authorized pentest only', 'NDA by default', 'Deliverable report', 'Absolute discretion'],
      ctaPrimary: 'Book a call (20 min · free)',
      ctaSecondary: 'Request a quote',
    },
    contact: {
      eyebrow: 'contact',
      title: "Let's work together",
      lead: 'A full-time opportunity, a freelance mission, or just want to chat? All channels are open.',
      channels: {
        emailLabel: 'Email',
        linkedinLabel: 'LinkedIn',
        githubLabel: 'GitHub',
        calendlyLabel: 'Calendly',
        calendlyValue: 'Discovery call · 20 min',
      },
      form: {
        typeLabel: 'Request type',
        typeOptions: [
          'Full-time opportunity · Systems / DevOps / Security',
          'Freelance · Deployment & CI/CD',
          'Freelance · Audit & hardening',
          'Freelance · Pentest & SIEM',
          'Other / chat',
        ],
        nameLabel: 'Name',
        emailLabel: 'Email',
        messageLabel: 'Message',
        messagePlaceholder: 'Context, scope, desired timeline...',
        submit: 'Send →',
      },
    },
    footer: {
      rights: '© 2026 Tahirihasina Rakotomanga',
      tagline: 'Built with care · Deployed on Netlify · Source on GitHub',
    },
  },
};
