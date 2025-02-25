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
        <img
          src="./src/assets/img-profile-dev/Johan-Ternant-profile-new.webp"
          alt="Johan Ternant"
          className="img_johan"
        />
        <div className="information_profile">
          <h1>Johan Ternant</h1>
          <h2>Intégrateur Web</h2>
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
              Home
            </NavLink>
          </li>
          <li className="li_navigation">
            <NavLink to="/projects">
              <FontAwesomeIcon
                icon={faDiagramProject}
                style={{ color: "white" }}
                className="icon_header"
              />
              Projects
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
