# UX Scenarios — Portfolio Tahirihasina Rakotomanga

> **Sunshine paths** — parcours utilisateurs nominaux qui exposent toutes les vues à concevoir.
> Chaque scénario relie un persona + une force motrice du Trigger Map à un parcours concret.

**Document :** UX Scenarios — Vue d'ensemble
**Créé :** 2026-05-28
**Statut :** COMPLET
**Phase précédente :** [Trigger Map](../B-Trigger-Map/trigger-map.md)
**Phase suivante :** UX Design / Conceptual Specs (`wds-4-ux-design`)

---

## Classification

- **Type de site :** Site de présentation (portfolio one-page)
- **Format dominant :** Screen Flow + storyboard léger pour le Terminal interactif
- **Échelle :** Small (13 vues)
- **Couverture :** comprehensive (toutes les vues touchées par au moins un scénario)

---

## Liste des scénarios

| # | Scénario | Persona | Device | Force motrice clé |
|---|---|---|---|---|
| 01 | [Léa scanne le profil DevSecOps](./01-lea-devsecops-scan/01-lea-devsecops-scan.md) | Léa (Lead DevSecOps) | Desktop | L1, L2, L3, L4 |
| 02 | [Marc évalue un freelance pentest](./02-marc-freelance-evaluation/02-marc-freelance-evaluation.md) | Marc (RSSI PME) | Desktop | M1, M2, M3, M4 |
| 03 | [Sophie transmet le CV](./03-sophie-cv-mobile/03-sophie-cv-mobile.md) | Sophie (Recruteuse) | Mobile | S1, S2, S3, S4 |
| 04 | [Le visiteur curieux explore le terminal](./04-curious-terminal-explorer/04-curious-terminal-explorer.md) | Visiteur tech curieux | Desktop | L4, T1, T2 |

---

## Inventaire des vues

### Sections principales (one-page)

| # | Vue | Rôle | Vues détaillées dans... |
|---|---|---|---|
| 1 | **Hero** | Premier wow + tagline + statut + CTA | S01, S02, S03, S04 |
| 2 | **Terminal interactif** | Composant signature | S01, S04 |
| 3 | **À propos** | Bio + photo + parcours | S02 |
| 4 | **Skills** | Stack catégorisée | S01 |
| 5 | **Projets** (+ modale détail) | Cartes projets avec liens GitHub | S01, S04 |
| 6 | **Services Freelance** | Scope pentest + méthodo + Calendly | S02 |
| 7 | **Contact** | Email + formulaire Netlify | S01, S02, S03, S04 |
| 8 | **Footer** | Réseaux + mentions | S04 |

### Écrans satellites

| # | Vue | Rôle | Vues détaillées dans... |
|---|---|---|---|
| 9 | **Header sticky** | Navigation + switch FR/EN + CTA CV | S03 |
| 10 | **Modale Projet** | Détail projet | S01 (template, instances multiples) |
| 11 | **CV PDF** | Document téléchargeable | S01, S03 |
| 12 | **Page 404** | Erreur navigation | S04 (easter egg) |
| 13 | **Confirmation formulaire** | Toast post-soumission | S02 |

---

## Matrice de couverture

| Vue | S01 Léa | S02 Marc | S03 Sophie | S04 Curieux |
|---|:---:|:---:|:---:|:---:|
| 1. Hero | ✅ | ✅ | ✅ | ✅ |
| 2. Terminal interactif | ✅ | – | – | ✅ |
| 3. À propos | – | ✅ | – | – |
| 4. Skills | ✅ | – | – | – |
| 5. Projets (+modale) | ✅ | – | – | ✅ |
| 6. Services Freelance | – | ✅ | – | – |
| 7. Contact | ✅ | ✅ | ✅ | ✅ |
| 8. Footer | – | – | – | ✅ |
| 9. Header sticky | – | – | ✅ | – |
| 11. CV PDF | ✅ | – | ✅ | – |
| 12. Page 404 | – | – | – | ✅ |
| 13. Confirmation form | – | ✅ | – | – |

**Toutes les vues sont couvertes par au moins un scénario ✅**

---

## Conventions transversales (s'appliquent à tous les scénarios)

### Switch FR/EN
- Détecté en transversal dans **toutes** les vues via le **Header sticky** (vue 9)
- Persistance via cookie / localStorage
- URLs distinctes : `/fr/` (défaut) et `/en/`
- Pas un scénario séparé — c'est un détail systémique

### Responsive
- Mobile-first malgré la majorité desktop (50% trafic Sophie est mobile)
- Le Terminal interactif a un **fallback mobile** : navigation par boutons + commandes pré-suggérées

### Performance & SEO
- Site rapide = signal de compétence (Force T2)
- SEO de base présent dans toutes les vues : meta, OG, JSON-LD Person

### Accessibilité
- Contraste AA minimum (terminal lisible)
- Navigation clavier complète (terminal en bénéficie naturellement)
- Reduced motion respecté (animations désactivables)

---

## Prochaine étape

**Phase suivante : Conceptual Specs + Visual Design** (`wds-4-ux-design`)

Cette phase va transformer ces scénarios en :
- 🎨 **Direction visuelle** (palette précise, typographie, motion)
- 📐 **Spécifications page par page** (Hero, Skills, Projets…)
- 🧩 **Prototypes HTML stylés** (rendu navigable avant le dev)
- 🖼️ **Direction photo** (traitement cyber duotone/scanline)

C'est l'étape où le portfolio prend vie visuellement.
