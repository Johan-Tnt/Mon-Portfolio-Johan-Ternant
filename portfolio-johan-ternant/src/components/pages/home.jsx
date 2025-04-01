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
  faFileAlt,
  faBullhorn,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <main className="home">
      <section className="bento-grid">
        {/* Bloc de présentation */}
        <BentoBox className="box-presentation" title={t("helloTitle")}>
          <h3>{t("passionateTitle")}✨</h3>
          <p>{t("projectsDescription")}</p>
          <div>
            <blockquote className="quote">
              賢者も知らない
              <footer>
                <span>(Kenja mo shiranai)</span>
              </footer>
            </blockquote>
            <span className="translation">{t("japaneseProverb")}</span>
            <p className="author">— {t("proverbAuthor")}</p>
          </div>
        </BentoBox>

        {/* Bloc compétences et expériences */}
        <BentoBox className="box-skills" title={t("skillsTitle")}>
          <div className="skills-item">
            <h3>
              <FontAwesomeIcon icon={faGraduationCap} />
              <strong>{t("educationTitle")}</strong>
            </h3>
            <p>{t("educationDescription")}</p>
          </div>

          <div className="skills-item">
            <h3>
              <FontAwesomeIcon icon={faLaptopCode} />
              <strong>{t("languagesTitle")}</strong>
            </h3>
            <p>{t("languagesDescription")}</p>
          </div>

          <div className="skills-item">
            <h3>
              <FontAwesomeIcon icon={faRocket} />
              <strong>{t("frameworksTitle")}</strong>
            </h3>
            <p>{t("frameworksDescription")}</p>
          </div>

          <div className="skills-item">
            <h3>
              <FontAwesomeIcon icon={faChartLine} />
              <strong>{t("skillsListTitle")}</strong>
            </h3>
            <p>{t("skillsListDescription")}</p>
          </div>
        </BentoBox>

        {/* Bloc langues */}
        <BentoBox className="box-languages" title={t("languagesBlockTitle")}>
          <div className="languages-item">
            <h3>
              <img
                src="https://flagcdn.com/w40/fr.png"
                alt=""
                className="flag-icon"
                width="20"
                height="12"
              />
              <strong>{t("frenchTitle")}</strong>
            </h3>
            <p>{t("frenchLevel")}</p>
          </div>

          <div className="languages-item">
            <h3>
              <img
                src="https://flagcdn.com/w40/gb.png"
                alt=""
                className="flag-icon"
                width="20"
                height="12"
              />
              <strong>{t("englishTitle")}</strong>
            </h3>
            <p>{t("englishLevel")}</p>
          </div>

          <div className="languages-item">
            <h3>
              <img
                src="https://flagcdn.com/w40/es.png"
                alt=""
                className="flag-icon"
                width="20"
                height="12"
              />
              <strong>{t("spanishTitle")}</strong>
            </h3>
            <p>{t("spanishLevel")}</p>
          </div>
        </BentoBox>

        {/* Bloc des liens sociaux */}
        <BentoBox className="box-social" title={t("contactTitle")}>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:ternant.johan@sfr.fr">{t("contactEmail")}</a>
          </p>
          <SocialLinks />
        </BentoBox>

        {/* Bloc dédié au dernier projet réalisé */}
        <BentoBox
          className="bento-box box-last-projects"
          title={t("latestProjectTitle")}
        >
          <img
            src="./src/assets/img-webp-cp/Argent-Bank-1-new.webp"
            alt={t("latestProjectAlt")}
            width="1636"
            height="801"
          />
          <p>{t("latestProjectDescription")}</p>
          <a href="/projects" className="button-link">
            {t("seeMore")}
          </a>
        </BentoBox>

        {/* Bloc Outils utilisés */}
        <BentoBox className="box-web-tools" title={t("toolsTitle")}>
          <div className="tools-container">
            <div>
              <h3>
                <FontAwesomeIcon icon={faTools} />
                <strong>{t("toolsCategoryTitle")}</strong>
              </h3>
              <p>{t("toolsDescription")}</p>
            </div>

            <div>
              <h3>
                <FontAwesomeIcon icon={faFileAlt} />
                <strong>{t("officeTitle")}</strong>
              </h3>
              <p>{t("officeDescription")}</p>
            </div>

            <div>
              <h3>
                <FontAwesomeIcon icon={faBullhorn} />
                <strong>{t("marketingTitle")}</strong>
              </h3>
              <p>{t("marketingDescription")}</p>
            </div>
          </div>
        </BentoBox>
      </section>
    </main>
  );
};

export default Home;
