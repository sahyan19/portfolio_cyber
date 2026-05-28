# Project Brief — Portfolio Tahirihasina Rakotomanga

> **Type :** Brief simplifié WDS
> **Auteur du projet :** Sahyan (Tahirihasina Rakotomanga)
> **Date :** 2026-05-28
> **Phase suivante :** Trigger Mapping (`wds-2-trigger-mapping`)

---

## 1. Identité du porteur

- **Nom :** Tahirihasina Rakotomanga
- **Email :** tahirihasinarakotomanga@gmail.com
- **Téléphone :** +261 34 44 831 76
- **LinkedIn :** linkedin.com/in/tahirihasina-rakotomanga
- **Cursus :** Master 2 MISA (Mathématiques Informatiques et Statistiques Appliquées) — Université d'Antananarivo
- **Positionnement professionnel :** Ingénieur DevOps / Système & Sécurité / IA
- **Domaines de prédilection :** DevOps, Cybersécurité (Pentesting + SIEM/SOC), Cloud, IA appliquée

### Stack technique synthétique (extraite du CV)
- **DevOps & Cloud :** Docker, Kubernetes, CI/CD, GitHub Actions, AWS, OVH, Contabo, LXC
- **Systèmes & Virtualisation :** Linux, Windows, Proxmox, VMware, Hyper-V, VirtualBox
- **Automatisation :** Ansible, Bash, Python, PowerShell
- **Réseaux :** TCP/IP, DNS, DHCP, VLAN, routage, IPv4/IPv6, SSH
- **Cybersécurité :** Nmap, Metasploit, Hydra, BurpSuite, iptables, pfSense, Wazuh (SIEM)
- **Dev Web :** Python (Django, Flask), PHP, JavaScript, HTML/CSS
- **Bases de données :** PostgreSQL, MySQL
- **Langues :** Malgache (LM), Français (courant), Anglais (intermédiaire technique)

---

## 2. Scope du projet

### Format
**Site web one-page scrollable**, bilingue **FR/EN** avec switch de langue, déployé sur **Netlify**.

### Sections prévues
1. **Hero** — terminal interactif comme point d'entrée signature
2. **À propos** — photo de profil + bio courte orientée DevSecOps
3. **Skills** — visualisation des compétences techniques (catégorisées DevOps / Cyber / Cloud / Dev)
4. **Projets** — projets perso et pro extraits du CV (Cyber incidents viz, déploiements Docker, API REST, etc.)
5. **Contact** — CTA multiples (email, formulaire, Calendly, GitHub, LinkedIn) + CV téléchargeable

### Mécanique signature : Terminal interactif
Commandes simulées style CLI hacker comme couche d'interaction principale :
- `whoami` → affiche bio
- `cat skills.txt` → liste skills
- `ls projects/` + `cat projects/X.md` → ouvre les projets
- `nmap --target=me` → easter egg / contact
- `help` → liste des commandes
- Support clavier + boutons fallback pour utilisateurs non-tech

### Asset visuel
Photo de profil disponible (`photo.jpeg`) — portrait souriant sur fond bleu clair, à styliser en version cyber (duotone, scanline, ou glitch léger) tout en gardant une version "propre" pour rassurer côté pro.

---

## 3. Défi / Opportunité

### Pourquoi ce portfolio existe

**Double objectif professionnel :**
1. **Décrocher un CDI DevSecOps** auprès d'un employeur (recruteur RH + lead tech à convaincre)
2. **Obtenir des missions freelance en pentest** auprès de clients directs ou via plateformes

### Le constat
- Le CV PDF et LinkedIn ne *démontrent* pas la compétence — ils la *listent*.
- Les profils DevOps junior sont nombreux ; un portfolio interactif différenciant signal la passion réelle pour la cyber.
- La demande en DevSecOps et pentest freelance est en croissance — il faut être visible et crédible en ligne.

### L'opportunité
Un portfolio qui **incarne** la compétence cybersécurité dès la première seconde (terminal, code, ambiance hacker pro) prouve mieux qu'un CV. Il sert à la fois de **vitrine commerciale freelance** et de **carte de visite recruteur**.

---

## 4. Objectifs design

### Vibe cible (équilibre)
- **Sérieux / pro** — rassure un recruteur RH et un lead tech (typographie nette, navigation claire, contenu structuré)
- **Technique / créatif** — impressionne par la maîtrise (motion subtile, micro-interactions, code-as-content)
- **Hacker / immersif** — signature personnelle (terminal, ambiance dark, palette néon)

**Référence d'inspiration directionnelle :** *Linear meets Vercel meets terminal cyber* — du dark-tech élégant, pas du "edgy gratuit".

### Direction visuelle proposée
- **Palette :** dark base (`#0a0e14` ou similaire) + accent néon **vert/cyan** (vert hacker `#00ff88` ou cyan `#00d4ff`), texte clair, gradients discrets
- **Typo :** monospace pour code/terminal (JetBrains Mono ou Fira Code) + sans-serif moderne pour le texte (Inter ou Geist)
- **Effets :** scanlines subtiles, curseur clignotant, motion d'apparition au scroll, hover states marqués, transitions fluides
- **Photo :** version duotone/cyan ou glitch contrôlé en hero, version propre en "À propos"

### Calls-to-action (hiérarchisés)
1. **CTA principal :** Me contacter (email direct ou formulaire)
2. **CTA secondaires :** Télécharger CV, Réserver un créneau (Calendly), Voir GitHub
3. **CTA tertiaires :** LinkedIn, écrire commande terminal

### Critères de succès mesurables (3-6 mois après mise en ligne)
- ≥ 3 prises de contact recruteurs entrantes via le portfolio
- ≥ 2 demandes de mission freelance pentest entrantes
- Apparition en première page Google sur "Tahirihasina Rakotomanga"
- Fierté personnelle : un asset à montrer en entretien et sur LinkedIn

---

## 5. Contraintes

### Délai
**Flexible** — pas de date butoir imposée, mais l'objectif est une mise en ligne rapide pour commencer à générer des prises de contact.

### Stack technique (recommandation Phase 2 — à confirmer)
- **Front recommandé :** **Astro + Tailwind CSS**
  - *Pourquoi :* perf SEO excellente, JS minimal, idéal Netlify, i18n facile, build statique rapide
  - *Alternative :* Next.js (si préférence React) ou Vite + React
- **Terminal interactif :** composant custom (xterm.js si terminal lourd, ou implémentation custom légère pour rester perf)
- **i18n :** stratégie statique (deux builds ou routes `/fr/` et `/en/`)
- **Animations :** Framer Motion (si React) ou GSAP / Motion One

### Hébergement & domaine
- **Hébergement :** **Netlify** (build auto sur push Git, CDN, HTTPS, formulaires natifs, redirects)
- **Domaine :** démarrage sur sous-domaine Netlify (`tahirihasina.netlify.app`), nom de domaine perso à acquérir ensuite (recommandation : `.dev` ou `.io`)

### Analytics
- **Recommandation :** **Plausible** ou **Umami** (respect vie privée, cohérent avec posture sécurité — pas de Google Analytics)

### Identité visuelle existante
**Aucune charte préexistante** — liberté totale pour proposer en Phase 2 (Trigger Mapping puis Visual Design).

### Contenu à préparer en amont de la Phase 2/3
- Repos GitHub des projets perso à rendre publics (si pas déjà fait)
- Screenshots / démos live des projets
- Bio courte FR + EN
- Version finale du CV PDF (à proposer en téléchargement)
- Liens Calendly (si pas déjà créé)

---

## 6. Hors-scope (pour ce v1)

À écarter explicitement de la première version pour éviter le scope creep :
- Blog / articles techniques (peut venir en v2)
- Système d'auth ou espace privé
- CMS headless (contenu en dur dans le repo pour le v1)
- Dashboard SOC simulé en live (peut être un "easter egg" ou un projet montré, pas la page principale)
- E-commerce / paiements

---

## 7. Prochaine étape

**Phase 2 — Trigger Mapping** (`wds-2-trigger-mapping`) :
- Définir les **personas** précis (recruteur DSI / RH tech / lead DevSecOps / prospect freelance PME)
- Mapper les **forces motrices** psychologiques (preuve sociale, démonstration de compétence, accessibilité)
- **Scorer les fonctionnalités** (terminal, projets, CV, blog…) contre ces forces pour prioriser
- Préparer le terrain pour les **scénarios UX** (Phase 2 suite)
