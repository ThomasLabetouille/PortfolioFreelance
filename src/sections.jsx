import { useEffect, useRef } from "react";
import { site, offres, renfort, lienRdv } from "./config.js";
import { services, projets, missions, bugs } from "./data/projets.js";

export function Services() {
  return (
    <section className="section" id="services">
      <div className="conteneur">
        <p className="surtitre">Ce que je fais</p>
        <h2>Des logiciels qui font ce qu'ils annoncent</h2>
        <div className="grille-3">
          {services.map((s, i) => (
            <article className="carte service" key={s.id}>
              <span className="service-n" aria-hidden="true">0{i + 1}</span>
              <h3>{s.titre}</h3>
              <p>{s.texte}</p>
              <a className="service-lien" href={s.ancre}>
                Exemple : {s.exemple} →
              </a>
            </article>
          ))}
        </div>
        <p className="encart">
          <strong>L'IA m'aide, elle ne décide pas.</strong> Je m'en sers pour lire vite un code
          que je ne connais pas, résumer des journaux d'erreurs et proposer des pistes. Chaque
          piste est vérifiée par un test avant d'être livrée : une correction qu'on ne peut pas
          prouver n'en est pas une.
        </p>
      </div>
    </section>
  );
}

export function Bugs() {
  return (
    <section className="section" id="bugs">
      <div className="conteneur">
        <p className="surtitre">Journal des bugs</p>
        <h2>Des bugs réels, trouvés par des tests</h2>
        <p className="intro">
          Ils viennent de mes projets. Aucun ne faisait planter le logiciel : tous passaient
          inaperçus, et c'est un utilisateur qui les aurait découverts. Pour chacun, comment un
          test l'a trouvé et ce qui l'empêche de revenir.
        </p>
        <ol className="journal">
          {bugs.map((b) => (
            <li className="bug" key={b.symptome}>
              <div className="bug-tete">
                <p className="projet-domaine">{b.projet}</p>
                <h3>{b.symptome}</h3>
                <p>{b.detail}</p>
              </div>
              <dl className="bug-suite">
                <div>
                  <dt>Trouvé par</dt>
                  <dd>{b.trouve}</dd>
                </div>
                <div>
                  <dt>Corrigé</dt>
                  <dd>{b.corrige}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ol>
        <p className="encart">
          <strong>Ce qui n'est pas encore corrigé est écrit aussi.</strong> Dans Bordereau, un
          post-scriptum sans séparateur qui contient un prix est encore lu comme un prix. Le
          test existe et il est marqué « échec attendu » : le jour où quelqu'un corrige ce
          cas, il le saura.
        </p>
      </div>
    </section>
  );
}

export function Projets() {
  return (
    <section className="section section-teinte" id="projets">
      <div className="conteneur">
        <p className="surtitre">Projets</p>
        <h2>Ce que j'ai construit, et ce que les tests y ont trouvé</h2>
        <p className="intro">
          Des projets personnels où les tests comptent autant que le code : chacun a ses
          vérifications automatiques, et la plupart y ont trouvé de vrais bugs. Le code de la
          plupart est public.
        </p>
        <div className="projets">
          {projets.map((p) => (
            <article className="projet" id={`projet-${p.id}`} key={p.id}>
              <img src={p.image} alt="" loading="lazy" width="960" height="540" />
              <div className="projet-corps">
                <p className="projet-domaine">{p.domaine}</p>
                <h3>{p.titre}</h3>
                <p>{p.resume}</p>
                <p className="projet-preuve">{p.preuve}</p>
                <ul className="projet-tech" aria-label="Technologies">
                  {p.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <p className="projet-liens">
                  {p.liens.map((l) => (
                    <a key={l.href} href={l.href}
                       {...(l.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}>
                      {l.libelle}
                    </a>
                  ))}
                </p>
              </div>
            </article>
          ))}
        </div>
        <p className="petit centre">
          Tous mes projets, jeux vidéo compris, sont sur{" "}
          <a href={site.portfolioTechnique}>mon portfolio technique</a>.
        </p>
      </div>
    </section>
  );
}

export function Missions() {
  return (
    <section className="section" id="missions">
      <div className="conteneur">
        <p className="surtitre">Expérience</p>
        <h2>Missions</h2>
        <div className="missions">
          {missions.map((m) => (
            <article className="mission" key={m.client}>
              <img src={m.image} alt="" loading="lazy" width="960" height="540" />
              <div>
                <p className="projet-domaine">{m.periode} · {m.cadre}</p>
                <h3>{m.client}</h3>
                <p className="mission-role">{m.role}</p>
                <p>{m.texte}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Methode() {
  const etapes = [
    {
      n: "1",
      titre: "Reproduire",
      texte:
        "Avant de toucher au code, je fais apparaître le problème à coup sûr, sur vos vrais cas. Un bug qu'on ne sait pas reproduire, on ne peut pas prouver qu'on l'a corrigé.",
    },
    {
      n: "2",
      titre: "Trouver la cause",
      texte:
        "L'IA m'aide à parcourir le code, les journaux et l'historique, et à proposer des pistes. Je vérifie chacune : je corrige la cause, pas le symptôme.",
    },
    {
      n: "3",
      titre: "Verrouiller",
      texte:
        "Le cas devient un test, rejoué automatiquement à chaque modification. Et je vérifie que les tests servent : j'y glisse exprès des erreurs, ils doivent toutes les attraper.",
    },
  ];
  return (
    <section className="section" id="methode">
      <div className="conteneur">
        <p className="surtitre">La méthode</p>
        <h2>Un bug corrigé sans test finit par revenir</h2>
        <p className="intro">
          Le fil commun de tous mes projets, du simulateur de vol à l'outil IA : un logiciel
          qui ne plante pas peut quand même se tromper en silence. Mon travail est de rendre ses
          erreurs visibles, de les corriger, puis de vérifier en continu qu'elles ne reviennent
          pas.
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
        <div className="limites limites-clair">
          <h3>Ce que mes chiffres ne disent pas</h3>
          <p>
            Ils viennent de projets personnels, mesurés sur des jeux de test que j'ai écrits.
            Ils montrent une façon de travailler, pas une garantie sur votre cas : chez vous,
            on mesure à nouveau sur votre code et vos données. C'est le but de l'audit. Et
            chaque projet liste dans sa documentation ce qui ne marche pas encore.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Comparaison() {
  const colonnes = ["Demander à ChatGPT", "Corriger sans test", "Correction vérifiée"];
  const lignes = [
    [
      "La cause est-elle trouvée ?",
      "Une cause plausible, pas forcément la bonne",
      "Souvent le symptôme seulement",
      "Le bug est reproduit, la cause confirmée",
    ],
    [
      "Preuve que c'est corrigé ?",
      "Non : le code proposé n'a pas tourné sur votre cas",
      "« Ça a l'air de marcher »",
      "Un test qui échouait, et qui passe",
    ],
    [
      "Le bug peut-il revenir ?",
      "Oui, sans que personne ne le voie",
      "Oui, à la prochaine modification",
      "Le test le signale aussitôt",
    ],
    [
      "Coût",
      "Presque nul, mais c'est vous qui vérifiez",
      "Rapide sur le moment, cher quand il revient",
      "Plus long au départ, rentabilisé dès le premier retour évité",
    ],
  ];
  return (
    <section className="section section-teinte" id="comparaison">
      <div className="conteneur">
        <p className="surtitre">Comparer</p>
        <h2>Trois façons de corriger un bug</h2>
        <div className="comparaison-defile">
          <table className="comparaison">
            <thead>
              <tr>
                <td />
                {colonnes.map((c, i) => (
                  <th scope="col" key={c} className={i === 2 ? "comparaison-mise" : undefined}>
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {lignes.map(([q, ...cases]) => (
                <tr key={q}>
                  <th scope="row">{q}</th>
                  {cases.map((c, i) => (
                    <td key={i} data-label={colonnes[i]} className={i === 2 ? "comparaison-mise" : undefined}>
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="petit">
          ChatGPT reste un très bon outil, je m'en sers aussi. La différence n'est pas l'IA,
          c'est la vérification.
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
        <h2>Commencer par un audit, puis corriger</h2>
        <div className="grille-3 offres">
          {offres.map((o) => (
            <article className={o.recommande ? "offre offre-mise" : "offre"} key={o.id}>
              {o.recommande && <p className="ruban">Après l'audit</p>}
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
          <strong>Renfort.</strong> {renfort}
        </p>
      </div>
    </section>
  );
}

export function PasLeBonChoix() {
  const cas = [
    [
      "Vous voulez remplacer une équipe par l'IA.",
      "Ce n'est pas ce que je fais. Je rends fiables les outils dont vos équipes se servent, je ne les remplace pas.",
    ],
    [
      "Il vous faut une astreinte 24 h/24.",
      "Je travaille seul : je ne peux pas promettre d'intervenir la nuit ou le week-end. Une ESN avec une équipe d'astreinte sera plus sûre.",
    ],
    [
      "Un grand site ou une application à créer de zéro.",
      "Avec designer, chef de projet et plusieurs développeurs, une agence est mieux armée. Je peux intervenir ensuite, sur les tests.",
    ],
    [
      "Le problème ne peut pas être reproduit.",
      "Sans accès aux cas réels, même anonymisés, je ne peux pas prouver qu'un bug est corrigé. Et je ne vends pas de correction sans preuve.",
    ],
  ];
  return (
    <section className="section" id="pas-le-bon-choix">
      <div className="conteneur">
        <p className="surtitre">En toute franchise</p>
        <h2>Quand je ne suis pas le bon choix</h2>
        <ul className="refus">
          {cas.map(([titre, texte]) => (
            <li key={titre}>
              <h3>{titre}</h3>
              <p>{texte}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Questions() {
  const faq = [
    [
      "Vous allez remplacer mon équipe par l'IA ?",
      "Non. Je corrige des bugs et je mets en place des tests : vos équipes gardent leur travail, avec des outils qui se trompent moins. Quand un outil IA est en jeu, il propose et une personne valide.",
    ],
    [
      "Comment l'IA vous aide-t-elle à corriger ?",
      "Elle me fait gagner du temps pour lire un code que je ne connais pas, résumer des journaux d'erreurs, proposer des hypothèses et écrire des tests. Elle se trompe aussi, c'est pourquoi rien n'est livré sans un test qui tourne et qui le prouve.",
    ],
    [
      "Mon code n'a aucun test. C'est grave ?",
      "C'est très courant. On ne teste pas tout d'un coup : on commence par ce qui casse le plus souvent, ou par ce qui coûte le plus cher quand ça casse, et chaque bug corrigé ajoute son test.",
    ],
    [
      "Pouvez-vous garantir zéro bug ?",
      "Non, personne ne le peut. Je peux garantir que chaque bug corrigé a son test, que les tests sont rejoués à chaque modification, et vous montrer, mesures à l'appui, ce qu'ils attrapent vraiment.",
    ],
    [
      "Vous êtes spécialisé dans quel secteur ?",
      "Pas encore dans un seul. Mes projets et missions touchent le jeu vidéo, la simulation aéronautique, le drone et l'IA appliquée aux documents. Ce qui ne change pas d'un secteur à l'autre : reproduire le problème avant d'écrire du code, et prouver que la correction tient.",
    ],
    [
      "Mon code ou mes données partent-ils chez OpenAI ou Google ?",
      "Pas forcément. Je peux travailler avec un modèle installé sur une machine chez vous, sans connexion à un service en ligne : c'est ainsi que mes démonstrations ont été mesurées. On choisit ensemble selon vos contraintes, et je signe un accord de confidentialité si vous le souhaitez.",
    ],
    [
      "En combien de temps voit-on un résultat ?",
      "L'audit prend deux jours de travail, et vous avez le rapport dans les deux semaines. Une mission de correction dure deux à six semaines selon le nombre de problèmes, avec une liste fixée au départ.",
    ],
    [
      "Qui maintient les tests après la mission ?",
      "Vous avez le choix : le code, les tests et la documentation vous sont remis, votre équipe peut les reprendre. Ou je m'en occupe avec l'offre de suivi, sans engagement de durée.",
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
          <img className="portrait" src={site.photo} alt="" width="180" height="180" />
        ) : (
          <div className="portrait" aria-hidden="true">TL</div>
        )}
        <div>
          <p className="surtitre">Qui je suis</p>
          <h2>Thomas Labetouille</h2>
          <p>
            Je suis développeur freelance à Toulouse. J'ai commencé par un an de mission
            freelance sur un jeu vidéo sous Unreal Engine, puis passé quatorze mois sur des
            simulateurs aéronautiques pour la défense chez CS Group, un milieu où un logiciel
            qui « a l'air de marcher » ne suffit pas.
          </p>
          <p>
            Depuis, je me concentre sur ce qui rend un logiciel fiable : trouver les bugs, les
            corriger, et écrire les tests qui les empêchent de revenir. L'IA m'aide à aller plus
            vite ; les tests vérifient qu'elle ne m'a pas induit en erreur. Je ne suis pas encore
            spécialisé dans un secteur : je commence toujours par écouter les gens qui utilisent
            l'outil.
          </p>
          {site.temoignage && (
            <blockquote className="temoignage">
              <p>« {site.temoignage.texte} »</p>
              <footer>{site.temoignage.auteur}</footer>
            </blockquote>
          )}
          <p className="liens-tech">
            Pour votre service informatique : <a href={site.portfolioTechnique}>mon portfolio
            technique</a> et <a href={site.github}>mon code sur GitHub</a>.
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
        <h2>Parlons de votre problème</h2>
        <p className="intro">
          Un échange de 15 minutes, sans engagement. Vous me décrivez le bug qui revient, le
          problème que personne n'arrive à expliquer ou l'outil dont vous n'êtes pas sûr, et je
          vous dis si je peux aider et ce que ça coûterait.
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
          <strong>Éditeur :</strong> {site.nom}, {site.statut}. SIRET : {site.siret}.
          Adresse : {site.adresse}. Contact : {site.email}. Directeur de la publication :{" "}
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
