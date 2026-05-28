# Page Spec — Home (One-Page Portfolio)

> Spécification complète de la page unique du portfolio.
> Direction visuelle : **SOC Cyan** (voir [design-tokens.md](../../D-Design-System/design-tokens.md)).
> Prototype navigable : [`../prototypes/index.html`](../prototypes/index.html)

**Date :** 2026-05-28
**Statut :** SPEC COMPLÈTE
**Couvre les scénarios :** S01 (Léa), S02 (Marc), S03 (Sophie), S04 (Curieux)

---

## Vue globale

Page unique scrollable en sections, header sticky, switch FR/EN, dark theme cyan accent.

```
[Header sticky : logo + nav + lang + CV]
   │
   ├─ #hero       — Tagline DevSecOps + statut + Terminal interactif + CTA
   ├─ #about      — Photo + bio + meta (lieu, formation, langues, dispo)
   ├─ #skills     — 4 colonnes : DevOps / Cyber / Réseau / Dev
   ├─ #projects   — Grille de 4-6 cartes projets (titre, stack, GitHub, démo)
   ├─ #services   — Freelance : 3 services + méthodologie 4 étapes + cadre légal + CTA
   ├─ #contact    — 4 canaux (email, LinkedIn, GitHub, Calendly) + formulaire Netlify
   └─ Footer
```

---

## Section 1 — Header sticky

**Vue Trigger Map :** #9
**Scénarios :** S01 (CV), S03 (CV mobile — critique)

### Composants
- **Logo** : `tahirihasina.dev` en monospace, `.dev` accent cyan
- **Navigation** : À propos / Skills / Projets / Freelance / Contact (cachée sur mobile, hamburger)
- **Switch langue** : segmented toggle FR | EN (font monospace, fond accent-fade sur active)
- **Bouton CV** : `↓ CV` accent cyan avec glow, toujours visible (header + section contact)

### Comportement
- `position: sticky`, `backdrop-filter: blur(16px)`, background rgba(10,14,20,0.7)
- Border-bottom 1px sur la couleur border
- Sur scroll, opacité légèrement plus marquée (optionnel)

### Mobile
- Logo + bouton CV visibles
- Hamburger ouvre overlay full-screen avec nav

---

## Section 2 — Hero

**Vue Trigger Map :** #1 + #2
**Scénarios :** S01, S02, S03, S04
**Forces motrices clés :** L3, T1, S3, M3

### Structure
Grid 2 colonnes desktop (1.1fr / 1fr), 1 colonne mobile.

#### Colonne gauche — Texte
1. **Badge** : pill vert pulsé "Open to opportunities · CDI + Freelance"
2. **Titre H1** : `Ingénieur [DevSecOps]<br>& [Pentester].`
   - `DevSecOps` en accent cyan
   - `Pentester` en monospace
   - Taille `clamp(36px, 6vw, 64px)`, line-height 1.05, letter-spacing -0.02em
3. **Tagline** : *"J'automatise les déploiements, je sécurise les infrastructures, je teste les défenses. De la CI/CD au SIEM, des conteneurs au hardening serveur."*
4. **Meta inline** : 📍 Antananarivo · 🌐 Remote-friendly · 🎓 Master 2 MISA
5. **CTAs** : `Me contacter →` (primary) + `Voir mes projets` (ghost)

#### Colonne droite — Terminal
Voir [Spec Terminal](#section-terminal-interactif)

### Forces motrices activées
- **L3** (gain de temps) : positionnement clair en <3s
- **T1** (première impression) : terminal + accent cyan signature
- **S3** (disponibilité) : badge "Open to..."
- **M3** (discrétion pro) : ton sérieux, pas "edgy"

---

## Section Terminal interactif

**Vue Trigger Map :** #2
**Scénarios :** S01 (passif), S04 (actif principal)

### Apparence (V1 statique dans le prototype)
- Container : `--color-surface`, border `--color-border-strong`, radius `--radius-xl`
- Header type macOS : 3 dots (rouge, jaune, vert) + titre `visitor@tahirihasina:~`
- Body : fond surface, padding 24px, font-family monospace 13px
- Effet **scanline** subtil en overlay (2% opacité cyan)
- **Glow** cyan léger autour du terminal (signature SOC)

### Couleurs ANSI
- Prompt `:~$` : cyan (`--ansi-prompt`)
- User `visitor@tahirihasina` : vert (`--ansi-user`)
- Sections `[DevOps]` `[Cyber]` : jaune (`--ansi-section`)
- Commentaires `#` : gris (`--ansi-comment`)
- Output standard : text par défaut

### Footer du terminal
- Hint discret : `Type help to start` à gauche · `Tab` `↑↓` à droite (kbd badges)

### V2 (Sprint 2 du build) — Interactivité
Commandes à implémenter :
- `help` : liste des commandes
- `whoami` : profil court
- `cat skills.txt` : skills par catégorie
- `ls projects/` + `cat projects/<name>` : projets
- `contact` : tous les canaux
- `cv` : déclenche téléchargement PDF
- `clear` (+ Ctrl+L) : vide
- `matrix`, `sudo become-hired`, `nmap --target=me` : easter eggs
- Tab autocomplete, historique ↑↓, latence <50ms

### Fallback mobile
- Sur `< 768px` : terminal devient une **carte statique** (preview non-interactif) ou se masque, contenu accessible via les sections classiques

---

## Section 3 — About

**Vue Trigger Map :** #3
**Scénarios :** S02 (légitimité Marc)
**Forces motrices :** M1

### Structure
Grid `280px 1fr` desktop, 1 colonne mobile.

#### Photo
- Container : aspect-ratio 3/4, radius 12px
- Image : `photo.jpeg`
- Filtre par défaut : `grayscale(20%) brightness(0.95) contrast(1.05)` → version "presque propre"
- **Hover** : retour à la photo couleur naturelle (transition 400ms)
- Overlay : gradient cyan subtil bas (180deg, transparent → rgba(0,212,255,0.08))

#### Contenu
- 3 paragraphes : intro DevOps+cyber → expériences → disponibilité
- Mot **"cybersécurité"** en accent cyan dans le 1er paragraphe
- Meta footer grid : Localisation · Formation · Langues · Disponibilité (avec "Open · 2026" en vert)

---

## Section 4 — Skills

**Vue Trigger Map :** #4
**Scénarios :** S01 (scan rapide), S03 (mobile keywords)
**Forces motrices :** L2, S2

### Structure
Grid 4 colonnes desktop, 2 tablette, 1 mobile.

### Skill Card
- Background `--color-surface`, border `--color-border`, radius `--radius-lg`
- Padding 24px
- Titre H3 monospace 13px accent cyan, préfixé `> `
- Tags : pills monospace 12px, fond `--color-surface-2`, border `--color-border-strong`
- Hover sur tag : background → `--color-accent-fade`, color → cyan

### Catégories (4 cards)
1. **DevOps & Cloud** : Docker, Kubernetes, CI/CD, GitHub Actions, Ansible, AWS, OVH, Contabo, LXC
2. **Cybersécurité** : Nmap, Metasploit, BurpSuite, Hydra, iptables, pfSense, Wazuh (SIEM), SOC
3. **Systèmes & Réseau** : Linux, Proxmox, VMware, Hyper-V, TCP/IP, DNS, VLAN, SSH
4. **Développement** : Python, Django, Flask, PHP, JavaScript, PostgreSQL, MySQL, Bash

### Hover card
- Border → cyan
- Transform translateY(-2px)
- Transition 200ms ease-out

---

## Section 5 — Projects

**Vue Trigger Map :** #5
**Scénarios :** S01 (le cœur du parcours)
**Forces motrices :** L1, L2, L5

### Structure
Grid 2 colonnes desktop, 1 mobile.

### Project Card
- Background surface, border, radius-lg, padding 24px
- Flex column, gap 16px
- Hover : border accent, translateY(-2px), shadow glow
- **Détail visuel signature** : bordure verticale 3px cyan apparaît au hover (transition 200ms)

### Contenu par card
1. **Meta** : type (uppercase mono 11px muted) + status (vert "● Production")
2. **Titre H3** : 22px semibold
3. **Description** : 2-3 phrases muted, 15px
4. **Stack tags** : pills monospace
5. **Liens** : `→ GitHub` + `→ Démo` (selon dispo) en monospace 13px accent

### Projets V1 (à compléter quand les repos seront publics)
1. **Visualisation Cyber Incidents** — Flask, PostgreSQL, Docker, Wazuh
2. **Déploiement GLPI Dockerisé** — Docker, Ansible, Nginx, Contabo
3. **API Vote en ligne FMSA** — NestJS, Next.js, PostgreSQL, WebSocket
4. **Pipeline CI/CD Faculté des Sciences** — GitHub Actions, Docker, Linux
5. *(Optionnel) Stack Wazuh SOC perso*
6. *(Optionnel) API REST Django Etech*

### Modale Projet (V2)
À ouvrir au clic sur la card. Contenu :
- Titre + screenshot grand format
- Contexte / problème
- Stack complète
- Décisions techniques (3-4 bullets)
- Liens GitHub / Démo / Article
- Bouton fermer (Esc)

---

## Section 6 — Services Freelance

**Vue Trigger Map :** #6
**Scénarios :** S02 (cœur conversion freelance)
**Forces motrices :** M1, M2, M3, M4

### Background
Section avec gradient subtil cyan (`linear-gradient(180deg, transparent, --color-accent-fade, transparent)`) pour la différencier visuellement des autres sections.

### Composants

#### 1. Intro
Card avec bordure gauche cyan 3px, fond surface, font monospace 14px :
> *`$` Je propose mes services en freelance pour PME et scale-up qui souhaitent évaluer ou renforcer leur posture sécurité — en France, en Europe, ou à Madagascar.*

#### 2. Grille 3 services
- `[ pentest ]` Pentest applicatif & web → 3-10 jours
- `[ audit ]` Audit infrastructure → 2-7 jours
- `[ siem ]` Mise en place SOC / SIEM → 5-15 jours

Card structure : icon mono cyan + h3 + paragraphe muted + durée monospace cyan.

#### 3. Méthodologie 4 étapes
Card surface, border-strong. Titre `// methodology` en monospace cyan uppercase.
Liste horizontale (grid 4 colonnes desktop) numérotée :
1. **Cadrage** — Appel + scope + NDA
2. **Recon & analyse** — Cartographie, énumération
3. **Exécution** — Tests outillés + manuels + journal
4. **Livrable** — Rapport exec + technique + recommandations

Numéros stylisés : monospace 24px cyan opacité 0.5 préfixés `01`, `02`, `03`, `04`.

#### 4. Cadre légal (bandeau dashed)
Flex inline 4 mentions avec ✓ vert :
- ✓ Pentest autorisé uniquement
- ✓ NDA systématique
- ✓ Rapport livrable
- ✓ Discrétion absolue

#### 5. CTAs
Centrés :
- **Primary** : `Réserver un appel (20 min · gratuit)` → Calendly
- **Ghost** : `Demander un devis` → ancre vers formulaire avec préfill type

---

## Section 7 — Contact

**Vue Trigger Map :** #7
**Scénarios :** S01, S02, S03, S04 (point de conversion final)
**Forces motrices :** objectif primaire — convertir

### Structure
Grid 2 colonnes desktop, 1 mobile.

#### Colonne gauche — 4 canaux
Liste de cards inline :
- `@` Email → `mailto:tahirihasinarakotomanga@gmail.com`
- `in` LinkedIn → linkedin.com/in/tahirihasina-rakotomanga
- `{ }` GitHub → (à compléter)
- `📅` Calendly → calendly.com/tahirihasina/discovery-call

Hover : border cyan, fond accent-fade.

#### Colonne droite — Formulaire Netlify
- Type de demande (select) : CDI / Pentest / Audit / SIEM / Autre
- Nom (text)
- Email (email)
- Message (textarea)
- Bouton "Envoyer →" primary full-width

Form attributes :
```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact">
  ...
</form>
```

Netlify gère le spam (honeypot ou reCAPTCHA invisible).

---

## Section 8 — Footer

**Vue Trigger Map :** #8
**Scénarios :** S04

Centré, monospace 12px muted :
```
© 2026 Tahirihasina Rakotomanga — tahirihasina.dev
Built with care · Deployed on Netlify · Source on GitHub
```

`.dev` et nom de domaine en accent cyan.

---

## Comportements transversaux

### Smooth scroll
Tous les liens `#anchor` utilisent `scrollIntoView({ behavior: 'smooth' })`.

### Switch FR/EN
- Persistance localStorage
- Détection initiale via `navigator.language`
- URLs distinctes : `/fr/` (défaut) et `/en/`
- En V1 prototype : toggle visuel uniquement

### Focus visible
Outline 2px solid cyan, offset 2px, radius 4px sur tous les éléments interactifs.

### Reduced motion
Animations désactivées si `prefers-reduced-motion: reduce`.

### Performance
- Pas de JS lourd au-dessus du fold
- Images lazy-load (`loading="lazy"`)
- Fonts preconnect + preload
- Lighthouse cible : Perf ≥ 90 / A11y ≥ 95 / SEO ≥ 95 / Best Practices ≥ 95

---

## Critères d'acceptation (Phase build)

- [ ] Tous les scénarios S01-S04 sont exécutables sur le site déployé
- [ ] Lighthouse mobile ≥ 90 sur Performance + Accessibility
- [ ] Le terminal est désactivé/simplifié sur mobile sans casser la mise en page
- [ ] Le bouton CV est présent dans le header sticky et dans la section Contact
- [ ] Le formulaire Netlify est fonctionnel (test soumission réelle)
- [ ] Switch FR/EN opérationnel avec URLs distinctes (`/fr/` `/en/`)
- [ ] SEO de base : meta title/description, OG image, JSON-LD Person, sitemap, robots.txt
- [ ] Contraste AA WCAG validé sur tous les textes
- [ ] Aucun horizontal scroll sur mobile
- [ ] Cross-browser : Chrome, Firefox, Safari, Edge (≤ 2 dernières versions)
