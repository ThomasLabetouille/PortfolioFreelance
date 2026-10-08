import { useEffect, useRef } from "react";
import { site, offres, renfort, lienRdv } from "./config.js";
import { services, projets, missions } from "./data/projets.js";

export function Services() {
  return (
    <section className="section" id="services">
      <div className="conteneur">
        <p className="surtitre">Ce que je fais</p>
        <h2>Trois façons de vous faire gagner du temps</h2>
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
          <strong>Pas forcément de l'IA.</strong> Quand une règle simple suffit, je l'écris :
          c'est moins cher et plus fiable. L'IA sert là où il faut comprendre du texte libre.
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
        <h2>Ce que j'ai construit</h2>
        <p className="intro">
          Des projets personnels, menés comme des missions : un besoin, un outil, et la preuve
          chiffrée qu'il fait ce qu'il annonce. Le code de la plupart est public.
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
      titre: "Comprendre",
      texte:
        "Je passe du temps avec les gens qui font le travail, sur leurs vrais documents et leurs vrais cas difficiles. C'est là que se cachent les erreurs qui coûtent cher.",
    },
    {
      n: "2",
      titre: "Construire",
      texte:
        "L'IA comprend le texte libre, des règles écrites décident tout ce qui se vérifie : un prix, une date, une capacité. Ce qui est incertain est signalé, jamais deviné.",
    },
    {
      n: "3",
      titre: "Prouver",
      texte:
        "Avant de livrer, je mesure : sur vos données, puis en glissant exprès des erreurs pour vérifier que les contrôles les attrapent. Vous recevez les chiffres avec l'outil.",
    },
  ];
  return (
    <section className="section" id="methode">
      <div className="conteneur">
        <p className="surtitre">La méthode</p>
        <h2>Un outil qui a l'air de marcher ne suffit pas</h2>
        <p className="intro">
          Le fil commun de tous mes projets, du simulateur de vol à l'assistant IA : un
          logiciel qui ne plante pas peut quand même se tromper en silence. Mon travail est
          de rendre ses erreurs visibles avant qu'elles arrivent chez vous.
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
            on mesure à nouveau sur vos données. C'est le but du diagnostic. Et chaque projet
            liste dans sa documentation ce qui ne marche pas encore.
          </p>
        </div>
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
          <strong>Renfort.</strong> {renfort}
        </p>
      </div>
    </section>
  );
}

export function Questions() {
  const faq = [
    [
      "Vous êtes spécialisé dans quel secteur ?",
      "Pas encore dans un seul. Mes projets et missions touchent le jeu vidéo, la simulation aéronautique, le drone et le voyage. Ce qui ne change pas d'un secteur à l'autre : comprendre le métier avant d'écrire du code, et prouver que l'outil fait ce qu'il dit. Je commence toujours par du temps avec les gens qui font le travail.",
    ],
    [
      "Faut-il forcément de l'IA ?",
      "Non. Si une règle simple suffit, je l'écris : c'est moins cher, plus rapide et plus fiable. L'IA est utile pour comprendre du texte libre (un mail, une demande client), pas pour décider d'un prix ou d'une date.",
    ],
    [
      "Mes données partent-elles chez OpenAI ou Google ?",
      "Pas forcément. Mes outils peuvent tourner avec un modèle installé sur une machine chez vous, sans connexion à un service en ligne : c'est ainsi que mes démonstrations ont été mesurées. On choisit ensemble selon vos contraintes, et je signe un accord de confidentialité si vous le souhaitez.",
    ],
    [
      "Et si l'outil se trompe ?",
      "Il se trompera parfois. Le travail consiste à ce qu'il se trompe dans le bon sens : laisser un champ vide plutôt que l'inventer, signaler un doute plutôt que trancher. Chaque erreur est mesurée, et votre équipe garde la validation finale.",
    ],
    [
      "Faut-il changer de logiciel ?",
      "Non. L'outil part de ce que vous avez déjà (mails, exports, fichiers, Microsoft 365) et produit un résultat que votre équipe valide avant de l'utiliser. Le branchement direct sur vos logiciels se discute ensuite, s'il en vaut la peine.",
    ],
    [
      "En combien de temps voit-on un résultat ?",
      "Le diagnostic prend deux jours de travail, et vous avez le rapport dans les deux semaines. Un projet dure quatre à six semaines, avec des critères de réussite fixés au départ.",
    ],
    [
      "Qui maintient l'outil après le projet ?",
      "Vous avez le choix : le code et la documentation vous sont remis, votre informatique peut le reprendre. Ou je m'en occupe avec l'offre de suivi, sans engagement de durée.",
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
            Depuis, je construis des outils avec l'IA et du logiciel technique, et surtout ce
            qui vérifie ce qu'ils produisent. Je ne suis pas encore spécialisé dans un secteur :
            je commence toujours par écouter les gens qui font le métier.
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
        <h2>Parlons de votre besoin</h2>
        <p className="intro">
          Un échange de 15 minutes, sans engagement. Vous me décrivez la tâche qui prend le
          plus de temps à vos équipes, ou le logiciel qui vous pose problème, et je vous dis
          si je peux aider et ce que ça coûterait.
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
