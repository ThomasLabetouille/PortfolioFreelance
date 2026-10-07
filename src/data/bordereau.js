// Généré depuis les courriers de test de Bordereau (entièrement inventés).
// Ces quatre courriers sont ceux où la mesure réelle (gemma4:12b en local, resultats.json)
// a rendu exactement l'attendu : tous les champs, aucun mal rattaché, aucun inventé.
export const courriers = [
  {
    "id": "c07",
    "titre": "Trois dossiers dans un tableau",
    "piege": "Trois réservations sur trois lignes, dont deux hôtels aux noms presque identiques.",
    "texte": "De : Hatem Bouzid <operations@sud-evasion.tn>\nÀ : agent de voyages <agent@bordereau-demo.fr>\nObjet : Récapitulatif des confirmations - mai\nDate : 18 mars 2027\n\nBonjour,\n\nVoici le récapitulatif des trois dossiers confirmés pour mai :\n\nFR-2027-04701 | Groupe Caron    | Hôtel Marhaba Palace   | 03/05 au 10/05 | 2 doubles   | 4 pers | 1 180 EUR\nFR-2027-04702 | Famille Diallo  | Hôtel Marhaba Beach    | 03/05 au 10/05 | 1 familiale | 4 pers |   890 EUR\nFR-2027-04703 | Groupe Petit    | Résidence Les Oliviers | 10/05 au 17/05 | 3 doubles   | 6 pers | 1 620 EUR\n\nTous les séjours sont en 2027. Merci de valider avant vendredi.\n\nHatem Bouzid\nSud Évasion",
    "surlignage": [
      [
        "FR-2027-04701",
        "Groupe Caron",
        "Hôtel Marhaba Palace",
        "03/05 au 10/05",
        "2 doubles",
        "4 pers",
        "1 180 EUR"
      ],
      [
        "FR-2027-04702",
        "Famille Diallo",
        "Hôtel Marhaba Beach",
        "03/05 au 10/05",
        "1 familiale",
        "4 pers",
        "890 EUR"
      ],
      [
        "FR-2027-04703",
        "Groupe Petit",
        "Résidence Les Oliviers",
        "10/05 au 17/05",
        "3 doubles",
        "6 pers",
        "1 620 EUR"
      ]
    ],
    "lignes": [
      {
        "reference": "FR-2027-04701",
        "hotel": "Hôtel Marhaba Palace",
        "arrivee": "2027-05-03",
        "depart": "2027-05-10",
        "chambres": "2 × double",
        "personnes": 4,
        "prix": 1180,
        "devise": "EUR",
        "client": "Groupe Caron",
        "contact": "operations@sud-evasion.tn"
      },
      {
        "reference": "FR-2027-04702",
        "hotel": "Hôtel Marhaba Beach",
        "arrivee": "2027-05-03",
        "depart": "2027-05-10",
        "chambres": "1 × familiale",
        "personnes": 4,
        "prix": 890,
        "devise": "EUR",
        "client": "Famille Diallo",
        "contact": "operations@sud-evasion.tn"
      },
      {
        "reference": "FR-2027-04703",
        "hotel": "Résidence Les Oliviers",
        "arrivee": "2027-05-10",
        "depart": "2027-05-17",
        "chambres": "3 × double",
        "personnes": 6,
        "prix": 1620,
        "devise": "EUR",
        "client": "Groupe Petit",
        "contact": "operations@sud-evasion.tn"
      }
    ],
    "alertes": [],
    "ecarte": [],
    "ecarteRaison": null,
    "tableau": true
  },
  {
    "id": "c05",
    "titre": "Deux hôtels voisins",
    "piege": "Deux groupes, deux hôtels du même nom (Resort et Village) : le piège classique où un prix passe d'une réservation à l'autre.",
    "texte": "De : Yannis Petrou <ops@cretaservices.gr>\nÀ : agent de voyages <agent@bordereau-demo.fr>\nObjet : Confirmations juin - deux groupes\nDate : 11 avril 2027\n\nBonjour,\n\nLes deux groupes de juin sont confirmés auprès de nos hôteliers.\n\nFR-2027-06010 - Groupe Vermeulen\nBlue Bay Resort, Héraklion\nDu 20/06/2027 au 27/06/2027\n3 chambres doubles, 6 personnes - 2 970 EUR\n\nFR-2027-06011 - Groupe Rossi\nBlue Bay Village, La Canée\nDu 21/06/2027 au 28/06/2027\n2 chambres triples, 6 personnes - 2 340 EUR\n\nLes transferts aéroport sont inclus dans les deux cas.\n\nCordialement,\nYannis Petrou\nCreta Services",
    "surlignage": [
      [
        "FR-2027-06010",
        "Groupe Vermeulen",
        "Blue Bay Resort",
        "20/06/2027",
        "27/06/2027",
        "3 chambres doubles",
        "6 personnes - 2 970 EUR"
      ],
      [
        "FR-2027-06011",
        "Groupe Rossi",
        "Blue Bay Village",
        "21/06/2027",
        "28/06/2027",
        "2 chambres triples",
        "6 personnes - 2 340 EUR"
      ]
    ],
    "lignes": [
      {
        "reference": "FR-2027-06010",
        "hotel": "Blue Bay Resort",
        "arrivee": "2027-06-20",
        "depart": "2027-06-27",
        "chambres": "3 × double",
        "personnes": 6,
        "prix": 2970,
        "devise": "EUR",
        "client": "Groupe Vermeulen",
        "contact": "ops@cretaservices.gr"
      },
      {
        "reference": "FR-2027-06011",
        "hotel": "Blue Bay Village",
        "arrivee": "2027-06-21",
        "depart": "2027-06-28",
        "chambres": "2 × triple",
        "personnes": 6,
        "prix": 2340,
        "devise": "EUR",
        "client": "Groupe Rossi",
        "contact": "ops@cretaservices.gr"
      }
    ],
    "alertes": [],
    "ecarte": [],
    "ecarteRaison": null,
    "tableau": false
  },
  {
    "id": "c14",
    "titre": "Remise en cours de route",
    "piege": "Le courrier cite deux prix : l'ancien et le nouveau. Seul le second doit être facturé.",
    "texte": "De : Marta Fernández <grupos@playasol.es>\nÀ : agent de voyages <agent@bordereau-demo.fr>\nObjet : FR-2027-09612 - remise accordée\nDate : 22 janvier 2027\n\nBonjour,\n\nComme convenu au téléphone, la direction a accepté la remise commerciale de 10 % sur ce dossier. Le tarif initial de 2 450 EUR passe donc à 2 205 EUR.\n\nPour rappel : CE Transports Occitanie, du 20/03/2027 au 27/03/2027, 3 chambres doubles, 6 personnes.\n\nMerci d'établir la facture sur le nouveau montant.\n\nMarta Fernández\nHôtel Playa Sol",
    "surlignage": [
      [
        "FR-2027-09612",
        "CE Transports Occitanie",
        "20/03/2027",
        "27/03/2027",
        "3 chambres doubles",
        "6 personnes",
        "2 205 EUR",
        "Hôtel Playa Sol"
      ]
    ],
    "lignes": [
      {
        "reference": "FR-2027-09612",
        "hotel": "Hôtel Playa Sol",
        "arrivee": "2027-03-20",
        "depart": "2027-03-27",
        "chambres": "3 × double",
        "personnes": 6,
        "prix": 2205,
        "devise": "EUR",
        "client": "CE Transports Occitanie",
        "contact": "grupos@playasol.es"
      }
    ],
    "alertes": [
      "Correction détectée dans le courrier : à relire"
    ],
    "ecarte": [
      "2 450 EUR"
    ],
    "ecarteRaison": "ancien tarif, écarté",
    "tableau": false
  },
  {
    "id": "c16",
    "titre": "Prix pas encore connu",
    "piege": "L'hôtelier confirme mais n'a pas encore donné son tarif. Un outil qui « complète » invente un prix ici.",
    "texte": "De : Mehdi Jaziri <contact@residence-oliviers.tn>\nÀ : agent de voyages <agent@bordereau-demo.fr>\nObjet : FR-2027-09810 - accord de principe\nDate : 30 mars 2027\n\nBonjour,\n\nNous pouvons accueillir le Groupe Bertrand du 05/07/2027 au 12/07/2027, soit 2 chambres familiales pour 7 personnes.\n\nLe tarif vous sera communiqué en début de semaine prochaine, après arbitrage de la direction sur la haute saison.\n\nMehdi Jaziri\nRésidence Les Oliviers",
    "surlignage": [
      [
        "FR-2027-09810",
        "Groupe Bertrand",
        "05/07/2027",
        "12/07/2027",
        "2 chambres familiales",
        "7 personnes",
        "Résidence Les Oliviers"
      ]
    ],
    "lignes": [
      {
        "reference": "FR-2027-09810",
        "hotel": "Résidence Les Oliviers",
        "arrivee": "2027-07-05",
        "depart": "2027-07-12",
        "chambres": "2 × familiale",
        "personnes": 7,
        "prix": null,
        "devise": null,
        "client": "Groupe Bertrand",
        "contact": "contact@residence-oliviers.tn"
      }
    ],
    "alertes": [
      "Information absente : laissée vide, à demander"
    ],
    "ecarte": [
      "Le tarif vous sera communiqué"
    ],
    "ecarteRaison": "aucun prix dans le courrier",
    "tableau": false
  }
];
