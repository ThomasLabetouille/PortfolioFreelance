// Les projets et missions affichés sur le site. Les détails techniques
// complets sont sur le portfolio technique (lien « Détails »).

const TECH = "https://thomas-labetouille.vercel.app/project/";
const GH = "https://github.com/ThomasLabetouille/";

export const services = [
  {
    id: "documents",
    titre: "L'IA sur vos documents et vos demandes",
    texte:
      "Lire des mails, des confirmations, des bons de commande ou des demandes clients et en sortir des lignes propres, prêtes à valider. Retrouver la bonne offre dans un catalogue à partir d'une phrase.",
    exemple: "Comptoir & Bordereau",
    ancre: "#projet-comptoir",
  },
  {
    id: "outils",
    titre: "Outils et automatisation sur mesure",
    texte:
      "Scripts, outils internes, connecteurs entre vos logiciels (Outlook, SharePoint, exports Excel), plugins pour Unreal Engine ou Unity. Ce qui se fait à la main chaque semaine et pourrait se faire seul.",
    exemple: "Outils Unreal Engine et Unity",
    ancre: "#projet-pilotage-ue5",
  },
  {
    id: "logiciel",
    titre: "Logiciel technique qui doit être juste",
    texte:
      "C++, C#, Python, Rust. Simulation, temps réel, embarqué, traitement de capteurs. Avec les tests automatiques qui prouvent que le logiciel fait ce qu'il annonce, y compris dans les cas qui fâchent.",
    exemple: "Navigation et sûreté de drone",
    ancre: "#projet-drone",
  },
];

export const projets = [
  {
    id: "comptoir",
    image: "/projets/comptoir.jpg",
    domaine: "IA appliquée · documents",
    titre: "Comptoir & Bordereau",
    resume:
      "Deux outils construits sur l'exemple d'une agence de voyages : l'un trouve les séjours qui correspondent à une phrase de client, l'autre transforme les mails des hôtels en lignes de réservation. L'IA comprend le texte, des règles écrites décident.",
    preuve: "263 valeurs sur 263 rattachées à la bonne réservation, 281 erreurs plantées exprès toutes repérées",
    tech: ["Python", "LLM local", "Microsoft 365", "Tests"],
    liens: [
      { libelle: "Essayer la démo", href: "#demo" },
      { libelle: "Code Comptoir", href: GH + "Comptoir" },
      { libelle: "Code Bordereau", href: GH + "Bordereau" },
    ],
  },
  {
    id: "drone",
    image: "/projets/drone.jpg",
    domaine: "Logiciel embarqué · capteurs",
    titre: "Navigation de drone",
    resume:
      "Le filtre qui permet à un drone de savoir où il est en combinant ses capteurs, validé sur trois vrais vols et porté en C++ embarquable, contrôlé pour donner les mêmes résultats que la version de référence.",
    preuve: "Après 60 s sans GPS : 15 m d'erreur, contre 85 m avec la centrale inertielle seule",
    tech: ["C++", "Python", "Kalman", "PX4"],
    liens: [
      { libelle: "Code", href: GH + "drone-nav-estimation" },
      { libelle: "Détails", href: TECH + "drone-nav-estimation" },
    ],
  },
  {
    id: "vigie",
    image: "/projets/vigie.jpg",
    domaine: "Logiciel embarqué · sûreté",
    titre: "Vigie",
    resume:
      "Un logiciel qui surveille un drone en vol et le fait rentrer seul s'il sort de sa zone, si sa batterie faiblit ou s'il perd le contact. Testé de bout en bout en simulation.",
    preuve: "Ordre de retour accepté par le pilote automatique en 16 ms",
    tech: ["Rust", "MAVLink", "PX4", "Tests de propriétés"],
    liens: [
      { libelle: "Code", href: GH + "vigie" },
      { libelle: "Détails", href: TECH + "vigie" },
    ],
  },
  {
    id: "assistant-ue5",
    image: "/projets/assistant-ue5.jpg",
    domaine: "IA locale · outil métier",
    titre: "Assistant IA local pour Unreal Engine",
    resume:
      "Un assistant qui pilote un logiciel 3D en langage naturel, entièrement sur un PC de bureau : pas de compte, pas d'abonnement, aucune donnée qui sort. Il demande confirmation avant toute modification.",
    preuve: "14 572 fonctions du logiciel indexées pour que l'IA cesse d'en inventer",
    tech: ["Python", "Ollama", "MCP", "C++"],
    liens: [{ libelle: "Détails", href: TECH + "assistant-ue5-local" }],
  },
  {
    id: "pilotage-ue5",
    image: "/projets/pilotage-ue5.jpg",
    domaine: "Automatisation · 3D",
    titre: "Pilotage vérifié d'un moteur 3D",
    resume:
      "Un plugin qui permet à une IA de construire des niveaux dans Unreal Engine, et qui vérifie tout avant d'enregistrer : collisions, éléments manquants, comportement en jeu.",
    preuve: "117 tests rejoués à chaque modification",
    tech: ["C++", "Python", "Unreal Engine 5", "CI"],
    liens: [
      { libelle: "Code", href: GH + "ue5-agent-verified-levelgen" },
      { libelle: "Détails", href: TECH + "claude-ue5" },
    ],
  },
  {
    id: "banc-unity",
    image: "/projets/banc-unity.jpg",
    domaine: "Outil d'éditeur · qualité",
    titre: "Outil 3D et son banc de test",
    resume:
      "Un outil Unity pour dessiner des pièces et percer portes et fenêtres, et surtout le banc de test qui le vérifie automatiquement. Il a trouvé quatre vrais bugs dans du code qui avait l'air de marcher.",
    preuve: "40 000 cas vérifiés en quelques secondes",
    tech: ["C#", "Unity 6", "Mutation testing"],
    liens: [
      { libelle: "Code", href: GH + "unity-room-builder" },
      { libelle: "Détails", href: TECH + "level-design-tools" },
    ],
  },
];

export const missions = [
  {
    image: "/projets/rainbow-ant.jpg",
    periode: "2023 – 2024",
    client: "Rainbow Ant Studio",
    cadre: "Mission freelance · 1 an",
    role: "Développeur gameplay, Unreal Engine 5 (C++)",
    texte:
      "Mécaniques du personnage, système de natation, météo dynamique qui agit sur le jeu, carte interactive.",
  },
  {
    image: "/projets/cs-group.jpg",
    periode: "2024 – 2025",
    client: "CS Group",
    cadre: "14 mois · défense",
    role: "Développement de simulateurs aéronautiques (C#)",
    texte:
      "Scénarios d'entraînement temps réel sous exigences strictes et validation formelle, avec les ingénieurs système et les pilotes.",
  },
];
