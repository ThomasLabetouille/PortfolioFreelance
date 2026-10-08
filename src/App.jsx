import { useState } from "react";
import { site, lienRdv } from "./config.js";
import Demo from "./Demo.jsx";
import {
  Services,
  Projets,
  Missions,
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
    ["#services", "Services"],
    ["#projets", "Projets"],
    ["#demo", "Démo"],
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
            <small>Développeur freelance · {site.ville}</small>
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

function Preuves() {
  const lignes = [
    ["263/263", "valeurs lues dans des mails, rattachées au bon dossier", "IA et documents"],
    ["281/281", "erreurs glissées exprès, toutes repérées", "contrôle automatique"],
    ["40 000", "cas vérifiés en quelques secondes", "outil 3D Unity"],
    ["15 m", "d'erreur sans GPS, contre 85 m sans le filtre", "navigation de drone"],
  ];
  return (
    <aside className="apercu" aria-label="Quelques résultats mesurés">
      <p className="apercu-titre">Ce que mes outils ont prouvé</p>
      <ul className="preuves">
        {lignes.map(([n, texte, source]) => (
          <li key={source}>
            <strong>{n}</strong>
            <span>
              {texte}
              <small>{source}</small>
            </span>
          </li>
        ))}
      </ul>
      <a href="#projets" className="apercu-lien">Voir les projets →</a>
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
            Des outils qui font le travail répétitif,
            <em> et la preuve qu'ils ne se trompent pas.</em>
          </h1>
          <p className="chapeau">
            J'automatise ce que vos équipes font à la main : lire des documents, répondre à
            des demandes, faire dialoguer deux logiciels. Avec l'IA quand elle aide, avec du
            code classique quand il suffit, et toujours avec les tests qui montrent que le
            résultat est juste.
          </p>
          <div className="actions">
            <a className="bouton" href="#projets">Voir mes projets</a>
            <a className="bouton bouton-second" href={lienRdv()}>
              Réserver 15 minutes
            </a>
          </div>
          <ul className="garanties">
            <li>Diagnostic à prix fixe avant tout engagement</li>
            <li>Vos données peuvent rester sur vos machines</li>
            <li>Le code vous appartient</li>
          </ul>
        </div>
        <Preuves />
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a className="evitement" href="#services">Aller au contenu</a>
      <Entete />
      <main>
        <Hero />
        <Services />
        <Projets />
        <Demo />
        <Methode />
        <Missions />
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
