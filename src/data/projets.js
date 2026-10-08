// Les projets et missions affichés sur le site. Les détails techniques
// complets sont sur le portfolio technique (lien « Détails »).

const TECH = "https://thomas-labetouille.vercel.app/project/";
const GH = "https://github.com/ThomasLabetouille/";

export const services = [
  {
    id: "bugs",
    titre: "Résoudre les bugs",
    texte:
      "Un bug qui revient, un comportement que personne n'arrive à reproduire, une erreur qui n'apparaît que chez le client. Je le reproduis, je trouve sa cause, je le corrige, puis j'ajoute le test qui l'empêche de revenir.",
    exemple: "les bugs trouvés dans mes projets",
    ancre: "#bugs",
  },
  {
    id: "tests",
    titre: "Mettre en place les tests",
    texte:
      "Tests automatiques, tests de non-régression rejoués à chaque modification, intégration continue. Et je mesure ce qu'ils valent en y glissant exprès des erreurs : un test qui ne les attrape pas ne protège rien.",
    exemple: "le banc de test d'un outil 3D",
    ancre: "#projet-banc-unity",
  },
  {
    id: "ia",
    titre: "Fiabiliser vos outils IA",
    texte:
      "Un assistant ou un extracteur IA se trompe autrement qu'un logiciel classique : il invente, et pas toujours au même endroit. Je mesure ce qu'il fait vraiment, j'ajoute des contrôles qui relisent chaque résultat et je corrige ce qui dérive.",
    exemple: "Comptoir & Bordereau",
    ancre: "#projet-comptoir",
  },
];

// Le journal des bugs : des cas reels, trouves par des tests dans mes projets.
export const bugs = [
  {
    projet: "Bordereau · lecture de mails",
    symptome: "« 1 340 EUR » lu 340",
    detail: "17 prix faux sur 20 mails dès que Word ou Outlook glisse une espace fine entre les milliers.",
    trouve: "Un test qui fait subir aux mails ce que leur fait une messagerie : fins de ligne Windows, espaces spéciales, accents perdus.",
    corrige: "Le texte est remis dans une forme unique avant toute lecture.",
  },
  {
    projet: "Bordereau · lecture de mails",
    symptome: "Une promo prise pour une date de séjour",
    detail: "Une signature publicitaire datée, en bas du mail, devenait la date de départ du client. Le même test a trouvé une réservation inventée à partir de l'en-tête quand Outlook change les fins de ligne.",
    trouve: "Le même test : le mail modifié doit donner exactement le même résultat que l'original.",
    corrige: "La signature est coupée avant la lecture ; trois dates dans un même bloc deviennent un doute signalé, pas un pari.",
  },
  {
    projet: "Comptoir · IA",
    symptome: "« Juillet » compris comme juillet dernier",
    detail: "Sur 20 demandes de test, l'IA plaçait « juillet » dans l'année passée 11 fois. Et 15 fois, « en juillet » devenait « à partir du 1er juillet, sans limite ».",
    trouve: "Un test qui compare ce que l'IA a compris aux réponses attendues, sans la relancer.",
    corrige: "Le code relit les dates dans la phrase du client ; l'IA ne les décide plus.",
  },
  {
    projet: "Comptoir · IA",
    symptome: "Même phrase, deux réponses",
    detail: "« On habite Bordeaux… au départ de chez nous » : l'aéroport était trouvé à une mesure, perdu à la suivante.",
    trouve: "Le test de non-régression, rejoué après chaque nouvelle mesure.",
    corrige: "L'aéroport est relu dans la phrase. Un modèle ne répond pas deux fois pareil : le code doit vérifier.",
  },
];

export const projets = [
  {
    id: "comptoir",
    image: "/projets/comptoir.jpg",
    domaine: "IA sous contrôle · documents",
    titre: "Comptoir & Bordereau",
    resume:
      "Deux outils IA construits sur l'exemple d'une agence de voyages (recherche de séjours, lecture des mails d'hôtels), et surtout les tests qui les surveillent : ils y ont trouvé 4 erreurs de l'IA et 4 bugs, tous corrigés et verrouillés par un test.",
    preuve: "281 erreurs glissées exprès dans les résultats, toutes repérées par le contrôle automatique",
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
    preuve: "38 tests automatiques, dont des tests de propriétés sur la zone de vol",
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
      "Un assistant qui pilote un logiciel 3D en langage naturel, entièrement sur un PC de bureau. Le code l'empêche d'annoncer une réussite après une erreur, et lui fournit les vraies fonctions du logiciel pour qu'il cesse d'en inventer.",
    preuve: "22 scripts de test avec un faux modèle, qui tournent sans le logiciel 3D",
    tech: ["Python", "Ollama", "MCP", "C++"],
    liens: [{ libelle: "Détails", href: TECH + "assistant-ue5-local" }],
  },
  {
    id: "pilotage-ue5",
    image: "/projets/pilotage-ue5.jpg",
    domaine: "Vérification · 3D",
    titre: "Pilotage vérifié d'un moteur 3D",
    resume:
      "Un plugin qui permet à une IA de construire des niveaux dans Unreal Engine, et qui vérifie tout avant d'enregistrer : collisions, éléments manquants, comportement en jeu.",
    preuve: "Un agent qui joue le niveau tout seul a trouvé un vrai bug : les ennemis ne poursuivaient plus le joueur",
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
    preuve: "4 vrais bugs trouvés, dont une fissure de 15 µm invisible à l'écran",
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
