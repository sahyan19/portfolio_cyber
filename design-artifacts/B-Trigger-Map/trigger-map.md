# Trigger Map — Portfolio Tahirihasina Rakotomanga

> **Étoile polaire stratégique** : connecter les objectifs business à la psychologie utilisateur.
> Toute décision design ultérieure se réfère à ce document.

**Document :** Trigger Map (WDS Phase 1 — étape 2)
**Créé :** 2026-05-28
**Statut :** COMPLET
**Méthode :** Effect Mapping (Mijo Balic & Ingrid Domingues) — adapté WDS
**Phase suivante :** UX Scenarios (`wds-3-scenarios`)

---

## Vision

**Faire de tahirihasina.dev le point d'entrée incontournable qui convertit les recruteurs DevSecOps en entretiens et les prospects cyber en missions freelance — en 6 mois.**

---

## 1. Objectifs Business

### ⭐ OBJECTIF PRIMAIRE — *Le Moteur*

**Convertir le trafic qualifié en opportunités pro concrètes (CDI + freelance)**
- **Métrique :** contacts entrants qualifiés / mois
- **Cible :** ≥ 5 / mois (3 recruteurs CDI + 2 prospects freelance)
- **Horizon :** 6 mois après mise en ligne
- **Rôle :** sans contact, rien n'a de valeur business. Toute la home pousse vers le contact.

### 🚀 OBJECTIFS SECONDAIRES

| Obj | Statement | Métrique | Cible | Horizon |
|---|---|---|---|---|
| **2** | Démontrer la compétence cyber/DevOps de façon crédible | Scroll au-delà du Hero ; temps sur Projets > 90s | 60% scroll, +90s Projets | 3 mois |
| **3** | Émerger en SEO sur identité + spécialités | Position Google nominative + requêtes métier | #1 nominatif + 2 requêtes métier en p.1 | 4-6 mois |
| **4** | Crédibiliser le profil bilingue (FR/EN) | % contacts via version EN | ≥ 20% | 6 mois |

### 🌟 OBJECTIFS TERTIAIRES

- **5 — Asset personnel évolutif** : positionnement long-terme via blog/writeups (12+ mois)
- **6 — Fierté professionnelle** : projet abouti à montrer en entretien comme preuve full-stack

### Flywheel

```
  [Démonstration compétence] ──► [Crédibilité perçue]
              ▲                          │
              │                          ▼
   [Contenu / projets]           [Contacts qualifiés]
              ▲                          │
              │                          ▼
       [SEO + bouche-à-oreille] ◄── [Missions / poste obtenus]
```

---

## 2. Personas (résumé)

3 personas couvrent le double objectif. Détail complet dans `personas/`.

| Rang | Persona | Objectif | Optimiser pour... |
|------|---------|----------|-------------------|
| **#1** | **Léa** — Lead DevSecOps / Tech Lead | Décide du CDI | Preuve technique, projets démontrables, GitHub réel |
| **#2** | **Marc** — RSSI / DSI PME | Mandate du freelance pentest | Légitimité, méthodologie pentest, CTA devis |
| **#3** | **Sophie** — Recruteuse Tech | Filtre RH amont | CV PDF, mots-clés, mobile, contact rapide |

> **Règle de tranchée :** en cas d'arbitrage design, on tranche en faveur de **Léa**. C'est elle qui valide la candidature CDI (objectif #1).

---

## 3. Forces Motrices

### 🥇 Léa — Lead DevSecOps

**Positives à activer :**
- **L1** — Show, don't tell : preuve > déclaration → liens GitHub réels, README détaillés
- **L2** — Pattern recognition tech : reconnaître un pair sérieux → vocabulaire précis, choix techniques justifiés
- **L3** — Gain de temps : valider en 60s → Hero clair, navigation rapide
- **L4** — Curiosité technique : terminal interactif comme démo de capacité (pas gadget)
- **L5** — Signaux d'autonomie : projets de bout en bout, maturité dans les choix

**Négatives à neutraliser :**
- **L¬1** — Peur du mis-hire ("encore un junior survendu") → vrai code en prod, ton mesuré
- **L¬2** — Allergie au stéréotype hacker matrix → effets subtils, pro avant fun
- **L¬3** — Manque de temps → Hero ultra-clair en 30s
- **L¬4** — Doute sur la maintenabilité → code visible, structure propre, IaC mentionné

### 🥈 Marc — RSSI PME

**Positives :**
- **M1** — Légitimité visible (Master MISA + entreprises citées)
- **M2** — Réduction de risque (méthodologie pentest documentée)
- **M3** — Discrétion professionnelle (ton sobre, NDA mentionné)
- **M4** — Accès facile au devis (Calendry + formulaire scopé)
- **M5** — Bilingue FR/EN (joignable au-delà de Madagascar)

**Négatives :**
- **M¬1** — Peur de l'arnaque → témoignages / références si possible
- **M¬2** — Devis flou → section Services claire avec scope
- **M¬3** — Trop "hacker edgy" pour un RSSI → élégance avant tout
- **M¬4** — Absence de cadre légal → mention pentest autorisé + NDA + rapport

### 🥉 Sophie — Recruteuse Tech

**Positives :**
- **S1** — Transmissibilité (bouton CV PDF visible)
- **S2** — Scan de mots-clés (Skills lisibles en 10s)
- **S3** — Disponibilité claire ("Open to opportunities" + lieu + remote)
- **S4** — Mobile parfait
- **S5** — Contact direct visible (email cliquable)

**Négatives :**
- **S¬1** — Effets qui bloquent le scroll mobile → perf > effet wow
- **S¬2** — Contact uniquement via formulaire long → email toujours dispo
- **S¬3** — CV introuvable → bouton CV PDF en évidence, daté
- **S¬4** — Pas de section "pour qui je suis joignable" → header explicite

### 🌟 Transversales (tous personas)

- **T1** — Première impression < 3 secondes
- **T2** — Performance technique (site rapide = signal de compétence)
- **T3** — Cohérence narrative (DevOps + Cyber = un seul positionnement DevSecOps)
- **T4** — Honnêteté du niveau (assumer "ingénieur en montée en compétence avec X livré")

---

## 4. Priorisation des Fonctionnalités

### Matrice complète : voir [`feature-impact-analysis.md`](./feature-impact-analysis.md)

### Synthèse MoSCoW pour le V1

**🔴 MUST (Sprint 1 + 2) — site fonctionnel et différenciant**
1. Hero clair (tagline DevSecOps + photo + statut "open to") — F1
2. Terminal interactif (whoami / skills / projects / contact / help / clear) — F2
3. Section Projets avec liens GitHub réels + screenshots — F3
4. Section Skills catégorisée — F4
5. À propos (bio courte + photo + parcours) — F5
6. Bouton "Télécharger CV PDF" très visible — F6
7. Section Contact (email cliquable + formulaire Netlify) — F7
8. Switch FR / EN — F8
9. Mobile responsive parfait — F9
10. SEO de base (meta, OG image, sitemap, JSON-LD Person) — F10

**🟠 SHOULD (Sprint 3) — conversion freelance + polish**
11. Section Services Freelance + Calendly — F11, F12
12. Analytics Plausible/Umami — F13
13. Animations subtiles — F14
14. Photo stylisée duotone/cyber en hero — F15

**🟡 COULD (Sprint 4) — détails et plaisir**
15. Easter eggs terminal — F16
16. Témoignages (si dispo) — F17

**⚫ WON'T pour le V1**
- Blog / writeups CTF (v2)
- Dashboard SOC simulé live (v2 ou easter egg)
- Mode clair toggle (assumé dark-only)
- CMS / admin (contenu en dur suffit)

### Architecture one-page implicite

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

## 5. Implications design fortes

Décisions structurantes pour la suite (UX Scenarios + Visual Design) :

1. **Le Hero doit servir L1 + L3 + S3 + T1** → tagline claire + status + photo + CTA contact + lien GitHub.
2. **Le Terminal interactif doit servir L4 + T1** sans tomber dans L¬2 + T3 → commandes utiles (whoami, skills, projects, contact, help) qui révèlent du contenu vrai, pas gadget.
3. **La section Projets est LA plus stratégique** (sert L1, L2, M1, M2) → soigner les détails, screenshots, descriptions, liens GitHub.
4. **La section Services freelance distincte** des projets → sert M1-M5 spécifiquement, ton plus sobre.
5. **Header / Footer doivent servir S1 + S5** → CV PDF + email + LinkedIn toujours accessibles.
6. **Mobile-first malgré desktop majoritaire** : Sophie consulte à 50% sur mobile, on ne sacrifie rien.
7. **Performance > effet** (T2) : si un effet ralentit le mobile, on le coupe.

---

## 6. Critères de succès post-lancement

| Métrique | Cible 3 mois | Cible 6 mois |
|---|---|---|
| Contacts qualifiés / mois | ≥ 2 | ≥ 5 |
| Position Google sur "Tahirihasina Rakotomanga" | Top 5 | #1 |
| Position Google sur 2 requêtes métier ciblées | Visible | Page 1 |
| Taux de scroll au-delà du Hero | ≥ 50% | ≥ 60% |
| Temps moyen section Projets | > 60s | > 90s |
| Part de trafic / contacts via version EN | ≥ 10% | ≥ 20% |

---

## Related Documents

- [Project Brief](../A-Product-Brief/project-brief.md)
- [Personas/](./personas/) — détail complet des 3 personas
- [Feature Impact Analysis](./feature-impact-analysis.md) — matrice de scoring complète
- **Prochain :** UX Scenarios (`wds-3-scenarios`)
