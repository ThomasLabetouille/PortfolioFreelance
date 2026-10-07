"""Regenere src/data/comptoir.js a partir du depot Comptoir.

    python outils/donnees_comptoir.py ..\\..\\Projet_Python\\Comptoir

Rejoue le moteur sur les demandes extraites enregistrees dans resultats.json,
et verifie que le nombre de sejours retenus est celui de la mesure.
"""
import json, re, sys
from pathlib import Path
DEPOT = Path(sys.argv[1] if len(sys.argv) > 1 else '../Projet_Python/Comptoir').resolve()
SORTIE = Path(__file__).resolve().parent.parent / 'src' / 'data' / 'comptoir.js'
sys.path.insert(0, str(DEPOT))
from comptoir.catalogue import charger
from comptoir.demande import Demande
from comptoir.filtres import filtrer, ORDRE_DE_NEGOCIATION
from comptoir.classement import classer
cat=charger(DEPOT / 'data' / 'catalogue.json')
res={x['id']:x for x in json.load(open(DEPOT / 'resultats.json', encoding='utf-8'))['detail']}
ACC={'Crete':'Crète','Grece':'Grèce','Caraibes':'Caraïbes','Republique dominicaine':'République dominicaine','Cote Ouest':'Côte Ouest'}
a=lambda s: ACC.get(s,s)
AERO={'TLS':'Toulouse','NTE':'Nantes','ORY':'Paris-Orly','BOD':'Bordeaux'}
FORM={'tout_compris':'tout compris','petit_dejeuner':'petit-déjeuner','demi_pension':'demi-pension','pension_complete':'pension complète'}
MOIS=['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre']
LIB={"destination":"la destination","duree":"la durée du séjour","periode":"les dates","capacite":"le nombre de voyageurs par chambre","club_enfants":"l'exigence d'un club enfants adapté à l'âge","formule":"la formule de restauration","depart":"l'aéroport de départ","budget":"le budget"}
GAMME={'club':'Club','club_premium':'Club premium','club_evasion':'Club évasion','circuit':'Circuit','autotour':'Autotour','city':'Séjour en ville','croisiere':'Croisière'}
FIX={"Plage de sable a 150 m":"Plage de sable à 150 m","Approvisionnement irregulier au buffet":"Approvisionnement irrégulier au buffet","Ascenseur absent, trois etages":"Pas d'ascenseur, trois étages","Buffet repetitif au-dela d'une semaine":"Buffet répétitif au-delà d'une semaine","Chambres cote route sensiblement bruyantes":"Chambres côté route sensiblement bruyantes","Complexe immense et tres frequente":"Complexe immense et très fréquenté","Plage a 300 m, navette toutes les heures seulement":"Plage à 300 m, navette toutes les heures seulement","Excursions vers Taormine au depart de l'hotel":"Excursions vers Taormine au départ de l'hôtel","Quartier vivant, a pied du Trastevere":"Quartier vivant, à pied du Trastevere","Tout compris tres complet, boissons incluses":"Tout compris très complet, boissons incluses","Une des plus belles plages des Caraibes":"Une des plus belles plages des Caraïbes","choix entre Crete et Sicile":"choix entre Crète et Sicile"}
f=lambda s: FIX.get(s,s)
choix=[
 ('q02',"Famille, Crète ou Sicile","On est quatre, deux adultes et deux enfants, un de 8 ans et un de 14. Crète ou Sicile, deuxième quinzaine de juillet, tout compris, 3 500 euros maximum, départ Toulouse.",None),
 ('q03',"… même chose à 3 000 €","Même chose mais on ne peut pas mettre plus de 3 000 euros.",'q02'),
 ('q14',"Tunisie avec club enfants","Une semaine en Tunisie en janvier avec notre fils de 5 ans, en tout compris, et il nous faut vraiment un club enfants.",None),
 ('q15',"… notre fils a 2 ans","Même séjour mais notre fils a 2 ans et il nous faut un club qui le prenne.",'q14'),
 ('q12',"Fuerteventura depuis Nantes","Fuerteventura une semaine, mais impérativement au départ de Nantes.",None),
 ('q17',"Caraïbes en février","Les Caraïbes en février, neuf nuits, tout compris, à deux.",None),
 ('q18',"Week-end à Rome","Un week-end à Rome, trois nuits, avec petit-déjeuner.",None),
]
def compris(d):
    t=[]
    v=d['adultes']+len(d['enfants_ages'])
    s=f"{v} voyageur{'s' if v>1 else ''}"
    if d['enfants_ages']:
        s+=" dont enfant"+('s' if len(d['enfants_ages'])>1 else '')+" de "+" et ".join(str(x) for x in d['enfants_ages'])+" ans"
    t.append(s)
    if d['destinations']: t.append(" ou ".join(a(x) for x in d['destinations']))
    if d['duree_nuits']: t.append(f"{d['duree_nuits']} nuits")
    if d['date_debut']:
        y,m,j=d['date_debut'].split('-'); m=int(m); j=int(j)
        t.append(f"à partir du {j} {MOIS[m-1]}" if j!=1 else f"en {MOIS[m-1]}")
    if d['formules']: t.append(" ou ".join(FORM[f] for f in d['formules']))
    if d['depart']: t.append("départ "+AERO.get(d['depart'],d['depart']))
    if d['club_enfants_requis']: t.append("club enfants exigé")
    if d['budget_total_max']: t.append(f"{d['budget_total_max']:,} € maximum".replace(',', ' '))
    return t
out=[]
for qid,label,texte,suite in choix:
    x=res[qid]; d=x['demande_extraite']
    de=Demande.depuis_dict(d); r=filtrer(cat,de); props=classer(r.propositions,de)
    assert len(r.propositions)==x['nombre_propositions']
    item={'id':qid,'voyageurs':d['adultes']+len(d['enfants_ages']),'label':label,'texte':texte,'suiteDe':suite,'compris':compris(d),
          'nonPrecise':[f(x) for x in d['non_precise']],
          'propositions':[{'nom':p.fiche['nom'],'lieu':a(p.fiche['region'])+', '+a(p.fiche['pays']) if p.fiche['region']!=p.fiche['pays'] else a(p.fiche['pays']),
              'gamme':GAMME[p.fiche['gamme']],'formule':FORM[p.fiche['formule']],'nuits':p.nuits,'prix':p.prix_total,
              'note':p.fiche.get('note_clients'),'fort':f(p.fiche['points_forts'][0]),'faible':f(p.fiche['points_faibles'][0]),
              'club':(f"Club enfants {p.fiche['club_enfants']['age_min']}–{p.fiche['club_enfants']['age_max']} ans" if p.fiche.get('club_enfants') else None)} for p in props],
          'pistes':[]}
    if not r:
        for c in ORDRE_DE_NEGOCIATION:
            n=r.debloquerait.get(c,0)
            if n>0:
                p={'critere':LIB[c],'options':n}
                if c=='budget' and r.prix_minimum_atteignable: p['prixMin']=r.prix_minimum_atteignable
                item['pistes'].append(p)
        item['pistes']=item['pistes'][:3]
    out.append(item)
js="// Généré à partir des résultats réels de Comptoir (resultats.json) et du moteur de filtrage.\n// Catalogue entièrement fictif. Ne pas modifier à la main.\nexport const demandes = "+json.dumps(out,ensure_ascii=False,indent=2)+";\n"
N = '\u00a0'
js = js.replace('« ', '«' + N).replace(' »', N + '»')
js = re.sub(r'(?<=\d) (?=\d{3}\b)', N, js)
js = re.sub(r'(?<=\d) €', N + '€', js)
js = re.sub(r'(?<=[A-Za-zÀ-ÿ0-9)»]) :(?= )', N + ':', js)
js = re.sub(r'(?<=\d) (?=(h|%|nuits|pers|jours|semaines|minutes|mois|ans)\b)', N, js)
SORTIE.write_text(js, encoding='utf-8')
print(f'{len(out)} demandes ecrites dans {SORTIE}')
