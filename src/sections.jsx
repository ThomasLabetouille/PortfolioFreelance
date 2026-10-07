import { useEffect, useRef } from "react";
import { site, offres, lienRdv } from "./config.js";

export function Problemes() {
  const cas = [
    {
      titre: "Au comptoir et au téléphone",
      texte:
        "« On est quatre, deux enfants, Crète ou Sicile, 3 500 € maximum, départ Toulouse. » L'agent traduit ça en une dizaine de filtres, recalcule le prix pour cette famille, et recommence dès que le client change d'avis.",
    },
    {
      titre: "Au back-office",
      texte:
        "Les confirmations des hôteliers et des réceptifs arrivent par mail : en prose, en tableau, avec une remise ajoutée en cours de route. Quelqu'un les recopie, ligne par ligne, dans votre logiciel.",
    },
    {
      titre: "Avec l'IA grand public",
      texte:
        "ChatGPT comprend très bien la demande. Mais il invente aussi : un prix arrondi, l'hôtel voisin, une piscine chauffée. Au comptoir, une promesse fausse se paie deux fois : le litige, puis le client.",
    },
  ];
  return (
    <section className="section" id="probleme">
      <div className="conteneur">
        <p className="surtitre">Le constat</p>
        <h2>Là où vos équipes perdent du temps</h2>
        <div className="grille-3">
          {cas.map((c) => (
            <article className="carte" key={c.titre}>
              <h3>{c.titre}</h3>
              <p>{c.texte}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Chiffres() {
  const stats = [
    ["20/20", "demandes clients comprises, écrites comme on parle au téléphone"],
    ["8/8", "demandes sans séjour possible : l'outil l'a dit, au lieu de proposer autre chose"],
    ["263/263", "valeurs lues dans les courriers et rattachées à la bonne réservation"],
    ["33/33", "informations absentes laissées vides, jamais complétées au hasard"],
  ];
  return (
    <section className="section section-sombre" id="chiffres">
      <div className="conteneur">
        <p className="surtitre">Résultats</p>
        <h2>Mesuré, pas promis</h2>
        <div className="stats">
          {stats.map(([n, t]) => (
            <div className="stat" key={t}>
              <p className="stat-n">{n}</p>
              <p className="stat-t">{t}</p>
            </div>
          ))}
        </div>
        <p className="controle">
          <strong>Et chaque résultat est relu par un contrôle automatique.</strong> Pour
          savoir ce qu'il vaut, j'y ai glissé exprès 281 erreurs plausibles : un prix
          inventé, une date décalée d'un jour, l'hôtel voisin du même groupe, le prix de
          la réservation d'à côté. Il les a toutes repérées, sans fausse alerte sur les
          résultats justes.
        </p>
        <div className="limites">
          <h3>Ce qui ne marche pas encore</h3>
          <p>
            Un post-scriptum publicitaire glissé sans séparateur en bas d'un mail, du type
            « PS : promo jusqu'au 30/06, dès 499 € », peut être pris pour une
            information de la réservation quand le mail n'en contient qu'une. Je le sais
            parce que je le teste, et c'est noté comme limite connue.
          </p>
          <p>
            Les deux demandes très vagues que l'outil refusait à tort (« quelque chose de
            calme au bord de la mer ») sont corrigées : les tests ont trouvé la cause, et
            la dernière mesure avec le modèle le confirme.
          </p>
          <p className="petit">
            Mesures faites sur des jeux de test que j'ai écrits, avec un modèle qui tourne
            sur un ordinateur de bureau, sans service en ligne. Sur vos documents, on mesure
            à nouveau : c'est le but du diagnostic.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Methode() {
  const etapes = [
    {
      n: "1",
      titre: "Comprendre",
      texte:
        "L'IA lit la phrase du client ou le mail de l'hôtelier et le range en cases : voyageurs, dates, budget, hôtel, prix. C'est ce qu'elle fait bien.",
    },
    {
      n: "2",
      titre: "Vérifier",
      texte:
        "Tout ce qui se vérifie est tranché par des règles, sur votre catalogue et votre liste d'hôtels : un budget, une capacité de chambre, l'âge d'accueil d'un club enfants. Aucune IA ne décide si 3 293 € tient dans 3 000 €.",
    },
    {
      n: "3",
      titre: "Signaler",
      texte:
        "Ce qui est incertain est marqué à relire : prix absent, correction en cours de mail, hôtel ambigu. Votre équipe valide. L'outil ne fait rien en douce.",
    },
  ];
  return (
    <section className="section" id="methode">
      <div className="conteneur">
        <p className="surtitre">La méthode</p>
        <h2>L'IA comprend, les règles décident</h2>
        <p className="intro">
          Un assistant branché tel quel sur un catalogue comprend bien la demande, et
          invente aussi. Je sépare donc ce que fait le modèle de ce que fait le code.
        </p>
        <ol className="etapes">
          {etapes.map((e) => (
            <li key={e.n}>
              <span className="etape-n" aria-hidden="true">{e.n}</span>
              <h3>{e.titre}</h3>
              <p>{e.texte}</p>
            </li>
          ))}
        </ol>
        <p className="encart">
          <strong>Pas besoin de changer de logiciel.</strong> L'outil part de ce que vous
          avez déjà (exports de catalogue, mails reçus) et produit un tableau que votre
          équipe valide avant de l'importer.
        </p>
      </div>
    </section>
  );
}

export function Offres() {
  return (
    <section className="section section-teinte" id="offres">
      <div className="conteneur">
        <p className="surtitre">Offres</p>
        <h2>Commencer petit, mesurer, puis décider</h2>
        <div className="grille-3 offres">
          {offres.map((o) => (
            <article className={o.recommande ? "offre offre-mise" : "offre"} key={o.id}>
              {o.recommande && <p className="ruban">Après le diagnostic</p>}
              <h3>{o.nom}</h3>
              <p className="offre-duree">{o.duree}</p>
              <p className="offre-prix">{o.prix}</p>
              <p className="offre-pitch">{o.pitch}</p>
              <ul>
                {o.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <a className={o.recommande ? "bouton" : "bouton bouton-second"} href={lienRdv(`${o.nom} : premier échange`)}>
                En parler
              </a>
            </article>
          ))}
        </div>
        <p className="petit centre">
          Tarifs indicatifs, {site.mentionTva}. Devis gratuit après un premier échange. Vous
          êtes propriétaire du code développé pour vous.
        </p>
        {site.offreLancement && <p className="lancement">{site.offreLancement}</p>}
        <p className="encart">
          <strong>Pas une agence de voyages ?</strong> La méthode marche partout où quelqu'un
          ressaisit des documents : devis, bons de commande, factures fournisseurs, demandes
          clients.
        </p>
      </div>
    </section>
  );
}

export function Questions() {
  const faq = [
    [
      "Mes données clients partent-elles chez OpenAI ou Google ?",
      "Pas forcément. Mes outils peuvent tourner avec un modèle installé sur une machine chez vous, sans connexion à un service en ligne. C'est ainsi que les démos ci-dessus ont été mesurées. On choisit ensemble selon vos contraintes, et je signe un accord de confidentialité si vous le souhaitez.",
    ],
    [
      "Et si l'outil se trompe ?",
      "Il se trompera parfois. Le travail consiste à ce qu'il se trompe dans le bon sens : laisser un champ vide plutôt que l'inventer, signaler un doute plutôt que trancher. Chaque erreur est mesurée, et votre équipe garde la validation finale.",
    ],
    [
      "Faut-il changer de logiciel de réservation ?",
      "Non. L'outil lit ce que vous recevez déjà et prépare des lignes au format que vous importez aujourd'hui. Le branchement direct sur votre logiciel se discute ensuite, s'il en vaut la peine.",
    ],
    [
      "En combien de temps voit-on un résultat ?",
      "Le diagnostic prend deux jours de travail, et vous avez le rapport dans les deux semaines. Un pilote dure quatre à six semaines, avec des critères de réussite fixés au départ.",
    ],
    [
      "Vous n'avez jamais travaillé en agence ?",
      "Non. C'est pour ça que je commence par passer du temps avec vos équipes et par mesurer sur vos vrais documents. Ce que j'apporte, c'est de savoir comment une IA se trompe, et comment l'en empêcher. Dans votre métier, c'est ce qui coûte cher.",
    ],
    [
      "Qui maintient l'outil après le projet ?",
      "Vous avez le choix : le code et la documentation vous sont remis, votre informatique peut le reprendre. Ou je m'en occupe avec l'offre de suivi, sans engagement de durée.",
    ],
  ];
  return (
    <section className="section" id="questions">
      <div className="conteneur conteneur-etroit">
        <p className="surtitre">Questions</p>
        <h2>Les questions à se poser avant de commencer</h2>
        <div className="faq">
          {faq.map(([q, r]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function APropos() {
  return (
    <section className="section section-teinte" id="apropos">
      <div className="conteneur apropos">
        {site.photo ? (
          <img className="portrait" src={site.photo} alt={`Portrait de ${site.nom}`} width="180" height="180" />
        ) : (
          <div className="portrait" aria-hidden="true">TL</div>
        )}
        <div>
          <p className="surtitre">Qui je suis</p>
          <h2>Thomas Labetouille</h2>
          <p>
            Je suis développeur freelance à Toulouse. J'ai passé quatorze mois sur des
            simulateurs aéronautiques pour la défense chez CS Group, un milieu où un
            logiciel qui « a l'air de marcher » ne suffit pas. J'ai ensuite fait un an de
            mission freelance sur un jeu vidéo.
          </p>
          <p>
            Depuis, je construis des outils avec l'IA, et surtout ce qui vérifie ce qu'elle
            produit. Je ne viens pas du tourisme : je commence donc toujours par écouter les
            gens qui font le métier.
          </p>
          {site.temoignage && (
            <blockquote className="temoignage">
              <p>« {site.temoignage.texte} »</p>
              <footer>{site.temoignage.auteur}</footer>
            </blockquote>
          )}
          <p className="liens-tech">
            Pour votre service informatique :{" "}
            <a href={site.ficheTechniqueComptoir}>la fiche technique des deux outils</a>,{" "}
            <a href={site.portfolioTechnique}>mon portfolio technique</a> et{" "}
            <a href={site.github}>mon code sur GitHub</a>.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="conteneur conteneur-etroit centre">
        <p className="surtitre">Contact</p>
        <h2>Parlons de votre cas</h2>
        <p className="intro">
          Un échange de 15 minutes, sans engagement. Vous me décrivez la tâche qui prend le
          plus de temps à vos équipes, je vous dis si un outil peut aider et ce que ça
          coûterait.
        </p>
        <div className="actions actions-centre">
          <a className="bouton" href={lienRdv()}>
            {site.rdvUrl ? "Choisir un créneau" : "M'écrire"}
          </a>
          <a className="bouton bouton-second" href={site.linkedin}>
            LinkedIn
          </a>
        </div>
        <p className="petit">
          <a href={`mailto:${site.email}`}>{site.email}</a> · {site.delaiReponse} ·{" "}
          {site.ville} et à distance
        </p>
      </div>
    </section>
  );
}

export function MentionsLegales() {
  const ref = useRef(null);
  useEffect(() => {
    const ouvrir = () => {
      if (window.location.hash === "#mentions" && ref.current) ref.current.open = true;
    };
    ouvrir();
    window.addEventListener("hashchange", ouvrir);
    return () => window.removeEventListener("hashchange", ouvrir);
  }, []);
  return (
    <details className="mentions conteneur" id="mentions" ref={ref}>
      <summary>Mentions légales</summary>
      <div>
        <p>
          <strong>Éditeur :</strong> {site.nom}, {site.statut}. SIRET : {site.siret}.
          Adresse : {site.adresse}. Contact : {site.email}. Directeur de la publication :{" "}
          {site.nom}.
        </p>
        <p>
          <strong>Hébergement :</strong> Vercel Inc., 440 N Barranca Ave #4133, Covina, CA
          91723, États-Unis.
        </p>
        <p>
          <strong>Données personnelles :</strong> ce site ne dépose aucun cookie, ne
          contient aucun formulaire et ne charge aucune ressource tierce. Si vous m'écrivez,
          votre message sert uniquement à vous répondre.
        </p>
        <p>
          <strong>Démonstrations :</strong> le catalogue de séjours, les courriers, les
          clients et les établissements présentés sont entièrement fictifs.
        </p>
      </div>
    </details>
  );
}
