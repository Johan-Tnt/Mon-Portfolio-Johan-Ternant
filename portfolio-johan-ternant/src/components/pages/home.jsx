//Code éditer par Johan
//Contient le menu principal "Home"
import SocialLinks from "../bento/social-links";
import BentoBox from "../bento/bento";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faLaptopCode,
  faRocket,
  faChartLine,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <main className="home">
      <section className="bento-grid">
        {/* Bloc de présentation */}
        <BentoBox className="box-presentation" title="Bonjour, c'est Johan">
          <p>
            En cliquant sur <span className="bold">Projects</span>, vous pourrez
            découvrir quelques projets sur lesquels j’ai travaillé, ou sur
            lesquels je suis actuellement.
          </p>
        </BentoBox>

        {/* Bloc compétences et expériences */}
        <BentoBox className="box-skills" title="Compétences et Expériences">
          <div className="skills-item">
            <h3>
              <FontAwesomeIcon icon={faGraduationCap} />
              <strong>Formation</strong>
            </h3>
            <p>Intégrateur Web avec OpenClassrooms</p>
          </div>

          <div className="skills-item">
            <h3>
              <FontAwesomeIcon icon={faLaptopCode} />
              <strong>Langages</strong>
            </h3>
            <p>HTML/CSS, Sass, JavaScript.</p>
          </div>

          <div className="skills-item">
            <h3>
              <FontAwesomeIcon icon={faRocket} /> <strong>Frameworks</strong>
            </h3>
            <p>React (avec React Router, Redux), Mongo DB.</p>
          </div>

          <div className="skills-item">
            <h3>
              <FontAwesomeIcon icon={faChartLine} />
              <strong>Compétences</strong>
            </h3>
            <p>
              SEO, Optimisation des performances, Responsive design,
              Accessibilité web, Notion (Kanban), Feedly (veille),
              Spécifications techniques.
            </p>
          </div>
        </BentoBox>

        {/* Bloc langues */}
        <BentoBox className="box-languages" title="Langues">
          <div className="languages-item">
            <h3>
              <img
                src="https://flagcdn.com/w40/fr.png"
                alt="Français"
                className="flag-icon"
              />
              <strong>Français</strong>
            </h3>
            <p>Langue maternelle</p>
          </div>

          <div className="languages-item">
            <h3>
              <img
                src="https://flagcdn.com/w40/gb.png"
                alt="Anglais"
                className="flag-icon"
              />
              <strong>Anglais</strong>
            </h3>
            <p>Niveau A2</p>
          </div>

          <div className="languages-item">
            <h3>
              <img
                src="https://flagcdn.com/w40/es.png"
                alt="Espagnol"
                className="flag-icon"
              />
              <strong>Espagnol</strong>
            </h3>
            <p>Niveau A1</p>
          </div>
        </BentoBox>

        {/* Bloc des liens sociaux */}
        <BentoBox className="box-social" title="Contact">
          <p>ternant.johan@sfr.fr</p>
          <SocialLinks />
        </BentoBox>

        {/* Bloc dédié au dernier projet réalisé */}
        <BentoBox
          className="bento-box box-last-projects"
          title="Mon dernier projet"
        >
          <img
            src="./src/assets/img-webp-cp/Argent-Bank-1-new.webp"
            alt="Argent Bank Project Preview"
            className="project-image"
          />
          <p>
            Découvrez mon projet <strong>Argent Bank</strong>, une application
            bancaire construite avec React, Redux et un backend. Ce projet
            inclus une API Swagger pour une gestion d&apos;authentification
            complète.
          </p>
          <a href="/projects" className="button-link">
            Voir plus
          </a>
        </BentoBox>

        {/* Bloc Outils utilisés */}
        <BentoBox
          className="box-web-tools"
          title="Outils de Développement Web utilisés"
        >
          <h3>
            <FontAwesomeIcon icon={faTools} />
            <strong>Outils </strong>
          </h3>
          <p>
            GitHub, Figma, Swagger Editor, Postman Agent, Web accessibility Test
            Ligthouse, React Tools, Test des résultats enrichis, GTmetrix,
            Convertisseur et compresseur des fichiers.
          </p>
        </BentoBox>
      </section>
    </main>
  );
};

export default Home;
