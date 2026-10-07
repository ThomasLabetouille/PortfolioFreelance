# Site freelance

Site vitrine de mon activité freelance : des outils IA pour agences de voyages, avec une démo
rejouée de Comptoir et de Bordereau. React + Vite, une seule page, aucune dépendance en
dehors de React et des deux polices.

## Lancer

```
npm install
npm run dev       # http://localhost:5173
npm run build     # sortie dans dist/
```

## Avant la mise en ligne

Tout ce qui me concerne est dans `src/config.js` :

- `siret` et `adresse` (mentions légales), encore à « À COMPLÉTER » ;
- les prix des trois offres ;
- `rdvUrl` si je crée un lien Calendly ou Cal.com (sinon les boutons ouvrent un mail pré-rempli) ;
- `photo` (un fichier dans `public/`) et `temoignage`, affichés seulement s'ils sont remplis.

Après le premier déploiement, remplacer `/og.png` par l'URL complète dans `index.html`
(`og:image`) : LinkedIn n'affiche pas l'aperçu avec un chemin relatif.

## Déployer sur Vercel

Nouveau projet → importer le dépôt. Vercel détecte Vite tout seul (build `npm run build`,
sortie `dist`). Pas de `vercel.json` nécessaire : il n'y a qu'une page.

## D'où viennent les données de la démo

`src/data/comptoir.js` est généré depuis le dépôt Comptoir :

```
python outils\donnees_comptoir.py ..\..\Projet_Python\Comptoir
```

Le script reprend les demandes extraites par le modèle lors de la mesure (`resultats.json`),
rejoue le moteur de filtrage dessus et vérifie que chaque demande retient le même nombre de
séjours que pendant la mesure.

`src/data/bordereau.js` reprend quatre courriers du jeu de test de Bordereau et leur
attendu. Ce sont les quatre où la mesure avec gemma4:12b a rendu exactement l'attendu
(tous les champs trouvés, aucun mal rattaché, aucun inventé, aucune incertitude en trop),
donc afficher l'attendu revient à afficher ce que l'outil a produit. Les retours à la ligne
des paragraphes ont été recollés pour la lecture ; le tableau de c07 est laissé tel quel.

Catalogue, courriers, clients et établissements sont fictifs.
