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
        <BentoBox className="box-skills" title="Compétences et expériences">
          <p>
            <FontAwesomeIcon icon={faGraduationCap} />
            <strong>Formation: </strong> Intégrateur Web avec OpenClassrooms
          </p>
          <p>
            <FontAwesomeIcon icon={faLaptopCode} /> <strong>Langages: </strong>
            HTML, CSS/Sass, JavaScript.
          </p>
          <p>
            <FontAwesomeIcon icon={faRocket} /> <strong>Frameworks: </strong>
            React (avec React Router, Redux)
          </p>
          <p>
            <FontAwesomeIcon icon={faChartLine} />
            <strong>Compétences: </strong>
            SEO, Optimisation des performances, Responsive design
          </p>
        </BentoBox>

        {/* Bloc langues */}
        <BentoBox className="box-languages" title="Langues">
          <p>🇫🇷 Français - langue maternelle</p>
          <p>🇬🇧 Anglais - A2</p>
          <p>🇪🇸 Espagnol - A1</p>
        </BentoBox>

        {/* Bloc des liens sociaux */}
        <BentoBox className="box-social" title="Contact">
          <SocialLinks />
          <p>ternant.johan@sfr.fr</p>
        </BentoBox>

        {/* Bloc dédié au dernier projet réalisé */}
        <BentoBox
          className="bento-box box-argent-bank"
          title="Mon dernier projet :"
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
      </section>
    </main>
  );
};

export default Home;
