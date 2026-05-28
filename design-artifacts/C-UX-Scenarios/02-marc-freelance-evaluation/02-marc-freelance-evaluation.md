# Scenario 02 — Marc évalue un freelance pentest

> **Persona :** Marc (RSSI / DSI PME)
> **Objectif business :** déclencher une demande de devis ou réservation Calendly
> **Force(s) motrice(s) :** M1 Légitimité, M2 Méthodologie, M3 Discrétion pro, M4 Accès facile devis

---

## Contexte d'arrivée

- **Source :** recherche Google ("pentest freelance Madagascar", "audit sécurité PME freelance", bouche-à-oreille)
- **Device :** Desktop (1440×900)
- **Temps disponible :** 3-5 minutes (recherche planifiée, pas impulsive)
- **État mental :** comparaison entre 3-5 freelances, prudent, cherche des **signaux de confiance**

---

## Pré-conditions

- Marc est arrivé sur `https://tahirihasina.dev/fr/`
- Il a vu 2 autres freelances avant ou après
- Il cherche un **profil senior-junior** avec méthodologie claire

---

## Sunshine Path

### Étape 1 — Atterrissage Hero (0-10s)
**Vue : Hero (vue #1)**

Ce qu'il voit :
- Tagline DevSecOps **+ mention "freelance pentest"** visible (option : sous-tagline du type *"Disponible pour missions pentest & audit sécurité"*)
- Photo profil (version **propre/sobre** — pas duotone agressif sur le Hero ou version équilibrée)
- Statut "Open to freelance missions"

**Décision interne :** *"OK, il accepte des missions. Voyons s'il est légitime."*

**Force motrice :** T1 + M3 (discrétion — le ton est pro, pas "hacker rebel")

---

### Étape 2 — Lecture À propos (10-40s)
**Vue : À propos (vue #3)**

Il scroll. Ce qu'il voit :
- **Photo** + bio courte (3-4 phrases)
- **Parcours condensé** :
  - Master 2 MISA (Mathématiques Informatiques et Statistiques Appliquées)
  - Expériences pro nommées : Customer Service Subcontractor (CSS), Redsmite AI, FMSA, MISA, Etech
  - Mention des certifications si disponibles (à ajouter quand pertinent)
- Phrase clé : *"Ingénieur DevSecOps avec expérience terrain en pentesting (Nmap, Metasploit, Burp), hardening serveur (iptables, pfSense) et SIEM (Wazuh)."*

**Décision interne :** *"Diplôme + expériences réelles + langue pro. OK je continue."*

**Force motrice :** M1 (légitimité)

---

### Étape 3 — Services Freelance — le cœur du scénario (40-120s)
**Vue : Services Freelance (vue #6)**

Il scroll jusqu'à la section dédiée. Ce qu'il voit :

#### Sous-section A — Scope des missions proposées
- **3 types de missions** clairement listées avec icônes :
  1. **Pentest applicatif & web** (BurpSuite, OWASP, rapport détaillé)
  2. **Audit infrastructure & réseau** (Nmap, scan vuln, hardening pfSense/iptables)
  3. **Mise en place SOC / SIEM** (Wazuh, monitoring, alerting)
- Fourchettes de durée indicatives (ex: "3-10 jours" par mission)

#### Sous-section B — Méthodologie
Affichage en 4 étapes :
1. **Cadrage** — appel découverte + scope écrit + NDA
2. **Recon & analyse** — outils + accès maîtrisés
3. **Exécution** — tests + journal horodaté
4. **Livrable** — rapport détaillé (exec summary + technique + recommandations priorisées)

#### Sous-section C — Cadre légal & éthique
Bloc visible :
- ✅ Pentest **autorisé uniquement** (autorisation écrite)
- ✅ NDA systématique
- ✅ Rapport livrable + restitution orale
- ✅ Discrétion absolue

#### Sous-section D — CTA principal
- Bouton **"Réserver un appel découverte (20 min — gratuit)"** → ouvre Calendly
- Bouton secondaire **"Demander un devis"** → ancre vers formulaire Contact pré-rempli

**Décision interne :** *"Méthodologie claire, NDA mentionné, cadre légal posé. Je réserve l'appel."*

**Force motrice :** M1 + M2 + M3 + M4 (toutes activées sur cette section)

---

### Étape 4 — Réservation Calendly (120-180s)
**Vue : externe — Calendly**

Marc clique sur "Réserver un appel découverte" :
- Ouverture Calendly (nouvel onglet ou inline)
- Il choisit un créneau de 20 min dans la semaine
- Formulaire Calendly : nom, email, entreprise, contexte mission (préréglé pour scoper)
- Confirmation envoyée

**Critère de succès :** créneau réservé ✅

---

### Étape 5 — Variante : formulaire devis (parcours alternatif)
**Vue : Contact (vue #7) + Confirmation (vue #13)**

Si Marc préfère un devis écrit, il clique sur "Demander un devis" :
- Ancre vers formulaire Contact avec **champs scopés** :
  - Nom / Entreprise / Email
  - Type de mission (dropdown : Pentest / Audit / SIEM / Autre)
  - Taille de l'infra (range : <10 / 10-50 / 50-200 / 200+ machines)
  - Délai souhaité
  - Message libre
- Soumission Netlify Forms
- **Toast confirmation** : *"Merci, je reviens vers vous sous 48h."*

**Critère de succès :** formulaire soumis ✅

---

## Post-conditions

- Marc a soit réservé un appel Calendly, soit envoyé une demande de devis structurée
- Le portfolio a généré **1 lead freelance qualifié**

---

## Forces motrices et vues mobilisées

| Étape | Vue principale | Force activée |
|---|---|---|
| 1 | Hero | T1, M3 |
| 2 | À propos | M1 |
| 3 | Services Freelance | M1, M2, M3, M4 |
| 4 | Calendly (externe) | objectif primaire |
| 5 (alt) | Contact + Confirmation | M4 |

---

## Critères d'acceptation pour la Phase Design

- [ ] La section Services Freelance est visuellement **distincte** des Projets (ton plus sobre)
- [ ] La mention **NDA + cadre légal** est présente et lisible
- [ ] Le bouton **Calendly** est en évidence dans Services Freelance
- [ ] Le formulaire Contact est **scopé** quand on arrive via "Demander un devis" (préfill du dropdown si possible)
- [ ] La méthodologie est présentée en **4 étapes visuellement claires** (timeline ou cards)
- [ ] Tone of voice : pro, posé, pas "rebel hacker"

---

## Risques / variantes

- **Risque :** si le ton du Hero est trop "hacker edgy" (effets glitch agressifs), Marc abandonne avant d'arriver à Services → équilibrer la stylisation
- **Variante :** Marc télécharge aussi le CV pour le mettre dans son dossier de comparaison
- **Variante EN :** Marc anglophone (cas international) → toute la section Services doit avoir une version EN propre, pas une traduction Google
