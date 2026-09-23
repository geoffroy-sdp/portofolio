# ROADMAP.md — Portfolio "Cave à Vin"

Découpage en Epics → Stories → Sous-tâches. Chaque story peut être traitée comme une issue de suivi ; chaque sous-tâche comme une checklist à l'intérieur.

---

## EPIC 0 — Fondations du projet

Mise en place de la base technique avant tout travail visuel.

### Story 0.1 — Setup initial du projet
- [ ] Initialiser le projet (structure de dossiers, outillage de build).
- [ ] Mettre en place la structure de données de contenu (projets, compétences, expériences, contact) séparée du design.
- [ ] Définir le système de routage entre Hub et sous-pages.
- [ ] Mettre en place le système de détection "réduire les animations" (préférence utilisateur / accessibilité).

### Story 0.2 — Design system de base
- [ ] Définir la palette de couleurs finale (bordeaux, or/laiton, bois, pierre).
- [ ] Choisir et intégrer les typographies (serif "étiquette" + sans-serif/mono technique).
- [ ] Créer les composants de base réutilisables (boutons, labels, halos lumineux).
- [ ] Définir les règles de responsive (breakpoints mobile / tablette / desktop).

### Story 0.3 — Stratégie de performance
- [ ] Définir la stratégie de dégradation mobile (quelles animations sont simplifiées/retirées).
- [ ] Mettre en place le lazy-loading par sous-page.
- [ ] Définir un budget de performance cible (poids de page, temps de premier affichage).

---

## EPIC 1 — Intro automatique (descente d'escalier)

### Story 1.1 — Conception de la séquence
- [ ] Définir le storyboard précis de la descente (nombre d'étapes, durée totale).
- [ ] Définir la transition finale vers le Hub (fondu, zoom, etc.).
- [ ] Définir la durée cible (courte, quelques secondes).

### Story 1.2 — Implémentation de l'animation
- [ ] Développer la séquence visuelle (parallax ou 3D léger selon arbitrage perf).
- [ ] Ajouter la possibilité de passer l'intro après un court délai (bouton "passer" discret).
- [ ] Gérer le fallback si animations réduites/perf faible (passage direct au Hub).

### Story 1.3 — Persistance "déjà vue"
- [ ] Mémoriser localement que l'intro a été jouée.
- [ ] Ne rejouer l'intro qu'à la demande explicite (ex: lien "revoir l'entrée" quelque part, optionnel).

---

## EPIC 2 — Hub (vue d'ensemble de la cave)

### Story 2.1 — Scène de fond du Hub
- [ ] Concevoir/intégrer le visuel de fond (cave en 3D léger ou parallax en couches).
- [ ] Positionner les 4 zones (Cellier, Portrait, Lutrin, Expédition) dans la scène.
- [ ] Optimiser la version mobile du fond (réduction d'éléments, alternative statique si besoin).

### Story 2.2 — Zones interactives (highlight)
- [ ] Développer le composant zone générique (état repos / survol / actif).
- [ ] Ajouter l'effet halo lumineux au survol (desktop) et équivalent tactile (mobile).
- [ ] Ajouter le label texte de chaque zone.
- [ ] Gérer la transition (clic zone → sous-page correspondante).

### Story 2.3 — Navigation retour vers le Hub
- [ ] Définir et implémenter le mécanisme de retour depuis chaque sous-page.
- [ ] Ajouter une transition douce cohérente entre sous-page et Hub (pas de rechargement brutal).

---

## EPIC 3 — Le Cellier (Projets)

### Story 3.1 — Disposition des bouteilles
- [ ] Concevoir la grille/les étagères (nombre de bouteilles visibles, scroll si besoin).
- [ ] Lier chaque bouteille à une entrée de la structure de données "projets".
- [ ] (Optionnel) Ajouter un filtre par type de projet ou par année.

### Story 3.2 — États de la bouteille (repos / survol)
- [ ] Développer l'animation de repos (légère rotation en boucle).
- [ ] Développer l'animation de survol (rotation vers l'étiquette arrière puis retour).
- [ ] Adapter le comportement "survol" pour le tactile (ex: tap court = aperçu).

### Story 3.3 — Interaction clic : mise en avant de la bouteille
- [ ] Développer l'animation de sortie d'étagère + mise au premier plan.
- [ ] Développer l'effet de flou de fond (avec fallback léger sur mobile bas de gamme).
- [ ] Afficher l'étiquette avant complète (date, type, description, liens démo/GitHub).

### Story 3.4 — Rotation par swipe/drag vers l'étiquette arrière
- [ ] Implémenter la rotation de la bouteille pilotée par drag (souris) / swipe (tactile).
- [ ] Ajouter la flèche latérale indicative avec micro-animation en boucle.
- [ ] Afficher l'étiquette arrière (stack technique du projet).
- [ ] Gérer la sortie de la vue zoomée (clic sur le fond flouté).

### Story 3.5 — Guidage première visite
- [ ] Concevoir le message d'aide (texte flottant ou mascotte, à trancher plus tard).
- [ ] Implémenter l'affichage unique (mémorisation locale "aide déjà vue").

---

## EPIC 4 — Le Portrait (About me)

### Story 4.1 — Carte "vigneron"
- [ ] Intégrer photo/portrait + présentation courte.
- [ ] Définir le style visuel de la carte (cohérent avec l'univers domaine viticole).

### Story 4.2 — Bloc Formation
- [ ] Lister écoles et diplômes depuis la structure de données.
- [ ] Habiller visuellement le bloc (style "certification du domaine").

### Story 4.3 — Bloc Expérience (timeline)
- [ ] Développer le composant timeline chronologique.
- [ ] Lier les entrées d'expérience à la structure de données.
- [ ] Rendre la timeline lisible en version mobile (empilement vertical probable).

### Story 4.4 — (Optionnel) Section philosophie
- [ ] Rédiger et intégrer un court texte sur la façon de travailler.

---

## EPIC 5 — Le Lutrin (Stack / Compétences)

### Story 5.1 — Composant classeur (structure)
- [ ] Développer la structure visuelle du classeur (anneaux, effet plastifié).
- [ ] Définir le découpage en pages/catégories (Frontend, Backend, Outils, etc.).

### Story 5.2 — Effet page qui tourne
- [ ] Implémenter l'animation de retournement de page (book-flip).
- [ ] Ajouter la navigation entre pages (flèches + swipe tactile).

### Story 5.3 — Contenu des pages
- [ ] Lier chaque page à la liste de compétences correspondante depuis la structure de données.
- [ ] Intégrer les icônes/visuels des technologies.

---

## EPIC 6 — L'Expédition (Contact)

### Story 6.1 — Caisse en bois (structure visuelle)
- [ ] Intégrer le visuel de la caisse ouverte.
- [ ] Positionner le formulaire à l'intérieur (style "bon de commande").

### Story 6.2 — Formulaire de contact
- [ ] Développer les champs (nom, email, message) avec validation de base.
- [ ] Développer la logique d'envoi (service d'envoi d'email à définir).
- [ ] Ajouter les retours utilisateur (succès / erreur).
- [ ] Habiller le bouton d'envoi (effet cachet de cire / tampon).

### Story 6.3 — Liens directs
- [ ] Intégrer les compartiments annexes (GitHub, LinkedIn, email direct).
- [ ] Lier chaque compartiment à son URL/action correspondante.

---

## EPIC 7 — Accessibilité, robustesse et finitions

### Story 7.1 — Accessibilité
- [ ] Vérifier les contrastes texte/fond sur toutes les sous-pages.
- [ ] Ajouter la navigation clavier (Hub, bouteilles, pages du classeur).
- [ ] Ajouter des alternatives textuelles où pertinent.

### Story 7.2 — Version "accès rapide" pour visiteur pressé
- [ ] Concevoir un accès simplifié (ex: liste brute des projets/stack accessible en un clic).
- [ ] Intégrer ce lien discrètement dans le Hub ou le header.

### Story 7.3 — Tests multi-appareils
- [ ] Tester l'ensemble du parcours sur mobile bas/moyen de gamme.
- [ ] Ajuster les animations les plus coûteuses en fonction des résultats.
- [ ] Tester sur les navigateurs principaux (Chrome, Safari, Firefox).

### Story 7.4 — Déploiement
- [ ] Configurer l'hébergement.
- [ ] Mettre en place un nom de domaine (si prévu).
- [ ] Vérifier les performances en production (temps de chargement réel).

---

## Backlog / idées à trancher plus tard (hors scope initial)

- [ ] Personnage "sommelier" pour le guidage (vs. simple texte flottant) — à définir en détail plus tard.
- [ ] Mode clair/sombre alternatif.
- [ ] Easter eggs (ex: toile d'araignée sur les tout premiers projets scolaires).
- [ ] Multilingue (FR/EN) si pertinent pour un usage international.