import { useState } from "react";
import { site, lienRdv } from "./config.js";
import Demo from "./Demo.jsx";
import {
  Problemes,
  Chiffres,
  Methode,
  Offres,
  Questions,
  APropos,
  Contact,
  MentionsLegales,
} from "./sections.jsx";

function Entete() {
  const [ouvert, setOuvert] = useState(false);
  const liens = [
    ["#demo", "Démo"],
    ["#methode", "Méthode"],
    ["#offres", "Offres"],
    ["#questions", "Questions"],
  ];
  return (
    <header className="entete">
      <div className="conteneur entete-in">
        <a href="#haut" className="marque">
          <span className="marque-logo" aria-hidden="true">TL</span>
          <span>
            <strong>{site.nom}</strong>
            <small>IA appliquée au voyage · {site.ville}</small>
          </span>
        </a>
        <button
          className="menu-bouton"
          aria-expanded={ouvert}
          aria-controls="nav-principale"
          onClick={() => setOuvert(!ouvert)}
        >
          {ouvert ? "Fermer" : "Menu"}
        </button>
        <nav id="nav-principale" className={ouvert ? "nav ouvert" : "nav"}>
          {liens.map(([href, txt]) => (
            <a key={href} href={href} onClick={() => setOuvert(false)}>
              {txt}
            </a>
          ))}
          <a className="bouton bouton-petit" href="#contact" onClick={() => setOuvert(false)}>
            Me contacter
          </a>
        </nav>
      </div>
    </header>
  );
}

function Apercu() {
  return (
    <aside className="apercu" aria-label="Aperçu de ce que font les outils">
      <p className="apercu-titre">Extrait de la démo</p>
      <div className="apercu-bloc">
        <p className="apercu-contexte">Le client vient de demander un séjour pour 4 personnes, Crète ou Sicile, juillet, puis ajoute :</p>
        <p className="apercu-client">« Même chose mais on ne peut pas mettre plus de 3 000 euros. »</p>
        <p className="apercu-reponse">
          <strong>Aucun séjour à ce prix.</strong> Le moins cher qui correspond est à
          3 293 €. Assouplir le budget ouvre 2 options.
        </p>
      </div>
      <div className="apercu-bloc">
        <p className="apercu-mail">Mail de l'hôtel : « Le tarif initial de 2 450 EUR passe donc à 2 205 EUR. »</p>
        <p className="apercu-ligne">
          <span>FR-2027-09612</span>
          <span>Hôtel Playa Sol</span>
          <strong>2 205 EUR</strong>
        </p>
        <p className="apercu-alerte">Correction détectée : à relire</p>
      </div>
      <a href="#demo" className="apercu-lien">Voir les autres cas →</a>
    </aside>
  );
}

function Hero() {
  return (
    <section className="hero" id="haut">
      <div className="conteneur hero-in">
        <div className="hero-texte">
        <p className="surtitre">Développeur freelance · Toulouse et à distance</p>
        <h1>
          Des assistants IA pour les agences de voyages,
          <em> qui n'inventent rien.</em>
        </h1>
        <p className="chapeau">
          Vos agents traduisent des demandes clients en filtres, vos équipes recopient
          les confirmations des hôteliers. Je construis des outils qui font ce travail à
          leur place, et qui disent « je ne sais pas » plutôt que de promettre un club
          enfants qui n'existe pas.
        </p>
        <div className="actions">
          <a className="bouton" href="#demo">Essayer la démo</a>
          <a className="bouton bouton-second" href={lienRdv()}>
            Réserver 15 minutes
          </a>
        </div>
        <ul className="garanties">
          <li>Diagnostic à prix fixe avant tout engagement</li>
          <li>Vos données peuvent rester sur vos machines</li>
          <li>Votre équipe garde la validation finale</li>
        </ul>
        </div>
        <Apercu />
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a className="evitement" href="#demo">Aller à la démo</a>
      <Entete />
      <main>
        <Hero />
        <Problemes />
        <Demo />
        <Chiffres />
        <Methode />
        <Offres />
        <Questions />
        <APropos />
        <Contact />
      </main>
      <footer className="pied">
        <div className="conteneur pied-in">
          <p>
            © {new Date().getFullYear()} {site.nom} · {site.ville}
          </p>
          <nav aria-label="Liens de bas de page">
            <a href={site.portfolioTechnique}>Portfolio technique</a>
            <a href={site.github}>GitHub</a>
            <a href={site.linkedin}>LinkedIn</a>
          </nav>
        </div>
        <MentionsLegales />
      </footer>
    </>
  );
}
