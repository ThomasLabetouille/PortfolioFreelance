// Généré à partir des résultats réels de Comptoir (resultats.json) et du moteur de filtrage.
// Catalogue entièrement fictif. Ne pas modifier à la main.
export const demandes = [
  {
    "id": "q02",
    "voyageurs": 4,
    "label": "Famille, Crète ou Sicile",
    "texte": "On est quatre, deux adultes et deux enfants, un de 8 ans et un de 14. Crète ou Sicile, deuxième quinzaine de juillet, tout compris, 3 500 euros maximum, départ Toulouse.",
    "suiteDe": null,
    "compris": [
      "4 voyageurs dont enfants de 8 et 14 ans",
      "Crète ou Sicile",
      "à partir du 15 juillet",
      "tout compris",
      "départ Toulouse",
      "3 500 € maximum"
    ],
    "nonPrecise": [
      "date exacte de fin (durée)",
      "choix entre Crète et Sicile"
    ],
    "propositions": [
      {
        "nom": "Club Kalliste",
        "lieu": "Crète, Grèce",
        "gamme": "Club",
        "formule": "tout compris",
        "nuits": 7,
        "prix": 3293,
        "note": 7.8,
        "fort": "Plage de sable à 150 m",
        "faible": "Chambres côté route sensiblement bruyantes",
        "club": "Club enfants 4–12 ans"
      },
      {
        "nom": "Club Trinacria",
        "lieu": "Sicile, Italie",
        "gamme": "Club",
        "formule": "tout compris",
        "nuits": 7,
        "prix": 3478,
        "note": 7.5,
        "fort": "Excursions vers Taormine au départ de l'hôtel",
        "faible": "Plage à 300 m, navette toutes les heures seulement",
        "club": "Club enfants 4–11 ans"
      }
    ],
    "pistes": []
  },
  {
    "id": "q03",
    "voyageurs": 4,
    "label": "… même chose à 3 000 €",
    "texte": "Même chose mais on ne peut pas mettre plus de 3 000 euros.",
    "suiteDe": "q02",
    "compris": [
      "4 voyageurs dont enfants de 8 et 14 ans",
      "Crète ou Sicile",
      "à partir du 15 juillet",
      "tout compris",
      "départ Toulouse",
      "3 000 € maximum"
    ],
    "nonPrecise": [],
    "propositions": [],
    "pistes": [
      {
        "critere": "le budget",
        "options": 2,
        "prixMin": 3293
      },
      {
        "critere": "la destination",
        "options": 4
      }
    ]
  },
  {
    "id": "q14",
    "voyageurs": 3,
    "label": "Tunisie avec club enfants",
    "texte": "Une semaine en Tunisie en janvier avec notre fils de 5 ans, en tout compris, et il nous faut vraiment un club enfants.",
    "suiteDe": null,
    "compris": [
      "3 voyageurs dont enfant de 5 ans",
      "Tunisie",
      "7 nuits",
      "en janvier",
      "tout compris",
      "club enfants exigé"
    ],
    "nonPrecise": [],
    "propositions": [
      {
        "nom": "Club Yasmine",
        "lieu": "Djerba, Tunisie",
        "gamme": "Club",
        "formule": "tout compris",
        "nuits": 7,
        "prix": 1647,
        "note": 7.4,
        "fort": "Le meilleur prix du catalogue en tout compris",
        "faible": "Buffet répétitif au-delà d'une semaine",
        "club": "Club enfants 3–12 ans"
      }
    ],
    "pistes": []
  },
  {
    "id": "q15",
    "voyageurs": 3,
    "label": "… notre fils a 2 ans",
    "texte": "Même séjour mais notre fils a 2 ans et il nous faut un club qui le prenne.",
    "suiteDe": "q14",
    "compris": [
      "3 voyageurs dont enfant de 2 ans",
      "Tunisie",
      "7 nuits",
      "en janvier",
      "tout compris",
      "club enfants exigé"
    ],
    "nonPrecise": [],
    "propositions": [],
    "pistes": [
      {
        "critere": "l'exigence d'un club enfants adapté à l'âge",
        "options": 2
      }
    ]
  },
  {
    "id": "q12",
    "voyageurs": 2,
    "label": "Fuerteventura depuis Nantes",
    "texte": "Fuerteventura une semaine, mais impérativement au départ de Nantes.",
    "suiteDe": null,
    "compris": [
      "2 voyageurs",
      "Fuerteventura",
      "7 nuits",
      "départ Nantes"
    ],
    "nonPrecise": [
      "dates précises du voyage",
      "nombre de personnes (adultes/enfants)",
      "budget maximum",
      "formule repas souhaitée"
    ],
    "propositions": [],
    "pistes": [
      {
        "critere": "l'aéroport de départ",
        "options": 1
      },
      {
        "critere": "la destination",
        "options": 2
      }
    ]
  },
  {
    "id": "q17",
    "voyageurs": 2,
    "label": "Caraïbes en février",
    "texte": "Les Caraïbes en février, neuf nuits, tout compris, à deux.",
    "suiteDe": null,
    "compris": [
      "2 voyageurs",
      "Caraïbes",
      "9 nuits",
      "en février",
      "tout compris"
    ],
    "nonPrecise": [],
    "propositions": [
      {
        "nom": "Club Bavaro",
        "lieu": "Punta Cana, République dominicaine",
        "gamme": "Club",
        "formule": "tout compris",
        "nuits": 9,
        "prix": 2980,
        "note": 7.8,
        "fort": "Tout compris très complet, boissons incluses",
        "faible": "Complexe immense et très fréquenté",
        "club": "Club enfants 4–12 ans"
      },
      {
        "nom": "Club Varadero",
        "lieu": "Varadero, Cuba",
        "gamme": "Club",
        "formule": "tout compris",
        "nuits": 9,
        "prix": 3180,
        "note": 7.4,
        "fort": "Une des plus belles plages des Caraïbes",
        "faible": "Approvisionnement irrégulier au buffet",
        "club": "Club enfants 5–12 ans"
      }
    ],
    "pistes": []
  },
  {
    "id": "q18",
    "voyageurs": 2,
    "label": "Week-end à Rome",
    "texte": "Un week-end à Rome, trois nuits, avec petit-déjeuner.",
    "suiteDe": null,
    "compris": [
      "2 voyageurs",
      "Rome",
      "3 nuits",
      "petit-déjeuner"
    ],
    "nonPrecise": [
      "dates précises",
      "budget maximum",
      "lieu de départ"
    ],
    "propositions": [
      {
        "nom": "Roma Trastevere",
        "lieu": "Rome, Italie",
        "gamme": "Séjour en ville",
        "formule": "petit-déjeuner",
        "nuits": 3,
        "prix": 860,
        "note": 8.3,
        "fort": "Quartier vivant, à pied du Trastevere",
        "faible": "Pas d'ascenseur, trois étages",
        "club": null
      }
    ],
    "pistes": []
  }
];
