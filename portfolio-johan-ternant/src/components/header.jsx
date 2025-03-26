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
    setIsDropdownOpen(false); // Ferme le menu après la sélection
  };

  return (
    <div className="header">
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
          <li className="language-dropdown li_navigation">
            <button className="change-language" onClick={toggleDropdown}>
              {i18n.language === "fr" ? "Français" : "English"}
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-content">
                <li>
                  <button
                    onClick={() => changeLanguage("fr")}
                    aria-label="Français (Langue sélectionnée)"
                    aria-pressed={i18n.language === "fr"}
                    lang="fr"
                  >
                    Français
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => changeLanguage("en")}
                    aria-label="English (Selected language)"
                    aria-pressed={i18n.language === "en"}
                    lang="en"
                  >
                    English
                  </button>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
