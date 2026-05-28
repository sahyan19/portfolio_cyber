# Feature Impact Analysis — Portfolio Tahirihasina

> Scoring des fonctionnalités candidates contre les forces motrices de chaque persona.
> Sortie : priorisation MoSCoW pour le V1 + plan de sprints.

---

## Matrice d'impact

Échelle : **H** (High) = impact fort, **M** (Medium), **L** (Low)
Effort : **L** (1-2 jours), **M** (3-5 jours), **H** (1+ semaine)

| # | Fonctionnalité | Léa (CDI) | Marc (Freelance) | Sophie (RH) | Effort | MoSCoW |
|---|---|:---:|:---:|:---:|:---:|:---:|
| **F1** | Hero clair (tagline DevSecOps + photo + statut "open to") | H | H | H | L | 🔴 MUST |
| **F2** | Terminal interactif (whoami / skills / projects / contact / help / clear) | H | M | L | M-H | 🔴 MUST |
| **F3** | Section Projets avec liens GitHub réels + screenshots | H | H | M | M | 🔴 MUST |
| **F4** | Section Skills catégorisée (DevOps / Cyber / Cloud / Dev) | H | H | H | L | 🔴 MUST |
| **F5** | À propos (bio courte + photo stylisée + parcours) | M | H | M | L | 🔴 MUST |
| **F6** | Bouton "Télécharger CV PDF" très visible (header + section contact) | M | M | H | L | 🔴 MUST |
| **F7** | Section Contact (email cliquable + formulaire Netlify) | H | H | H | L | 🔴 MUST |
| **F8** | Switch FR / EN | M | H | M | M | 🔴 MUST |
| **F9** | Mobile responsive parfait | M | M | H | M | 🔴 MUST |
| **F10** | SEO de base (meta, OG image, sitemap, robots.txt, JSON-LD Person) | M | H | M | L | 🔴 MUST |
| **F11** | Section Services Freelance (scope + méthodologie + Calendly) | L | H | M | M | 🟠 SHOULD |
| **F12** | Lien Calendly pour appel découverte | L | H | M | L | 🟠 SHOULD |
| **F13** | Analytics Plausible/Umami | L | L | L | L | 🟠 SHOULD |
| **F14** | Animations subtiles (scroll reveal, hover, curseur clignotant) | M | L | L | M | 🟠 SHOULD |
| **F15** | Photo stylisée duotone/glitch (version cyber) | M | L | L | L | 🟠 SHOULD |
| **F16** | Easter eggs terminal (sudo, nmap, matrix...) | M | L | L | M | 🟡 COULD |
| **F17** | Section Témoignages/Recommandations | M | H | M | M | 🟡 COULD (si dispo) |
| **F18** | Blog technique / Writeups CTF | M | M | L | H | ⚫ WON'T (v1) |
| **F19** | Dashboard SOC simulé live | M | L | L | H | ⚫ WON'T (v1) |
| **F20** | Mode clair toggle | L | L | L | M | ⚫ WON'T (v1) — dark-only assumé |
| **F21** | CMS headless / système d'admin | L | L | L | H | ⚫ WON'T (v1) |

---

## Plan de build par sprints

### 🚀 Sprint 1 — Fondations (MUST core) → site déployable

**Objectif :** Portfolio en ligne sur Netlify, prêt à montrer.

- **F1** Hero
- **F4** Skills
- **F5** À propos
- **F6** CV PDF
- **F7** Contact (email + formulaire Netlify)
- **F9** Mobile responsive
- **F10** SEO de base
- Squelette Astro + Tailwind, palette + typo posées
- Build & deploy Netlify auto via le repo GitHub déjà créé

**Critère de sortie :** un visiteur peut comprendre qui tu es, voir ton CV, te contacter.

---

### ⚡ Sprint 2 — Pièces signature (MUST suite)

**Objectif :** Différenciation + démonstration de compétence.

- **F2** Terminal interactif (commandes whoami, skills, projects, contact, help, clear)
- **F3** Section Projets avec 4-6 projets bien documentés + liens GitHub réels
- **F8** Switch FR/EN

**Critère de sortie :** un Lead DevSecOps voit la preuve technique en moins d'une minute.

---

### 🎨 Sprint 3 — Conversion freelance + polish (SHOULD)

**Objectif :** Activer le canal freelance + qualité perçue premium.

- **F11** Section Services Freelance (scope, méthodo, NDA, livrables)
- **F12** Calendly intégré
- **F14** Animations subtiles
- **F15** Photo stylisée cyber en hero
- **F13** Plausible/Umami

**Critère de sortie :** Marc (RSSI) peut envisager de te demander un devis.

---

### ✨ Sprint 4 — Détails et plaisir (COULD)

**Objectif :** Mémorisation, partages, fierté.

- **F16** Easter eggs terminal (`sudo become-hired`, `nmap --me`, `matrix`…)
- **F17** Témoignages si tu peux en obtenir 1-2 (anciens managers, profs, clients)

**Critère de sortie :** un visiteur a envie de partager le portfolio.

---

### ⏸️ Repoussé en V2 (WON'T pour le V1)

- **F18** Blog → après mise en ligne et une fois que tu as du temps pour écrire
- **F19** Dashboard SOC simulé → projet à part, peut devenir un easter egg
- **F20** Mode clair → on assume **dark-only** (cohérent positionnement cyber)
- **F21** CMS → contenu en dur dans le repo suffit largement

---

## Décisions design implicites

Cette priorisation cadre une architecture one-page claire :

```
┌─────────────────────────────────────┐
│ Hero (F1) + Terminal interactif (F2)│  ← Premier wow + preuve immédiate
├─────────────────────────────────────┤
│ À propos (F5) + Skills (F4)          │  ← Légitimité + scan rapide
├─────────────────────────────────────┤
│ Projets (F3)                         │  ← LE COEUR — preuves concrètes
├─────────────────────────────────────┤
│ Services Freelance (F11) + Calendly  │  ← Activation Marc/freelance
├─────────────────────────────────────┤
│ Contact (F7) + CV PDF (F6)           │  ← Conversion finale
└─────────────────────────────────────┘
   Switch FR/EN (F8) accessible partout, sticky header
```

---

## Liens

- [Trigger Map (vue d'ensemble)](./trigger-map.md)
- [Personas](./personas/)
- [Project Brief](../A-Product-Brief/project-brief.md)
