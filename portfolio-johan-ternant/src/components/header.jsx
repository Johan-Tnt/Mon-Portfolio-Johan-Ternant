//Code éditer par Johan
//Contient la mise en page globale du "header"

//Importation des modules nécessaires
import { NavLink } from "react-router-dom";
//Contient les "icon" fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faDiagramProject } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <div className="profile_dev ">
        <div className="img_profile">
          <img
            src="./src/assets/img-profile-dev/Johan-Ternant-profile-new.webp"
            alt="Johan Ternant"
            className="img_johan"
          />
        </div>

        <div className="information_profile">
          <h1 tabIndex="0">Johan Ternant</h1>
          <h2 tabIndex="0">Intégrateur Web</h2>
        </div>
      </div>

      <nav className="navigation">
        <ul className="ul_navigation">
          <li className="li_navigation">
            <NavLink to="/">
              <FontAwesomeIcon
                icon={faHouse}
                style={{ color: "white" }}
                className="icon_header"
              />
              Menu
            </NavLink>
          </li>
          <li className="li_navigation">
            <NavLink to="/projects">
              <FontAwesomeIcon
                icon={faDiagramProject}
                style={{ color: "white" }}
                className="icon_header"
              />
              Projets
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
