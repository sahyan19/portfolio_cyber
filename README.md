# Portfolio — Tahirihasina Rakotomanga

Portfolio personnel bilingue (FR/EN) — Ingénieur Système & Sécurité · DevOps.
Construit avec **Astro 5** + CSS vanilla, déployé sur **Netlify**.

## Stack

- **Framework :** Astro 5 (static site generator)
- **i18n :** routes `/` (FR par défaut) et `/en/`
- **CSS :** custom properties, design tokens, mobile-first
- **Forms :** Netlify Forms (avec honeypot anti-spam)
- **SEO :** sitemap auto, JSON-LD Person, meta OG/Twitter, hreflang
- **Hébergement :** Netlify (build statique)

## Développement

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # build statique dans dist/
npm run preview    # preview du build de prod
```

## Structure

```
.
├── public/                              # assets statiques (photo, CV, ANSSI, robots, favicon)
├── src/
│   ├── components/                      # Header, Hero, Terminal, About, Skills, Projects, Services, Contact, Footer
│   ├── i18n/translations.ts             # textes FR / EN
│   ├── layouts/Layout.astro             # template HTML + SEO + JSON-LD
│   ├── pages/
│   │   ├── index.astro                  # /          (FR)
│   │   ├── en/index.astro               # /en/       (EN)
│   │   ├── thanks.astro                 # /thanks    (post-form)
│   │   └── 404.astro                    # 404 page
│   └── styles/global.css                # design tokens + tous les styles
├── design-artifacts/                    # 📐 source de vérité design (WDS / BMad)
├── _bmad/                               # configuration BMad
├── astro.config.mjs                     # config Astro + sitemap + i18n
├── netlify.toml                         # config déploiement
└── package.json
```

## Déploiement Netlify

1. Connecter le repo GitHub `sahyan19/portfolio_cyber` à Netlify
2. Settings auto-détectés via `netlify.toml` :
   - **Build :** `npm run build`
   - **Publish :** `dist`
   - **Node :** 20
3. Forms : activé automatiquement (attribut `data-netlify="true"`)
4. Aller dans **Site settings > Forms > Notifications** pour configurer l'email destinataire

## Design

Documentation complète dans `design-artifacts/` :
- `A-Product-Brief/` — Vision et scope
- `B-Trigger-Map/` — Personas et forces motrices
- `C-UX-Scenarios/` — Parcours utilisateurs détaillés + specs
- `D-Design-System/` — Design tokens (palette, typo, motion)

## Licence

Tous droits réservés — Tahirihasina Rakotomanga, 2026.
