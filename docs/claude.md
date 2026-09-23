# CLAUDE.md — Portfolio "Cave à Vin"

Ce fichier sert de contexte de référence pour le développement du projet. Il décrit le concept, les conventions et les contraintes à respecter tout au long du développement.

## Concept général

Portfolio d'étudiant en informatique (CS), habillé entièrement dans l'univers d'une **cave à vin**. Chaque section du site classique (projets, about, compétences, contact) est réinterprétée à travers une métaphore viticole cohérente.

| Section classique | Métaphore | Zone dans la cave |
|---|---|---|
| Accueil / Hub | Vue d'ensemble de la cave | — |
| Projets | Bouteilles sur étagères | Le Cellier |
| À propos | Portrait du vigneron | Le Portrait |
| Compétences / Stack | Carte des vins (classeur) | Le Lutrin |
| Contact | Caisse d'expédition en bois | L'Expédition |

## Navigation — modèle retenu

**Hub + sous-pages.**

- Une **intro automatique** (descente d'escalier, non-skippable ou skippable après quelques secondes, jouée une seule fois par session/visite via mémorisation locale) mène à la vue du **hub**.
- Le **hub** affiche la cave en vue d'ensemble avec les 4 zones interactives, chacune **mise en highlight** (halo lumineux, label au survol/tap).
- Cliquer sur une zone du hub navigue vers une **sous-page dédiée**, en conservant l'ambiance (transition douce, pas de rechargement brutal).
- Chaque sous-page propose un moyen de revenir au hub (élément diégétique à privilégier — ex: cliquer sur le fond flouté, une porte, un escalier — plutôt qu'un bouton "retour" classique quand c'est possible).

## Principe de performance (contrainte transversale, prioritaire)

Le site combine plusieurs animations coûteuses (3D, drag/rotation, flou de fond, page-flip). Règle générale à respecter partout :

- Le **hub** (page vue le plus souvent) doit rester léger : 3D/parallax discret, pas de scène 3D complète en boucle.
- Les animations lourdes (rotation bouteille, page qui tourne) sont **isolées par sous-page**, jamais toutes actives en même temois.
- Prévoir systématiquement une **version dégradée mobile** : moins d'éléments 3D en fond, flou réduit ou simulé, animations raccourcies.
- L'intro (descente d'escalier) ne doit jouer qu'**une fois par session** (stockage local), jamais de manière répétée.

## Ton et univers (guide de rédaction)

Tout le texte du site (labels, micro-copy, messages d'aide) doit rester dans le champ lexical du vin, sans sacrifier la clarté :

- Projet → présenté comme une bouteille avec un "millésime" (année) et une "robe"/"note de dégustation" (description).
- Compétences → "cépages" ou entrées de "carte des vins".
- Formation/expérience → "certification du domaine" / "grandes années".
- Contact → "bon de commande" / "expédition".

**Règle d'or** : chaque élément doit garder une double lecture immédiate — l'utilisateur doit comprendre en un coup d'œil ce qu'il regarde réellement (un projet, une compétence, un formulaire de contact), la métaphore vient en habillage, jamais en obstacle à la compréhension.

## Accessibilité / lisibilité (garde-fou)

- Prévoir si besoin un moyen rapide d'accéder à l'information brute (liste simple des projets/stack) pour un visiteur pressé (recruteur), sans obligation de suivre toute la mise en scène.
- Contraste suffisant malgré l'ambiance sombre de cave (texte toujours lisible sur fond bois/pierre foncé).
- Toutes les interactions au clic/drag doivent avoir un équivalent clavier ou un fallback tactile clair.

## Palette et direction artistique (à affiner en phase design)

- Fond : bois foncé, pierre grise/beige, ombres profondes.
- Accents : bordeaux/rouge vin profond, or/laiton pour les touches de lumière et éléments interactifs.
- Typographie : une serif élégante façon étiquette de grand cru pour les titres, une sans-serif/mono sobre pour le contenu technique.
- Éclairage : sources de lumière chaude localisées (façon spots de cave), reste de la scène dans la pénombre.

## Structure des fichiers de référence du projet

- `CLAUDE.md` — ce fichier (contexte, conventions).
- `ARCHITECTURE.md` — arborescence technique, découpage des pages/composants.
- `ROADMAP.md` — epics, stories et sous-tâches détaillées du développement.