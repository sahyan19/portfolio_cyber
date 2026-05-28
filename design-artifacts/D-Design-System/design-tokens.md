# Design Tokens — Portfolio Tahirihasina

> Direction visuelle : **SOC Cyan** — dark navy + cyan SIEM/monitoring.
> Vibe : pro, technique, élégant. *Linear meets Vercel meets SOC dashboard.*

**Phase :** Visual Design (WDS 2.2)
**Statut :** COMPLET
**Date :** 2026-05-28

---

## 1. Couleurs

### Palette de base (dark)

| Token | Hex | Usage |
|---|---|---|
| `--color-base` | `#0A0E14` | Background principal |
| `--color-surface` | `#11161D` | Cards, modales, terminal background |
| `--color-surface-2` | `#1A1F26` | Hover surfaces, élévation |
| `--color-border` | `#21262D` | Bordures discrètes |
| `--color-border-strong` | `#30363D` | Bordures actives, séparateurs |

### Texte

| Token | Hex | Usage |
|---|---|---|
| `--color-text` | `#E6EDF3` | Texte principal |
| `--color-text-muted` | `#7D8590` | Texte secondaire, captions |
| `--color-text-subtle` | `#484F58` | Hints, placeholders |

### Accents — Cyan SOC

| Token | Hex | Usage |
|---|---|---|
| `--color-accent` | `#00D4FF` | Accent principal (CTAs, liens, focus) |
| `--color-accent-glow` | `rgba(0,212,255,0.4)` | Glow effect autour CTA |
| `--color-accent-dim` | `#0891B2` | Hover sur accent |
| `--color-accent-fade` | `rgba(0,212,255,0.08)` | Backgrounds discrets |

### Statut

| Token | Hex | Usage |
|---|---|---|
| `--color-success` | `#3FB950` | Badge "Open to opportunities", success states |
| `--color-warning` | `#FFC107` | Alertes mineures |
| `--color-danger` | `#F85149` | Erreurs, destructive |

### Terminal couleurs ANSI

| Token | Hex | Usage |
|---|---|---|
| `--ansi-prompt` | `#00D4FF` | Prompt `$` |
| `--ansi-user` | `#3FB950` | `visitor@tahirihasina` |
| `--ansi-section` | `#FFC107` | `[DevOps]`, `[Cybersecurity]` |
| `--ansi-comment` | `#7D8590` | Commentaires `#` |
| `--ansi-output` | `#E6EDF3` | Texte sortie standard |

---

## 2. Typographie

### Familles

```css
--font-mono: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
--font-sans: 'Geist', 'Inter', system-ui, -apple-system, sans-serif;
```

**Imports recommandés :**
- JetBrains Mono : Google Fonts (poids 400, 500, 700)
- Geist : `@vercel/geist` ou via CDN

### Échelle typo

| Token | Taille | Line-height | Usage |
|---|---|---|---|
| `--text-xs` | 12px / 0.75rem | 1.5 | Captions, badges |
| `--text-sm` | 14px / 0.875rem | 1.6 | Texte secondaire, terminal |
| `--text-base` | 16px / 1rem | 1.7 | Body text |
| `--text-lg` | 18px / 1.125rem | 1.6 | Lead paragraph |
| `--text-xl` | 20px / 1.25rem | 1.4 | Sous-titres |
| `--text-2xl` | 24px / 1.5rem | 1.3 | Section titles small |
| `--text-3xl` | 32px / 2rem | 1.25 | Section titles |
| `--text-4xl` | 40px / 2.5rem | 1.2 | Page titles |
| `--text-5xl` | 56px / 3.5rem | 1.1 | Hero headline |
| `--text-6xl` | 72px / 4.5rem | 1.05 | Hero headline XL desktop |

### Poids

| Token | Valeur | Usage |
|---|---|---|
| `--font-normal` | 400 | Body |
| `--font-medium` | 500 | UI labels |
| `--font-semibold` | 600 | Section titles |
| `--font-bold` | 700 | Hero, emphasize |

---

## 3. Espacement

Échelle 4px-based :

| Token | Valeur | Usage |
|---|---|---|
| `--space-1` | 4px | Tight inline |
| `--space-2` | 8px | Default gap small |
| `--space-3` | 12px | Inline groups |
| `--space-4` | 16px | Default gap |
| `--space-6` | 24px | Card padding |
| `--space-8` | 32px | Section gap mobile |
| `--space-12` | 48px | Section gap |
| `--space-16` | 64px | Large section gap |
| `--space-24` | 96px | Section vertical desktop |
| `--space-32` | 128px | Hero vertical desktop |

### Containers

| Token | Valeur | Usage |
|---|---|---|
| `--container-sm` | 640px | Texte long |
| `--container-md` | 768px | Sections étroites |
| `--container-lg` | 1024px | Sections principales |
| `--container-xl` | 1280px | Max-width global |

---

## 4. Rayons

| Token | Valeur | Usage |
|---|---|---|
| `--radius-sm` | 4px | Badges, tags |
| `--radius-md` | 8px | Buttons, inputs |
| `--radius-lg` | 12px | Cards |
| `--radius-xl` | 16px | Large cards, terminal |
| `--radius-full` | 9999px | Pills, avatars |

---

## 5. Ombres & Glow

```css
--shadow-sm:    0 1px 2px rgba(0,0,0,0.4);
--shadow-md:    0 4px 12px rgba(0,0,0,0.5);
--shadow-lg:    0 12px 32px rgba(0,0,0,0.6);
--shadow-glow:  0 0 24px rgba(0,212,255,0.15);
--shadow-glow-strong: 0 0 32px rgba(0,212,255,0.35);
```

Le `--shadow-glow` est la signature **SOC Cyan** : utilisé sur les CTA principaux et le terminal.

---

## 6. Motion

### Durées

| Token | Valeur | Usage |
|---|---|---|
| `--ease-fast` | 120ms | Micro-interactions (hover) |
| `--ease-base` | 200ms | Transitions UI standard |
| `--ease-slow` | 400ms | Reveal animations |
| `--ease-slower` | 600ms | Page transitions |

### Easings

```css
--ease-out:     cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out:  cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce:  cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Respect de l'utilisateur

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 7. Breakpoints responsive

```css
--bp-sm:  640px;   /* mobile large */
--bp-md:  768px;   /* tablet */
--bp-lg:  1024px;  /* laptop */
--bp-xl:  1280px;  /* desktop */
--bp-2xl: 1536px;  /* large desktop */
```

**Stratégie mobile-first** : tous les styles partent du mobile, les media queries élargissent.

---

## 8. Z-index

| Token | Valeur | Usage |
|---|---|---|
| `--z-base` | 0 | Contenu |
| `--z-sticky` | 50 | Header sticky |
| `--z-overlay` | 100 | Backdrop modale |
| `--z-modal` | 110 | Modale projet |
| `--z-toast` | 200 | Notifications |
| `--z-tooltip` | 300 | Tooltips |

---

## 9. Effets signature

### Scanline (terminal & hero)

```css
.scanline::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent 0px,
    transparent 2px,
    rgba(0, 212, 255, 0.025) 2px,
    rgba(0, 212, 255, 0.025) 3px
  );
  pointer-events: none;
  border-radius: inherit;
}
```

### Curseur clignotant terminal

```css
.cursor-blink {
  display: inline-block;
  width: 8px;
  height: 1em;
  background: var(--color-accent);
  animation: blink 1s steps(2) infinite;
}
@keyframes blink { 50% { opacity: 0; } }
```

### Glow sur CTA principal

```css
.btn-primary {
  background: var(--color-accent);
  color: var(--color-base);
  box-shadow: var(--shadow-glow);
  transition: box-shadow var(--ease-base) var(--ease-out);
}
.btn-primary:hover {
  box-shadow: var(--shadow-glow-strong);
}
```

### Photo treatment (cyber duotone)

```css
.photo-cyber {
  filter: grayscale(100%) brightness(0.9) contrast(1.1);
  mix-blend-mode: luminosity;
  /* Avec un overlay cyan en arrière-plan */
}
```

---

## 10. Accessibilité

- **Contraste minimum** : AA WCAG (4.5:1) sur tous les textes principaux
  - Body text `#E6EDF3` sur `#0A0E14` = **15.8:1** ✅
  - Accent `#00D4FF` sur `#0A0E14` = **8.2:1** ✅
- **Focus visible** : outline `2px solid var(--color-accent)` + offset `2px`
- **Reduced motion** : toutes les animations désactivables
- **Touch targets** : minimum 44×44px sur mobile
