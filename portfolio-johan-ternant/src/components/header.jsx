//Code éditer par Johan
//Contient la mise en page globale du "header"

//Importation des modules nécessaires
import { NavLink } from "react-router-dom";
import { useState } from "react";
//Contient les "icon" fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsDropdownOpen(false); //Ferme le menu après la sélection
  };

  //Liste des langues disponibles
  const languageNames = {
    fr: "Français",
    en: "English",
  };

  return (
    <div className="header">
      {/* Lien d'évitement (invisible mais accessible) */}
      <a
        href="#language-menu"
        className="visually-hidden visually-hidden-focusable"
      >
        {t("skipToLanguageSelection")}
      </a>

      <img
        src="./src/assets/img-webp-cp/Portfolio-banner-new.webp"
        alt=""
        width="2000"
        height="500"
        loading="eager"
        className="header-image"
      />
      <NavLink to="/">
        {/* Lien vers le menu, qui enveloppe tout */}
        <div className="profile_dev">
          <div className="img_profile">
            <img
              src="./src/assets/img-profile-dev/Johan-Ternant-profile-new.webp"
              alt="Johan Ternant"
              className="img_johan"
              width="90"
              height="90"
            />
          </div>

          <div className="information_profile">
            <h1>Johan Ternant</h1>
            <h2>{t("jobTitle")}</h2> {/* Traduction */}
          </div>
        </div>
      </NavLink>

      <nav className="navigation">
        <ul className="ul_navigation">
          <li className="li_navigation">
            <NavLink to="/">
              <FontAwesomeIcon icon={faHouse} className="icon_header" />
              {t("home")}
            </NavLink>
          </li>
          <li className="li_navigation">
            <NavLink to="/projects">
              <FontAwesomeIcon
                icon={faDiagramProject}
                className="icon_header"
              />
              {t("projects")}
            </NavLink>
          </li>
          {/* Sélecteur de langue */}
          <li id="language-menu" className="language-dropdown li_navigation">
            <button
              className="change-language"
              onClick={toggleDropdown}
              aria-expanded={isDropdownOpen}
              aria-controls="language-menu"
            >
              <span className="visually-hidden">{t("changeLanguage")}</span>
              {languageNames[i18n.language] || i18n.language}
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-content">
                {Object.entries(languageNames).map(([code, name]) => (
                  <li key={code}>
                    <button
                      onClick={() => changeLanguage(code)}
                      aria-label={`${name} (${t("selectLanguage")})`}
                      aria-pressed={i18n.language === code}
                      lang={code}
                    >
                      {name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
