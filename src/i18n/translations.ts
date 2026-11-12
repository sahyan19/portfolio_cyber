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
    helpLines: Array<{ cmd: string; desc: string }>;
    commandNotFound: string;
    tryHelp: string;
    rmrf: string;
    sudo: string;
    nmapOutput: string;
    matrixDone: string;
    catNotFound: string;
    projectNotFound: string;
    clearHint: string;
    certification: string;
    aboutLines: string[];
    cvDownloading: string;
    cvStarted: string;
    lsProjectsHint: string;
    lsNotFolder: string;
    contactCvHint: string;
    themeNotice: string;
    exitNotice: string;
    stackSystem: string;
    stackSecurity: string;
  };
  about: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
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
    availabilityStatus: string;
    availabilityMeta: string;
    channels: {
      emailLabel: string;
      linkedinLabel: string;
      githubLabel: string;
      calendlyLabel: string;
      calendlyValue: string;
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
      title: 'Tahirihasina Rakotomanga · Ingénieur Cybersécurité & DevOps',
      description: "Ingénieur Cybersécurité et DevOps : pentest, supervision SOC / SIEM, réponse à incident, analyse forensique, scans de vulnérabilités et pilotage de projets sécurité.",
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
      badge: 'Ouvert aux missions freelance',
      titleLine1Before: 'Ingénieur ',
      titleLine1Accent: 'Cybersécurité',
      titleLine2Connector: '& ',
      titleLine2Mono: 'DevOps.',
      tagline: "Cybersécurité offensive et défensive : pentest, supervision SOC / SIEM, réponse à incident et analyse forensique, scans de vulnérabilités, durcissement système et pilotage de projets sécurité.",
      location: '📍 Antananarivo, Madagascar',
      remote: '🌐 Remote-friendly',
      education: '🎓 Master 2 MISA',
      ctaPrimary: 'Me contacter →',
      ctaSecondary: 'Voir mes projets',
      terminalTitle: 'visitor@tahirihasina:~',
      terminalRole: 'Ingénieur Cybersécurité & DevOps',
      terminalComment: '# Passionné de cybersécurité & SOC',
      terminalHintStart: 'Type help to start',
    },
    terminalI18n: {
      inputAria: 'Terminal interactif - tapez une commande',
      bootGreeting: "Bienvenue sur tahirihasina.dev - tapez <span class=\"terminal-link\">help</span> pour voir les commandes disponibles.",
      helpHeader: 'Commandes disponibles :',
      helpLines: [
        { cmd: 'help', desc: 'Affiche cette aide' },
        { cmd: 'whoami', desc: 'Mon profil court' },
        { cmd: 'about', desc: 'Bio complète' },
        { cmd: 'experience', desc: 'Mon parcours pro' },
        { cmd: 'skills', desc: 'Stack technique catégorisée' },
        { cmd: 'ls projects/', desc: 'Liste mes projets' },
        { cmd: 'cat projects/&lt;id&gt;', desc: "Détail d'un projet" },
        { cmd: 'contact', desc: 'Canaux de contact' },
        { cmd: 'cv', desc: 'Télécharger mon CV' },
        { cmd: 'anssi', desc: 'Mon attestation ANSSI' },
        { cmd: 'clear', desc: "Vider l'écran (Ctrl+L)" },
        { cmd: 'matrix', desc: '¯\\_(ツ)_/¯' },
      ],
      commandNotFound: 'Commande introuvable',
      tryHelp: 'Tapez <span class="terminal-link">help</span> pour voir la liste.',
      rmrf: 'Bien tenté. Je suis ingénieur cybersécurité. ;)',
      sudo: 'Permission denied - contactez-moi via la section Contact pour les droits sudo.',
      nmapOutput: 'Starting Nmap scan...\nHost is up (0.001s latency).\nPort 22/tcp  open  ssh\nPort 80/tcp  open  http\nPort 443/tcp open  https\nPort 8080/tcp open  contact-me\n\nScan terminé - host disponible pour missions freelance.',
      matrixDone: 'There is no spoon. ¯\\_(ツ)_/¯',
      catNotFound: 'Fichier introuvable. Essayez : skills.txt, stack.txt, about.txt, contact.txt',
      projectNotFound: 'Projet introuvable. Tapez ls projects/ pour voir la liste.',
      clearHint: 'écran nettoyé.',
      certification: '🇫🇷 Certifié ANSSI · SecNumacadémie',
      aboutLines: [
        'Ingénieur Cybersécurité + DevOps basé à Antananarivo, Madagascar.',
        'Master 2 MISA en cours · Bilingue FR/EN · Remote-friendly.',
        'Actuellement Ingénieur Cybersécurité chez Orange Madagascar.',
        '',
        'Spécialisé en CI/CD, automatisation, déploiement infra sécurisée.',
        'Passionné de cybersécurité, pentest et SOC.',
      ],
      cvDownloading: 'Téléchargement de CV_Rakotomanga_Tahirihasina.pdf...',
      cvStarted: '✓ Démarré.',
      lsProjectsHint: '→ cat projects/&lt;id&gt; pour le détail.',
      lsNotFolder: 'pas un dossier',
      contactCvHint: 'Tapez "cv" pour télécharger mon CV.',
      themeNotice: 'SOC Cyan · dark · only. (Pas de changement de thème en v1.)',
      exitNotice: 'Impossible de sortir. Ceci est un portfolio. 😉',
      stackSystem: 'Système',
      stackSecurity: 'Sécu',
    },
    about: {
      eyebrow: 'about',
      title: 'À propos',
      p1: "<strong style=\"color: var(--color-accent)\">Ingénieur Cybersécurité</strong> chez Orange Madagascar, où je supervise les alertes de sécurité (SIEM / SOC), pilote la réponse à incident et l’analyse forensique, réalise des scans de vulnérabilités avec suivi des remédiations et mène des projets de sécurisation. Mon approche combine défense opérationnelle, durcissement des systèmes exposés et veille active sur les vulnérabilités.",
      p2: "Le <strong>DevOps</strong> est mon levier pour industrialiser la sécurité : pipelines CI/CD avec GitHub Actions, conteneurisation Docker, automatisation Ansible et déploiements sécurisés sur environnements multi-cloud (AWS, OVH, VPS). Une approche qui allie <strong>fiabilité, performance</strong> et <strong style=\"color: var(--color-accent)\">sécurité en production</strong>.",
      metaLocation: 'Localisation',
      metaFormation: 'Formation',
      metaFormationValue: 'Master 2 MISA',
      metaLanguages: 'Langues',
      metaLanguagesValue: 'FR · EN · MG',
      metaAvailability: 'Disponibilité',
      metaAvailabilityValue: 'Freelance sur demande',
      certsTitle: 'certifications',
      certsIssuer: 'ANSSI · SecNumacadémie',
      certsName: 'Attestation MOOC SecNumacadémie - 4 modules SSI',
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
      lead: 'Expériences pro en parallèle de mes études - Système, Sécurité, DevOps, IA.',
      badgeCurrent: '● en cours',
      items: [
        {
          role: 'Ingénieur Cybersécurité',
          company: 'Orange Madagascar',
          period: 'Septembre 2026 - Présent',
          current: true,
          highlights: [
            'Supervision des alertes de sécurité et analyse des événements (SIEM / SOC)',
            'Réponse à incident, investigation et analyse forensique',
            'Réalisation de scans de vulnérabilités et suivi des remédiations',
            'Audit de configuration et durcissement des systèmes et services exposés',
            'Pilotage de projets sécurité : cadrage, planning et coordination',
            'Veille sur les vulnérabilités et contribution aux politiques de sécurité',
          ],
          tags: ['SIEM', 'SOC', 'Wazuh', 'Incident Response', 'Forensics', 'Vulnerability Scanning', 'Project Management', 'Linux', 'Nmap'],
        },
        {
          role: 'Ingénieur Support Informatique ',
          company: 'NUKLEAR.io - Ankorondrano',
          period: 'Juin 2026 - Septembre 2026',
          current: false,
          highlights: [
            'Gestion des VPS et des solutions cloud',
            'Configuration et administration des services de messagerie (mails) ',
            'Support technique et résolution d’incidents systèmes ',
          ],
          tags: ['Wazuh', 'Docker', 'Ansible', 'AWS', 'OVH', 'Nginx'],
        },
        {
          role: 'Ingénieur Système et Sécurité',
          company: 'Customer Service Subcontractor (CSS) - Ankorondrano',
          period: 'Décembre 2025 - Septembre 2026',
          current: false,
          highlights: [
            'Déploiement Wazuh SIEM en production via Docker (manager + indexer + dashboard, agents, règles, alerting)',
            'Mise en production de GLPI via Docker (Contabo, reverse proxy, persistance volumes)',
            'Automatisation des configurations avec Ansible (IaC)',
            'Déploiement de services sécurisés sur AWS et OVH (EC2 / VPS + Nginx)',
          ],
          tags: ['Wazuh', 'Docker', 'Ansible', 'AWS', 'OVH', 'Nginx'],
        },
        {
          role: 'Consultant en cybersécurité',
          company: 'Freelance, Indépendant',
          period: 'Septembre 2025 - Janvier 2027',
          current: true,
          highlights: [
            "Analyse de logiciels malveillants et de logs systèmes ",
            'Etude du comportement d’un système lors de l’installation de logiciels tiers non officiels dans un environnement de test contrôlé ',
          ],
          tags: ['Malware Analysis', 'Windows Forensics', 'Sandboxing', 'Audit de Sécurité', 'Analyse Comportementale'],
        },
        
        {
          role: 'Ingénieur IA & Développeur',
          company: 'Redsmite AI',
          period: 'Mars 2026 - Juillet 2026',
          current: false,
          highlights: [
            "Développement d'applications automatisées basées sur des modèles d'IA",
            'Intégration de workflows automatisés et déploiement de services intelligents',
            "Participation à l'optimisation et à l'automatisation des processus applicatifs",
          ],
          tags: ['Python', 'IA', 'Automatisation', 'Workflows'],
        },
        {
          role: 'Ingénieur DevOps',
          company: "Faculté des Sciences - Université d'Antananarivo",
          period: 'Octobre 2025 - Février 2026',
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
          company: "Projet Vote en ligne FMSA - Université d'Antananarivo",
          period: 'Septembre 2025 - Octobre 2025',
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
          period: 'Février 2024 - Décembre 2025',
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
          period: 'Octobre 2024 - Novembre 2024',
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
      lead: 'Des projets concrets, code, déploiement et documentation publics.',
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
          stack: ['Wazuh', 'Docker', 'Linux', 'iptables', 'Nginx', 'SOC'],        },
        {
          meta: 'DevOps · IaC · Sécurité',
          status: '● Production',
          title: 'Déploiement GLPI Dockerisé (CSS)',
          description: 'Mise en production de GLPI via Docker sur Contabo : reverse proxy, persistance volumes, automatisation Ansible (IaC). Services sécurisés sur AWS et OVH (EC2/VPS + Nginx).',
          stack: ['Docker', 'Ansible', 'Nginx', 'AWS', 'OVH'],        },
        {
          meta: 'Cybersécurité · Visualisation',
          status: '● Projet personnel',
          title: 'Visualisation des cyber incidents',
          description: "Outil de visualisation des incidents de cybersécurité : ingestion, agrégation et restitution graphique. Stack Flask + PostgreSQL, conteneurisé Docker, versionné Git.",
          stack: ['Flask', 'PostgreSQL', 'Docker', 'Git'],        },
        {
          meta: 'DevOps · CI/CD',
          status: '● Production',
          title: 'Pipeline CI/CD Faculté des Sciences',
          description: "Mise en place complète d'un pipeline GitHub Actions, conteneurisation Docker et automatisation des mises en production sur l'environnement de la Faculté.",
          stack: ['GitHub Actions', 'Docker', 'Linux'],        },
        {
          meta: 'Backend · Sysadmin',
          status: '● Live',
          title: 'Vote en ligne FMSA',
          description: "Administration et mise en production d'une application de vote (NestJS / Next.js) sur Linux : reverse proxy Apache2, WebSocket, gestion PostgreSQL et services applicatifs.",
          stack: ['NestJS', 'Next.js', 'Apache2', 'PostgreSQL'],        },
        {
          meta: 'Backend · API REST',
          status: '● Déployé',
          title: 'API Django REST + Render',
          description: "Développement et déploiement du backend d'une API de groupe : Django REST Framework, PostgreSQL, hébergement Render (Cloud). Tests et documentation associés.",
          stack: ['Django REST', 'PostgreSQL', 'Render', 'Python'],        },
      ],
    },
    services: {
      eyebrow: 'freelance',
      title: 'Missions freelance',
      lead: 'Déployer, automatiser ou sécuriser ton infrastructure. Cadre clair, rapport livrable.',
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
      lead: "Une mission freelance ou juste envie d'échanger ? Tous les canaux sont ouverts.",
      availabilityStatus: 'Disponible · Freelance',
      availabilityMeta: 'Antananarivo, Madagascar · Remote-friendly',
      channels: {
        emailLabel: 'Email',
        linkedinLabel: 'LinkedIn',
        githubLabel: 'GitHub',
        calendlyLabel: 'Calendly',
        calendlyValue: 'Appel découverte · 20 min',
      },
    },
    footer: {
      rights: '© 2026 Tahirihasina Rakotomanga',
      tagline: 'Built with care · Deployed on Netlify · Source on GitHub',
    },
  },
  en: {
    meta: {
      title: 'Tahirihasina Rakotomanga · Cybersecurity & DevOps Engineer',
      description: 'Cybersecurity and DevOps Engineer: pentesting, SOC / SIEM monitoring, incident response, forensic analysis, vulnerability scanning and security project management.',
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
      badge: 'Open to freelance missions',
      titleLine1Before: '',
      titleLine1Accent: 'Cybersecurity',
      titleLine2Connector: '& ',
      titleLine2Mono: 'DevOps Engineer.',
      tagline: 'Offensive and defensive cybersecurity: pentesting, SOC / SIEM monitoring, incident response and forensic analysis, vulnerability scanning, system hardening and security project management.',
      location: '📍 Antananarivo, Madagascar',
      remote: '🌐 Remote-friendly',
      education: '🎓 MSc MISA',
      ctaPrimary: 'Get in touch →',
      ctaSecondary: 'See my projects',
      terminalTitle: 'visitor@tahirihasina:~',
      terminalRole: 'Cybersecurity & DevOps Engineer',
      terminalComment: '# Passionate about cybersecurity & SOC',
      terminalHintStart: 'Type help to start',
    },
    terminalI18n: {
      inputAria: 'Interactive terminal - type a command',
      bootGreeting: 'Welcome to tahirihasina.dev - type <span class="terminal-link">help</span> to see the available commands.',
      helpHeader: 'Available commands:',
      helpLines: [
        { cmd: 'help', desc: 'Show this help' },
        { cmd: 'whoami', desc: 'Short profile' },
        { cmd: 'about', desc: 'Full bio' },
        { cmd: 'experience', desc: 'My professional journey' },
        { cmd: 'skills', desc: 'Categorized tech stack' },
        { cmd: 'ls projects/', desc: 'List my projects' },
        { cmd: 'cat projects/&lt;id&gt;', desc: 'Project details' },
        { cmd: 'contact', desc: 'Contact channels' },
        { cmd: 'cv', desc: 'Download my resume' },
        { cmd: 'anssi', desc: 'My ANSSI certificate' },
        { cmd: 'clear', desc: 'Clear the screen (Ctrl+L)' },
        { cmd: 'matrix', desc: '¯\\_(ツ)_/¯' },
      ],
      commandNotFound: 'Command not found',
      tryHelp: 'Type <span class="terminal-link">help</span> to see the list.',
      rmrf: "Nice try. I'm a cybersecurity engineer. ;)",
      sudo: 'Permission denied - reach me via the Contact section to grant sudo rights.',
      nmapOutput: 'Starting Nmap scan...\nHost is up (0.001s latency).\nPort 22/tcp  open  ssh\nPort 80/tcp  open  http\nPort 443/tcp open  https\nPort 8080/tcp open  contact-me\n\nScan complete - host available for freelance missions.',
      matrixDone: 'There is no spoon. ¯\\_(ツ)_/¯',
      catNotFound: 'File not found. Try: skills.txt, stack.txt, about.txt, contact.txt',
      projectNotFound: 'Project not found. Type ls projects/ to see the list.',
      clearHint: 'screen cleared.',
      certification: '🇫🇷 ANSSI Certified · SecNumacadémie',
      aboutLines: [
        'Cybersecurity + DevOps engineer based in Antananarivo, Madagascar.',
        'MSc MISA in progress · Bilingual FR/EN · Remote-friendly.',
        'Currently Cybersecurity Engineer at Orange Madagascar.',
        '',
        'Specialized in CI/CD, automation, and secure infrastructure deployment.',
        'Passionate about cybersecurity, pentesting, and SOC.',
      ],
      cvDownloading: 'Downloading CV_Rakotomanga_Tahirihasina.pdf...',
      cvStarted: '✓ Started.',
      lsProjectsHint: '→ cat projects/&lt;id&gt; for details.',
      lsNotFolder: 'not a directory',
      contactCvHint: 'Type "cv" to download my resume.',
      themeNotice: 'SOC Cyan · dark · only. (No theme switch in v1.)',
      exitNotice: 'Cannot escape. This is a portfolio. 😉',
      stackSystem: 'System',
      stackSecurity: 'Security',
    },
    about: {
      eyebrow: 'about',
      title: 'About',
      p1: '<strong style="color: var(--color-accent)">Cybersecurity Engineer</strong> at Orange Madagascar, where I monitor security alerts (SIEM / SOC), lead incident response and forensic analysis, run vulnerability scans with remediation tracking and drive security projects. My approach combines operational defense, hardening of exposed systems and active vulnerability watch.',
      p2: '<strong>DevOps</strong> is my force multiplier to industrialize security: CI/CD pipelines with GitHub Actions, Docker containerization, Ansible automation and secure deployments across multi-cloud environments (AWS, OVH, VPS). An approach that combines <strong>reliability, performance</strong> and <strong style="color: var(--color-accent)">production security</strong>.',
      metaLocation: 'Location',
      metaFormation: 'Education',
      metaFormationValue: 'MSc MISA',
      metaLanguages: 'Languages',
      metaLanguagesValue: 'FR · EN · MG',
      metaAvailability: 'Availability',
      metaAvailabilityValue: 'Freelance on request',
      certsTitle: 'certifications',
      certsIssuer: 'ANSSI · SecNumacadémie (French Cybersecurity Agency)',
      certsName: 'MOOC SecNumacadémie Certificate - 4 SSI modules',
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
      lead: 'Professional experience alongside my studies - Systems, Security, DevOps, AI.',
      badgeCurrent: '● current',
      items: [
        {
          role: 'Cybersecurity Engineer',
          company: 'Orange Madagascar',
          period: 'September 2026 - Present',
          current: true,
          highlights: [
            'Security alert monitoring and event analysis (SIEM / SOC)',
            'Incident response, investigation and forensic analysis',
            'Vulnerability scanning and remediation tracking',
            'Configuration audit and hardening of exposed systems and services',
            'Security project management: scoping, planning and coordination',
            'Vulnerability watch and contribution to security policies',
          ],
          tags: ['SIEM', 'SOC', 'Wazuh', 'Incident Response', 'Forensics', 'Vulnerability Scanning', 'Project Management', 'Linux', 'Nmap'],
        },
        {
          role: 'IT Support Engineer',
          company: 'NUKLEAR.io - Ankorondrano',
          period: 'June 2026 - September 2026',
          current: false,
          highlights: [
            'VPS and cloud solutions management',
            'Configuration and administration of mail services',
            'Technical support and system incident resolution',
          ],
          tags: ['Wazuh', 'Docker', 'Ansible', 'AWS', 'OVH', 'Nginx'],
        },
        {
          role: 'Systems & Security Engineer',
          company: 'Customer Service Subcontractor (CSS) - Ankorondrano',
          period: 'December 2025 - September 2026',
          current: false,
          highlights: [
            'Wazuh SIEM production deployment via Docker (manager + indexer + dashboard, agents, rules, alerting)',
            'GLPI production rollout via Docker (Contabo, reverse proxy, volume persistence)',
            'Configuration automation with Ansible (IaC)',
            'Secure service deployment on AWS and OVH (EC2 / VPS + Nginx)',
          ],
          tags: ['Wazuh', 'Docker', 'Ansible', 'AWS', 'OVH', 'Nginx'],
        },
        {
          role: 'Cybersecurity Consultant',
          company: 'Freelance, Independent',
          period: 'September 2025 - January 2027',
          current: true,
          highlights: [
            'Malware and system log analysis',
            'Behavioral study of a system during the installation of unofficial third-party software in a controlled test environment',
          ],
          tags: ['Malware Analysis', 'Windows Forensics', 'Sandboxing', 'Security Audit', 'Behavioral Analysis'],
        },
        {
          role: 'AI Engineer & Developer',
          company: 'Redsmite AI',
          period: 'March 2026 - July 2026',
          current: false,
          highlights: [
            'Development of automated applications based on AI models',
            'Integration of automated workflows and intelligent service deployment',
            'Contribution to optimization and automation of application processes',
          ],
          tags: ['Python', 'AI', 'Automation', 'Workflows'],
        },
        {
          role: 'DevOps Engineer',
          company: "Faculty of Sciences - University of Antananarivo",
          period: 'October 2025 - February 2026',
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
          company: 'FMSA Online Voting Project - University of Antananarivo',
          period: 'September 2025 - October 2025',
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
          period: 'February 2024 - December 2025',
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
          period: 'October 2024 - November 2024',
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
      lead: 'Real projects - public code, deployment, and documentation.',
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
          stack: ['Wazuh', 'Docker', 'Linux', 'iptables', 'Nginx', 'SOC'],        },
        {
          meta: 'DevOps · IaC · Security',
          status: '● Production',
          title: 'Dockerized GLPI deployment (CSS)',
          description: 'Production deployment of GLPI via Docker on Contabo: reverse proxy, volume persistence, Ansible automation (IaC). Secured services on AWS and OVH (EC2/VPS + Nginx).',
          stack: ['Docker', 'Ansible', 'Nginx', 'AWS', 'OVH'],        },
        {
          meta: 'Cybersecurity · Visualization',
          status: '● Personal project',
          title: 'Cyber incidents visualization',
          description: 'Tool to visualize cybersecurity incidents: ingestion, aggregation, and graphical rendering. Flask + PostgreSQL stack, Docker-containerized, Git-versioned.',
          stack: ['Flask', 'PostgreSQL', 'Docker', 'Git'],        },
        {
          meta: 'DevOps · CI/CD',
          status: '● Production',
          title: 'CI/CD Pipeline - Faculty of Sciences',
          description: 'Complete setup of a GitHub Actions pipeline, Docker containerization, and production deployment automation on the Faculty environment.',
          stack: ['GitHub Actions', 'Docker', 'Linux'],        },
        {
          meta: 'Backend · Sysadmin',
          status: '● Live',
          title: 'FMSA Online Voting',
          description: 'Administration and production deployment of a voting app (NestJS / Next.js) on Linux: Apache2 reverse proxy, WebSocket, PostgreSQL management, and application services.',
          stack: ['NestJS', 'Next.js', 'Apache2', 'PostgreSQL'],        },
        {
          meta: 'Backend · REST API',
          status: '● Deployed',
          title: 'Django REST API + Render',
          description: 'Development and deployment of a group API backend: Django REST Framework, PostgreSQL, Render Cloud hosting. Tests and documentation included.',
          stack: ['Django REST', 'PostgreSQL', 'Render', 'Python'],        },
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
      lead: 'A freelance mission, or just want to chat? All channels are open.',
      availabilityStatus: 'Available · Freelance',
      availabilityMeta: 'Antananarivo, Madagascar · Remote-friendly',
      channels: {
        emailLabel: 'Email',
        linkedinLabel: 'LinkedIn',
        githubLabel: 'GitHub',
        calendlyLabel: 'Calendly',
        calendlyValue: 'Discovery call · 20 min',
      },
    },
    footer: {
      rights: '© 2026 Tahirihasina Rakotomanga',
      tagline: 'Built with care · Deployed on Netlify · Source on GitHub',
    },
  },
};
