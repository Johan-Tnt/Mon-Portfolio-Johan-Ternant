//Code éditer par Johan
//Contient la mise en page globale du "footer"
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
//Contient les "icon" fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const { t } = useTranslation(); // Ajout du hook pour les traductions
  return (
    <div className="footer">
      <div>
        <div>
          <p className="design_johan">
            {t("footerText", { year: new Date().getFullYear() })}
          </p>
        </div>
        <div>
          <nav>
            <ul>
              <li className="navigation_footer">
                <NavLink to="/about-website">
                  <FontAwesomeIcon
                    icon={faCircleInfo}
                    className="icon_footer"
                  />
                  {t("aboutWebsite")}
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
