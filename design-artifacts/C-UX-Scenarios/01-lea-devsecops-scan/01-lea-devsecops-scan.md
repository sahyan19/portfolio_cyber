# Scenario 01 — Léa scanne le profil DevSecOps

> **Persona :** Léa (Lead DevSecOps) — règle de tranchée du Trigger Map
> **Objectif business :** déclencher une prise de contact en vue d'un entretien CDI
> **Force(s) motrice(s) :** L1 Show-don't-tell, L2 Pattern recognition tech, L3 Gain de temps, L4 Curiosité terminal

---

## Contexte d'arrivée

- **Source :** lien LinkedIn (suite à candidature Léa → toi, ou message d'un recruteur)
- **Device :** Desktop (1440×900, navigateur Chrome/Firefox)
- **Temps disponible :** 60-180 secondes
- **État mental :** scan rapide, esprit critique, en train de filtrer 10 profils dans la matinée

---

## Pré-conditions

- Léa est arrivée sur `https://tahirihasina.dev/fr/` ou `/en/`
- Elle a déjà vu le CV LinkedIn brut, elle veut **valider la profondeur** avant entretien
- Elle n'a JAMAIS lu de doc de présentation sur toi

---

## Sunshine Path (Screen Flow détaillé)

### Étape 1 — Atterrissage Hero (0-5s)
**Vue : Hero (vue #1)**

Ce qu'elle voit :
- **Tagline DevSecOps** lisible en 2s (ex: *"Ingénieur DevOps & Cybersécurité — j'automatise et je sécurise."*)
- **Photo profil** (version cyber duotone ou propre)
- **Badge statut** "Open to opportunities — CDI + Freelance"
- **CTA primaire** "Me contacter" + secondaire "Voir GitHub"
- **Terminal interactif** visible à droite (ou sous le hero) avec curseur clignotant invitant

**Décision interne de Léa :** *"OK le positionnement est clair, je donne 60s de plus."*

**Force motrice activée :** L3 (gain de temps) + T1 (première impression)

---

### Étape 2 — Scan Skills (5-15s)
**Vue : Skills (vue #4)**

Elle scroll. Ce qu'elle voit :
- 4 catégories visibles d'un coup d'œil : **DevOps & Cloud / Cybersécurité / Systèmes & Réseau / Dev & DB**
- Sous chaque catégorie, des **tags lisibles** (Docker, K8s, Ansible, AWS, Nmap, Metasploit, Wazuh…)
- Pas de progress bars 1/5 ⭐⭐⭐ (cliché qui décrédibilise)
- Mention nette : **DevSecOps** (combo qui matche son besoin)

**Décision interne :** *"Stack alignée. Voyons ce qu'il a vraiment fait."*

**Force motrice :** L2 (pattern recognition) — elle reconnaît un pair

---

### Étape 3 — Plongée Projets (15-60s)
**Vue : Projets (vue #5) + Modale Projet (vue #10)**

Elle scroll jusqu'à Projets. Ce qu'elle voit :
- **4-6 cartes projets** avec : titre, technos taggées, 1-2 phrases de pitch, **lien GitHub visible**, screenshot
- Filtre rapide possible (DevOps / Cyber / Cloud) — pas obligatoire en V1
- Elle clique sur le projet le plus aligné : **"Visualisation cyber incidents (Wazuh + Flask)"**

**Vue Modale projet ouverte :**
- Titre + screenshot grand format
- Contexte / problème résolu
- Stack technique listée
- Décisions techniques clés (3-4 bullets)
- **Liens** : Repo GitHub, démo live (si dispo), article (si dispo)
- Bouton **fermer** (Esc ou X)

**Décision interne :** *"OK, il sait monter un SOC. Je shortlist."*

**Force motrice :** L1 (show don't tell) + L2 + L5 (autonomie)

---

### Étape 4 — Vérification GitHub externe (60-90s)
**Vue : externe — github.com/[user]**

Elle ouvre le lien GitHub dans un nouvel onglet. Hors-périmètre portfolio mais critique :
- READMEs propres
- Commits récents (signal d'activité)
- Pas que des forks vides

**Implication portfolio :** s'assurer que les liens pointent vers les **bons repos publics** (à vérifier en Phase 3).

---

### Étape 5 — Téléchargement CV (90-100s)
**Vue : Header sticky (vue #9) → CV PDF (vue #11)**

Elle revient sur le portfolio. Dans le header sticky, le bouton **"Télécharger CV"** est toujours visible. Elle clique :
- Téléchargement immédiat de `CV_Rakotomanga_Tahirihasina.pdf`
- (Optionnel) Toast discret "CV téléchargé ✓"
- Le CV est **à jour**, daté du mois courant

**Force motrice :** S1 (transmissibilité) — Léa va peut-être le partager avec sa RH

---

### Étape 6 — Prise de contact (100-180s)
**Vue : Contact (vue #7)**

Elle scroll jusqu'à Contact ou clique sur le CTA primaire du Hero :
- **Email cliquable** affiché en clair (`tahirihasinarakotomanga@gmail.com`) → elle copie ou clique pour ouvrir son client mail
- OU **Formulaire Netlify** simple : nom / email / sujet / message
- (Optionnel) Lien Calendly pour appel direct

**Action finale :** elle envoie un email *"Bonjour Tahirihasina, je suis Léa de XXX, votre profil m'intéresse pour un poste de DevSecOps junior dans mon équipe…"*

**Critère de succès du scénario :** contact envoyé. ✅

---

## Post-conditions

- Léa a téléchargé le CV
- Léa a soit envoyé un email, soit copié l'adresse pour le faire plus tard
- Le portfolio a généré **1 contact qualifié** (cible objectif primaire)

---

## Forces motrices et vues mobilisées

| Étape | Vue principale | Force activée |
|---|---|---|
| 1 | Hero | L3, T1 |
| 2 | Skills | L2 |
| 3 | Projets + Modale | L1, L2, L5 |
| 4 | (GitHub externe) | L1 |
| 5 | Header + CV PDF | S1 |
| 6 | Contact | objectif primaire |

---

## Critères d'acceptation pour la Phase Design

- [ ] Le Hero communique le positionnement DevSecOps en <5s
- [ ] La section Skills est scannable en <15s
- [ ] Les liens GitHub des projets sont vérifiés et fonctionnels
- [ ] Le bouton CV est présent dans le header sticky (toujours accessible)
- [ ] Email visible en clair dans la section Contact
- [ ] Le terminal interactif n'est PAS bloquant (Léa peut tout faire sans y toucher)

---

## Risques / variantes

- **Variante :** Léa ouvre d'abord le terminal par curiosité → tape `help` → bascule sur le scénario 04 quelques secondes avant de revenir au scan
- **Risque :** trop d'animations bloquent son scan rapide → respect strict de `prefers-reduced-motion`
- **Risque :** le terminal "vole la vedette" et masque les projets → priorité visuelle aux Projets dans la hiérarchie scroll
