//Code éditer par Johan
//Contient la mise en page globale du "footer"
import { useTranslation } from "react-i18next";

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
      </div>
    </div>
  );
};

export default Footer;
