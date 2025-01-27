//Début code Johan
//Contient la mise en page globale du "header"

//Importation des modules nécessaires
import { NavLink } from "react-router-dom";
//Contient les "icon" fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <a className="profile_dev ">
        <img
          src="./src/assets/img/Johan-Ternant-profile.jpg"
          alt="Johan Ternant"
          className="img_johan"
        />
        <div>
          <h1 className="title_h1">Johan Ternant</h1>
          <h2>Intégrateur Web</h2>
          <p>E-mail : ternant.johan@sfr.fr</p>
        </div>
      </a>

      <div className="link_social">
        <a
          href="https://github.com/Johan-Tnt"
          className="li_navigation contact_button"
        >
          <FontAwesomeIcon
            icon={faGithub}
            size={"xl"}
            className="icon_contact"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/johan-ternant-064b48313/"
          className="li_navigation contact_button"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size={"xl"}
            className="icon_contact"
          />
        </a>

        <a href="" className="li_navigation contact_button">
          <FontAwesomeIcon icon={faFile} size={"xl"} className="icon_contact" />
          CV
        </a>
      </div>

      <nav className="navigation">
        <ul className="ul_navigation">
          <NavLink to="/">
            <FontAwesomeIcon
              icon={faHouse}
              style={{ color: "white" }}
              className="icon_header"
            />
            <li className="li_navigation"> Home </li>
          </NavLink>
          <NavLink to="/projects">
            <FontAwesomeIcon
              icon={faDiagramProject}
              style={{ color: "white" }}
              className="icon_header"
            />
            <li className="li_navigation"> Projects </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

//Fin code Johan
