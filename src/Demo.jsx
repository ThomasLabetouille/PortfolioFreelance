import { useState } from "react";
import { demandes } from "./data/comptoir.js";
import { courriers } from "./data/bordereau.js";

const nombre = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, "\u00a0");
const euros = (n) => nombre(n) + "\u00a0€";
const dateFr = (iso) => (iso ? iso.split("-").reverse().join("/") : "—");

export default function Demo() {
  const [onglet, setOnglet] = useState("comptoir");
  return (
    <section className="section demo" id="demo">
      <div className="conteneur">
        <p className="surtitre">Démo interactive</p>
        <h2>Étude de cas : l'IA qui lit des demandes et des mails</h2>
        <p className="intro">
          Projet personnel, construit sur l'exemple d'une agence de voyages : un métier où
          une erreur se paie tout de suite, ce qui en fait un bon terrain d'essai. Les données
          sont fictives, la méthode vaut pour tout métier qui traite des documents. Choisissez
          une demande ou un mail : vous voyez exactement ce que l'outil en tire.
        </p>

        <div className="onglets" role="tablist" aria-label="Choisir l'outil">
          <button
            role="tab"
            id="tab-comptoir"
            aria-controls="panneau-comptoir"
            aria-selected={onglet === "comptoir"}
            onClick={() => setOnglet("comptoir")}
          >
            <strong>Recherche de séjours</strong>
            <span>La demande du client, telle qu'il la dit</span>
          </button>
          <button
            role="tab"
            id="tab-bordereau"
            aria-controls="panneau-bordereau"
            aria-selected={onglet === "bordereau"}
            onClick={() => setOnglet("bordereau")}
          >
            <strong>Lecture des confirmations</strong>
            <span>Le mail de l'hôtelier, transformé en lignes</span>
          </button>
        </div>

        {onglet === "comptoir" ? <Comptoir /> : <Bordereau />}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Comptoir */

function Comptoir() {
  const [id, setId] = useState(demandes[0].id);
  const d = demandes.find((x) => x.id === id);
  const precedente = d.suiteDe && demandes.find((x) => x.id === d.suiteDe);

  return (
    <div className="panneau" role="tabpanel" id="panneau-comptoir" aria-labelledby="tab-comptoir">
      <div className="choix" aria-label="Demandes clients">
        <p className="choix-titre">Ce que dit le client</p>
        <div className="puces">
          {demandes.map((x) => (
            <button
              key={x.id}
              className={x.suiteDe ? "puce puce-suite" : "puce"}
              aria-pressed={x.id === id}
              onClick={() => setId(x.id)}
            >
              {x.label}
            </button>
          ))}
        </div>
      </div>

      <div className="scene" aria-live="polite">
        <div className="bulle">
          {precedente && (
            <p className="bulle-avant">Juste avant : « {precedente.texte} »</p>
          )}
          <p>« {d.texte} »</p>
        </div>

        <div className="compris">
          <p className="etiquette">Ce que l'outil a compris</p>
          <ul className="tags">
            {d.compris.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          {precedente && (
            <p className="note">
              Le client n'a pas tout répété : le reste de la demande est repris de la
              phrase précédente.
            </p>
          )}
          {d.nonPrecise.length > 0 && (
            <>
              <p className="etiquette etiquette-douce">Pas précisé : à demander au client</p>
              <ul className="tags tags-doux">
                {d.nonPrecise.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </>
          )}
        </div>

        {d.propositions.length > 0 ? (
          <div className="resultats">
            <p className="etiquette">
              {d.propositions.length === 1
                ? "1 séjour correspond vraiment"
                : `${d.propositions.length} séjours correspondent vraiment`}
            </p>
            <div className="cartes">
              {d.propositions.map((p) => (
                <article className="carte-sejour" key={p.nom}>
                  <header>
                    <h3>{p.nom}</h3>
                    <p>{p.lieu}</p>
                  </header>
                  <p className="meta">
                    {p.gamme} · {p.formule} · {p.nuits} nuits
                    {p.club ? ` · ${p.club}` : ""}
                  </p>
                  <p className="prix">
                    {euros(p.prix)}
                    <span>
                      au total pour {d.voyageurs} voyageur{d.voyageurs > 1 ? "s" : ""}
                    </span>
                  </p>
                  <p className="plus">{p.fort}</p>
                  <p className="moins">
                    <strong>À annoncer :</strong> {p.faible}
                  </p>
                </article>
              ))}
            </div>
          </div>
        ) : (
          <div className="aucun">
            <p className="aucun-titre">Aucun séjour ne correspond.</p>
            <p>
              Plutôt que de proposer quelque chose d'approchant, l'outil dit ce qu'il
              faudrait assouplir, dans l'ordre où un agent négocie :
            </p>
            <ol className="pistes">
              {d.pistes.map((p) => (
                <li key={p.critere}>
                  <strong>{p.critere}</strong>
                  {" → "}
                  {p.options} séjour{p.options > 1 ? "s" : ""} possible{p.options > 1 ? "s" : ""}
                  {p.prixMin ? ` (le moins cher à ${euros(p.prixMin)})` : ""}
                </li>
              ))}
            </ol>
            <p className="note">Ici, l'IA n'est même pas appelée : c'est une règle qui répond.</p>
          </div>
        )}
      </div>

      <p className="source">
        Phrases du jeu de test. Ce que l'outil a compris est enregistré lors d'une mesure
        réelle avec le modèle ; les séjours et les prix sont calculés par le moteur sur un
        catalogue fictif de 30 séjours.
      </p>
    </div>
  );
}

/* --------------------------------------------------------------- Bordereau */

function decouper(texte, groupes, ecartes) {
  const zones = [];
  groupes.forEach((groupe, g) => {
    const debut = Math.max(0, texte.indexOf(groupe[0]));
    groupe.forEach((s) => {
      let i = texte.indexOf(s, debut);
      if (i < 0) i = texte.indexOf(s);
      if (i >= 0) zones.push({ i, f: i + s.length, cls: `hl hl-${g % 3}` });
    });
  });
  ecartes.forEach((s) => {
    const i = texte.indexOf(s);
    if (i >= 0) zones.push({ i, f: i + s.length, cls: "hl hl-ecarte" });
  });
  zones.sort((a, b) => a.i - b.i);
  const morceaux = [];
  let pos = 0;
  for (const z of zones) {
    if (z.i < pos) continue;
    if (z.i > pos) morceaux.push(texte.slice(pos, z.i));
    morceaux.push(
      <mark key={z.i} className={z.cls}>
        {texte.slice(z.i, z.f)}
      </mark>
    );
    pos = z.f;
  }
  morceaux.push(texte.slice(pos));
  return morceaux;
}

function Bordereau() {
  const [id, setId] = useState(courriers[0].id);
  const c = courriers.find((x) => x.id === id);

  return (
    <div className="panneau" role="tabpanel" id="panneau-bordereau" aria-labelledby="tab-bordereau">
      <div className="choix" aria-label="Courriers">
        <p className="choix-titre">Courrier reçu</p>
        <div className="puces">
          {courriers.map((x) => (
            <button key={x.id} className="puce" aria-pressed={x.id === id} onClick={() => setId(x.id)}>
              {x.titre}
            </button>
          ))}
        </div>
      </div>

      <p className="piege">
        <strong>Le piège :</strong> {c.piege}
      </p>

      <div className={c.tableau ? "bordereau bordereau-large" : "bordereau"} aria-live="polite">
        <div className="courrier">
          <p className="etiquette">Le mail, tel qu'il arrive</p>
          <pre className={c.tableau ? "mail mail-tableau" : "mail"}>
            {decouper(c.texte, c.surlignage, c.ecarte)}
          </pre>
          {c.tableau && <p className="legende mobile-seul">Faites glisser le tableau pour le voir en entier.</p>}
          <p className="legende">
            Même couleur dans le mail et dans le résultat : chaque valeur garde la trace du
            passage du mail d'où elle vient.
          </p>
          {c.ecarteRaison && (
            <p className="legende">
              <mark className="hl hl-ecarte">Barré</mark> : {c.ecarteRaison}
            </p>
          )}
        </div>

        <div className="extrait">
          <p className="etiquette">
            Ce que l'outil en sort : {c.lignes.length} réservation{c.lignes.length > 1 ? "s" : ""}
          </p>
          {c.lignes.map((l, n) => (
            <article className={`ligne ligne-${n % 3}`} key={l.reference}>
              <header>
                <span className="ref">{l.reference}</span>
                <span>{l.client}</span>
              </header>
              <dl>
                <dt>Hôtel</dt>
                <dd>{l.hotel}</dd>
                <dt>Séjour</dt>
                <dd>
                  du {dateFr(l.arrivee)} au {dateFr(l.depart)}
                </dd>
                <dt>Chambres</dt>
                <dd>
                  {l.chambres} · {l.personnes} pers.
                </dd>
                <dt>Prix</dt>
                <dd className={l.prix == null ? "vide" : ""}>
                  {l.prix == null ? "laissé vide" : `${nombre(l.prix)}\u00a0${l.devise}`}
                </dd>
                <dt>Contact</dt>
                <dd>{l.contact}</dd>
              </dl>
            </article>
          ))}
          {c.alertes.length > 0 ? (
            <ul className="alertes">
              {c.alertes.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          ) : (
            <p className="ok">Rien à signaler : prêt à valider.</p>
          )}
          <p className="note">
            L'hôtel est choisi dans votre liste d'établissements : l'outil ne peut pas en
            écrire un qui n'existe pas chez vous.
          </p>
        </div>
      </div>

      <p className="source">
        Courriers inventés pour être piégeux. Ces quatre-là sont affichés tels que l'outil
        les a rendus lors de la mesure, avec un modèle qui tourne sur un ordinateur de bureau,
        sans service en ligne : chaque valeur trouvée, aucune mal rattachée, aucune inventée.
      </p>
    </div>
  );
}
