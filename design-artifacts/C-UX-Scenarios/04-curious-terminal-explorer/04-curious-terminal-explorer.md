# Scenario 04 — Le visiteur curieux explore le terminal

> **Persona :** Visiteur tech curieux (dev, étudiant cyber, recruteur tech qui aime jouer)
> **Objectif business :** créer une expérience mémorable → partage social + différenciation
> **Force(s) motrice(s) :** L4 Curiosité technique, T1 Première impression, T2 Performance

---

## Contexte d'arrivée

- **Source :** lien partagé (Twitter/X, Discord, LinkedIn), bouche-à-oreille tech, Hacker News
- **Device :** Desktop (clavier requis pour le terminal — c'est délibéré)
- **Temps disponible :** **illimité** — l'utilisateur est en mode exploration
- **État mental :** ludique, prêt à jouer, valorise la créativité technique

---

## Pré-conditions

- Le visiteur est arrivé sur `https://tahirihasina.dev/fr/` ou `/en/`
- Le terminal interactif est **actif et focusable** dès le chargement
- Le curseur clignotant attire l'œil

---

## Sunshine Path (Storyboard du Terminal — Vue #2)

### Étape 1 — Atterrissage Hero (0-5s)
**Vue : Hero + Terminal (vue #1 + #2 — état initial)**

Ce qu'il voit :
- Hero classique
- **Terminal** à droite ou sous le hero, fond noir, prompt visible : `visitor@tahirihasina:~$ _`
- Indication discrète : *"Type `help` to start"*
- Curseur clignotant

**Décision interne :** *"Tiens, un vrai terminal. Voyons ça."*

**Force motrice :** L4 + T1

---

### Étape 2 — Découverte des commandes (5-30s)
**Vue : Terminal — état "menu help"**

Il clique dans le terminal et tape `help` + Entrée. Réponse :

```
Available commands:
  whoami           Display my profile
  cat skills.txt   List my technical skills
  ls projects/     Browse my projects
  cat projects/X   Show details of project X
  contact          Show contact methods
  cv               Download my CV
  clear            Clear the terminal
  matrix           ¯\_(ツ)_/¯
  help             Show this menu
```

Il essaie `whoami` :

```
> whoami
Tahirihasina RAKOTOMANGA
Role:        DevSecOps Engineer / Pentester
Status:      Open to opportunities (CDI + Freelance)
Location:    Antananarivo, Madagascar — Remote-friendly
Education:   Master 2 MISA (in progress)
Passions:    DevOps · Cybersecurity · SOC · Automation
```

**Force motrice :** L4 (curiosité satisfaite, contenu réel)

---

### Étape 3 — Exploration des skills (30-60s)
**Vue : Terminal — état "cat skills.txt"**

Il tape `cat skills.txt` :

```
> cat skills.txt
[DevOps & Cloud]
  Docker, Kubernetes, CI/CD, GitHub Actions, AWS, OVH, Ansible

[Cybersecurity]
  Nmap, Metasploit, Hydra, BurpSuite
  iptables, pfSense, Wazuh (SIEM)

[Systems & Networking]
  Linux, Proxmox, VMware, TCP/IP, DNS, SSH, VLAN

[Development]
  Python (Django, Flask), PHP, JavaScript, PostgreSQL, MySQL
```

Sortie formatée, lisible.

---

### Étape 4 — Browse des projets (60-120s)
**Vue : Terminal — état "ls projects/" → "cat projects/X"**

Il tape `ls projects/` :

```
> ls projects/
total 6
-rw-r--r--  cyber-incidents-viz.md
-rw-r--r--  wazuh-soc-deployment.md
-rw-r--r--  docker-vps-deployment.md
-rw-r--r--  django-rest-api.md
-rw-r--r--  fmsa-online-vote.md
-rw-r--r--  glpi-docker-stack.md
```

Il tape `cat projects/wazuh-soc-deployment.md` :

```
> cat projects/wazuh-soc-deployment.md
# Wazuh SOC Deployment

Stack: Wazuh, Docker, Linux, Bash
Context: Mise en place SIEM Wazuh sur VPS pour monitoring sécurité
Status: Production

Highlights:
  - Déploiement conteneurisé (Docker Compose)
  - Agents Wazuh sur 5 nœuds
  - Alerting via webhook
  - Hardening serveur (iptables, fail2ban)

GitHub: https://github.com/[user]/wazuh-soc
Live:   N/A (privacy)
```

**Force motrice :** L1 (show don't tell) + L4

---

### Étape 5 — Découverte easter egg (120-150s)
**Vue : Terminal — état "matrix" (easter egg)**

Curieux, il tape `matrix`. Animation courte (3-5s) de caractères verts qui défilent à la Matrix → retour au prompt + message ironique :

```
> matrix
There is no spoon. ¯\_(ツ)_/¯
Returning to reality...
```

Il rigole. Il pense à partager le portfolio.

**Variantes d'easter eggs possibles :**
- `sudo become-hired` → *"Permission denied: contact me to grant access."*
- `nmap --target=me` → simulation scan + message *"Looks like I'm online. Let's chat!"*
- `rm -rf /` → *"Nice try. I'm a DevSecOps engineer. ;)"*

**Force motrice :** Mémorisation + partage (objectif tertiaire fierté)

---

### Étape 6 — Conversion (150-180s)
**Vue : Terminal — "contact" ou "cv"**

Il tape `contact` :

```
> contact
Email:     tahirihasinarakotomanga@gmail.com
LinkedIn:  linkedin.com/in/tahirihasina-rakotomanga
GitHub:    github.com/[user]
Calendly:  calendly.com/tahirihasina/discovery-call

Tip: type `cv` to download my resume.
```

OU `cv` :

```
> cv
Downloading CV_Rakotomanga_Tahirihasina.pdf... ✓
```

Téléchargement réel déclenché.

**Critère de succès :** soit contact, soit partage, soit téléchargement CV ✅

---

### Étape 7 — Variante : 404 fun (hors path principal)
**Vue : Page 404 (vue #12)**

Si le visiteur arrive sur une URL inconnue (ex: `tahirihasina.dev/admin`) :

```
> 404 NOT FOUND

This path doesn't exist in my filesystem.

Try one of these:
  → / (home)
  → /fr or /en
  → contact

Or type `help` in the terminal below.
```

Avec un mini-terminal embarqué. Cohérence avec l'esthétique cyber.

---

## Post-conditions

- Le visiteur a passé 2-3 min sur le portfolio (vs <30s sans terminal)
- Probabilité élevée de **partage** sur réseaux (Twitter/X, Discord tech)
- Si match avec un besoin pro, conversion possible (CV, contact, Calendly)
- Souvenir mémorable du portfolio (objectif tertiaire — fierté + bouche-à-oreille)

---

## Forces motrices et vues mobilisées

| Étape | Vue principale | Force activée |
|---|---|---|
| 1 | Hero + Terminal initial | L4, T1 |
| 2 | Terminal help | L4 |
| 3 | Terminal skills | L2 |
| 4 | Terminal projects + détail | L1, L4 |
| 5 | Terminal easter egg | mémorisation, partage |
| 6 | Terminal contact / cv | conversion |
| 7 | 404 | cohérence d'expérience |

---

## Critères d'acceptation pour la Phase Design / Dev

- [ ] Terminal **focusable au clic** ; clavier physique pleinement supporté
- [ ] **Autocomplétion sur Tab** (commandes connues)
- [ ] **Historique haut/bas** (flèches ↑↓)
- [ ] **`clear` et Ctrl+L** vident le terminal
- [ ] **Latence < 50ms** entre frappe et affichage
- [ ] Commandes inconnues → message sympa : *"Command not found. Type `help` for available commands."*
- [ ] Affichage **ANSI couleurs** (vert/cyan pour les sections, gris pour le détail)
- [ ] **Pas bloquant** : tout le contenu du terminal est aussi accessible via les sections classiques (Skills, Projets, Contact) → accessibilité a11y respectée
- [ ] **Lighthouse Performance** non dégradé (le terminal ne pèse pas plus de 30 Ko gzippé)
- [ ] **`prefers-reduced-motion`** : pas d'animations matrix automatiques si réduit

---

## Risques / variantes

- **Risque :** terminal mal implémenté = vu comme un gadget cassé → tests rigoureux multi-navigateurs
- **Risque :** trop d'easter eggs cachés = personne ne les trouve → en garder 2-3 visibles depuis `help`
- **Variante mobile :** terminal en mode "tap pour révéler les commandes prédéfinies" (boutons) au lieu d'input clavier — voir scénario 03
- **Variante accessibilité :** mode "read mode" qui révèle tout le contenu sans le terminal (pour screen readers)
