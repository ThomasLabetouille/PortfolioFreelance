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
  // Lien Calendly / Cal.com. Vide : les boutons ouvrent un mail pré-rempli.
  rdvUrl: "https://calendly.com/thomas-labetouille/15-minute-meeting",
  // Photo dans public/ (ex. "/photo.jpg"). Vide : un monogramme à la place.
  photo: "/photo.jpg",
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
    "Offre de lancement : pour mes trois premiers clients, l'audit de fiabilité est à 600 € au lieu de 1 200 €, en échange d'un retour écrit que je pourrai publier ici.",
  mentionTva: "TVA non applicable, art. 293 B du CGI",
};

// Prix d'appel affichés sur la page. Ce sont des propositions : ajuste-les.
export const offres = [
  {
    id: "diagnostic",
    nom: "Audit de fiabilité",
    duree: "2 jours",
    prix: "à partir de 1 200 €",
    pitch: "Savoir où votre outil casse, avant que vos clients le découvrent.",
    points: [
      "Une demi-journée avec ceux qui utilisent l'outil, pour voir les problèmes là où ils arrivent",
      "Les bugs connus reproduits, et ceux qu'on ne connaît pas encore cherchés",
      "Ce que vos tests actuels attrapent vraiment, mesuré",
      "Un rapport de deux pages : ce qui est fragile, ce qui est urgent, ce qui peut attendre",
    ],
  },
  {
    id: "projet",
    nom: "Correction et mise sous tests",
    duree: "2 à 6 semaines",
    prix: "à partir de 5 000 €",
    pitch: "Les bugs corrigés, et les tests qui les empêchent de revenir.",
    points: [
      "Une liste de problèmes choisie ensemble et écrite noir sur blanc",
      "Chaque correction livrée avec le test qui la prouve",
      "Tests rejoués automatiquement à chaque modification",
      "Tout est documenté : votre équipe peut reprendre la main",
    ],
    recommande: true,
  },
  {
    id: "suivi",
    nom: "Suivi",
    duree: "au mois",
    prix: "à partir de 250 € / mois",
    pitch: "Un outil qui reste fiable quand vos données et vos logiciels changent.",
    points: [
      "Correction des nouveaux bugs, chacun avec son test",
      "Vérification régulière sur des données récentes",
      "Alerte et adaptation quand un format ou un logiciel change",
      "Sans engagement de durée",
    ],
  },
];

// Renfort sur un projet existant, facture a la journee.
export const renfort =
  "Besoin d'un développeur en renfort sur un projet existant (C++, C#, Python, Rust, Unreal Engine, Unity) ? Mission à la journée, sur site à Toulouse ou à distance, devis sur demande.";

export function lienRdv(sujet = "Échange de 15 minutes") {
  if (site.rdvUrl) return site.rdvUrl;
  const corps =
    "Bonjour Thomas,\n\n" +
    "Je travaille chez : \n" +
    "Le problème ou le bug qui nous gêne : \n" +
    "Mes disponibilités pour un appel de 15 minutes : \n\n" +
    "Merci,";
  return `mailto:${site.email}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}`;
}
