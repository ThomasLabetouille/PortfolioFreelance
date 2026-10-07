// Tout ce qui est propre à toi et susceptible de changer est ici.
// Les valeurs « À COMPLÉTER » doivent être remplies avant la mise en ligne.

export const site = {
  nom: "Thomas Labetouille",
  ville: "Toulouse",
  email: "thomas.labetouille@gmail.com",
  linkedin: "https://www.linkedin.com/in/thomas-labetouille-294b39212/",
  github: "https://github.com/ThomasLabetouille",
  // Le portfolio technique, pour le service informatique du client.
  portfolioTechnique: "https://thomas-labetouille.vercel.app/",
  ficheTechniqueComptoir: "https://thomas-labetouille.vercel.app/project/comptoir",
  // Lien Calendly / Cal.com. Vide : les boutons ouvrent un mail pré-rempli.
  rdvUrl: "https://calendly.com/thomas-labetouille/30min",
  // Photo dans public/ (ex. "/photo.jpg"). Vide : un monogramme à la place.
  photo: "",
  // Recommandation d'un ancien client, affichée seulement si remplie.
  // Exemple : { texte: "…", auteur: "Prénom Nom, poste, entreprise" }
  temoignage: null,
  delaiReponse: "Réponse sous 48 h ouvrées",

  // Mentions légales
  statut: "Entrepreneur individuel (micro-entreprise)",
  siret: "927 772 350 00017",
  adresse: "13 impasse André Marfaing, 31400 Toulouse",
  // Offre de lancement affichée sous les tarifs. null pour la retirer.
  offreLancement:
    "Offre de lancement : pour mes trois premiers clients, le diagnostic est à 600 € au lieu de 1 200 €, en échange d'un retour écrit que je pourrai publier ici.",
  mentionTva: "TVA non applicable, art. 293 B du CGI",
};

// Prix d'appel affichés sur la page. Ce sont des propositions : ajuste-les.
export const offres = [
  {
    id: "diagnostic",
    nom: "Diagnostic",
    duree: "2 jours",
    prix: "à partir de 1 200 €",
    pitch: "Savoir si un outil vaut le coup, avant de dépenser plus.",
    points: [
      "Une demi-journée avec vos équipes, sur leur poste",
      "50 de vos documents réels passés dans l'outil, résultats mesurés",
      "Un rapport de deux pages : temps gagnable, erreurs évitables, limites",
      "Si la réponse est non, je vous le dis",
    ],
  },
  {
    id: "pilote",
    nom: "Pilote",
    duree: "4 à 6 semaines",
    prix: "à partir de 5 000 €",
    pitch: "Un outil sur un seul flux, branché sur vos données.",
    points: [
      "Un flux choisi ensemble : demandes clients, confirmations d'un réceptif…",
      "Critères de réussite chiffrés et écrits avant de commencer",
      "Vos équipes l'utilisent pour de vrai pendant le pilote",
      "À la fin, vous gardez l'outil ou vous arrêtez",
    ],
    recommande: true,
  },
  {
    id: "suivi",
    nom: "Suivi",
    duree: "au mois",
    prix: "à partir de 250 € / mois",
    pitch: "Un outil qui reste fiable quand vos fournisseurs changent.",
    points: [
      "Mise à jour du catalogue et du référentiel hôtels",
      "Nouvelle mesure chaque mois sur les documents du mois",
      "Correction quand un fournisseur change de format",
      "Sans engagement de durée",
    ],
  },
];

export function lienRdv(sujet = "Échange de 15 minutes") {
  if (site.rdvUrl) return site.rdvUrl;
  const corps =
    "Bonjour Thomas,\n\n" +
    "Je travaille chez : \n" +
    "La tâche qui nous prend le plus de temps : \n" +
    "Mes disponibilités pour un appel de 15 minutes : \n\n" +
    "Merci,";
  return `mailto:${site.email}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}`;
}
