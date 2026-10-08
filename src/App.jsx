import { useState } from "react";
import { site, lienRdv } from "./config.js";
import Demo from "./Demo.jsx";
import {
  Services,
  Bugs,
  Projets,
  Missions,
  Methode,
  Comparaison,
  Offres,
  PasLeBonChoix,
  Questions,
  APropos,
  Contact,
  MentionsLegales,
} from "./sections.jsx";

function Entete() {
  const [ouvert, setOuvert] = useState(false);
  const liens = [
    ["#services", "Services"],
    ["#bugs", "Bugs trouvés"],
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
    ["281/281", "erreurs glissées exprès dans les résultats d'une IA, toutes repérées", "Bordereau"],
    ["8", "erreurs de l'IA et bugs trouvés par les tests, corrigés et verrouillés", "Comptoir & Bordereau"],
    ["4", "vrais bugs dans du code qui avait l'air de marcher", "outil 3D Unity"],
    ["63/63", "erreurs glissées exprès dans le code, toutes détectées par les tests", "navigation de drone"],
  ];
  return (
    <aside className="apercu" aria-label="Quelques résultats mesurés">
      <p className="apercu-titre">Ce que mes tests ont trouvé</p>
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
      <a href="#bugs" className="apercu-lien">Voir le journal des bugs →</a>
    </aside>
  );
}

function Hero() {
  return (
    <section className="hero" id="haut">
      <div className="conteneur hero-in">
        <div className="hero-texte">
          <div className="identite">
            {site.photo && (
              <img className="identite-photo" src={site.photo} alt={`Portrait de ${site.nom}`} width="96" height="96" />
            )}
            <p>
              <strong>{site.nom}</strong>
              <span>Développeur freelance · Toulouse et à distance</span>
            </p>
          </div>
          <h1>
            Votre équipe fait le travail.
            <em> Je m'assure que ses outils suivent.</em>
          </h1>
          <p className="chapeau">
            Je vous aide à travailler plus sereinement, avec des outils vérifiés en continu.
            Quand un bug apparaît, j'en trouve la cause en m'aidant de l'IA, je le corrige, et
            j'ajoute le test qui l'empêche de revenir.
          </p>
          <div className="actions">
            <a className="bouton" href="#bugs">Voir les bugs trouvés</a>
            <a className="bouton bouton-second" href={lienRdv()}>
              Réserver 15 minutes
            </a>
          </div>
          <ul className="garanties">
            <li>Chaque correction livrée avec son test</li>
            <li>Audit à prix fixe avant tout engagement</li>
            <li>Le code et les tests vous appartiennent</li>
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
        <Bugs />
        <Projets />
        <Demo />
        <Methode />
        <Comparaison />
        <Missions />
        <Offres />
        <PasLeBonChoix />
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
