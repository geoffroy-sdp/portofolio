# ARCHITECTURE.md — Portfolio "Cave à Vin"

## Vue d'ensemble du parcours utilisateur

```
[Chargement]
     |
     v
[Intro automatique — descente d'escalier]  (une seule fois / session)
     |
     v
[HUB — vue d'ensemble de la cave]
     |
     +--> [Sous-page : Le Cellier]        (Projets)
     +--> [Sous-page : Le Portrait]       (About me)
     +--> [Sous-page : Le Lutrin]         (Stack / Compétences)
     +--> [Sous-page : L'Expédition]      (Contact)
     
   (chaque sous-page revient vers HUB)
```

## Découpage par page / écran

### 1. Intro (auto)

- Animation jouée automatiquement au premier chargement.
- Séquence : couloir/escalier → descente → apparition progressive de la lumière de la cave.
- Transition finale en fondu vers le Hub.
- Mémorisation (stockage local navigateur) pour ne pas rejouer l'intro aux visites suivantes.
- Fallback : si l'animation ne peut pas se jouer (perf faible, préférence utilisateur "réduire les animations"), passage direct au Hub.

### 2. Hub (vue d'ensemble de la cave)

- Scène unique avec les 4 zones positionnées visuellement (étagères au fond, portrait sur un mur, lutrin/livre posé sur un meuble, caisse en bois au sol).
- Chaque zone :
  - état repos : légèrement visible dans l'ambiance générale.
  - état highlight (au survol desktop / visible en permanence sur mobile ou au tap) : halo lumineux + label texte.
  - état clic : transition vers la sous-page correspondante.
- Fond : 3D léger ou parallax en couches (pas de scène 3D complète et coûteuse).

### 3. Sous-page — Le Cellier (Projets)

- Grille/rangées d'étagères, une bouteille = un projet.
- États de la bouteille : repos (légère rotation en boucle), survol (aperçu rotation vers étiquette arrière), clic (sortie de l'étagère + mise au premier plan).
- Vue "bouteille en avant" : fond flouté, étiquette avant visible (date, type de projet, description, liens), flèche latérale indiquant le swipe pour tourner vers l'étiquette arrière (stack technique).
- Sortie de la vue zoomée : clic sur le fond flouté.
- Guidage première visite : message d'aide discret (texte flottant ou mascotte), affiché une seule fois.
- Filtre optionnel (type de projet / année).

### 4. Sous-page — Le Portrait (About me)

- Carte façon portrait de domaine : photo, nom, courte présentation.
- Bloc "Formation" : présentation des écoles et diplômes.
- Bloc "Expérience" : timeline chronologique (repères par année).
- Section optionnelle : philosophie/façon de travailler.

### 5. Sous-page — Le Lutrin (Stack / Compétences)

- Composant "classeur" avec effet page qui tourne (book-flip).
- Style visuel : feuille plastifiée sous anneaux de classeur.
- Une page = une catégorie de compétences (ex : Frontend, Backend, Outils, Langages).
- Navigation entre pages : flèches ou swipe.

### 6. Sous-page — L'Expédition (Contact)

- Caisse en bois ouverte contenant un formulaire ("bon de commande") : nom, email, message.
- Compartiments annexes : liens directs (GitHub, LinkedIn, mail) présentés comme des éléments rangés dans la caisse.
- Bouton d'envoi stylisé (cachet de cire / tampon).

## Découpage en composants réutilisables (à anticiper)

- `IntroSequence` — animation d'entrée.
- `HubScene` — scène principale avec zones interactives.
- `HighlightZone` — composant générique pour une zone cliquable du hub (halo + label).
- `WineBottle` — composant bouteille avec ses 3 états (repos / survol / clic) et sa logique de rotation par drag/swipe.
- `BottleDetailOverlay` — vue zoomée d'une bouteille (fond flouté + contenu + flèche swipe).
- `GuideHint` — message d'aide première visite (texte ou mascotte), avec logique "afficher une seule fois".
- `VignetteCard` — carte "portrait du vigneron" (about).
- `Timeline` — composant chronologie (expériences/formations).
- `WineBook` — composant classeur/carte des vins avec effet page-flip.
- `WoodenCrate` — composant caisse en bois avec formulaire de contact.
- `NavigationHub` (ou routeur interne) — gestion des transitions entre hub et sous-pages.

## Gestion des données de contenu

Prévoir une structure de données centralisée (facile à éditer sans toucher au design), par exemple :

- Liste des projets : titre, année, type, description, stack (liste), lien démo, lien GitHub.
- Liste des compétences par catégorie.
- Liste des expériences/formations (label, dates, description).
- Informations de contact (liens sociaux, email).

Séparer strictement **contenu** et **présentation** pour permettre de mettre à jour les projets/compétences facilement au fil du temps.

## Points d'attention technique transversaux

- **Responsive / mobile-first sur les interactions** : chaque interaction desktop (survol, drag souris) doit avoir un équivalent tactile (tap, swipe).
- **Dégradation progressive** : détecter si possible les capacités de l'appareil pour ajuster la richesse des effets (3D complet vs version allégée/image statique).
- **Accessibilité clavier** : navigation possible au clavier entre les zones du hub et les bouteilles du cellier.
- **Temps de chargement** : lazy-loading des sous-pages (ne charger les assets lourds d'une zone qu'à l'entrée dans cette zone).
- **Persistance légère** : mémorisation locale uniquement pour des conforts d'usage (intro déjà vue, aide déjà affichée) — pas de données sensibles.