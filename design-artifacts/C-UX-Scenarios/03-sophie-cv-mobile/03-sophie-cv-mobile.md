# Scenario 03 — Sophie transmet le CV (parcours mobile RH)

> **Persona :** Sophie (Recruteuse Tech)
> **Objectif business :** lui permettre de transmettre ton profil à son client en <30s
> **Force(s) motrice(s) :** S1 Transmissibilité, S2 Scan mots-clés, S3 Disponibilité claire, S4 Mobile parfait

---

## Contexte d'arrivée

- **Source :** LinkedIn (sourcing actif) ou recommandation
- **Device :** **Mobile** (iPhone 14 ou Samsung Galaxy) — c'est LE point différenciant de ce scénario
- **Temps disponible :** 10-30 secondes
- **État mental :** filtre rapide entre deux RDV, doigt sur l'écran, prête à fermer si friction

---

## Pré-conditions

- Sophie a cliqué sur ton lien portfolio depuis LinkedIn mobile
- Elle veut **valider en 30s** + récupérer le CV PDF + le transmettre à son client par email/Teams

---

## Sunshine Path (Mobile-first)

### Étape 1 — Atterrissage Hero mobile (0-5s)
**Vue : Hero (vue #1) en breakpoint mobile (375px)**

Ce qu'elle voit (un seul écran sans scroll) :
- **Header sticky compact** : logo/nom à gauche + bouton **"CV"** à droite (toujours visible)
- **Tagline DevSecOps** lisible sans zoom
- **Statut "Open to opportunities"** en badge visible
- **CTA "Me contacter"** gros bouton tactile
- **Photo profil** taille raisonnable, optimisée
- **Pas de terminal interactif intrusif** sur mobile (soit invisible, soit version simplifiée non bloquante)

**Décision interne :** *"OK il est dispo, je récupère le CV."*

**Force motrice :** S3 (disponibilité claire) + S4 (mobile parfait)

---

### Étape 2 — Téléchargement CV depuis le header (5-10s)
**Vue : Header sticky (vue #9) → CV PDF (vue #11)**

Elle tape directement sur le bouton **"CV"** dans le header sticky :
- Téléchargement immédiat de `CV_Rakotomanga_Tahirihasina.pdf`
- Notification système iOS/Android "CV téléchargé"
- Fichier nommé clairement : `CV_Rakotomanga_Tahirihasina.pdf` (pas `cv.pdf` ambigu)

**Critère de succès partiel :** CV téléchargé ✅

**Force motrice :** S1 (transmissibilité immédiate)

---

### Étape 3 — Scan rapide pour validation (10-25s)
**Vue : Hero + Skills (vue #4) en mobile**

Elle scroll juste un peu pour confirmer le match avec son brief client :
- Section **Skills** lisible en colonne simple (1 catégorie par carte)
- Mots-clés visibles immédiatement : **DevSecOps, CI/CD, Docker, Kubernetes, AWS, Pentest, SOC, Wazuh**
- Pas besoin de chercher : tout est listé en clair

**Décision interne :** *"Stack alignée avec mon brief, je transmets."*

**Force motrice :** S2 (scan mots-clés)

---

### Étape 4 — Contact rapide (25-30s)
**Vue : Hero (CTA contact) ou Footer**

Avant de quitter, elle veut soit :
- Te **prévenir** qu'elle te transmet → tape sur CTA contact → email cliquable s'ouvre (`mailto:` natif)
- OU copier ton email pour son brief client

**Email cliquable** = `mailto:tahirihasinarakotomanga@gmail.com` (ouvre app mail iOS/Android)

**Force motrice :** S5 (contact direct)

---

### Étape 5 — Transmission au client (hors portfolio)
**Hors périmètre direct**

Sophie ouvre Outlook/Gmail mobile, joint le CV PDF, écrit un message court à son client : *"Bonjour, profil DevSecOps junior à Madagascar / open to remote, MISA Master 2, CV en PJ + portfolio: tahirihasina.dev"*.

**Critère de succès final du scénario :** profil transmis ✅

---

## Post-conditions

- Sophie a téléchargé le CV
- Elle a pu scanner les mots-clés clés en <30s
- Le profil est transmis à son client (résultat indirect mais c'est l'objectif)

---

## Forces motrices et vues mobilisées

| Étape | Vue principale | Force activée |
|---|---|---|
| 1 | Hero mobile | S3, S4 |
| 2 | Header sticky + CV PDF | S1 |
| 3 | Skills mobile | S2 |
| 4 | Contact (email cliquable) | S5 |

---

## Critères d'acceptation pour la Phase Design (mobile-first)

- [ ] Le **header sticky** est compact mais le bouton CV reste visible (pas masqué dans un menu burger)
- [ ] Le fichier PDF s'appelle `CV_Rakotomanga_Tahirihasina.pdf` (pas générique)
- [ ] La date du CV est visible dans le PDF (mois courant)
- [ ] **Pas de modale qui bloque le scroll** mobile au chargement (ex: cookie banner intrusif)
- [ ] L'**email cliquable** utilise `mailto:` natif pour ouvrir l'app mail
- [ ] Le terminal interactif est **invisible ou désactivé** sur breakpoint < 768px (ou version "fake terminal statique")
- [ ] Le **Lighthouse mobile score** ≥ 90 sur Performance et Accessibilité
- [ ] **Aucune horizontal scroll** sur mobile
- [ ] Boutons tactiles min 44×44px

---

## Risques / variantes

- **Risque CRITIQUE :** un terminal interactif lourd qui plante sur mobile → fallback simple obligatoire
- **Risque :** cookie banner intrusif qui bloque le téléchargement → respecter RGPD sans bloquer (banner discret, dismissible)
- **Variante :** Sophie est sur desktop (50%) → même parcours mais le header est moins critique car la section Contact est plus rapide à atteindre
- **Variante :** Sophie est francophone EN → switch FR/EN doit être visible et fonctionnel sur mobile (souvent oublié)
